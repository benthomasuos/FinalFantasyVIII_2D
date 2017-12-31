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
