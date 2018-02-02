import {System} from './framework/System';
import {Entity} from './framework/Entity';
import {Renderer} from './Renderer';
import {ScriptSystem} from './framework/components/script/ScriptSystem';
import {SpriteSystem} from './framework/components/sprite/SpriteSystem';
import {TileMapSystem} from './framework/components/tilemap/TileMapSystem';

/**
TODO:
* Tilesets
*
* Layers
*
* Collision
* Input
* Sound
* Scenes
* Local storage
* Events
* Physics
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
    private renderer: Renderer;
    canvas: HTMLCanvasElement;
    root: Entity;
    playing: boolean = false;
    currentScene: any;

    constructor(canvas: HTMLCanvasElement = undefined) {
        Application.currentApplication = this;
        if (canvas === undefined) {
            canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
        }
        canvas.width = 1000;
        canvas.height = 600;
        this.canvas = canvas;
        this.renderer = new Renderer(this);
        this.root = new Entity();

        this.registerSystems([
            ScriptSystem,
            TileMapSystem,
            SpriteSystem
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
            this.renderer.render(dt);
        }
    }
}
