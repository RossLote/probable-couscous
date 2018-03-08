import {Script} from '../engine/core/scripts';
import {Vector2} from '../engine/math/Vector2';
import {Response} from '../engine/components/collider/SAT';


export default class BallScript extends Script {

    ridgedBody: any;

    initialize(){
        this.entity.on('collisionstart', this.onCollide);
        this.ridgedBody = this.entity.getComponent('ridgedbody');
    }

    onCollide = (other:any, response: Response) => {
        this.ridgedBody.velocity.reflect(response.overlapN);
    }
}
