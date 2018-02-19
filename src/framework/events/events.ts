export interface IEvents {
    eventCallbacks:any;
    off(key?: string, callback?: Function):any;
    on(key: string, callback: Function):any;
    once(key: string, callback: Function):any;
    trigger(key: string, ...args: any[]):any;
}


export const events = {

    off: function(key?: string, callback?: Function) {
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
                    this.eventCallbacks = callbacks;
                }
            }
        }
    },

    on: function(key: string, callback: Function) {
        this.eventCallbacks[key] = this.eventCallbacks[key] || new Array<Function>();
        this.eventCallbacks[key].push(callback);
    },

    once: function(key: string, callback: Function) {
        (<any>callback).once = true;
        this.on(key, callback);
    },

    trigger: function(key: string, ...args: any[]) {
        let callbacks: Array<Function> = this.eventCallbacks[key];
        if (!callbacks || callbacks.length === 0) {
            return;
        }
        let callbacksToExecute = [];
        let i, callback;
        for (i = 0; i < callbacks.length; i++) {
            callback = callbacks[i];
            callbacksToExecute.push(callback);
            if ((<any>callback).once) {
                callbacks[i] = null;
            }
        }

        callbacks = callbacks.filter(function(callback: Function){
            return callback !== null;
        });

        if (callbacks) {
            this.eventCallbacks[key] = callbacks;
        } else {
            delete this.eventCallbacks[key];
        }

        for (i = 0; i < callbacksToExecute.length; i++) {
            callbacksToExecute[i](...args);
        }
    }
}
