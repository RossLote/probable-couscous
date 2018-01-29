import {Component} from '../../Component';


export interface ISpriteData {
    spriteName: string;
}

export class SpriteComponent extends Component {
    public spriteName: string;
    public currentFrame: number = 0;
    public frameTime: number = 0;
}
