import { Application } from "../Application";
import { Scene } from "./Scene";



export class SceneManager {

    private scenes: {[key: string]: Scene}

    constructor(private app: Application){
        app.sceneManager = this;
        this.scenes = {};
    }

    addScene(name: string, sceneClass: typeof Scene) {
        this.scenes[name] = new sceneClass(this.app);
    }

    loadScene(name: string) {
        this.app.loadScene(this.scenes[name]);
    }
}
