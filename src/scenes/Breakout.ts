import Engine from '../engine/Engine';
import {Entity} from '../engine/Entity';
import {Scene} from '../engine/scene/Scene';
import {Vector2} from '../engine/math/Vector2';

export class Breakout extends Scene {

    preInitialise = (): Scene => {
        // if (!this.root) {
        //     if (this.json) {
        //         this.root = Entity.buildFromJSON(this.app, this.json);
        //     } else {
        //         this.root = new Entity(this.app);
        //     }
        // }
        this.root = new Entity(this.app);
        return this;
    }

    initialize = () => {

        this.createEntity().addComponent('script', { scriptName: 'scene-switcher' });
        let points = [
            new Vector2(0,0),
            new Vector2(20,-20),
            new Vector2(180,-20),
            new Vector2(200,0),
            new Vector2(200,20),
            new Vector2(0,20)
        ]
        let ball = this.createEntity()
            .addComponent('circlecollider', {radius: 5})
            .addComponent('ridgedbody', {velocity: new Vector2(300, 300)})
            .addComponent('script', {scriptName:'ball'});
        let paddle = this.createEntity()
            .addComponent('polygoncollider', {points: points})
            .addComponent('ridgedbody', {type: 3})
            .addComponent('script', {scriptName:'paddle'});

        ball.transform.setLocalPosition([400, 450]);

        // Walls
        this.createEntity().addComponent('boxcollider', {width: 20, height: 549}).addComponent('ridgedbody')
        this.createEntity().addComponent('boxcollider', {width: 20, height: 549}).addComponent('ridgedbody').transform.setLocalPosition([980, 0]);
        this.createEntity().addComponent('boxcollider', {width: 1000, height: 20}).addComponent('ridgedbody')

        // Bricks
        let width = 54, height = 20;
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 15; j++) {
                this.createEntity()
                    .addComponent('boxcollider', {width: width, height: height})
                    .addComponent('ridgedbody', {type:2})
                    .addComponent('script', {scriptName:'brick'})
                    .transform.setLocalPosition([95+j*(width+1), 100+i*(height+1)]);
            }
        }

        paddle.transform.setLocalPosition([400, 550])
    }

    teardown = () => {
    }
}
