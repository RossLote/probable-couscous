import {Entity} from "./framework/Entity";


export class RenderLayer {
    private entities: Array<Entity>;
    private requiresSort: boolean = false;

    constructor(public name: string, public order: number){
        RenderLayers.push()
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
            this.sort();
            this.requiresSort = false;
        }
    }

    addEntity = (entity: Entity) => {
        this.entities.push(entity);
        this.requiresSort = true;
    }

    removeEntity = (entity: Entity) => {
        let index: number = this.entities.indexOf(entity);
        if (index > -1) {
            this.entities.splice(index, 1);
        }
    }

    sort = () => {
        this.entities.sort(function(a: Entity, b: Entity){
            if (a.orderInLayer < b.orderInLayer) {
                return -1;
            }
            if (a.orderInLayer > b.orderInLayer) {
                return 1;
            }
            return 0;
        });
    }
}

export const DefaultRenderLayer = new RenderLayer('default', 0);

export const RenderLayers = Array<RenderLayer>()
