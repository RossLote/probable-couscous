import {System} from './System';
import {Entity} from './Entity';

export class Component {

    constructor(private system: System, private entity: Entity, data: any) {
        for (let key in data) {
            (<any>this)[key] = data[key];
        }
    }
}
