import {Script} from '../engine/core/scripts';
import {Vector2} from '../engine/math/Vector2';


export default class PaddleScript extends Script {

    ridgedbody: any;

    initialize(){
        this.ridgedbody = this.entity.getComponent('ridgedbody');
    }

    update(dt:number){

        let speed = 500
        let pressed = this.app.keyboard.isPressed.bind(this.app.keyboard);

        if (pressed('left')) {
            this.ridgedbody.velocity.x = -speed;
        }
        else if (pressed('right')) {
            this.ridgedbody.velocity.x = speed;
        }
        else {
            this.ridgedbody.velocity.x = 0;
        }

    }
}
