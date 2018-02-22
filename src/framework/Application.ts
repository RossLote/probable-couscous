import {Keyboard} from './input/Keyboard';
import {System} from '../framework/System';
import {Entity} from '../framework/Entity';
import {Renderer} from './Renderer';

import {ColliderSystem} from '../framework/components/collider/ColliderSystem';
import {RidgedBodySystem} from '../framework/components/ridgedbody/RidgedBodySystem';
import {ScriptSystem} from '../framework/components/script/ScriptSystem';
import {SpriteSystem} from '../framework/components/sprite/SpriteSystem';
import {TileMapSystem} from '../framework/components/tilemap/TileMapSystem';

import {Scene} from './scene/Scene';
import {SceneManager} from './scene/SceneManager';
import {LayerManager} from './layer/LayerManager';

import {AssetRegistry} from './core/assets';
import {ScriptRegistry} from './core/scripts';
import {SpriteRegistry} from './core/sprites';
import {TilesetRegistry} from './core/tileset';


interface ISystems {
    [key: string]: System
}

export class Application {
    private static currentApplication: Application;
    private systems: ISystems = {};
    private systemsList: Array<System> = [];
    private startTime: number;
    private lastFrameTime: number;
    private renderer: Renderer;
    private poolOfDestruction: Array<Entity> = [];
    assetsRegistry: AssetRegistry;
    scriptRegistry: ScriptRegistry;
    spriteRegistry: SpriteRegistry;
    tilesetRegistry: TilesetRegistry;
    sceneManager: SceneManager;
    layerManager: LayerManager;
    canvas: HTMLCanvasElement;
    root: Entity;
    playing: boolean = false;
    currentScene: any;
    keyboard: Keyboard;

    constructor(canvas: HTMLCanvasElement = undefined) {

        this.assetsRegistry = new AssetRegistry;
        this.scriptRegistry = new ScriptRegistry;
        this.spriteRegistry = new SpriteRegistry(this.assetsRegistry);
        this.tilesetRegistry = new TilesetRegistry(this.assetsRegistry);

        if (canvas === undefined) {
            canvas = document.createElement('canvas');
            document.body.appendChild(canvas);
        }
        canvas.width = 1000;
        canvas.height = 600;
        this.canvas = canvas;
        this.renderer = new Renderer(this);
        this.keyboard = new Keyboard(window);
        this.layerManager = new LayerManager();
        this.sceneManager = new SceneManager(this);

        this.registerSystems([
            ScriptSystem,
            TileMapSystem,
            SpriteSystem,
            ColliderSystem,
            RidgedBodySystem
        ]);
        this.root = new Entity(this);
    }

    registerSystem(systemClass: typeof System){
        var system = new systemClass(this);
        this.systems[system.name] = system;
        for (let i = 0; i < system.variants.length; i++) {
            this.systems[system.variants[i]] = system;
        }
        this.systemsList.push(system);
    }

    registerSystems(systemClasses: Array<typeof System>){
        for (let i = 0; i < systemClasses.length; i++) {
            this.registerSystem(systemClasses[i]);
        }
    }

    getSystem(name: string): System {
        return this.systems[name];
    }

    loadScene(scene: Scene){
        if (this.currentScene) {
            this.currentScene.teardown();
            this.currentScene.destroy();
        }
        scene.preInitialise();
        scene.initialize();
        scene.postInitialize();
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

    registerEntityForDestruction(entity: Entity){
        if (this.poolOfDestruction.indexOf(entity) === -1) {
            this.poolOfDestruction.push(entity);
        }
    }

    private commenceAnnihilation(): void{
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
            for (let i = 0; i < this.systemsList.length; i++) {
                this.systemsList[i].update(dt);
            }
            this.renderer.render(dt);
            this.keyboard.update();
            this.commenceAnnihilation();
        }
    }
}
