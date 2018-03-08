import {Script} from '../engine/core/scripts';
import {Vector2} from '../engine/math/Vector2';


export default class BrickScript extends Script {

    initialize(){
        this.entity.on('collisionstart', this.onCollide);
    }

    onCollide = (other:any, response:any) => {
        this.entity.destroy();
    }

    update(dt:number){

    }
}
