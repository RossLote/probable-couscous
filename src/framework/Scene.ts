import {Application} from './Application';
import {Entity} from './Entity';
import TestScript from '../scripts/Tester';

import {uuid} from '../core/uuid';


export class Scene {
    uuid: string;
    private root: Entity;

    constructor(){
        this.uuid = uuid();
        this.root = new Entity();
    }

    createEntity = () => {
        return this.root.createChild();
    }

    setup = (app: Application) => {
        
    }

    teardown = (app: Application) => {

    }

    destroy = () => {
        this.root.destroy();
    }
}
