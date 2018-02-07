import {Script} from '../framework/components/script/Script';
import {Vector2} from '../math/Vector2';

export default class Tester extends Script {

    // initialize(){
    //     this.entity.transform.position.x = 100;
    //     this.entity.transform.position.y = 100;
    // }
    update(dt:number){

        let pos = this.entity.transform.getLocalPosition();
        let dirty = false;
        let pressed = this.app.keyboard.isPressed;
        let velocity = Vector2.ZERO;
        let sprite = <any>this.entity.getComponent('sprite');

        if (pressed('up')){
            velocity.y = -100;
        }
        if (pressed('down')) {
            velocity.y = 100;
        }

        if (pressed('left')) {
            velocity.x = -100;
        }
        if (pressed('right')) {
            velocity.x = 100;
        }

        velocity.multiply(new Vector2(dt, dt));
        if (velocity.equals(Vector2.ZERO)) {
            sprite.spriteName = 'standN'
        } else {
            if (velocity.x > 0) {
                sprite.spriteName = 'walkE'
            } else if (velocity.x < 0) {
                sprite.spriteName = 'walkW'
            } else if (velocity.y > 0) {
                sprite.spriteName = 'walkS'
            } else if (velocity.y < 0) {
                sprite.spriteName = 'walkN'
            }
        }

        this.entity.transform.setLocalPosition(pos.add(velocity));
    }
    // cleanup() {
    //
    // }
}
