import {Application} from '../../Application';
import {Component} from '.../../Component';
import {Entity} from '../../Entity';
import {System} from '../../System';

import {ColliderSystem} from '../collider/ColliderSystem';
import {IColliderComponent} from '../collider/ColliderComponent';
import {RidgedBodyComponent} from './RidgedBodyComponent';

import {Response, testCollision} from '../collider/SAT';

export class RidgedBodySystem extends System {
    name: string = 'ridgedbody';
    ComponentType: typeof RidgedBodyComponent = RidgedBodyComponent;
    colliderSystem: ColliderSystem;
    components: Array<RidgedBodyComponent> = [];
    response: Response = new Response();

    constructor(protected app: Application) {
        super(app);
        this.colliderSystem = <ColliderSystem>app.getSystem('collider');
    }

    addComponent(componentName: string, entity: Entity, data: any): RidgedBodyComponent {
        let component = <RidgedBodyComponent>super.addComponent(componentName, entity, data);
        try {
            component.collider = (<IColliderComponent>entity.getComponent('collider')).collider;
        } catch (e) {
            // noop
        }
        return component;
    }

    update(dt: number): void {
        let ridgedBodyComponents = this.components;
        let colliderComponents = this.colliderSystem.components;
        for (let i = 0, n = ridgedBodyComponents.length; i < n; i++) {

            let ridgedbody = ridgedBodyComponents[i];
            let entityA = ridgedbody.entity;
            let colliderA = ridgedbody.collider;

            if (!colliderA) {
                colliderA = ridgedbody.collider = (<IColliderComponent>entityA.getComponent('collider')).collider;
                if (!colliderA) {
                    continue;
                }
            }

            for (let j = 0; j < n; j++) {

                let componentB = colliderComponents[j];
                let colliderB = (<IColliderComponent>componentB).collider;
                if (colliderA === colliderB) {
                    continue;
                }
                this.response.clear();
                let collided = testCollision(colliderA, colliderB, this.response);
                if (collided) {
                    console.log("THERE WAS A COLLISION!!");
                }
            }
        }
    }

}
