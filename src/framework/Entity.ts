import {Component} from './Component';
import {Application} from '../Application';
import {Vector2} from '../core/Vector2';
import {uuid} from '../core/uuid';

interface IComponents {
    [key: string]: Array<Component>
}

interface ITransform {
    position: Vector2,
    rotation: number,
    scale: Vector2
}

export class Entity {
    private components: IComponents = {};
    private app: Application;

    public id: string;
    public children: Array<Entity> = [];
    public parent: Entity;
    public transform : ITransform = {
        position: new Vector2,
        rotation: 0,
        scale: new Vector2(1,1)
    }

    constructor() {
        var self = this;
        this.app = Application.getCurrentApplication();
        this.id = uuid();
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

    addComponent(name: string, data: object): Component {
        let component = this.app.getSystem(name).addComponent(this, data);
        let components = this.components[name] || [];
        components.push(component);
        this.components[name] = components;
        return component;
    }

    removeComponent(name: string) {
        delete this.components[name];
    }

    getComponents(name: string): Array<Component> {
        if (name in this.components) {
            return this.components[name];
        }
        return [];
    }
}
