import { Entity } from '../Entity';
import { Application } from '../Application';


export class Script {
    attributes: any = {};
    constructor(protected entity: Entity, protected app: Application){}
    initialize(){}
    update(deltaTime: number){}
    tearDown(){}
}


interface IScript {
    name: string;
    script: typeof Script;
}


export class ScriptRegistry {
    private scripts : {[key: string] : typeof Script} = {};

    addScript(name: string, script: typeof Script) {
        this.addScripts([{name: name, script: script}]);
    }

    addScripts(scripts: Array<IScript>): ScriptRegistry {
        scripts.forEach((data) => {
            this.scripts[data.name] = data.script;
        });
        return this;
    }

    getScript(name: string): typeof Script {
        return this.scripts[name];
    }
}
