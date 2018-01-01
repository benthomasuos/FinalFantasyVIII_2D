console.log(b_garden_infirmary)
drawMap(b_garden_infirmary)


function drawMap(thisMap){
  drawLayer(thisMap, 'background')
  drawLayer(thisMap, 'midground')
  //drawLayer(thisMap, 'character')
  drawLayer(thisMap, 'foreground')

}


function drawLayer(map, layer){
  console.log("Drawing layer: " + layer + " for map: " + map.location)
  for (var c = 0; c < map.cols; c++) {
         for (var r = 0; r < map.rows; r++) {
             var tile = map.getTile(layer, c, r);
             if (tile !== 0) { // 0 => empty tile
                 this.ctx.drawImage(
                     map.layer.tileset, // image
                     (tile - 1) * map.tsize, // source x
                     0, // source y
                     map.tsize, // source width
                     map.tsize, // source height
                     c * map.tsize,  // target x
                     r * map.tsize, // target y
                     map.tsize, // target width
                     map.tsize // target height
                 );
             }
         }
 }


}

class Local_Map(){
    constructor(){
    this.location = "Balamb Garden - Infirmary";
    this.width = 8;
    this.height = 8;
    this.map_size = 64;
    this.layers = {
          "background":{
              "tileset": "../tilemaps/local_maps/Castle.png",
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
              "tileset": "../tilemaps/local_maps/b_garden_objects.png",
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
              "tileset" : "../tilemaps/sprites/npc.png",
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
              "tileset" : "../tilemaps/local_maps/b_garden_objects.png",
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
    }




}

