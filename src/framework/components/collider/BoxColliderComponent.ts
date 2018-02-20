import {Vector2} from '../../math/Vector2';
import {Component} from '../../Component';


export class BoxColliderComponent extends Component {
    position: Vector2;
    width: number;
    height: number;
}
