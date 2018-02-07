import {AssetRegistry} from './core/assets';
import {SpriteRegistry} from './core/sprites';
import {TilesetRegistry} from './core/tileset';
import {Application} from './Application';
import {RenderLayer} from './Layer';
import blah from './scripts/Tester';

import {Vector2} from './math/Vector2';

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

    let detailsLower = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 33, 0, 124, 107, 0, 106, 0, 0, 0, 0, 0],
        [0, 0, 0, 112, 0, 0, 0, 0, 0, 0, 124, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 44, 0, 124, 0, 0, 0, 0, 0],
        [0, 0, 61, 0, 0, 0, 0, 0, 0, 0, 0, 0, 61, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    let detailsUpper = [
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 16, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ];

    let testLayer = new RenderLayer('details', 1);

    var entity = app.root.createChild();

    entity.transform.setLocalPosition([400, 300])
    // entity.transform.localRotation = 1;
    // entity.transform.pivot = [12.5, 15.5];;

    entity.addComponent('sprite', {
        spriteName: 'runE'
    }).addComponent('script', blah);

    // let child1 = entity.createChild()
    // let child2 = entity.createChild()
    // let grandChild = child1.createChild()
    // let greatGrandChild = grandChild.createChild()

    // child1.transform.localPosition = [0, 50];
    // child1.transform.pivot = [12.5, 15.5];
    // child1.transform.localRotation = -2;
    // child2.transform.localPosition = [72, 77];
    // child2.transform.localRotation = 3;
    // grandChild.transform.pivot = [12.5, 15.5];
    // grandChild.transform.localPosition = [0, 50];
    // greatGrandChild.transform.localPosition = [100, 33];
    // greatGrandChild.transform.localRotation = 3;

    // child1.addComponent('sprite', {
    //     spriteName: 'walkE'
    // }).addComponent('script', blah);
    // child2.addComponent('sprite', {
    //     spriteName: 'walkE'
    // });
    // grandChild.addComponent('sprite', {
    //     spriteName: 'runW'
    // });//.addComponent('script', blah);
    // greatGrandChild.addComponent('sprite', {
    //     spriteName: 'runS'
    // });
    entity.renderLayer = testLayer;
    var tilemaps = app.root.createChild();
    // tilemaps.createChild().addComponent('tilemap', {
    //     tilesetName: 'tester',
    //     data: water,
    //     sortOrder: 'bottomLeft',
    //     orderInLayer: 0
    // });
    // tilemaps.createChild().addComponent('tilemap', {
    //     tilesetName: 'tester',
    //     data: grass,
    //     sortOrder: 'bottomLeft',
    //     orderInLayer: 0
    // });
    // tilemaps.createChild().addComponent('tilemap', {
    //     tilesetName: 'tester',
    //     data: ice,
    //     sortOrder: 'bottomLeft',
    //     orderInLayer: 0
    // });
    // tilemaps.createChild().addComponent('tilemap', {
    //     tilesetName: 'tester',
    //     data: detailsLower,
    //     sortOrder: 'bottomLeft',
    //     orderInLayer: 0
    // })//.renderLayer = testLayer;
    // tilemaps.createChild().addComponent('tilemap', {
    //     tilesetName: 'tester',
    //     data: detailsUpper,
    //     sortOrder: 'bottomLeft',
    //     orderInLayer: 1
    // }).renderLayer = testLayer;

    app.startGameLoop();
});


// import {Vector2} from './math/Vector2'
//
// let test = Vector2.ZERO
//
// test.add(new Vector2(3, 5));
//
// let test2 = new Vector2(2,4);
//
// test2.multiply(new Vector2(8, 2))
//
// console.log(test.toString(), test2.dot(test))
