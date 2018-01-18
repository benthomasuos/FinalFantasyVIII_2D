class Cursor {
        constructor(object, currentOption){
            this.object = object
            this.currentOption = currentOption;

        }

        init(){  this.object.show() }

        kill(){  this.object.hide() }

        getPosition(){ return this.object.offset() }

        setPosition(x, y){  this.object.offset({ 'left': x ,'top': y }) }

        setPositionAt(item){
            var options = this.getCurrentMenuOptions()
            console.log(options)
            var item = $('#' + options[menuState].id )
            this.option = options[menuState].id
            this.object.offset( { 'left': Math.floor(item.offset().left - item.width()/2 - 4), 'top': Math.floor(item.offset().top) } )
            console.log('Position set to: ' + this.option)
        }

        updatePosition(dir){
            var options = this.getCurrentMenuOptions()
            menuState += dir

            if(menuState < 0){
                menuState = options.length - 1
            }
            else if(menuState >= options.length){
                menuState = 0
            }
            console.log(menuState)

            if($('#help')){
                $('#help').html($('#' + options[menuState].id ).attr('help-text'))

            }
            this.setPositionAt(options[menuState].id)
        }

        getCurrentMenuOptions(){
                var options = $('div[name="menuOption"]:visible')
                return options
        }
}
var cursor = new Cursor($('#cursor'), 'newGame')

var sprites = []


var currentGameData = new GameData();
var currentMap = b_garden_infirmary;

var menuState = 0


var stepsToBattle = 0




setInterval(function(){
    currentGameData.timeElapsed += 20
    debug(currentGameData.debug)
}, 20)


window.onload = function () {
    Game.init()
    cursor.init()
};




$(window).on('keypress', function(evt){
    console.log(evt.which, Game.state)
    if(evt.which == 48 && Game.state == "local"){ // zero key to save only on local screen
        message("Game Saved")
        saveGame()
    }

})



function message(msg){
    var msgBox = $('#messageBox')
    msgBox.html(msg)
    msgBox.show()
    setTimeout(function(){
        msgBox.hide()
    }, 2000)



}

function newGame(){
    currentGameData = new GameData()
    console.log(currentGameData)
    return true
}

function saveGame(){
    // need to also implement save game overwrite checking
    var numSaves = window.localStorage.length
    window.localStorage.setItem("saveGame_" + parseInt(numSaves) + 1, JSON.stringify(currentGameData) )
    return true
}



function loadGame(saveslot){
    currentGameData = JSON.parse(window.localStorage.getItem("saveGame_" + saveSlot))
    return true
}




