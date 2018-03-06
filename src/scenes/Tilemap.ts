import {Application} from '../framework/Application';
import {Entity} from '../framework/Entity';
import {Scene} from '../framework/scene/Scene';


export class Tilemap extends Scene {
    initialize = () => {
        this.createEntity().addComponent('script', { scriptName: 'scene-switcher' });
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
        }).addComponent('script', {
            scriptName: 'player'
        }).setRenderLayer(this.app.layerManager.getLayer('details'));

        let tilemaps = this.createEntity();
        tilemaps.createChild().addComponent('tilemap', {
            tilesetName: 'tester',
            data: water,
            sortOrder: 'bottomLeft'
        });
        tilemaps.createChild().addComponent('tilemap', {
            tilesetName: 'tester',
            data: grass,
            sortOrder: 'bottomLeft'
        });
        tilemaps.createChild().addComponent('tilemap', {
            tilesetName: 'tester',
            data: ice,
            sortOrder: 'bottomLeft'
        });
        tilemaps.createChild().addComponent('tilemap', {
            tilesetName: 'tester',
            data: detailsLower,
            sortOrder: 'bottomLeft'
        })
        tilemaps.createChild().addComponent('tilemap', {
            tilesetName: 'tester',
            data: detailsUpper,
            sortOrder: 'bottomLeft'
        }).setRenderLayer(this.app.layerManager.getLayer('details'));

        console.log(JSON.stringify(this.root));
    }
}
