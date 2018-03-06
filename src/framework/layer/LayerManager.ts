import {Layer} from './Layer';

export class LayerManager {
    private layers: Array<Layer> = [];
    private requiresSort: boolean = false;

    constructor() {
        this.createLayer('default');
    }

    createLayer(name: string, order: number = 0){
        if (this.getLayer(name)) {
            throw new Error("Layer already exists");
        }
        let layer = new Layer(name, order);
        this.layers.push(layer);
        this.requiresSort = true;
        return layer;
    }

    getDefaultLayer(): Layer {
        let layer = this.getLayer('default');
        if (!layer) {
            layer = this.createLayer('default', 0);
        }
        return layer;
    }

    getLayer(name: string): Layer | undefined {
        let layers = this.layers;
        for (let i = 0, n = layers.length; i < n; i++) {
            if (layers[i].name === name) {
                return layers[i];
            }
        }
    }

    getLayers(){
        if (this.requiresSort) {
            this._sort();
        }
        return this.layers;
    }

    sort(){
        this.requiresSort = true;
    }

    private _sort(){
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

    fromJSON(json: any){
        this.layers = [];
        json.forEach((obj:any) => {
            this.createLayer(obj.name, obj.order);
        });
        if (this.getLayer('default') === undefined) {
            this.createLayer('default', 0);
        }
    }

    toJSON():any{
        return this.layers;
    }
}
