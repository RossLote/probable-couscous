import {AssetRegistry} from './core/assets';
import {SpriteRegistry} from './core/sprites';
import {TilesetRegistry, TileManager} from './core/tileset';
import {Application} from './Application';
import blah from './scripts/Tester';

AssetRegistry.addImages([{
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
}]).loadAssets().then(function(){
    SpriteRegistry.registerSprites([{
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
            walkW: {
                frames: [17, 18, 19, 18],
                framerate: 6
            },
            walkS: {
                frames: [34, 35, 36, 35],
                framerate: 6
            },
            walkE: {
                frames: [51, 52, 53, 52],
                framerate: 6
            },
            runN: {
                frames: [3, 4, 5, 4],
                framerate: 9
            },
            runW: {
                frames: [20, 21, 22, 21],
                framerate: 9
            },
            runS: {
                frames: [37, 38, 39, 38],
                framerate: 9
            },
            runE: {
                frames: [54, 55, 56, 55],
                framerate: 9
            }
        }
    }]);
    TilesetRegistry.registerTilesets({
        'tester': {
            imageName: 'tileset',
            frameWidth: 64,
            frameHeight: 64
        }
    });

    let app = new Application()

    let water = [
        [203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203],
        [203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203],
        [203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203],
        [203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203],
        [203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203],
        [203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203],
        [203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203],
        [203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203],
        [203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203],
        [203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203, 203]
    ];

    let grass = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 6, 7, 7, 7, 7, 8, 0, 0, 0, 0, 0],
        [0, 0, 6, 27, 24, 24, 24, 24, 26, 8, 0, 0, 0, 0],
        [0, 6, 27, 24, 24, 24, 24, 24, 24, 26, 7, 8, 0, 0],
        [0, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 0, 0],
        [0, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 26, 8, 0],
        [0, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 25, 0],
        [0, 40, 41, 41, 41, 41, 10, 24, 24, 24, 24, 24, 25, 0],
        [0, 0, 0, 0, 0, 0, 40, 41, 41, 41, 41, 41, 42, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    let ice = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 69, 70, 71, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 86, 87, 89, 71, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 103, 104, 73, 89, 70, 71, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 86, 87, 87, 88, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 103, 104, 104, 105, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    let details = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 61, 0, 124, 107, 0, 106, 0, 0, 0, 0, 0],
        [0, 0, 0, 112, 0, 0, 0, 0, 0, 0, 124, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 44, 0, 124, 0, 0, 0, 0, 0],
        [0, 0, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    let tileManager = new TileManager([{
        name: 'water',
        tilesetName: 'tester',
        data: water,
        zIndex: 0
    },{
        name: 'grass',
        tilesetName: 'tester',
        data: grass,
        zIndex: 1
    },{
        name: 'ice',
        tilesetName: 'tester',
        data: ice,
        zIndex: 2
    },{
        name: 'details',
        tilesetName: 'tester',
        data: details,
        zIndex: 3
    }]);

    // tileManager.render(app.canvas)
    //
    app.currentScene = tileManager;

    var entity = app.root.createChild();
    entity.addComponent('sprite', {
        spriteName: 'runE'
    });

    app.startGameLoop();
});
