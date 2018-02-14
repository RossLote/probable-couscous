export interface IEvented {
    eventCallbacks:any;
    off(key: string, callback: Function, context?: any):void;

    on(key: string, callback: Function, context?: any):void;

    once(key: string, callback: Function, context?: any):void;

    trigger(key: string, a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any, k?: any, l?: any, m?: any):void
}


export class Evented {

    static makeEvented(klass: any) {
        klass.prototype.off = Evented.prototype.off
        klass.prototype.on = Evented.prototype.on
        klass.prototype.once = Evented.prototype.once
        klass.prototype.trigger = Evented.prototype.trigger
    }

    off(key: string, callback: Function, context?: any) {
        console.log('Evented: off - ', this)
    }

    on(key: string, callback: Function, context?: any) {
        console.log('Evented: on - ', this)
    }

    once(key: string, callback: Function, context?: any) {
        console.log('Evented: once - ', this)
    }

    trigger(key: string, a?: any, b?: any, c?: any, d?: any, e?: any, f?: any, g?: any, h?: any, i?: any, j?: any, k?: any, l?: any, m?: any) {
        console.log('Evented: trigger - ', this)
    }
}
