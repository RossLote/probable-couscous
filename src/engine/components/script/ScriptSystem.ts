import {Script, ScriptRegistry} from '../../core/scripts';
import {Entity} from '../../Entity';
import {System} from '../../System';
import {ScriptComponent} from './ScriptComponent';

interface IScriptData {
    scriptName: string;
}

export class ScriptSystem extends System {
    name: string = 'script';
    ComponentType: typeof ScriptComponent = ScriptComponent;

    addComponent(componentName: string, entity: Entity, data: IScriptData):ScriptComponent {
        let scriptClass = this.app.scriptRegistry.getScript(data.scriptName);
        let script = new scriptClass(entity, this.app);
        let component = <ScriptComponent>super.addComponent(componentName, entity, {
            script: script,
            scriptName: data.scriptName
        });
        this.initializeEntity(entity, component)
        
        return component;
    }

    initializeEntity(entity: Entity, component: ScriptComponent) {
        component.script.initialize();
    }

    updateEntity(dt:number, entity: Entity, component: ScriptComponent) {
        component.script.update(dt);
    }

}
