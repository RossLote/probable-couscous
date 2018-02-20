import {Vector2} from '../../math/Vector2';
import {Component} from '../../Component';
import {Box} from './utils';


export class BoxColliderComponent extends Component {
    position: Vector2;
    width: number;
    height: number;
    collider: Box;

    initialize() {
        this.collider = new Box(this.position, this.width, this.height);
    }

    toJSON():any {
        return {
            position: this.position,
            width: this.width,
            height: this.height
        }
    }
}
