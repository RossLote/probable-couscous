import {Keyboard} from '../input/Keyboard';
import {System} from '../framework/System';
import {Entity} from '../framework/Entity';
import {Renderer} from './Renderer';
import {ScriptSystem} from '../framework/components/script/ScriptSystem';
import {SpriteSystem} from '../framework/components/sprite/SpriteSystem';
import {TileMapSystem} from '../framework/components/tilemap/TileMapSystem';
import {Scene} from './scene/Scene';
import {SceneManager} from './scene/SceneManager';
import {LayerManager} from './layer/LayerManager';

/**
TODO:
* Tilesets              ✓
* Layers                ✓
* Input                 ✓
* Scenes
* Collision
* Physics
* Sound
* Events/Triggers
* Lights
* UI
* Fonts
* Build from JSON
* Local storage (Saving)
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
    private poolOfDestruction: Array<Entity>;
    sceneManager: SceneManager;
    layerManager: LayerManager;
    canvas: HTMLCanvasElement;
    root: Entity;
    playing: boolean = false;
    currentScene: any;
    keyboard: Keyboard;

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
        this.keyboard = new Keyboard(window);
        this.poolOfDestruction = [];
        this.layerManager = new LayerManager();
        this.sceneManager = new SceneManager(this);

        this.registerSystems([
            ScriptSystem,
            TileMapSystem,
            SpriteSystem
        ]);
        this.root = new Entity();
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

    loadScene = (scene: Scene) => {
        if (this.currentScene) {
            this.currentScene.teardown(this);
            this.currentScene.destroy();
        }
        scene.preInitialise(this);
        scene.initialize(this);
        scene.postInitialize(this);
        this.currentScene = scene;
    }

    startGameLoop() {
        this.playing = true;
        for (let name in this.systems) {
            this.systems[name].initialize();
        }
        this.lastFrameTime = performance.now();
        this.gameLoop(0);
    }

    registerEntityForDestruction = (entity: Entity) => {
        if (this.poolOfDestruction.indexOf(entity) === -1) {
            this.poolOfDestruction.push(entity);
        }
    }

    private commenceAnnihilation = (): void => {
        let entities = this.poolOfDestruction;
        let i, n = entities.length;
        for (i = 0; i < n; i++) {
            let entity = entities[i];
            entity && entity.forceDestroy && entity.forceDestroy();
        }
        this.poolOfDestruction = [];
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
            this.keyboard.update();
            this.commenceAnnihilation();
        }
    }
}
