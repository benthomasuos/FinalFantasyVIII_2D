class Local_Map {
    constructor(){
    this.location = "test";
    this.width = 25;
    this.height = 18;
    this.cols = 20;
    this.rows = 16;
    this.tile_size = 32;
    this.music = gameMusic.default;
    this.tileset = './assets/tile_maps/local_maps/demo_tiles.png';
    this.contexts = {};
    this.layers = {};
    this.init = { x: 20, y: 20 };
    this.sprites= []
    this.chance = 500 // minimum number of steps taken before a random encounter will occur
    this.exits = {
        "up" : [{ "map": "demo", "tiles" : [] }],
        "right" : [{ "map": "demo", "tiles" : [] }],
        "down" : [{ "map": "demo", "tiles" : [] }],
        "left" : [{ "map": "demo", "tiles" : [] }]
    };
    this.monsters = [
        // {monsterID , fraction likelihood_of_battle (from 0 to 1)}
        {"id":"bitebug", "weight":0.5},
        {"id":"gayla", "weight":0.5}
    ]
    };


    getMonster(){
        // weighted selection of monster based on chance of finding it from the list in the area
        var monsterList = this.monsters
        var monster = monsterList[Math.floor(Math.random() * monsterList.length)]
        // equally weighted probablility of encountering each monster in the list

        console.log("Encountered a monster : " + monster.id)
        return monster.id
    }


    randomBattleChance(){
        // add on a random extra number of steps to the this.chance number of steps before a random encounter
        var steps = Math.floor(this.chance + (this.chance * Math.random()))
        return steps
    }


    drawBackground( tileAtlas ) {
      //console.log(layer , tileAtlas, context)
      //console.log("Drawing layer: " + layer + " for map: " + this.location)
      for (var c = 0; c < this.width; c++) {
             for (var r = 0; r < this.height; r++) {
                 var tile = this.getTile('background', c, r);
                 if (tile >= 0) { // -1 => empty tile
                     this.contexts.background.drawImage(
                         tileAtlas, // image
                         tile * this.tile_size, // source x
                         0, // source y
                         this.tile_size, // source width
                         this.tile_size, // source height
                         c * this.tile_size,  // target x
                         r * this.tile_size, // target y
                         this.tile_size, // target width
                         this.tile_size // target height
                     );
                 }
             }
      }
    };

    drawForeground( tileAtlas ) {
      for (var c = 0; c < this.width; c++) {
             for (var r = 0; r < this.height; r++) {
                 var tile = this.getTile('foreground', c, r);
                 if (tile >= 0) { // -1 => empty tile
                     this.contexts.foreground.drawImage(
                         tileAtlas, // image
                         tile * this.tile_size, // source x
                         0, // source y
                         this.tile_size, // source width
                         this.tile_size, // source height
                         c * this.tile_size,  // target x
                         r * this.tile_size, // target y
                         this.tile_size, // target width
                         this.tile_size // target height
                     );
                 }
             }
      }
    };



    getTile( layer, col ,row ) {
       return this.layers[layer][row * this.cols + col];
     }

}
