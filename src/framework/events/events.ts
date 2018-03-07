export class Evented {
    eventCallbacks: {[key: string]: Array<Function>} = {};
    off(key?: string, callback?: Function) {
        if (!key) {
            this.eventCallbacks = {};
        } else if (!callback) {
            delete this.eventCallbacks[key];
        } else {
            let callbacks = this.eventCallbacks[key];
            if (callbacks) {
                let index = callbacks.indexOf(callback);
                if (index > -1) {
                    callbacks = callbacks.splice(index, 1);
                    this.eventCallbacks[key] = callbacks;
                }
            }
        }
    }

    on(key: string, callback: Function) {
        this.eventCallbacks[key] = this.eventCallbacks[key] || new Array<Function>();
        this.eventCallbacks[key].push(callback);
    }

    once(key: string, callback: Function) {
        (<any>callback).once = true;
        this.on(key, callback);
    }

    trigger(key: string, ...args: any[]) {
        let callbacks: Array<Function> = this.eventCallbacks[key];
        let removedIndexes: Array<number> = [];
        if (!callbacks || callbacks.length === 0) {
            return;
        }
        let callbacksToExecute = [];
        for (let i = 0, n = callbacks.length; i < n; i++) {
            let callback = callbacks[i];
            callbacksToExecute.push(callback);
            if ((<any>callback).once) {
                removedIndexes.push(i);
            }
        }

        callbacks = callbacks.filter(function(callback: Function, index: number){
            return removedIndexes.indexOf(index) === -1;
        });


        if (callbacks.length > 0) {
            this.eventCallbacks[key] = callbacks;
        } else {
            delete this.eventCallbacks[key];
        }

        for (let i = 0, n = callbacksToExecute.length; i < n; i++) {
            callbacksToExecute[i](...args);
        }
    }
}
