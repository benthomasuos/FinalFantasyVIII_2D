var currentGameData = ''
var currentMap = b_garden_infirmary


setInterval(function(){
    var timeElapsed = new Date() - currentGameData.gameStarted
    currentGameData.timeElapsed = timeElapsed
    document.getElementById('debugInfo').innerHTML = timeElapsed

}, 1000)


window.onload = function () {
    $('.state').hide();
    Game.mainMenu.init()
    if(window.localStorage){
        $('#loadGame').show(1000)
    }

};



function newGame(){

    currentGameData = new GameData()
    Game.state = 'local'
    return true

}

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
    state: 'start',
    local: {
            init: {},
            run : {},
            tick : {},
            render: {},
            sprites: {
                "character" : {
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
        },
    menu: {
        init: {}

    },
     mainMenu: {
        init: {}

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


Game.local.run = function ( map ) {
    this.map = map
    
    console.log(this.map)
    this._previousElapsed = 0;
    var character = currentGameData.getMainCharacter()
    //console.log("Main character = " + character)
    //console.log(currentGameData.localWorldState)
    
    if(Game.state === 'local'){
        var p = this.load(character, this.map);
        
        Promise.all(p).then(function (loaded) {
            this.init( this.map );
            window.requestAnimationFrame(this.tick);
        }.bind(this));
    
    }
};



Game.local.load = function (mainCharacter) {
    currentGameData.localWorldState.map = this.map
    console.log(this.map)
    return [
        Loader.loadImage('tiles', this.map.tileset ),
        Loader.loadImage('character', './assets/tile_maps/characters/' + mainCharacter + '.png')

    ];
};


Game.local.init = function () {
    
    Keyboard.listenForEvents(Keyboard._keys)
    init_music(this.map.music)

    this.tileAtlas = Loader.getImage('tiles');
    //console.log(this.tileAtlas)
    this.sprites.character = {x: 32, y: 32, image: Loader.getImage('character')};
    //console.log(map)
    //console.log(this.hero)
    this.maxX = this.map.cols * this.map.tile_size - this.map.width;
    this.maxY = this.map.rows * this.map.tile_size - this.map.height;

};







Game.local.tick = function (elapsed) {
    window.requestAnimationFrame(this.tick);

    // clear previous frame
    this.map.contexts.character.clearRect(0, 0, 600, 600);
    this.map.contexts.foreground.clearRect(0, 0, 600, 600);

    // compute delta time in seconds -- also cap it
    var delta = (elapsed - this._previousElapsed) / 1000.0;
    delta = Math.min(delta, 0.10 ); // maximum delta of 250 ms
    this._previousElapsed = elapsed;

    //this.update(delta);
    this.update(delta)
    this.render();
}.bind(Game.local);

// override these methods to create the demo



Game.local.update = function (delta) {
    var dirx = 0;
    var diry = 0;
    if (Keyboard.isDown(Keyboard.LEFT)) { dirx = -1; //console.log("Moving left")
}
    if (Keyboard.isDown(Keyboard.RIGHT)) { dirx = 1; //console.log("Moving right")
}
    if (Keyboard.isDown(Keyboard.UP)) { diry = -1; //console.log("Moving up")
}
    if (Keyboard.isDown(Keyboard.DOWN)) { diry = 1; //console.log("Moving down")
}


    if (Keyboard.isDown(Keyboard.MENU)){
        
        Game.menu.init()
    }

    if (Keyboard.isDown(Keyboard.PAUSE)) {

        if(currentGameData.isPaused){
            currentGameData.isPaused = false;
            delta = 0
        }
        else{
            var pause = document.createElement("div");
            pause.innerHTML = "Paused";
            currentGameData.isPaused = true;
            delta = currentGameData.localSpeed
        }


        }

    this.sprites.move("character",delta, dirx, diry);

};

Game.local.sprites.move = function(character, delta, dirx, diry){
    //console.log(character, delta, dirx, diry)
    //var SPEED = parseFloat(currentGameData.localSpeed);
    var SPEED = 100
    this[character].x += dirx * SPEED * delta;
    this[character].y += diry * SPEED * delta;
    // clamp values
    //this[character].x = Math.max(0, Math.min(this[character].x, Game.local.maxX));
    //this[character].y = Math.max(0, Math.min(this[character].y, Game.local.maxY));

}


Game.local.render = function () {
    // draw map background layer
    //console.log(this.map)
    this.map.drawBackground( this.tileAtlas );
    // draw game sprites
    this.map.contexts.character.drawImage(this.sprites.character.image, this.sprites.character.x, this.sprites.character.y);
    // draw map top layer
    this.map.drawForeground( this.tileAtlas );
    //track sprite
    //this.tracker = this.ctx.rect(this.sprites.character.x, this.sprites.character.y,32,32);
    //this.ctx.strokeStyle="red";
    //this.ctx.stroke();
};

function runLocalWorld(){
    
    Game.state = 'local';
    init_music(gameMusic.balamb_garden)
    $('#mainScreen').fadeIn(2000)
    $('#mainMenu').fadeOut(2000)
    
    var contexts = {}
    contexts.background = document.getElementById('background').getContext('2d') ;   
    contexts.character = document.getElementById('character').getContext('2d') ;   
    contexts.foreground = document.getElementById('foreground').getContext('2d') ;   
    console.log(contexts)
    currentMap.contexts = contexts
    Game.local.run( currentMap );
    
}





Game.mainMenu.init = function(){
    $('#mainMenu').show()
 
    
}



Game.menu.init = function(){
    
    Game.state = 'menu';
    init_music(gameMusic.blue_fields)
    $('#mainScreen').fadeOut(2000)
    $('#mainMenu').fadeIn(2000)
    
}

Game.menu.keys = function(){
    Game.state = 'menu';
    this.state = {'main': {}};
    $('#mainScreen').fadeOut('slow')
    $('#mainMenu').fadeIn('slow')
    
    this.layout = {}
    this.layout.main = {}
    
     if (Keyboard.isDown(Keyboard.LEFT)) {
         moveOption(this.state.currentSelection, 'left')
     }
      if (Keyboard.isDown(Keyboard.ACTION)) {
          selectOption(this.state.currentOption)
      }
       if (Keyboard.isDown(Keyboard.CANCEL)) {
           Game.local.run(contexts)
       }
        if (Keyboard.isDown(Keyboard.LEFT)) {}
         if (Keyboard.isDown(Keyboard.LEFT)) {}
          if (Keyboard.isDown(Keyboard.LEFT)) {}
    
    
}


