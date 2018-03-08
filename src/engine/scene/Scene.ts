import Engine from '../Engine';
import {Entity} from '../Entity';

import {uuid} from '../core/uuid';


export class Scene {
    uuid: string;
    protected root: Entity;


    constructor(protected app: Engine, protected json: any = undefined){
        this.uuid = uuid();
        this.root = new Entity(app);
    }

    createEntity = () => {
        return this.root.createChild();
    }

    addEntity = (entity: Entity) => {
        return this.root.addChild(entity);
    }

    preInitialise = (): Scene => {
        if (!this.root) {
            if (this.json) {
                this.root = Entity.buildFromJSON(this.app, this.json);
            } else {
                this.root = new Entity(this.app);
            }
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
        this.root.forceDestroy();
        delete this.root;
    }
}
