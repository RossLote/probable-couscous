import { Script } from '../engine/core/scripts';


export default class SceneSwitcher extends Script {

    constructor(entity: any, app: any){
        super(entity, app);
    }

    update(dt: number) {
        let pressed = this.app.keyboard.wasPressed.bind(this.app.keyboard);
        if (pressed('1')) {
            this.app.sceneManager.loadScene('blank');
        } else if (pressed('2')) {
            this.app.sceneManager.loadScene('breakout');
        } else if (pressed('3')) {
            this.app.sceneManager.loadScene('tilemap');
        }
    }
}
