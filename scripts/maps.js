function Local_Map() {
    this.location = "test";
    this.cols = 8;
    this.rows = 8;
    this.tile_size = 64;
    this.layers = {
          "background":{
              "tileset": "",
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
          "midground":{
              "tileset": "",
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
          "character":{
              "tileset" : "",
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
          "foreground":{
              "tileset" : "",
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
    
    this.drawLayer = function( layer , context) {
      //console.log("Drawing layer: " + layer + " for map: " + this.location)
      for (var c = 0; c < this.width; c++) {
             for (var r = 0; r < this.height; r++) {
                 var tile = this.getTile(layer, c, r);
                 if (tile !== 0) { // 0 => empty tile
                     this.ctx.drawImage(
                         this.tileset, // image
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
     
    this.getTile = function( layer ,col ,row ) {
       return this.layers[layer][row * this.cols + col];
     }

}




