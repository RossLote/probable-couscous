import {Component} from '.../../Component';
import {Entity} from '../../Entity';
import {System} from '../../System';

import {BoxColliderComponent} from './BoxColliderComponent';
import {CircleColliderComponent} from './CircleColliderComponent';
import {PolygonColliderComponent} from './PolygonColliderComponent';


export class ColliderSystem extends System {
    name: string = 'collider'
    variants: Array<string> = ['boxcollider', 'circlecollider', 'polygoncollider'];

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
}
