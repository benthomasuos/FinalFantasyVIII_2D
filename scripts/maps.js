class Local_Map {
    constructor(){
    this.location = "test";
    this.width = 16;
    this.height = 16;
    this.cols = 16;
    this.rows = 16;
    this.tile_size = 32;
    this.music = gameMusic.default;
    this.tileset = './assets/tile_maps/local_maps/demo_tiles.png';
    this.contexts = {};
    this.layers = {};
    this.randomBattleChance = 0.1 ; // A battle every 10 steps exactly
    this.monsters = {
        // monsterID : percentage likelihood_of_battle
        
        }
    };
    
    /*
    drawMap(context) {
          this.drawLayer( this.layers.background )
          this.drawLayer( this.layers.midground )
          //this.drawLayer( this.layers.character)
          this.drawLayer( this.layers.foreground )
    }; // drawMap()
    */
    
    drawBackground( tileAtlas ) {
      //console.log(layer , tileAtlas, context)
      //console.log("Drawing layer: " + layer + " for map: " + this.location)
      for (var c = 0; c < this.width; c++) {
             for (var r = 0; r < this.height; r++) {
                 var tile = this.getTile('background', c, r);
                 if (tile !== 0) { // 0 => empty tile
                     this.contexts.background.drawImage(
                         tileAtlas, // image
                         (tile - 1) * this.tile_size, // source x
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
                 if (tile !== 0) { // 0 => empty tile
                     this.contexts.foreground.drawImage(
                         tileAtlas, // image
                         (tile - 1) * this.tile_size, // source x
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
