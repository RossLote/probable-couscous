import {Component} from '../../Component';
import {IColliderComponent} from '../collider/ColliderComponent';
import {ICollider} from '../collider/SAT';

export class RidgedBodyComponent extends Component {
    collider: ICollider;

    toJSON():any{
        return {
        }
    }
}
