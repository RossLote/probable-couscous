import {Vector2} from '../../math/Vector2';
import {Component} from '../../Component';
import {Box, Polygon} from './SAT';
import {IColliderComponent} from './ColliderComponent';


export class BoxColliderComponent extends Component implements IColliderComponent {
    position: Vector2;
    width: number;
    height: number;
    collider: Polygon;

    initialize() {
        this.collider = new Box(this.position, this.width, this.height).toPolygon();
    }

    toJSON():any {
        return {
            position: this.position,
            width: this.width,
            height: this.height
        }
    }
}
