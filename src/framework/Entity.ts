import {Component} from './Component';
import {Transform} from './Transform';
import {Application} from '../Application';
import {RenderLayer, DefaultRenderLayer} from '../Layer';
import {Vector2} from '../math/Vector2';
import {uuid} from '../core/uuid';

interface IComponents {
    [key: string]: Component
}


export class Entity {
    private components: IComponents;
    private app: Application;

    public id: string;
    public children: Array<Entity>;
    public parent: Entity;

    public transform: Transform;
    public pivot: Vector2;

    private _orderInLayer: number;
    private _renderLayer: RenderLayer;

    constructor() {
        this.components = {};
        this.children = new Array<Entity>();
        this.pivot = new Vector2(0, 0)
        this.app = Application.getCurrentApplication();
        this.id = uuid();
        this.renderLayer = DefaultRenderLayer;
        this.transform = new Transform;
    }

    addChild = (entity: Entity): Entity => {
        this.children.push(entity);
        entity.parent = this;
        entity.transform.parent = this.transform;
        console.log(this.transform.children)
        return this;
    }

    createChild = (): Entity => {
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

    getComponent = (name: string): Component => {
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
