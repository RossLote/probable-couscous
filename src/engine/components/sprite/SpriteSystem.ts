import {AssetRegistry} from '../../core/assets';
import {SpriteRegistry, Sprite} from '../../core/sprites';
import {Entity} from '../../Entity';
import {System} from '../../System';
import {SpriteComponent, ISpriteData} from './SpriteComponent';

export class SpriteSystem extends System {
    name: string = 'sprite';
    ComponentType: typeof SpriteComponent = SpriteComponent;

    updateEntity(dt: number, entity: Entity, component: SpriteComponent) {
        let sprite: Sprite = this.app.spriteRegistry.getSprite(component.spriteName);
        if (!sprite) {
            return;
        }
        component.frameTime += dt;
        if (component.frameTime >= sprite.secondsPerFrame) {
            component.frameTime = 0; // TODO: find better solution
            component.currentFrame = component.currentFrame + 1;
            if (component.currentFrame >= sprite.frames.length) {
                component.currentFrame = 0;
            }
        }
    }
}
