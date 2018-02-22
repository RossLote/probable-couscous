import {Application} from '../framework/Application';
import {Entity} from '../framework/Entity';
import {Scene} from '../framework/scene/Scene';
import { Vector2 } from '../framework/math/Vector2';

export class Scene1 extends Scene {
    player: any;
    initialize = () => {
        if (this.data) {
            this.root = Entity.buildFromJSON(this.app, JSON.parse(this.data));
        } else {
            let entity = this.createEntity();
            // let box = this.createEntity().addComponent('polygoncollider', {
            //     points: [new Vector2(0,0), new Vector2(60, 0), new Vector2(100, 40), new Vector2(60, 80), new Vector2(0, 80)]
            // }).transform.setLocalPosition([400, 200]).setLocalRotation(1.5);
            // entity.transform.setPivot([12, 15]);
            let circle = this.createEntity().addComponent('circlecollider', {
                radius: 20
            });
            circle.transform.setLocalPosition([400, 200]);
            this.player = entity.addComponent('sprite', {
                spriteName: 'runE'
            }).addComponent('script', {
                scriptName: 'tester'
            }).addComponent('ridgedbody', {
                
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
