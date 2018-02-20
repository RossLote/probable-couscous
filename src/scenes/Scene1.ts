import {Application} from '../framework/Application';
import {Entity} from '../framework/Entity';
import {Scene} from '../framework/scene/Scene';

export class Scene1 extends Scene {
    player: any;
    initialize = () => {
        if (this.data) {
            this.root = Entity.buildFromJSON(this.app, JSON.parse(this.data));
        } else {
            let entity = this.createEntity();
            entity.transform.setPivot([12, 15]);

            this.player = entity.addComponent('sprite', {
                spriteName: 'runE'
            }).addComponent('script', {
                scriptName: 'tester'
            }).addComponent('boxcollider', {
                width: 32,
                height: 32
            });
        }
    }

    postInitialize = () => {

    }

    teardown = () => {
        this.data = JSON.stringify(this.root);
    }
}
