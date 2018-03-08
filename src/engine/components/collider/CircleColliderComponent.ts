import {Vector2} from '../../math/Vector2';
import {Component} from '../../Component';
import {IColliderComponent} from './ColliderComponent';
import {Circle} from './SAT';


export class CircleColliderComponent extends Component implements IColliderComponent {
    position: Vector2;
    radius: number;
    collider: Circle;

    initialize() {
        this.collider = new Circle(this.position, this.radius);
    }

    toJSON():any {
        return {
            position: this.position,
            radius: this.radius,
        }
    }
}
