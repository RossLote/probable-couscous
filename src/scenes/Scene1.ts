import {Application} from '../framework/Application';
import {Entity} from '../framework/Entity';
import {Scene} from '../framework/scene/Scene';

export class Scene1 extends Scene {
    player: any;
    initialize = () => {
        if (this.data) {
            this.root = Entity.buildFromJSON(JSON.parse(this.data));
        } else {
            let entity = this.createEntity();
            entity.createChild().createChild();
            entity.createChild().createChild();
            entity.transform.setPivot([12, 15]);

            this.player = entity.addComponent('sprite', {
                spriteName: 'runE'
            }).addComponent('script', {
                scriptName: 'tester'
            });
        }
    }

    postInitialize = () => {

    }

    teardown = () => {
        this.data = JSON.stringify(this.root);
    }
}
