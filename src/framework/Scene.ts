import {Application} from './Application';
import {Entity} from './Entity';
import TestScript from '../scripts/Tester';


class Scene {

    private root: Entity;

    constructor(){
        this.root = new Entity();
    }

    setup = (app: Application) => {
        var entity = this.root.createChild();

        entity.transform.setLocalPosition([400, 300])
        // entity.transform.localRotation = 1;
        entity.transform.setPivot([12, 15]);

        entity.addComponent('sprite', {
            spriteName: 'runE'
        }).addComponent('script', TestScript);
    }

    teardown = (app: Application) => {

    }
}
