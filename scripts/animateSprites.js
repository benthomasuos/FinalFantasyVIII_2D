// animateSprites.js

var animate = function (tileset){
    
    this.tileset = tileset;
    this.cols = 10;
    this.rows = 4;
    
    this.drawFrame = function( x, y, tileAtlas, ) {
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