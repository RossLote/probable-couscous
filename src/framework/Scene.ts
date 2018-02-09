import {Application} from './Application';
import {Entity} from './Entity';
import TestScript from '../scripts/Tester';

import {uuid} from '../core/uuid';


export class Scene {
    uuid: string;
    private root: Entity;

    constructor(protected data: any = {}){
        this.uuid = uuid();
    }

    createEntity = () => {
        return this.root.createChild();
    }

    addEntity = (entity: Entity) => {
        return this.root.addChild(entity);
    }

    preInitialise = (app: Application): Scene => {
        if (!this.root) {
            this.root = new Entity();
        }
        return this;
    }

    initialize = (app: Application) => {

    }

    postInitialize = (app: Application) => {

    }

    teardown = (app: Application) => {

    }

    destroy = () => {
        this.root.destroy();
        delete this.root;
    }
}
