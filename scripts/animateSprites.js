// animateSprites.js

// animateSprites.js

class Sprite {
 constructor(key, tileset, tilesize, num_width, num_height, position, cxt){
    this.key = key;
    this.tileset = tileset
    this.tilesize = tilesize
    this.x = position.x
    this.y = position.y
    this.frames = num_width * num_height
  }
  

 
 load(){
  return Loader.loadImage(this.key, this.tileset)
 }

 image(){
  return Loader.getImage(this.key)
  
 }
 
 create(){
  
 
 }
 
 move( dirx, diry, delta ){
    //console.log(character, delta, dirx, diry)
    //var SPEED = parseFloat(currentGameData.localSpeed);
    var SPEED = 100
    this.x += dirx * SPEED * delta;
    this.y += diry * SPEED * delta;
 
 }
 
 drawFrame( num ) {
  console.log('Drawing animation frame for sprite')
   this.cxt.drawImage(
                         this.image(), // image
                         (num - 1) * this.tilesize, // source x
                         0, // source y
                         this.tilesize, // source width
                         this.tilesize, // source height
                         this.x,  // target x
                         this.y, // target y
                         this.tilesize, // target width
                         this.tilesize // target height
                     );
 
 
 }
 
 animate(){
  //drawFrame
  //remove frame
  //draw next frame
  
 }
 
 pause(){
  console.log('Animation paused')
 }
 
 resume(){
  console.log('Animation resumed')
 }
 
 destroy(){
  console.log('Sprite destroyed')
  
 }
 
 
}