import {Component} from '../../Component';
import {Script} from '../../core/scripts';

export class ScriptComponent extends Component {
    public script: Script;
    public scriptName: string;

    toJSON = ():any => {
        return {
            scriptName: this.scriptName
        }
    }
}
