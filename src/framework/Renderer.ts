import {Application} from './Application';
import {LayerManager} from './layer/LayerManager';
import {AssetRegistry} from './core/assets';
import {SpriteRegistry} from './core/sprites';

import {Entity} from './Entity';
import {SpriteComponent} from './components/sprite/SpriteComponent';
import {TileMapComponent} from './components/tilemap/TileMapComponent';

export class Renderer {

    private context: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;

    constructor(private app: Application) {
        this.canvas = app.canvas;
        this.context = this.canvas.getContext('2d');
    }

    render(dt: number){
        const context = this.context;
        context.setTransform(1, 0, 0, 1, 0, 0);
        context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.app.layerManager.getLayers().forEach((layer) => {
            layer.preRenderSetup();
            layer.getEntities().forEach((entity) => {
                this.renderEntity(context, dt, entity);
            })
        });
    }

    renderSprite(context: CanvasRenderingContext2D, dt: number, entity: Entity, component: SpriteComponent){
        let sprite = this.app.spriteRegistry.getSprite(component.spriteName);
        let frame: any = sprite.frames[component.currentFrame];
        context.drawImage(
            this.app.assetsRegistry.getImage(sprite.imageName),
            frame.x,
            frame.y,
            frame.width,
            frame.height,
            0,
            0,
            frame.width,
            frame.height
        )
    }

    renderTileMap(context: CanvasRenderingContext2D, dt: number, entity: Entity, tilemap: TileMapComponent){
        tilemap.mapData.forEach((data: any) => {
            context.drawImage(
                tilemap.tileset.image,
                data.sx,
                data.sy,
                tilemap.tileset.frameWidth,
                tilemap.tileset.frameHeight,
                data.dx,
                data.dy,
                tilemap.tileset.frameWidth,
                tilemap.tileset.frameHeight
            )
        })
    }

    renderEntity(context: CanvasRenderingContext2D, dt: number, entity: Entity) {
        let m = entity.transform.getWorldTransform().data;
        let sprite = <SpriteComponent>entity.getComponent('sprite');
        let tilemap = <TileMapComponent>entity.getComponent('tilemap');
        this.context.setTransform(m[0], m[3], m[1], m[4], m[2], m[5]);
        tilemap && this.renderTileMap(context, dt, entity, tilemap);
        sprite && this.renderSprite(context, dt, entity, sprite);
    }
}
