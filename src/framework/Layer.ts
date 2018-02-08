import {Entity} from "./Entity";


export const RenderLayers = Array<RenderLayer>()

export class RenderLayer {
    private entities: Array<Entity>;
    private requiresSort: boolean = false;

    constructor(public name: string, public order: number){
        this.entities = [];
        RenderLayers.push(this)
        RenderLayers.sort(function(a: RenderLayer, b: RenderLayer){
            if (a.order < b.order) {
                return -1;
            }
            if (a.order > b.order) {
                return 1;
            }
            return 0;
        })
    }

    preRenderSetup = () => {
        if (this.requiresSort) {
            this._sort();
        }
    }

    addEntity = (entity: Entity) => {
        this.entities.push(entity);
        this.sort();
    }

    removeEntity = (entity: Entity) => {
        let index: number = this.entities.indexOf(entity);
        if (index > -1) {
            this.entities.splice(index, 1);
        }
    }

    getEntities = () => {
        return this.entities;
    }

    sort = () => {
        this.requiresSort = true;
    }

    _sort = () => {
        this.entities.sort(function(a: Entity, b: Entity){
            if (a.orderInLayer < b.orderInLayer) {
                return -1;
            }
            if (a.orderInLayer > b.orderInLayer) {
                return 1;
            }
            return 0;
        });
        this.requiresSort = false;
    }
}

export const DefaultRenderLayer = new RenderLayer('default', 0);
