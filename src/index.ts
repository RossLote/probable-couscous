import {AssetRegistry} from './core/assets';
import {SpriteRegistry} from './core/sprites';
import {TilesetRegistry} from './core/tileset';
import {Application} from './framework/Application';
import {RenderLayer} from './framework/Layer';
import {Scene} from './framework/Scene';
import TestScript from './scripts/Tester';

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

    let testLayer = new RenderLayer('details', 1);

    class Scene1 extends Scene {
        player: any;
        initialize = (app: Application) => {
            var entity = this.createEntity();
            entity.transform.setPivot([12, 15]);

            this.player = entity.addComponent('sprite', {
                spriteName: 'runE'
            }).addComponent('script', TestScript);
        }

        postInitialize = () => {
            let playerData = this.data['player'];
            playerData && playerData.transform && this.player.transform.fromJSON(playerData.transform)
        }

        teardown = () => {
            this.data['player'] = {
                transform: this.player.transform.toJSON()
            }
            this.player = undefined;
        }
    }

    class Scene2 extends Scene {
        initialize = () => {
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

            var entity = this.createEntity();

            entity.transform.setLocalPosition([200, 200])
            // entity.transform.localRotation = 1;
            entity.transform.setPivot([12, 15]);

            entity.addComponent('sprite', {
                spriteName: 'runE'
            }).addComponent('script', TestScript).renderLayer = testLayer;

            let tilemaps = this.createEntity();
            tilemaps.createChild().addComponent('tilemap', {
                tilesetName: 'tester',
                data: water,
                sortOrder: 'bottomLeft',
                orderInLayer: 0
            });
            tilemaps.createChild().addComponent('tilemap', {
                tilesetName: 'tester',
                data: grass,
                sortOrder: 'bottomLeft',
                orderInLayer: 0
            });
            tilemaps.createChild().addComponent('tilemap', {
                tilesetName: 'tester',
                data: ice,
                sortOrder: 'bottomLeft',
                orderInLayer: 0
            });
            tilemaps.createChild().addComponent('tilemap', {
                tilesetName: 'tester',
                data: detailsLower,
                sortOrder: 'bottomLeft',
                orderInLayer: 0
            })//.renderLayer = testLayer;
            tilemaps.createChild().addComponent('tilemap', {
                tilesetName: 'tester',
                data: detailsUpper,
                sortOrder: 'bottomLeft',
                orderInLayer: 1
            }).renderLayer = testLayer;
        }
    }

    app.sceneManager.addScene('scene1', new Scene1);
    app.sceneManager.addScene('scene2', new Scene2);

    app.sceneManager.loadScene('scene1');
    app.startGameLoop();
});
