import {Script} from '../framework/components/script/Script';

export default class Tester extends Script {

    // initialize(){
    //     this.entity.transform.position.x = 100;
    //     this.entity.transform.position.y = 100;
    // }
    update(dt:number){
        this.entity.transform.localRotation+=0.2*dt;
    }
    // cleanup() {
    //
    // }
}
