import {Script} from '../framework/core/scripts';
import {Vector2} from '../framework/math/Vector2';


export default class PaddleScript extends Script {

    velocity: Vector2 = Vector2.ZERO;

    initialize(){
        this.entity.on('collisionstart', this.onCollide);
    }

    onCollide = (other:any, response:any) => {
        other.getComponent('script').script.velocity.add(this.velocity.clone().normalize().scale(.5))
    }

    update(dt:number){

        let speed = 300
        let pos = this.entity.transform.getLocalPosition();
        let dirty = false;
        let pressed = this.app.keyboard.isPressed.bind(this.app.keyboard);
        let velocity = Vector2.ZERO;
        let sprite = <any>this.entity.getComponent('sprite');

        if (this.app.keyboard.wasPressed('a')) {
            this.app.sceneManager.loadScene('scene2');
        } else if (this.app.keyboard.wasPressed('b')) {
            this.app.sceneManager.loadScene('scene1');
        }

        if (pressed('left')) {
            velocity.x -= 100;
        }
        if (pressed('right')) {
            velocity.x += 100;
        }

        velocity.normalize().scale(speed);
        velocity.multiply(new Vector2(dt, dt));
        if (velocity.length() > 0) {
            pos.add(velocity)

        }
        this.velocity = velocity;
        this.entity.transform.setLocalPosition(pos);
    }
}
