import { Application } from '../framework/Application';
import { Entity } from '../framework/Entity';
import { Scene } from '../framework/scene/Scene';

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