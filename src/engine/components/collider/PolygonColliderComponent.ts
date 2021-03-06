import {Vector2, castVector2} from '../../math/Vector2';
import {Component} from '../../Component';
import {Polygon} from './SAT';
import {IColliderComponent} from './ColliderComponent';

export class PolygonColliderComponent extends Component implements IColliderComponent {
    position: Vector2;
    points: Array<Vector2>;
    collider: Polygon;

    initialize() {
        // fromJSON
        this.position = castVector2(this.position);
        let points = Array<Vector2>();
        for (let i = 0, n = this.points.length; i < n; i++) {
            points.push(castVector2(this.points[i]));
        }
        this.points = points;
        this.collider = new Polygon(this.position, this.points);
    }

    toJSON():any {
        return {
            position: this.position,
            points: this.points,
        }
    }
}
