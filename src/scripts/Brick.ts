import {Script} from '../framework/core/scripts';
import {Vector2} from '../framework/math/Vector2';


export default class BrickScript extends Script {

    initialize(){
        this.entity.on('collisionstart', this.onCollide);
    }

    onCollide = (other:any, response:any) => {

    }

    update(dt:number){

    }
}
