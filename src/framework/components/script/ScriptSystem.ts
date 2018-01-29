import {Entity} from '../../Entity';
import {System} from '../../System';
import {ScriptComponent} from './ScriptComponent';
import {Script} from './Script';

export class ScriptSystem extends System {
    name: string = 'script';
    ComponentType: typeof ScriptComponent = ScriptComponent;

    addComponent(entity: Entity, scriptClass: typeof Script) : ScriptComponent {
        let script = new scriptClass(entity, this.app);
        let component = <ScriptComponent>super.addComponent(entity, {});
        component.script = script;
        return component;
    }

    initializeEntity(entity: Entity, component: ScriptComponent) {
        component.script.initialize();
    }

    updateEntity(dt:number, entity: Entity, component: ScriptComponent) {
        component.script.update(dt);
    }

}
