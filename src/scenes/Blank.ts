import Engine from '../engine/Engine';
import { Entity } from '../engine/Entity';
import { Scene } from '../engine/scene/Scene';

export class Blank extends Scene {
    // player: any;
    // initialize = () => {
    //     if (this.data) {
    //         this.root.forceDestroy()
    //         this.root = Entity.buildFromJSON(this.app, JSON.parse(this.data));
    //     } else {
    //         this.createEntity().addComponent('script', {scriptName: 'scene-switcher'});
    //         let entity = this.createEntity();
    //         entity.transform.setPivot([12, 15]);

    //         this.player = entity.addComponent('sprite', {
    //             spriteName: 'runE'
    //         }).addComponent('script', {
    //             scriptName: 'player'
    //         });
    //     }
    // }

    // postInitialize = () => {

    // }

    // teardown = () => {
    //     this.data = JSON.stringify(this.root);
    //     console.log(this.data)
    // }
}