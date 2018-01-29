import { Entity } from '../../Entity';
import { Application } from '../../../Application';

export class Script {
    constructor(protected entity: Entity, protected app: Application){}
    initialize(){}
    update(deltaTime: number){}
    tearDown(){}
}
