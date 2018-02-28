import {Component} from '../../Component';
import {IColliderComponent} from '../collider/ColliderComponent';
import {ICollider} from '../collider/SAT';

import {Vector2} from '../../math/Vector2';

export enum RidgedBodyType {
    dynamic = 1,
    static,
    kinomatic
}

export class RidgedBodyComponent extends Component {
    collider: ICollider;
    velocity: Vector2;
    restitution: number;
    type: RidgedBodyType;

    initialize() {
        if (this.velocity === undefined) {
            this.velocity = Vector2.ZERO;
        }
        if (this.type === undefined) {
            this.type = RidgedBodyType.dynamic;
        }
        if (this.restitution === undefined) {
            this.restitution = 1;
        }
    }

    toJSON():any{
        return {
        }
    }
}
