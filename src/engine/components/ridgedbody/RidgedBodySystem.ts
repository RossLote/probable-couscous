import Engine from '../../Engine';
import {Component} from '../../Component';
import {Entity} from '../../Entity';
import {System} from '../../System';

import {ColliderSystem} from '../collider/ColliderSystem';
import {IColliderComponent} from '../collider/ColliderComponent';
import {RidgedBodyComponent, RidgedBodyType} from './RidgedBodyComponent';

import {Response, testCollision} from '../collider/SAT';

export class RidgedBodySystem extends System {
    name: string = 'ridgedbody';
    ComponentType: typeof RidgedBodyComponent = RidgedBodyComponent;
    colliderSystem: ColliderSystem;
    components: Array<RidgedBodyComponent> = [];
    response: Response = new Response();
    collisionEntries: {[key: string]: boolean} = {};

    constructor(protected app: Engine) {
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

    private removeCollision(a: Entity, b: Entity):boolean {
        let hash1 = `${a.id}-${b.id}`;
        let hash2 = `${b.id}-${a.id}`;
        let exists = hash1 in this.collisionEntries;
        delete this.collisionEntries[hash1];
        delete this.collisionEntries[hash2];
        return exists;
    }

    private storeCollision(a: Entity, b: Entity):boolean {
        let hash1 = `${a.id}-${b.id}`;
        let hash2 = `${b.id}-${a.id}`;
        let exists = hash1 in this.collisionEntries;
        this.collisionEntries[hash1] = true;
        this.collisionEntries[hash2] = true;
        return !exists;
    }

    update(dt: number): void {
        let collisions = new Array<Entity>();
        let ridgedBodyComponents = this.components;
        let colliderComponents = this.colliderSystem.components;
        let ridgedbodyA;
        let n  = ridgedBodyComponents.length;
        let i;
        let dynamicBodies = new Array<RidgedBodyComponent>();
        for (i = 0; i < n; i++) {
            ridgedbodyA = ridgedBodyComponents[i];
            let collider = ridgedbodyA.collider;
            let transform = ridgedbodyA.entity.transform;
            if (ridgedbodyA.type !== RidgedBodyType.static) {
                let velocity = ridgedbodyA.velocity.clone();
                ridgedbodyA.entity.transform.translate(velocity.scale(dt));
                dynamicBodies.push(ridgedbodyA);
            }
            let transforms = transform.getWorldTransform().decompose();
            collider.position = transforms.position;
            collider.setAngle(transforms.rotation);
            collider.setScale(transforms.scale);
        }

        let m = dynamicBodies.length;

        for (let i = 0; i < m; i++) {

            ridgedbodyA = dynamicBodies[i];
            let entityA = ridgedbodyA.entity;
            let colliderA = ridgedbodyA.collider;

            if (!colliderA) {
                let colliderComp = (<IColliderComponent>entityA.getComponent('collider'));
                if (!colliderComp) {
                    continue;
                }
                colliderA = ridgedbodyA.collider = (<IColliderComponent>entityA.getComponent('collider')).collider;
                if (!colliderA) {
                    continue;
                }
            }

            for (let j = 0; j < n; j++) {

                let componentB = colliderComponents[j];
                if (componentB === undefined) {
                    continue;
                }
                let colliderB = (<IColliderComponent>componentB).collider;
                if (colliderA === colliderB) {
                    continue;
                }
                this.response.clear();
                let collided = testCollision(colliderA, colliderB, this.response);
                let entityB = componentB.entity;
                if (collided) {
                    let newCollision = this.storeCollision(entityA, entityB);
                    if (newCollision) {
                        let ridgedbodyB = <RidgedBodyComponent>entityB.getComponent('ridgedbody');
                        if (ridgedbodyB) {
                            // if (ridgedbodyA.type === RidgedBodyType.dynamic) {
                            //     ridgedbodyA.velocity.reflect(this.response.overlapN).scale(ridgedbodyA.restitution);
                            // }
                            // if (ridgedbodyB.type === RidgedBodyType.dynamic) {
                            //     ridgedbodyB.velocity.reflect(this.response.overlapN).scale(ridgedbodyB.restitution);
                            // }
                            entityA.trigger('collisionstart', entityB, this.response.clone());
                            entityB.trigger('collisionstart', entityA, this.response.clone().reverse());
                        } else {
                            entityA.trigger('triggerenter', entityB, this.response.clone());
                            entityB.trigger('triggerenter', entityA, this.response.clone().reverse());
                        }
                    }
                } else {
                    let wasColliding = this.removeCollision(entityA, entityB);
                    if (wasColliding) {
                        let ridgedbodyB = entityB.getComponent('ridgedbody');
                        if (ridgedbodyB) {
                            entityA.trigger('collisionend', entityB, this.response.clone())
                            entityB.trigger('collisionend', entityA, this.response.clone().reverse())
                        } else {
                            entityA.trigger('triggerleave', entityB, this.response.clone())
                            entityB.trigger('triggerleave', entityA, this.response.clone().reverse())
                        }
                    }
                }
            }
        }
    }

}
