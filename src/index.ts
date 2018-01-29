import {AssetRegistry} from './core/assets';
import {SpriteRegistry} from './core/sprites';
import {Application} from './Application';
import blah from './scripts/Tester';

AssetRegistry.addImages([{
    url: '/images/magecity.png',
    alias: 'magecity'
},{
    url: '/images/town01.png',
    alias: 'town1'
},{
    url: '/images/town02.png',
    alias: 'town2'
},{
    url: '/images/Fumiko.png',
    alias: 'fumiko'
}]).loadAssets().then(function(){
    SpriteRegistry.registerSprites([{
        imageAlias: 'fumiko',
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

    var app = new Application()

    var entity = app.root.createChild();
    entity.addComponent('sprite', {
        spriteName: 'runE'
    });

    app.startGameLoop();
});
