import {Layer} from './Layer';

export class LayerManager {
    private layers: Array<Layer>;
    private requiresSort: boolean;

    constructor() {
        this.layers = [];
        this.createLayer('default');
    }

    createLayer = (name: string, order: number = 0) => {
        if (this.getLayer(name)) {
            throw new Error("Layer already exists");
        }
        let layer = new Layer(name, order);
        this.layers.push(layer);
        this.requiresSort = true;
    }

    getLayer = (name: string): Layer => {
        return this.layers.find((layer: Layer) => {
            return layer.name === name;
        });
    }

    getLayers = () => {
        if (this.requiresSort) {
            this.sort();
        }
        return this.layers;
    }

    preRenderSetup = () => {
        if (this.requiresSort) {
            this._sort();
        }
    }

    sort = () =>{
        this.requiresSort = true;
    }

    private _sort = () => {
        if (this.requiresSort) {
            this.layers.sort(function(a: Layer, b: Layer){
                if (a.order < b.order) {
                    return -1;
                }
                if (a.order > b.order) {
                    return 1;
                }
                return 0;
            });
            this.requiresSort = false;
        }
    }

    fromJSON = (json: any) => {
        this.layers = [];
        json.forEach((obj:any) => {
            this.createLayer(obj.name, obj.order);
        });
    }

    toJSON = ():any => {
        return this.layers;
    }
}
