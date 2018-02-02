import {Application} from './Application';
import {RenderLayers} from './Layer';
import {AssetRegistry} from './core/assets';
import {SpriteRegistry} from './core/sprites';

import {Entity} from './framework/Entity';
import {SpriteComponent} from './framework/components/sprite/SpriteComponent';
import {TileMapComponent} from './framework/components/tilemap/TileMapComponent';

export class Renderer {

    private context: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;

    constructor(private app: Application) {
        this.canvas = app.canvas;
        this.context = this.canvas.getContext('2d');
    }

    render(dt: number){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        RenderLayers.forEach((layer) => {
            layer.preRenderSetup();
            layer.getEntities().forEach((entity) => {
                this.context.save()
                this.renderEntity(dt, entity);
                this.context.restore();
            })
        });
        // var root = [this.app.root];
        // var this_ = this;
        // this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // function graph(entities: Array<Entity>) {
        //     entities.forEach(function(entity){
        //         this_.context.save()
        //         this_.updateEntity(dt, entity);
        //         graph(entity.children);
        //         this_.context.restore()
        //     }, this);
        // }
        // graph(root);
    }

    renderSprite = (dt: number, entity: Entity, component: SpriteComponent) => {
        let scale = entity.transform.scale;
        let sprite = SpriteRegistry.getSprite(component.spriteName);
        let frame: any = sprite.frames[component.currentFrame];
        this.context.drawImage(
            AssetRegistry.getImage(sprite.imageName),
            frame.x,
            frame.y,
            frame.width,
            frame.height,
            0,
            0,
            frame.width * scale.x,
            frame.height * scale.y
        )
    }

    renderTileMap = (dt: number, entity: Entity, tilemap: TileMapComponent) => {
        tilemap.mapData.forEach((data: any) => {
            this.context.drawImage(
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

    renderEntity(dt: number, entity: Entity) {
        let pos = entity.transform.position;
        let sprite = <SpriteComponent>entity.getComponent('sprite');
        let tilemap = <TileMapComponent>entity.getComponent('tilemap');
        this.context.translate(pos.x, pos.y);
        tilemap && this.renderTileMap(dt, entity, tilemap);
        sprite && this.renderSprite(dt, entity, sprite);
    }
}
