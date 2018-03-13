import {Component} from './Component';
import {Transform} from './Transform';
import Engine from './Engine';
import {Layer} from './layer/Layer';
import {Vector2} from './math/Vector2';
import {uuid} from './core/uuid';
import {Mixin} from './core/utils';
import {Evented} from './events/events';

interface IComponents {
    [key: string]: Component
}


@Mixin([Evented])
export class Entity implements Evented {
    public id: string;
    public label: string;
    public transform: Transform;

    private components: IComponents = {};
    private componentAliases: Set<string> = new Set;

    private _orderInLayer: number = 0;
    private _renderLayer: Layer|undefined;

    eventCallbacks: {[key: string]: Array<Function>} = {};

    constructor(private app: Engine) {
        this.id = uuid();
        this.setRenderLayer(app.layerManager.getDefaultLayer());
        this.transform = new Transform(this);
        app.trigger('entity:created', this);
    }

    off(key?: string, callback?: Function):any{}
    on(key: string, callback: Function):any{}
    once(key: string, callback: Function):any{}
    trigger(key: string, ...args: any[]):any{}

    static buildFromJSON(app: Engine, data: any): Entity {
        let entity = new Entity(app);
        entity.id = data.id;
        entity.transform.fromJSON(data.transform);
        entity.setRenderLayer(undefined);
        entity.setRenderLayer(entity.app.layerManager.getLayer(data.renderLayer));
        entity.orderInLayer = data.orderInLayer;
        for (let key in data.components) {
            entity.addComponent(key, data.components[key]);
        }
        if (data.children) {
            let i, n, e;
            for (i = 0, n = data.children.length; i < n; i++) {
                e = Entity.buildFromJSON(app, data.children[i])
                e.transform.parent = entity.transform;
            }
        }
        return entity;
    }

    addChild(entity: Entity): Entity {
        entity.transform.parent = this.transform;
        this.trigger('entity:added', this, entity);
        return this;
    }

    createChild(label: string = ''): Entity {
        var entity = new Entity(this.app);
        entity.label = label;
        this.trigger('entity:created', this, entity);
        this.addChild(entity);
        return entity;
    }

    addComponent(name: string, data: object = {}): Entity {
        let system = this.app.getSystem(name)
        let component = system.addComponent(name, this, data);
        if (component) {
            this.components[name] = component;
            if (system.variants.indexOf(name) > -1) {
                this.components[system.name] = component;
                this.componentAliases.add(system.name);
            }
        }
        return this;
    }

    removeComponent(name: string) {
        let component =  this.components[name];
        this.app.getSystem(name).removeComponent(component);
        component.destroy();
        delete this.components[name];
    }

    getComponent(name: string): Component | undefined {
        if (name in this.components) {
            return this.components[name];
        }
        return undefined;
    }

    getChildren(): Array<Entity> {
        let entities: Array<Entity> = [];
        let childTransforms = this.transform.children;
        for (let i = 0, n = childTransforms.length; i < n; i++) {
            let entity = childTransforms[i].entity;
            entity && entities.push(childTransforms[i].entity);
        }
        return entities
    }

    destroy(){
        this.app.registerEntityForDestruction(this);
    }

    forceDestroy(){
        for (let i = 0, children = this.getChildren(), n = children.length; i < n; i++) {
            children[i].forceDestroy();
        }

        for (let key in this.components) {
            this.removeComponent(key);
        }

        this.setRenderLayer(undefined);
        this.transform.destroy()

        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                delete this[key];
            }
        }
        this.trigger('destroyed', this);
    }

    getRenderLayer(): Layer {
        return <Layer>this._renderLayer;
    }

    setRenderLayer(layer: Layer|undefined) {
        if (layer === this._renderLayer) {
            return;
        }
        if (this._renderLayer) {
            this._renderLayer.removeEntity(this);
        }
        if (layer) {
            layer.addEntity(this);
        }

        this._renderLayer = <Layer>layer;
    }

    get orderInLayer(): number {
        return this._orderInLayer;
    }

    set orderInLayer(order: number) {
        this._orderInLayer = order;
        this.getRenderLayer().sort();
    }

    toJSON(): any {
        let components: {[key: string]: Component} = {};
        for (const key in this.components) {
            if (this.componentAliases.has(key)) {
                continue;
            }
            components[key] = (this.components[key]);
        }
        return {
            id: this.id,
            transform: this.transform,
            components: components,
            children: this.getChildren(),
            orderInLayer: this._orderInLayer,
            renderLayer: this.getRenderLayer().name
        }
    }
}
