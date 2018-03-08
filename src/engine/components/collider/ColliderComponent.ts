import {Component} from '../../Component';
import {ICollider} from "./SAT";


export interface IColliderComponent extends Component {
    collider: ICollider;
}
