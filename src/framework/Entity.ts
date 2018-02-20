import {Component} from './Component';
import {Transform} from './Transform';
import {Application} from './Application';
import {Layer} from './layer/Layer';
import {Vector2} from './math/Vector2';
import {uuid} from './core/uuid';
import {events, IEvents} from './events/events';

interface IComponents {
    [key: string]: Component
}


export class Entity implements IEvents {
    public id: string;
    public transform: Transform;
    public eventCallbacks:any = {};

    private components: IComponents = {};

    private _orderInLayer: number;
    private _renderLayer: Layer;

    constructor(private app: Application) {
        var this_ = this;
        this.id = uuid();
        this.renderLayer = this.app.layerManager.getLayer('default');
        this.transform = new Transform(this);
        this.eventCallbacks = new Array<Function>();
    }

    // Start IEvents methods
    off(key?: string, callback?: Function): Entity {
        events.off.call(this, key, callback);
        return this;
    }

    on(key: string, callback: Function, context?: any): Entity {
        events.on.call(this, key, callback);
        return this;
    }

    once(key: string, callback: Function, context?: any): Entity {
        events.once.call(this, key, callback);
        return this;
    }

    trigger(key: string, ...args: any[]) {
        events.trigger.call(this, key, ...args);
        return this;
    }
    // End IEvents methods

    static buildFromJSON(app: Application, data: any) {
        let entity = new Entity(app);
        entity.id = data.id;
        entity.transform.fromJSON(data.transform);
        entity.renderLayer = entity.app.layerManager.getLayer(data.renderLayer);
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
        return entity
    }

    addChild(entity: Entity): Entity {
        entity.transform.parent = this.transform;
        return this;
    }

    createChild(): Entity {
        var entity = new Entity(this.app);
        this.addChild(entity);
        return entity;
    }

    addComponent(name: string, data: object): Entity {
        let component = this.app.getSystem(name).addComponent(name, this, data);
        this.components[name] = component;
        return this;
    }

    removeComponent(name: string) {
        let component =  this.components[name];
        this.app.getSystem(name).removeComponent(component);
        component.destroy();
        delete this.components[name];
    }

    getComponent(name: string): Component {
        if (name in this.components) {
            return this.components[name];
        }
        return undefined;
    }

    getChildren(): Array<Entity> {
        let entities: Array<Entity> = [];
        let childTransforms = this.transform.children;
        let i, n;
        for (i = 0, n = childTransforms.length; i < n; i++) {
            entities.push(childTransforms[i].entity);
        }
        return entities
    }

    destroy(){
        this.app.registerEntityForDestruction(this);
    }

    forceDestroy(){
        for (let key in this.components) {
            this.removeComponent(key);
        }

        let children = this.getChildren();

        this.renderLayer = undefined;
        this.transform.entity = undefined;
        this.transform.destroy()
        this.transform = undefined;
        this.app = undefined;


        let i, n;
        for (i = 0, n = children.length; i < n; i++) {
            children[i].forceDestroy();
        }

        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                delete this[key];
            }
        }
    }

    get renderLayer(): Layer {
        return this._renderLayer;
    }

    set renderLayer(layer: Layer) {
        if (layer === this._renderLayer) {
            return;
        }
        if (this.renderLayer) {
            this.renderLayer.removeEntity(this);
        }
        if (layer) {
            layer.addEntity(this);
        }
        this._renderLayer = layer;
    }

    get orderInLayer(): number {
        return this._orderInLayer;
    }

    set orderInLayer(order: number) {
        this._orderInLayer = order;
        this.renderLayer.sort();
    }

    toJSON(): any {
        return {
            id: this.id,
            transform: this.transform,
            components: this.components,
            children: this.getChildren(),
            orderInLayer: this._orderInLayer,
            renderLayer: this.renderLayer.name
        }
    }
}
