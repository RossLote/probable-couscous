import {System} from '../../System';


export class ColliderSystem extends System {
    name: string = 'collider'
    variants: Array<string> = ['boxcollider', 'circlecollider', 'polygoncollider'];
}
