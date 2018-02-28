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
        // if (response.overlapN.x) {
        //     this.velocity.x = -this.velocity.x;
        // }
        // if (response.overlapN.y) {
        //     this.velocity.y = -this.velocity.y;
        // }
        // console.log(this.ridgedBody.velocity.data, response.overlapN.data)
        this.ridgedBody.velocity.reflect(response.overlapN);
    }

    // update(dt:number){
    //     let speed = 400;
    //     let pos = this.entity.transform.getLocalPosition();
    //     let velocity = this.velocity.clone();
    //     velocity.normalize().scale(speed);
    //     velocity.multiply(new Vector2(dt, dt));
    //     if (velocity.length() > 0) {
    //         pos.add(velocity)
    //
    //     }
    //     this.entity.transform.setLocalPosition(pos);
    // }
}
