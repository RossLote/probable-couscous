import {System} from './framework/System';
import {Entity} from './framework/Entity';
import {RenderSystem} from './framework/components/renderer/Renderer';
import {ScriptSystem} from './framework/components/script/ScriptSystem';
import {SpriteSystem} from './framework/components/sprite/SpriteSystem';

/**
TODO:
* Tilesets
* Layers
* Local storage
* Input
* Events
* Collision
* Physics
* Sound
* Scenes
* Lights
* UI
* Fonts
* Build from JSON
* Script import
* WebGL
* Documentation
* EDITOR!!!
* FSM
*/

interface ISystems {
    [key: string]: System
}

export class Application {
    private static currentApplication: Application;
    private systems: ISystems = {};
    private startTime: number;
    private lastFrameTime: number;
    canvas: HTMLCanvasElement;
    root: Entity;
    playing: boolean = false;

    constructor(canvas: HTMLCanvasElement = undefined) {
        Application.currentApplication = this;
        if (canvas === undefined) {
            canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
        }
        this.canvas = canvas;
        this.root = new Entity();

        this.registerSystems([
            ScriptSystem,
            SpriteSystem,
            RenderSystem
        ]);
    }

    static getCurrentApplication() : Application {
        return Application.currentApplication;
    }

    registerSystem(systemClass: typeof System) {
        var system = new systemClass;
        this.systems[system.name] = system;
    }

    registerSystems(systemClasses: Array<typeof System>) {
        systemClasses.forEach(this.registerSystem.bind(this));
    }

    getSystem(name: string) : System {
        return this.systems[name];
    }

    startGameLoop() {
        this.playing = true;
        for (let name in this.systems) {
            this.systems[name].initialize();
        }
        this.lastFrameTime = performance.now();
        this.gameLoop(0);
    }

    private gameLoop(time: number) {
        let dt = (time - this.lastFrameTime)/1000;
        this.lastFrameTime = time;
        window.requestAnimationFrame(this.gameLoop.bind(this));
        if (this.playing) {
            for (let name in this.systems) {
                this.systems[name].update(dt);
            }
        }
    }
}
