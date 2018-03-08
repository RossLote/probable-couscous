import Engine from '../Engine';
import { Scene } from './Scene';



export class SceneManager {

    private scenes: {[key: string]: Scene}

    constructor(private app: Engine){
        app.sceneManager = this;
        this.scenes = {};
    }

    buildFromJSON(json: any) {
        for (const key in json) {
            if (json.hasOwnProperty(key)) {
                this.addScene(key, Scene, json[key])
            }
        }
    }

    addScene(name: string, sceneClass: typeof Scene, json: any = undefined) {
        this.scenes[name] = new sceneClass(this.app, json);
    }

    createBlankScene(name: string) {
        this.addScene(name, Scene);
    }

    loadScene(name: string) {
        this.app.loadScene(this.scenes[name]);
    }
}
