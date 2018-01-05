// common.js

//
// Asset loader
//

var Loader = {
    images: {}
};

Loader.loadImage = function (key, src) {
    var img = new Image();

    var d = new Promise(function (resolve, reject) {
        img.onload = function () {
            this.images[key] = img;
            resolve(img);
        }.bind(this);

        img.onerror = function () {
            reject('Could not load image: ' + src);
        };
    }.bind(this));

    img.src = src;
    return d;
};

Loader.getImage = function (key) {
    return (key in this.images) ? this.images[key] : null;
};



function init_music(file){
    console.log('Playing Music')
    var gameAudio = document.createElement("audio");
    gameAudio.setAttribute('autoplay', true);
    gameAudio.setAttribute('loop', true);
    gameAudio.src = file;
    gameAudio.play();
    //gameAudio.pause();
}
