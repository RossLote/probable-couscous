import {AssetRegistry} from './assets';

interface IFrame {
    x: number;
    y: number;
    width: number;
    height: number;
}

interface IUncalculatedSprite {
    frames: Array<number>;
    framerate?: number;
}

interface IUncalculatedSprites {
    [key: string] : IUncalculatedSprite
}

interface ISpritesheetData {
    imageName: string;
    frameWidth: number;
    frameHeight: number;
    sprites: IUncalculatedSprites;
}


export class Sprite {
    public secondsPerFrame: number;
    constructor(public imageName: string, public frames: Array<IFrame>, public framerate: number){
        this.secondsPerFrame = 1/framerate;
    }
}


export class SpriteRegistry {

    constructor(private assetRegistry: AssetRegistry, private sprites: {[key: string]: Sprite} = {}) {}

    registerSprite(data: ISpritesheetData) {
        let image = this.assetRegistry.getImage(data.imageName);
        let framesWide: number = image.width/data.frameWidth;
        let framesHigh: number = image.height/data.frameHeight;

        for (let key in data.sprites) {
            let frames = Array<IFrame>();
            let framerate = data.sprites[key].framerate || 0;

            data.sprites[key].frames.forEach((frameIndex) => {
                let xMultiplier: number = Math.floor(frameIndex % framesWide);
                let yMultiplier: number = Math.floor(frameIndex / framesWide);
                frames.push({
                    x: xMultiplier * data.frameWidth,
                    y: yMultiplier * data.frameHeight,
                    width: data.frameWidth,
                    height : data.frameHeight
                });
            });
            this.setSprite(key, new Sprite(data.imageName, frames, framerate));
        }
    }

    registerSprites(data: Array<ISpritesheetData>) {
        data.forEach((spritesheetData) => {
            this.registerSprite(spritesheetData);
        });
    }

    getSprite(name: string): Sprite {
        return this.sprites[name];
    }

    setSprite(name: string, sprite: Sprite) {
        this.sprites[name] = sprite;
    }
}
