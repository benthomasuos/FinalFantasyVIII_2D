// controls.js


var Keyboard = {};

Keyboard.LEFT = 65;     //  a
Keyboard.RIGHT = 68;    //  d
Keyboard.UP = 87;       //  s
Keyboard.DOWN = 83;     //  w

Keyboard.ACTION = 74;     //  j 
Keyboard.MENU = 75;     //  k
Keyboard.BACK = 76;     //  l
Keyboard.PAUSE = 80;    //  p
Keyboard.SELECT = 79;   //  o



Keyboard._keys = {};

Keyboard.listenForEvents = function (keys) {
    window.addEventListener('keydown', this._onKeyDown.bind(this));
    window.addEventListener('keyup', this._onKeyUp.bind(this));

    keys.forEach(function (key) {
        this._keys[key] = false;
    }.bind(this));
}

Keyboard._onKeyDown = function (event) {
    var keyCode = event.keyCode;
    if (keyCode in this._keys) {
        event.preventDefault();
        this._keys[keyCode] = true;
    }
};

Keyboard._onKeyUp = function (event) {
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
