import {Component} from '../../Component';
import {IColliderComponent} from '../collider/ColliderComponent';
import {ICollider} from '../collider/SAT';

import {Vector2, castVector2} from '../../math/Vector2';

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

        // fromJSON
        this.velocity = castVector2(this.velocity);
    }

    toJSON():any{
        return {
            type: this.type,
            velocity: this.velocity,
            restitution: this.restitution
        }
    }
}
