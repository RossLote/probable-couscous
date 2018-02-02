import {Script} from '../framework/components/script/Script';

export default class Tester extends Script {

    initialize(){

    }
    update(dt:number){
        let canvas = this.app.canvas;
        let pos = this.entity.transform.position;
        let scale = this.entity.transform.scale;
        pos.x = 200
        pos.y += 30 * dt;
        // scale.x += 10 * dt;
        // scale.y += 10 * dt;
    }
    cleanup() {

    }
}
