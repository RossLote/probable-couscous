import { Entity } from '../framework/Entity';
import { Application } from '../framework/Application';


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
    private static scripts : {[key: string] : typeof Script} = {};
    static promises: Promise<any>[] = [];

    static addScript(name: string, script: typeof Script) {
        ScriptRegistry.addScripts([{name: name, script: script}]);
    }

    static addScripts(scripts: Array<IScript>) : typeof ScriptRegistry {
        scripts.forEach(function(data){
            ScriptRegistry.promises.push(new Promise(function(resolve, reject){
                ScriptRegistry.scripts[data.name] = data.script;
                resolve();
            }));
        });
        return ScriptRegistry;
    }

    static getScript(name: string): typeof Script {
        return ScriptRegistry.scripts[name];
    }

    static loadScripts(scriptsData: Array<IScript>): Promise<any> {
        ScriptRegistry.addScripts(scriptsData)
        return Promise.all(ScriptRegistry.promises);
    }
}
