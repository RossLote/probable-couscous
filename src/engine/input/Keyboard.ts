const masterKeyMap: {[key: number]: string} = {
    // named keys
    8: 'backspace',
    9: 'tab',
    13: 'enter',
    16: 'shift',
    17: 'ctrl',
    18: 'alt',
    20: 'capslock',
    27: 'esc',
    32: 'space',
    33: 'pageup',
    34: 'pagedown',
    35: 'end',
    36: 'home',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    45: 'insert',
    46: 'delete',
    91: 'leftwindow',
    92: 'rightwindow',
    93: 'select',
    144: 'numlock',
    145: 'scrolllock',
    225: 'altgr',

    // special characters
    106: '*',
    107: '+',
    109: '-',
    110: '.',
    111: '/',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\',
    221: ']',
    222: '\''
  };

  // alpha keys
  // @see https://stackoverflow.com/a/43095772/2124254
  for (var i = 0; i < 26; i++) {
    masterKeyMap[65+i] = (10 + i).toString(36);
  }
  // numeric keys and keypad
  for (i = 0; i < 10; i++) {
    masterKeyMap[48+i] = ''+i;
    masterKeyMap[96+i] = 'numpad'+i;
  }
  // f keys
  for (i = 1; i < 20; i++) {
    masterKeyMap[111+i] = 'f'+i;
  }

interface IKeymap {
    [key: string]: boolean;
}

export class Keyboard {

    private currentKeymap: IKeymap = {};
    private lastKeymap: IKeymap = {};

    constructor(public window: Window){
        // window.addEventListener('keydown', this.keydown.bind(this));
        // window.addEventListener('keyup', this.keyup.bind(this));
    }

    isPressed(key: string):boolean{
        return !!this.currentKeymap[key];
    }

    wasPressed(key: string):boolean{
        return !!this.currentKeymap[key] && !this.lastKeymap[key];
    }

    wasReleased(key: string): boolean{
        return !this.currentKeymap[key] && !!this.lastKeymap[key];
    }

    private keydown(event: KeyboardEvent){
        const code = masterKeyMap[event.which];
        event.preventDefault();
        event.stopPropagation();

        if (code) {
            this.currentKeymap[code] = true;
        }
    }

    private keyup(event: KeyboardEvent){
        event.preventDefault();
        event.stopPropagation();
        delete this.currentKeymap[masterKeyMap[event.which]];
    }

    update(){
        let prop;

        for (prop in this.lastKeymap) {
            delete this.lastKeymap[prop];
        }

        for(prop in this.currentKeymap) {
            if(this.currentKeymap.hasOwnProperty(prop)) {
                this.lastKeymap[prop] = this.currentKeymap[prop];
            }
        }
    }
}
