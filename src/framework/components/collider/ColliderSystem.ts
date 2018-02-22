import {Component} from '.../../Component';
import {Entity} from '../../Entity';
import {System} from '../../System';

import {IColliderComponent} from './ColliderComponent';
import {BoxColliderComponent} from './BoxColliderComponent';
import {CircleColliderComponent} from './CircleColliderComponent';
import {PolygonColliderComponent} from './PolygonColliderComponent';

import * as SAT from './SAT';


export class ColliderSystem extends System {
    name: string = 'collider'
    variants: Array<string> = ['boxcollider', 'circlecollider', 'polygoncollider'];
    response = new SAT.Response(); // Response reused for collisions

    addComponent(componentName: string, entity: Entity, data: any): Component {
        let ComponentType: typeof Component = this.getComponentType(componentName);
        let component =  new ComponentType(this, entity, data);
        this.components.push(component);
        return component;
    }

    getComponentType(componentName: string): typeof Component {
        let ComponentType: typeof Component;
        switch (componentName) {
            case 'boxcollider':
                ComponentType = BoxColliderComponent;
                break;
            case 'circlecollider':
                ComponentType = CircleColliderComponent;
                break;
            case 'polygoncollider':
                ComponentType = PolygonColliderComponent;
                break;
            default:
                throw new Error(`No matching component for: ${componentName}`);
        }
        return ComponentType
    }

    update(dt: number): void {
        let components = this.components;
        for (let i = 0, n = components.length; i < n; i++) {
            let component = components[i];
            let transform = component.entity.transform;
            let collider = (<IColliderComponent>component).collider;
            collider.position = transform.getPosition();
            collider.setAngle(transform.getRotation());
            collider.setScale(transform.getScale());
        }
    }
}
