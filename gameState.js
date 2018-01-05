var currentGameData = new GameData()

currentGameData.currentMap = b_garden_infirmary
currentGameData.currentQuest = new Quest()

console.log(currentGameData)


setInterval(function(){
    var timeElapsed = new Date() - currentGameData.gameStarted
    currentGameData.timeElapsed = timeElapsed
    document.getElementById('debugInfo').innerHTML = timeElapsed
    
}, 1000)

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
            render: {},
            sprites: {
                character : {
                    x: 0, y: 0
                }
            }
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

Game.local.init = function (map) {
    
    init_music(map.music);
    
    this.tileAtlas = Loader.getImage('tiles');
    console.log(this.tileAtlas)
    this.sprites.character = {x: 128, y: 384, image: Loader.getImage('character')};
    console.log(this.sprites)
    //console.log(this.hero)
    this.maxX = map.cols * map.tile_size - map.width;
    this.maxY = map.rows * map.tile_size - map.height;
   
    
};




Game.local.run = function (context) {
   // console.log(context)
    this.ctx = context;
    this._previousElapsed = 0;
    var character = currentGameData.getMainCharacter()
    console.log("Main character = " + character)
    //console.log(currentGameData.localWorldState)
    var p = this.load(character, currentGameData.localWorldState.map);
    Promise.all(p).then(function (loaded) {
        this.init( currentGameData.localWorldState );
        window.requestAnimationFrame(this.tick);
    }.bind(this));
};

Game.local.tick = function (elapsed) {
    window.requestAnimationFrame(this.tick);

    // clear previous frame
    this.ctx.clearRect(0, 0, 512, 512);

    // compute delta time in seconds -- also cap it
    var delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.5); // maximum delta of 250 ms
    this._previousElapsed = elapsed;

    //this.update(delta);
    this.update(1)
    this.render( currentGameData.localWorldState.map );
}.bind(Game.local);

// override these methods to create the demo



Game.local.update = function (delta) {
    var dirx = 0;
    var diry = 0;
    if (Keyboard.isDown(Keyboard.LEFT)) { dirx = -1; }
    if (Keyboard.isDown(Keyboard.RIGHT)) { dirx = 1; }
    if (Keyboard.isDown(Keyboard.UP)) { diry = -1; }
    if (Keyboard.isDown(Keyboard.DOWN)) { diry = 1; }
    
    if (Keyboard.isDown(Keyboard.PAUSE)) { 
        if(currentGameData.isPaused){
            currentGameData.isPaused = false;
            delta = 0
        }
        else{
            currentGameData.isPaused = true;
            delta = currentGameData.localSpeed
        }
        
            
        }

    this.sprites.move("character",delta, dirx, diry);
    
};

Game.local.sprites.move = function(character, delta, dirx, diry){
    console.log("Character moving")
    var SPEED = currentGameData.localSpeed;
    this[character].x += dirx * SPEED * delta;
    this[character].y += diry * SPEED * delta;
    // clamp values
    this[character].x = Math.max(0, Math.min(this[character].x, this.maxX));
    this[character].y = Math.max(0, Math.min(this[character].y, this.maxY));
    
}






Game.local.render = function (map) {
    // draw map background layer
    console.log(map.layers)
    map.drawLayer(map.layers.background, this.tileAtlas, this.ctx);
    // draw game sprites
    //console.log(this.hero)
    this.ctx.drawImage(this.sprites.character.image, this.sprites.character.x, this.sprites.character.y);
    // draw map top layer
    map.drawLayer(map.layers.foreground, this.tileAtlas, this.ctx);
};


window.onload = function () {
    var context = document.getElementById('mainScreen').getContext('2d');
    init_music(currentGameData.localWorldState.map.music)
    Game.local.run(context);
};