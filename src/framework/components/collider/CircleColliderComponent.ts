import {Vector2} from '../../math/Vector2';
import {Component} from '../../Component';


export class CircleColliderComponent extends Component {
    position: Vector2;
    radius: number;

    getAABB() {

    }
}
