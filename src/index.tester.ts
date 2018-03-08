import Engine from './engine/Engine';
import BallScript from './scripts/Ball';
import BrickScript from './scripts/Brick';
import PaddleScript from './scripts/Paddle';
import PlayerScript from './scripts/Player';
import SceneSwitcherScript from './scripts/SceneSwitcher';

import {Blank, Breakout, Tilemap} from './scenes/all';

import blank_json from './scenes/blank.json';
import breakout_json from './scenes/breakout.json';
import tilemap_json from './scenes/tilemap.json';

const app = new Engine();

let json = {
    "scenes": {
        "blank": blank_json,
        "breakout": breakout_json,
        "tilemap": tilemap_json
    },
    "layers": [{
        "name": "details",
        "order": 1
    }],
    "assets": {
        images: [{
            url: '/images/magecity.png',
            name: 'magecity'
        }, {
            url: '/images/town01.png',
            name: 'town1'
        }, {
            url: '/images/town02.png',
            name: 'town2'
        }, {
            url: '/images/Fumiko.png',
            name: 'fumiko'
        }, {
            url: '/images/mapPack_tilesheet.png',
            name: 'tileset'
        }]
    },
    "scripts": [
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
        {
            name: 'player',
            script: PlayerScript
        },
        {
            name: 'scene-switcher',
            script: SceneSwitcherScript
        }
    ],
    "tilesets": {
        'tester': {
            imageName: 'tileset',
            frameWidth: 64,
            frameHeight: 64
        }
    },
    "sprites": [{
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
    }],
}

app.loadJSON(json).then(function () {
    app.sceneManager.loadScene('breakout');
    app.startGameLoop();
});
