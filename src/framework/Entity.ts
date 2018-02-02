import {Component} from './Component';
import {Application} from '../Application';
import {RenderLayer, DefaultRenderLayer} from '../Layer';
import {Vector2} from '../core/Vector2';
import {uuid} from '../core/uuid';

interface IComponents {
    [key: string]: Component
}

interface ITransform {
    position: Vector2,
    rotation: number,
    scale: Vector2
}

export class Entity {
    private components: IComponents;
    private app: Application;

    public id: string;
    public children: Array<Entity> = [];
    public parent: Entity;
    public transform : ITransform = {
        position: new Vector2,
        rotation: 0,
        scale: new Vector2(1,1)
    }
    private _orderInLayer: number;
    private _renderLayer: RenderLayer;

    constructor() {
        this.components = {};
        this.app = Application.getCurrentApplication();
        this.id = uuid();
        this.renderLayer = DefaultRenderLayer;
    }

    addChild(entity: Entity) {
        this.children.push(entity);
        entity.parent = this;
    }

    createChild(): Entity {
        var entity = new Entity();
        this.addChild(entity);
        return entity;
    }

    addComponent = (name: string, data: object): Entity => {
        let component = this.app.getSystem(name).addComponent(this, data);
        this.components[name] = component;
        return this;
    }

    removeComponent = (name: string) => {
        delete this.components[name];
    }

    getComponent(name: string): Component {
        if (name in this.components) {
            return this.components[name];
        }
        return undefined;
    }

    get renderLayer(): RenderLayer {
        return this._renderLayer;
    }

    set renderLayer(layer: RenderLayer) {
        if (this.renderLayer) {
            this.renderLayer.removeEntity(this);
        }
        layer.addEntity(this);
        this._renderLayer = layer;
    }

    get orderInLayer(): number {
        return this._orderInLayer;
    }

    set orderInLayer(order: number) {
        this._orderInLayer = order;
        this.renderLayer.sort();
    }
}
