function Local_Map() {
    this.location = "test";
    this.width = 8;
    this.height = 8;
    this.cols = 8;
    this.rows = 8;
    this.tile_size = 64;
    this.tileset = '../assets/tile_maps/local_maps/demo_tiles.png';
    this.layers = {
          background:{
              "map" : [
                      12, 12, 1, 1, 1, 1, 1, 1,
                      12, 22, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 1, 1, 1, 1, 1, 1, 1
                ]
          },
          midground:{
              "map" : [
                      1, 1, 1, 1, 1, 1, 1, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 1, 1, 1, 1, 1, 1, 1
                ]
          },
          character:{
              "map" : [
                      1, 1, 1, 1, 1, 1, 1, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 1, 1, 1, 1, 1, 1, 1
                ]
          },
          foreground:{
              "map" : [
                      1, 1, 1, 1, 1, 1, 1, 1,
                      1, 1, 1, 1, 3, 1, 1, 1,
                      1, 1, 1, 1, 3, 1, 1, 1,
                      1, 1, 3, 3, 3, 1, 1, 1,
                      1, 1, 1, 1, 3, 1, 1, 1,
                      1, 1, 1, 1, 3, 1, 1, 1,
                      1, 1, 1, 1, 3, 1, 1, 1,
                      1, 1, 1, 1, 1, 1, 1, 1
                ]
          }
    };
    
    this.drawMap = function(context) {
      this.drawLayer( this.layers.background )
      this.drawLayer( this.layers.midground )
      //this.drawLayer( this.layers.character)
      this.drawLayer( this.layers.foreground )
    }; // drawMap()
    
    this.drawLayer = function( layer , tileAtlas, context) {
     //console.log(tileAtlas)
      //console.log("Drawing layer: " + layer + " for map: " + this.location)
      for (var c = 0; c < this.width; c++) {
             for (var r = 0; r < this.height; r++) {
                 var tile = this.getTile(layer, c, r);
                 
                 if (tile !== 0) { // 0 => empty tile
                     this.ctx.drawImage(
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
     
    this.getTile = function( layer, col ,row ) {
       //console.log(this.layers[layer][row * this.cols + col])
       return this.layers[layer][row * this.cols + col];
     }

}




