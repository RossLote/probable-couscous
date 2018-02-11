import { Entity } from '../Entity';
import { Application } from '../Application';


export class Script {
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
    promises: Promise<any>[] = [];

    addScript(name: string, script: typeof Script) {
        this.addScripts([{name: name, script: script}]);
    }

    addScripts(scripts: Array<IScript>): ScriptRegistry {
        scripts.forEach((data) => {
            this.promises.push(new Promise((resolve, reject) => {
                this.scripts[data.name] = data.script;
                resolve();
            }));
        });
        return this;
    }

    getScript(name: string): typeof Script {
        return this.scripts[name];
    }

    loadScripts(scriptsData: Array<IScript>): Promise<any> {
        this.addScripts(scriptsData)
        return Promise.all(this.promises);
    }
}
