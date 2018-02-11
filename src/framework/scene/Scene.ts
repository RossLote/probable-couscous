import {Application} from '../Application';
import {Entity} from '../Entity';
import TestScript from '../../scripts/Tester';

import {uuid} from '../core/uuid';


export class Scene {
    uuid: string;
    protected root: Entity;

    constructor(protected app: Application, protected data: any = undefined){
        this.uuid = uuid();
    }

    createEntity = () => {
        return this.root.createChild();
    }

    addEntity = (entity: Entity) => {
        return this.root.addChild(entity);
    }

    preInitialise = (): Scene => {
        if (!this.root) {
            this.root = new Entity();
        }
        return this;
    }

    initialize = () => {

    }

    postInitialize = () => {

    }

    teardown = () => {

    }

    destroy = () => {
        this.root.destroy();
        delete this.root;
    }
}
