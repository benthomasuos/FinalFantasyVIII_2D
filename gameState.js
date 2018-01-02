var currentGameData = new GameData()

currentGameData.currentMap = b_garden_infirmary
currentGameData.currentQuest = new Quest()

console.log(currentGameData)


setInterval(1000, function(){
    var timeElapsed = new Date() - currentGameData.gameStarted
    currentGameData.timeElapsed = timeElapsed
    document.getElementById('debugInfo').innerHTML = timeElapsed
    
})

function saveGame(saveSlot){
    // need to also implement save game overwrite checking
    window.localStorage.setItem("saveGame_" + saveSlot, currentGame) 
    return true
}

function loadGame(saveSlot){

    currentGame = window.localStorage.getItem("saveGame_" + saveSlot, currentGame) 
    return true
    
}
 


var Game = {
    local: {
            init: {},
            run : {},
            tick : {},
            render: {}
        },
    world: {
        init: {},
        run : {},
        tick : {},
        render: {}
    },
    battle: {
            init: {},
            run : {},
            tick : {},
            render: {}
        }
    /*
     fmv: {
            init: {},
            run : {},
            tick : {},
            render: {}
        },   
     menu: {
            init: {},
            run : {},
            tick : {},
            render: {}
        },
    triple_triad : {
            init: {},
            run : {},
            tick : {},
            render: {}
        }
    */
};

Game.local.load = function (mainCharacter, map) {
    console.log(map)
    return [
        Loader.loadImage('tiles', map.tileset ),
        Loader.loadImage('character', '../assets/tile_maps/characters/' + mainCharacter + '_sprites.png')
    ];
};

Game.local.init = function () {
    this.tileAtlas = Loader.getImage('tiles');
    this.hero = {x: 128, y: 384, image: Loader.getImage('character')};
    console.log(this.hero)
};

Game.local.run = function (context) {
    console.log(context)
    this.ctx = context;
    this._previousElapsed = 0;
    var character = currentGameData.getMainCharacter()
    console.log("Main character = " + character)
    var p = this.load(character, currentGameData.localWorldState.map);
    Promise.all(p).then(function (loaded) {
        this.init();
        window.requestAnimationFrame(this.tick);
    }.bind(this));
};

Game.local.tick = function (elapsed) {
    window.requestAnimationFrame(this.tick);

    // clear previous frame
    this.ctx.clearRect(0, 0, 512, 512);

    // compute delta time in seconds -- also cap it
    var delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.25); // maximum delta of 250 ms
    this._previousElapsed = elapsed;

    this.update(delta);
    this.render( currentGameData.localWorldState.map );
}.bind(Game.local);

// override these methods to create the demo



Game.local.update = function (delta) {};




Game.local.render = function (map) {
    // draw map background layer
    map.drawLayer(map.layers.background, this.ctx);
    // draw game sprites
    //console.log(this.hero)
    this.ctx.drawImage(this.hero.image, this.hero.x, this.hero.y);
    // draw map top layer
    map.drawLayer(map.layers.foreground, map);
};


window.onload = function () {
    var context = document.getElementById('mainScreen').getContext('2d');
    console.log(context)
    Game.local.run(context);
};