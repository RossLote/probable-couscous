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
                width: 126,
                height: 218,
            }).transform.setLocalPosition([400, 200]).setLocalRotation(1.5);
            // entity.transform.setPivot([12, 15]);
            this.player = entity.addComponent('sprite', {
                spriteName: 'runE'
            }).addComponent('script', {
                scriptName: 'tester'
            }).addComponent('boxcollider', {
                width: 24,
                height: 30
            }).transform.setLocalPosition([100, 100]).setLocalRotation(2.4).setLocalScale([1.5, 2.3]);
        }
    }

    postInitialize = () => {

    }

    teardown = () => {
        this.data = JSON.stringify(this.root);
    }
}
