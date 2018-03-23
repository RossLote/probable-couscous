import {Vector2} from '../../math/Vector2';
import {Component} from '../../Component';
import {Box, Polygon} from './SAT';
import {IColliderComponent} from './ColliderComponent';


export class BoxColliderComponent extends Component implements IColliderComponent {
    position: Vector2;
    size: Vector2;
    collider: Box;

    initialize() {
        this.collider = new Box(this.position, this.size)
    }

    toJSON():any {
        return {
            position: this.position,
            size: this.size
        }
    }
}
