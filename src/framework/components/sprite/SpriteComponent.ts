import {Component} from '../../Component';


export interface ISpriteData {
    spriteName: string;
}

export class SpriteComponent extends Component {
    private _spriteName: string;
    public currentFrame: number = 0;
    public frameTime: number = 0;

    get spriteName(): string {
        return this._spriteName;
    }

    set spriteName(value: string) {
        if (value !== this._spriteName) {
            this.currentFrame = 0;
            this.frameTime = 0;
            this._spriteName = value;
        }
    }

    toJSON = ():any => {
        return {
            spriteName: this.spriteName
        }
    }
}
