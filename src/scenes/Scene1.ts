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
            let box = this.createEntity().addComponent('boxcollider', {
                width: 100,
                height: 100,
            }).transform.setLocalPosition([200, 200]);
            // entity.transform.setPivot([12, 15]);
            this.player = entity.addComponent('sprite', {
                spriteName: 'runE'
            }).addComponent('script', {
                scriptName: 'tester'
            }).addComponent('boxcollider', {
                width: 24,
                height: 30
            });
        }
    }

    postInitialize = () => {

    }

    teardown = () => {
        this.data = JSON.stringify(this.root);
    }
}
