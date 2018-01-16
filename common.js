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
    console.log(img)
    return d;
};

Loader.getImage = function (key) {
    return (key in this.images) ? this.images[key] : null;
};



function init_music(track){
    //console.log('Playing Music ',  track.file.name)
    var gameMusic = document.getElementById("music");
    //gameMusic.setAttribute('autoplay', true);
    //gameMusic.setAttribute('loop', true);
    gameMusic.src = track.file.name;
    gameMusic.play();
    //gameMusic.pause();
}

function playSound(sound){
    console.log('Playing sound effect ' + soundEffect[sound])
    var effect = document.getElementById("soundEffect");
    effect.src = soundEffect[sound];
    effect.loop = false
    console.log(effect)
    effect.play();
    if(effect.ended){
        //effect.src = undefined
        effect.pause()
    }
}

function debug(status){
    var game = currentGameData
    $('#debug').html('')
    //if(status == true){
        $('#debug').html('Game started: '+ game.gameStarted +'<br>Time elapsed: ' +  moment(game.timeElapsed).format('H:mm:ss') )
        sprites.forEach(function(d, i){
            //console.log(d)
            $('#debug').append("<br>" + d.key + "  =>   x: " +  d.x.toFixed(1) + " y: " + d.y.toFixed(1))
        })


    //}

}
