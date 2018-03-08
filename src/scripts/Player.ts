import {Script} from '../engine/core/scripts';
import {Vector2} from '../engine/math/Vector2';


export default class Tester extends Script {

    update(dt:number){

        let speed = 100;
        let pos = this.entity.transform.getLocalPosition();
        let dirty = false;
        let pressed = this.app.keyboard.isPressed.bind(this.app.keyboard);
        let velocity = Vector2.ZERO;
        let sprite = <any>this.entity.getComponent('sprite');

        if (pressed('up')){
            velocity.y -= 1;
        }
        if (pressed('down')) {
            velocity.y += 1;
        }
        
        if (pressed('left')) {
            velocity.x -= 1;
        }
        if (pressed('right')) {
            velocity.x += 1;
        }
        
        velocity.normalize().multiply(new Vector2(dt*speed, dt*speed));
        if (velocity.equals(Vector2.ZERO)) {
            sprite.spriteName = 'standN'
        } else {
            if (velocity.x > 0) {
                sprite.spriteName = 'runE'
            } else if (velocity.x < 0) {
                sprite.spriteName = 'runW'
            } else if (velocity.y > 0) {
                sprite.spriteName = 'runS'
            } else if (velocity.y < 0) {
                sprite.spriteName = 'runN'
            }
        }
        
        this.entity.transform.setLocalPosition(pos.add(velocity));
    }
}
