import {Application} from './framework/Application';
import BallScript from './scripts/Ball';
import BrickScript from './scripts/Brick';
import PaddleScript from './scripts/Paddle';

import {Scene1, Scene2} from './scenes/all';

const app = new Application();

let assetsPromise = app.assetsRegistry.loadAssets({
    images:[{
        url: '/images/magecity.png',
        name: 'magecity'
    },{
        url: '/images/town01.png',
        name: 'town1'
    },{
        url: '/images/town02.png',
        name: 'town2'
    },{
        url: '/images/Fumiko.png',
        name: 'fumiko'
    },{
        url: '/images/mapPack_tilesheet.png',
        name: 'tileset'
    }]
});

let scriptsPromise = app.scriptRegistry.loadScripts([
    {
        name: 'ball',
        script: BallScript
    },
    {
        name: 'paddle',
        script: PaddleScript
    },
    {
        name: 'brick',
        script: BrickScript
    },
]);

Promise.all([assetsPromise, scriptsPromise]).then(function(){
    app.spriteRegistry.registerSprites([{
        imageName: 'fumiko',
        frameWidth: 24,
        frameHeight: 32,
        sprites: {
            standN: {
                frames: [1]
            },
            standW: {
                frames: [18]
            },
            standS: {
                frames: [35]
            },
            standE: {
                frames: [52]
            },
            walkN: {
                frames: [0, 1, 2, 1],
                framerate: 6
            },
            walkE: {
                frames: [17, 18, 19, 18],
                framerate: 6
            },
            walkS: {
                frames: [34, 35, 36, 35],
                framerate: 6
            },
            walkW: {
                frames: [51, 52, 53, 52],
                framerate: 6
            },
            runN: {
                frames: [3, 4, 5, 4],
                framerate: 9
            },
            runE: {
                frames: [20, 21, 22, 21],
                framerate: 9
            },
            runS: {
                frames: [37, 38, 39, 38],
                framerate: 9
            },
            runW: {
                frames: [54, 55, 56, 55],
                framerate: 9
            }
        }
    }]);
    app.tilesetRegistry.registerTilesets({
        'tester': {
            imageName: 'tileset',
            frameWidth: 64,
            frameHeight: 64
        }
    });

    app.layerManager.createLayer('details', 1)

    app.sceneManager.addScene('scene1', Scene1);
    app.sceneManager.addScene('scene2', Scene2);

    app.sceneManager.loadScene('scene1');
    app.startGameLoop();
});
