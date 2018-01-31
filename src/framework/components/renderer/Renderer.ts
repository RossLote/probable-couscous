import {AssetRegistry} from '../../../core/assets';
import {SpriteRegistry} from '../../../core/sprites';
import {System} from '../../System';
import {Entity} from '../../Entity';

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

        // Break this out
        this.app.currentScene.render(this.canvas);

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

    updateEntity(dt: number, entity: Entity) {
        let ctx = this.context;
        let pos = entity.transform.position;
        let scale = entity.transform.scale;
        let sprites = <any>entity.getComponents('sprite');
        ctx.translate(pos.x, pos.y);
        sprites.forEach((component: any) => {
            let sprite = SpriteRegistry.getSprite(component.spriteName);
            let frame: any = sprite.frames[component.currentFrame];
            ctx.drawImage(
                AssetRegistry.getImage(sprite.imageALias),
                frame.x,
                frame.y,
                frame.width,
                frame.height,
                0,
                0,
                frame.width * scale.x,
                frame.height * scale.y
            )
        });
        // if (sprite) {
        //     ctx.drawImage(
        //         sprite.image,
        //         sprite.data.x,
        //         sprite.data.y,
        //         sprite.data.width,
        //         sprite.data.height,
        //         pos.x,
        //         pos.y,
        //         sprite.data.width * scale.x,
        //         sprite.data.height * scale.y
        //     )
        // }
    }
}
