import {Application} from '../framework/Application';
import {Entity} from '../framework/Entity';
import {Scene} from '../framework/scene/Scene';
import {Vector2} from '../framework/math/Vector2';

export class Scene1 extends Scene {
    brick: Entity;
    paddle: Entity;
    ball: Entity;

    initialize = () => {
        let ballScript;
        let brickScript;
        let paddleScript;
        let points = [
            new Vector2(0,0),
            new Vector2(20,-20),
            new Vector2(180,-20),
            new Vector2(200,0),
            new Vector2(200,20),
            new Vector2(0,20)
        ]
        this.ball = this.createEntity()
            .addComponent('circlecollider', {radius: 5})
            .addComponent('ridgedbody', {velocity: new Vector2(300, 300)})
            .addComponent('script', {scriptName:'ball'});
        this.paddle = this.createEntity()
            .addComponent('polygoncollider', {points: points})
            .addComponent('ridgedbody', {type: 3})
            .addComponent('script', {scriptName:'paddle'});
        this.brick = this.createEntity()
            // .addComponent('boxcollider', {width: 300, height: 20})
            // .addComponent('ridgedbody')
            // .addComponent('script', {scriptName:'brick'});

        this.ball.transform.setLocalPosition([400, 450]);

        this.createEntity().addComponent('boxcollider', {width: 20, height: 549}).addComponent('ridgedbody')
        this.createEntity().addComponent('boxcollider', {width: 20, height: 549}).addComponent('ridgedbody').transform.setLocalPosition([980, 0]);
        this.createEntity().addComponent('boxcollider', {width: 1000, height: 20}).addComponent('ridgedbody')
        // this.createEntity().addComponent('boxcollider', {width: 1000, height: 20}).addComponent('ridgedbody').transform.setLocalPosition([0, 580])

        let width = 40, height = 15;

        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 20; j++) {
                this.createEntity()
                    .addComponent('boxcollider', {width: width, height: height})
                    .addComponent('ridgedbody', {type:2})
                    .addComponent('script', {scriptName:'brick'})
                    .transform.setLocalPosition([95+j*(width+1), 100+i*(height+1)]);
            }
        }

        this.paddle.transform.setLocalPosition([400, 550])
        ballScript = (<any>this.ball.getComponent('script')).script;
        // brickScript = (<any>this.brick.getComponent('script')).script;
        paddleScript = (<any>this.paddle.getComponent('script')).script;


    }
    //

    // initialize = () => {
    //     let ball1 = this.createEntity()
    //         .addComponent('boxcollider', {width: 30, height: 30})
    //         .addComponent('ridgedbody', {velocity: new Vector2(0, 0)})
    //         .addComponent('script', {scriptName:'ball'});
    //
    //     let ball2 = this.createEntity()
    //         .addComponent('circlecollider', {radius: 10})
    //         .addComponent('ridgedbody', {velocity: new Vector2(-200, 0)})
    //         .addComponent('script', {scriptName:'ball'});
    //
    //     ball1.transform.setLocalPosition([100, 203]);
    //     ball2.transform.setLocalPosition([500, 200]);
    // }

    postInitialize = () => {

    }
}
