import {AssetRegistry} from '../../../core/assets';
import {SpriteRegistry} from '../../../core/sprites';
import {System} from '../../System';
import {Entity} from '../../Entity';

import {SpriteComponent} from '../sprite/SpriteComponent';
import {TileMapComponent} from '../tilemap/TileMapComponent';

export class RenderSystem extends System {
    private context: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;
    name: string = 'renderer';

    constructor() {
        super();
        this.canvas = this.app.canvas;
        this.context = this.canvas.getContext('2d');
    }

    update(dt: number){
        var root = [this.app.root];
        var this_ = this;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        function graph(entities: Array<Entity>) {
            entities.forEach(function(entity){
                this_.context.save()
                this_.updateEntity(dt, entity);
                graph(entity.children);
                this_.context.restore()
            }, this);
        }
        graph(root);
    }

    renderSprite = (entity: Entity, component: SpriteComponent) => {
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

    renderTileMap = (entity: Entity, tilemap: TileMapComponent) => {
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

    updateEntity(dt: number, entity: Entity) {
        let pos = entity.transform.position;
        let sprite = <SpriteComponent>entity.getComponent('sprite');
        let tilemap = <TileMapComponent>entity.getComponent('tilemap');
        this.context.translate(pos.x, pos.y);
        sprite && this.renderSprite(entity, sprite);
        tilemap && this.renderTileMap(entity, tilemap);
    }
}
