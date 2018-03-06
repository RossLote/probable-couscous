import {Script} from '../framework/core/scripts';
import {Vector2} from '../framework/math/Vector2';
import {Response} from '../framework/components/collider/SAT';


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
