import {Application} from './Application';
import {LayerManager} from './layer/LayerManager';
import {AssetRegistry} from './core/assets';
import {SpriteRegistry} from './core/sprites';

import {Entity} from './Entity';
import {SpriteComponent} from './components/sprite/SpriteComponent';
import {TileMapComponent} from './components/tilemap/TileMapComponent';
import {BoxColliderComponent} from './components/collider/BoxColliderComponent';

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

    renderCollider(context: CanvasRenderingContext2D, dt: number, entity: Entity, component: BoxColliderComponent) {
        context.lineWidth=1;
        context.strokeStyle="lime";
        let aabb = component.collider;
        let poly = component.collider.toPolygon()
        let points = poly.points;
        context.beginPath();
        // context.moveTo(points[0].x, points[0].y);
        // for (let i = 1; i < points.length; i++) {
        //     context.lineTo(points[i].x, points[i].y);
        // }
        context.rect(0,0, aabb.width, aabb.height);
        context.closePath();
        context.stroke();
    }

    renderSprite(context: CanvasRenderingContext2D, dt: number, entity: Entity, component: SpriteComponent) {
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

    renderTileMap(context: CanvasRenderingContext2D, dt: number, entity: Entity, tilemap: TileMapComponent) {
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
        let collider = <BoxColliderComponent>entity.getComponent('boxcollider');
        this.context.setTransform(m[0], m[3], m[1], m[4], m[2], m[5]);
        collider && this.renderCollider(context, dt, entity, collider);
        tilemap && this.renderTileMap(context, dt, entity, tilemap);
        sprite && this.renderSprite(context, dt, entity, sprite);
    }
}
