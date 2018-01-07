// controls.js


var Keyboard = {};

Keyboard.LEFT = 65;       //  a
Keyboard.RIGHT = 68;      //  d
Keyboard.UP = 87;         //  s
Keyboard.DOWN = 83;       //  w

Keyboard.ACTION = 74;     //  j
Keyboard.MENU = 75;       //  k
Keyboard.CANCEL = 76;       //  l
Keyboard.PAUSE = 80;      //  p
Keyboard.SELECT = 79;     //  o

Keyboard.L1 = 84;         //  t
Keyboard.L2 = 89;         //  y
Keyboard.R1 = 85;         //  u
Keyboard.L2 = 73;         //  i

Keyboard._keys = [Keyboard.LEFT, Keyboard.RIGHT, Keyboard.UP, Keyboard.DOWN, Keyboard.ACTION, Keyboard.MENU, Keyboard.BACK, Keyboard.PAUSE, Keyboard.SELECT, Keyboard.L1, Keyboard.L2, Keyboard.R1, Keyboard.R2];

/*
window.addEventListener('keydown', function(event){
    console.log(event.which)

})
*/

Keyboard.listenForEvents = function (keys) {
    window.addEventListener('keydown', this._onKeyDown.bind(this));
    window.addEventListener('keyup', this._onKeyUp.bind(this));
    console.log('Keyboard attached')
    keys.forEach(function (key) {
        this._keys[key] = false;
    }.bind(this));
}

Keyboard._onKeyDown = function (event) {
    console.log('Key pressed down')
    var keyCode = event.keyCode;
    if (keyCode in this._keys) {
        event.preventDefault();
        this._keys[keyCode] = true;
    }
};

Keyboard._onKeyUp = function (event) {
    console.log('Key released')
    var keyCode = event.keyCode;
    if (keyCode in this._keys) {
        event.preventDefault();
        this._keys[keyCode] = false;
    }
};

Keyboard.isDown = function (keyCode) {
    if (!keyCode in this._keys) {
        throw new Error('Keycode ' + keyCode + ' is not being listened to');
    }
    return this._keys[keyCode];
};
