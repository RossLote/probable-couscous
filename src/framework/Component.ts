import {System} from './System';
import {Entity} from './Entity';

export class Component {

    constructor(protected system: System, public entity: Entity, data: any) {
        for (let key in data) {
            (<any>this)[key] = data[key];
        }
        this.initialize();
    }

    initialize() {
        // noop
    }

    destroy(){
        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                delete this[key];
            }
        }
    }

    toJSON():any{
        throw new Error("Method not implemented.");
    }
}
