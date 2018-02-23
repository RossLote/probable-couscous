import {Application} from '../framework/Application';
import {Entity} from '../framework/Entity';
import {Scene} from '../framework/scene/Scene';
import { Vector2 } from '../framework/math/Vector2';

export class Scene1 extends Scene {
    brick: Entity;
    paddle: Entity;
    ball: Entity;

    initialize = () => {
        let ballScript;
        let brickScript;
        let paddleScript;
        this.ball = this.createEntity()
            .addComponent('circlecollider', {radius: 5})
            .addComponent('ridgedbody')
            .addComponent('script', {scriptName:'ball'});
        this.paddle = this.createEntity()
            .addComponent('boxcollider', {width: 300, height: 20})
            .addComponent('ridgedbody')
            .addComponent('script', {scriptName:'paddle'});
        this.brick = this.createEntity()
            // .addComponent('boxcollider', {width: 300, height: 20})
            .addComponent('ridgedbody')
            .addComponent('script', {scriptName:'brick'});

        this.createEntity().addComponent('boxcollider', {width: 20, height: 600}).addComponent('ridgedbody')
        this.createEntity().addComponent('boxcollider', {width: 20, height: 600}).addComponent('ridgedbody').transform.setLocalPosition([980, 0])
        this.createEntity().addComponent('boxcollider', {width: 1000, height: 20}).addComponent('ridgedbody')
        // this.createEntity().addComponent('boxcollider', {width: 1000, height: 20}).addComponent('ridgedbody').transform.setLocalPosition([0, 580])


        this.paddle.transform.setLocalPosition([400, 550])
        ballScript = (<any>this.ball.getComponent('script')).script;
        brickScript = (<any>this.brick.getComponent('script')).script;
        paddleScript = (<any>this.paddle.getComponent('script')).script;


    }

    postInitialize = () => {

    }
}