var Game = {
    init : function(){},
    state: 'start',
    local: {
            init: {},
            contexts: {},
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
    gameMenu: {
        init: {},
        position: []

    },
     mainMenu: {
        init: {},
        position: []

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



Game.init = function(){
    $('.state').hide();
    state_init('', 'mainMenu')
    init_music(gameMusic.overture)
    console.log(window.localStorage)
    if(window.localStorage.length > 0){
        $('#loadGame').show(1000)
    }
    else{
        $('#loadGame').hide()
    }

}


Game.local.run = function ( ) {
    cursor.kill()
    Game.state = 'local';
    init_music(gameMusic.balamb_garden)

    this.contexts = {}
    this.contexts.background = document.getElementById('background').getContext('2d') ;
    this.contexts.character = document.getElementById('character').getContext('2d') ;
    this.contexts.foreground = document.getElementById('foreground').getContext('2d') ;
    console.log(this.contexts)
    currentMap.contexts = this.contexts

    this.map = currentMap

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
        Loader.loadImage('tiles', this.map.tileset )
        //Loader.loadImage('character', './assets/tile_maps/characters/' + mainCharacter + '.png')

    ];
};


Game.local.init = function () {
    this.map = currentGameData.localWorldState.map
    Keyboard.listenForEvents(Keyboard._keys)
    init_music(this.map.music)
    this.map.init_map()
    console.log(this.map.tileAtlas)

    this.maxX = this.map.cols * this.map.tile_size - this.map.width;
    this.maxY = this.map.rows * this.map.tile_size - this.map.height;

    this.squall = new Sprite('squall', './assets/tile_maps/characters/squall_sprites.png',32,9,5,this.map.init)
    sprites.push(this.squall)
    this.map.sprites.forEach(function(sprite,index){
        sprite.draw()

    })
    stepsToBattle = this.map.randomBattleChance()

};







Game.local.tick = function (elapsed) {
    window.requestAnimationFrame(this.tick);

    // clear previous frame
    this.map.contexts.character.clearRect(0, 0, 640, 500);
    this.map.contexts.foreground.clearRect(0, 0, 640, 500);

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
    this.squall.isMoving = false
    var dirx = 0;
    var diry = 0;
    if (Keyboard.isDown(Keyboard.LEFT)) { dirx = -1; this.squall.walkLeft(delta) //console.log("Moving left")
}
    if (Keyboard.isDown(Keyboard.RIGHT)) { dirx = 1; this.squall.walkRight(delta) //console.log("Moving right")
}
    if (Keyboard.isDown(Keyboard.UP)) { diry = -1; this.squall.walkUp(delta) //console.log("Moving up")
}
    if (Keyboard.isDown(Keyboard.DOWN)) { diry = 1; this.squall.walkDown(delta) //console.log("Moving down")
}


    if (Keyboard.isDown(Keyboard.MENU)){
        state_init(Game.state, 'gameMenu')
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

        if(this.map.chance > 0 && currentGameData.stepsSinceLastEncounter >= stepsToBattle){
            stepsToBattle = this.map.randomBattleChance()
            currentGameData.stepsSinceLastEncounter = 0
            var monster = this.map.getMonster()
            battle_init(monster)
        }


};


Game.local.render = function () {
    // draw map background layer
    //console.log(this.map)
    this.map.drawBackground( this.tileAtlas );
    // draw game sprites
    ////////
    this.squall.draw()

    sprites.forEach(function(sprite, index){
        sprite.draw()
    })

    // draw map top layer
    this.map.drawForeground( this.tileAtlas );
    //track sprite
    //this.tracker = this.ctx.rect(this.sprites.character.x, this.sprites.character.y,32,32);
    //this.ctx.strokeStyle="red";
    //this.ctx.stroke();
};



Game.mainMenu.run = function(){
    cursor.init()
    cursor.setPositionAt('newGame')
    $(window).keydown(function(event){
        console.log(event.which)

        if(event.which == Keyboard.UP){ var dir = -1; cursor.updatePosition(dir); playSound('menu_move') }
        if(event.which == Keyboard.DOWN){ var dir = 1; cursor.updatePosition(dir); playSound('menu_move') }
        if(event.which == Keyboard.ACTION){
             if( cursor.currentOption == 'newGame'){ newGame() }

            state_init(Game.state, cursor.currentOption)
        }

            console.log(menuState)
        })

}

/*
Game.loadMenu.run = function(){
    var menuOptions = $('.menuOptions:visible')
    console.log(menuOptions)
    setCursor(menuOptions)
    $('#newGame').on('click', function(){
        playSound(soundEffects.menu.confirm)
        })
    $(window).keydown(function(event){
        console.log(event.which)
        if(event.which == Keyboard.UP){ var dir = -1; updatePosition(menuOptions, dir) }
        if(event.which == Keyboard.DOWN){ var dir = 1; updatePosition(menuOptions, dir) }
        if(event.which == Keyboard.ACTION){

            state_init(Game.state, menuOptions[menuState].id)
        }

            console.log(menuState)
        })

}
*/


Game.gameMenu.run = function(){
    cursor.init()
    cursor.setPositionAt('junction-menu')
    updateMenu()
    $(window).keydown(function(event){
        console.log(event.which)

        if(event.which == Keyboard.UP){ var dir = -1; cursor.updatePosition(dir) }
        if(event.which == Keyboard.DOWN){ var dir = 1; cursor.updatePosition(dir) }
        if(event.which == Keyboard.ACTION){
             if( cursor.currentOption == 'newGame'){ newGame() }

            state_init(Game.state, cursor.currentOption)
        }

            console.log(menuState)
        })




    //init_music(gameMusic.blue_fields)


}

function battle_init(monster){

    battle = new Battle(monster)

}


function state_init(previousState, newState){
    Game.state = newState
    if(newState != previousState ){
        $(window).off("keydown")
        menuState = 0
        console.log('State changed to ' + newState)
        $('.state').fadeOut(2000)//.delay(1000)


        if(newState == 'newGame'){

             $('#mainScreen').fadeIn(2000).delay(1000)
            Game.local.run()

        }
        else{
             $('#' + newState).fadeIn(2000).delay(1000)
            Game[Game.state].run()

        }
    }

    }


function updateMenu(){
    $('#total_play_time').html( moment(currentGameData.timeElapsed).format('HH:mm:ss') )
    $('#seed_lvl').html( moment(currentGameData.seed_lvl) )
    $('#current_gil').html( moment(currentGameData.current_gil) )
}
