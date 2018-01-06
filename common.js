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



function init_music(track){
    //console.log('Playing Music ',  track.file.name)
    var gameMusic = document.getElementById("music");
    gameMusic.setAttribute('autoplay', true);
    gameMusic.setAttribute('loop', true);
    gameMusic.src = track.file.name;
    gameMusic.play();
    gameMusic.pause();
}

function init_music(track){
    //console.log('Playing Music ',  track.file.name)
    var gameMusic = document.getElementById("music");
    gameMusic.setAttribute('autoplay', true);
    gameMusic.setAttribute('loop', true);
    gameMusic.src = track.file.name;
    gameMusic.play();
    gameMusic.pause();
}