import {Entity} from './Entity';
import {Component} from './Component';
import {Application} from './Application';

export class System {
    name: string;
    entities: Array<Entity> = [];
    protected app: Application;
    ComponentType: typeof Component = Component;

    constructor() {
        this.app = Application.getCurrentApplication();
    }

    addComponent(entity: Entity, data: any) : Component {
        this.entities.push(entity);
        return new this.ComponentType(this, entity, data);
    }

    initialize() {
        this.entities.forEach((entity: Entity) => {
            let component = entity.getComponent(this.name);
            this.initializeEntity(entity, component);
        });
    }

    initializeEntity(entity: Entity, component: Component) {
        //noop;
    }

    update(dt: number) : void {
        this.entities.forEach((entity: Entity) => {
            let component = entity.getComponent(this.name);
            this.updateEntity(dt, entity, component);
        });
    }

    updateEntity(dt: number, entity: Entity, componentData: object) : void {
        // noop;
    }
}
