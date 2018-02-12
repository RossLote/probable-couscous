import {Entity} from './Entity';
import {Component} from './Component';
import {Application} from './Application';

export class System {
    name: string;
    entities: Array<Entity> = [];
    components: Array<Component>;
    ComponentType: typeof Component = Component;

    constructor(protected app: Application) {
        this.components = [];
    }

    addComponent(entity: Entity, data: any):Component {
        let component =  new this.ComponentType(this, entity, data);
        this.components.push(component);
        return component;
    }

    removeComponent(component: Component){
        let index = this.components.indexOf(component);
        if (index > -1) {
            this.components.splice(index, 1);
        }
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
        this.components.forEach((component: Component) => {
            this.updateEntity(dt, component.entity, component);
        });
    }

    updateEntity(dt: number, entity: Entity, componentData: object) : void {
        // noop;
    }
}
