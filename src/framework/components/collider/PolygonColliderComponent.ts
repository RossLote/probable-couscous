import {Vector2} from '../../math/Vector2';
import {Component} from '../../Component';
import {Polygon} from './SAT';
import {IColliderComponent} from './ColliderComponent';

export class PolygonColliderComponent extends Component implements IColliderComponent {
    position: Vector2;
    points: Array<Vector2>;
    collider: Polygon;

    initialize() {
        this.collider = new Polygon(this.position, this.points);
    }

    toJSON():any {
        return {
            position: this.position,
            points: this.points,
        }
    }
}
