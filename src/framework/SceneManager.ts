import { Application } from "./Application";
import { Scene } from "./Scene";



export class SceneManager {

    private scenes: {[key: string]: Scene}

    constructor(private app: Application){
        app.sceneManager = this;
        this.scenes = {};
    }

    addScene(name: string, scene: Scene) {
        this.scenes[name] = scene;
    }

    loadScene(name: string) {
        this.app.loadScene(this.scenes[name]);
    }
}
