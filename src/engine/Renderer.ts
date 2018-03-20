import Engine from './Engine';
import {LayerManager} from './layer/LayerManager';
import {AssetRegistry} from './core/assets';
import {SpriteRegistry} from './core/sprites';

import {Entity} from './Entity';
import {SpriteComponent} from './components/sprite/SpriteComponent';
import {TileMapComponent} from './components/tilemap/TileMapComponent';
import {IColliderComponent} from './components/collider/ColliderComponent';
import {Circle, Polygon} from './components/collider/SAT';

export class Renderer {

    private context: CanvasRenderingContext2D;
    private canvas: HTMLCanvasElement;

    constructor(private app: Engine) {
        this.canvas = app.canvas;
        this.context = <CanvasRenderingContext2D>this.canvas.getContext('2d');
        this.context.imageSmoothingEnabled = false;
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

    renderCircleCollider(context: CanvasRenderingContext2D, collider: Circle) {
        let position = collider.position
        context.translate(position.x, position.y);
        context.beginPath();
        context.arc(0, 0, collider.calculatedRadius, 0, 2 * Math.PI);
        context.stroke();
    }

    renderPolygonCollider(context: CanvasRenderingContext2D, collider: Polygon) {
        let points = collider.points;
        let position = collider.position;
        let scale = collider.scale;
        context.translate(position.x, position.y);
        context.rotate(collider.angle);
        context.scale(scale.x, scale.y);
        context.beginPath();
        context.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
            context.lineTo(points[i].x, points[i].y);
        }
        context.closePath();
        context.stroke();
    }

    renderCollider(context: CanvasRenderingContext2D, dt: number, entity: Entity, component: any) {
        let collider = component.collider

        context.save()
        context.lineWidth=1;
        context.strokeStyle="red";
        if (collider instanceof Circle) {
            this.renderCircleCollider(context, collider);
        } else if (collider instanceof Polygon) {
            this.renderPolygonCollider(context, collider);
        }
        context.restore();
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
        let collider = <IColliderComponent>entity.getComponent('collider');
        this.context.setTransform(m[0], m[3], m[1], m[4], m[2], m[5]);
        tilemap && this.renderTileMap(context, dt, entity, tilemap);
        sprite && this.renderSprite(context, dt, entity, sprite);

        if (this.app.renderColliders) {
            context.setTransform(1, 0, 0, 1, 0, 0);
            collider && this.renderCollider(context, dt, entity, collider);
        }
    }
}
