//sprites.js
class Sprite {
 constructor(key, tileset, tilesize, num_width, num_height, position){
    this.key = key;
    this.tileset = {
        "file": "./assets/tile_maps/characters/allcharacters.png",
        "width": 12,
        "height": 8
    }
    this.tilesize = tilesize
    this.width = 32
    this.height = 32
    this.x = position.x
    this.y = position.y
    this.frames = num_width * num_height
    this.cxt = document.getElementById('character').getContext('2d')
    this.image = new Image()
    this.image.src = this.tileset.file

    this.frameIndex = 0;
    this.tickCount = 0;
    this.ticksPerFrame = 5;
    this.loop = true;
    this.animationFrames = []
    this.direction = 'down' // initialise sprite looking down the screen

    this.speed = 100 // movement speed
    this.isMoving = false // default to not moving
    this.hasCollided = false
    this.distance = 0;
    this.draw()
  }



 walkUp( delta ){
     this.isMoving = true
    //console.log('Walking Up!')
    this.animationFrames = [ 37, 38, 37, 36 ]
    this.animate()
    if( !this.hasCollided ){
        this.y -=  delta * this.speed;
        this.distance += delta * this.speed
    }
    else{
        this.y += 1
        this.hasCollided = false
    }
    this.direction = 'up'
 }
 walkDown( delta ){
     this.isMoving = true
    //console.log('Walking Down!')
    this.animationFrames = [ 1, 2, 1, 0 ]
    this.animate()
    if( !this.hasCollided ){
        this.y +=  delta * this.speed;
        this.distance += delta * this.speed
    }
    else{
        this.y -= 1
        this.hasCollided = false
    }
    this.direction = 'down'
 }
 walkRight( delta ){
     this.isMoving = true
    //console.log('Walking Right!')
    this.animationFrames = [ 25, 24, 25, 26 ]
    this.animate()
    if( !this.hasCollided ){
        this.x +=  delta * this.speed;
        this.distance += delta * this.speed
    }
    else{
        this.x -= 1
        this.hasCollided = false
    }
    this.direction = 'right'
 }
 walkLeft( delta ){
     this.isMoving = true
     //console.log('Walking Left!')
    this.animationFrames = [ 13, 12, 13, 14 ]
    this.animate()
    if( !this.hasCollided ){
        this.x -=  delta * this.speed;
        this.distance += delta * this.speed
    }
    else{
        this.x += 1
        this.hasCollided = false
    }
    this.direction = 'left'
 }

 checkCollision(){
     var canvas = document.getElementById('character')
     //check with sides of mainScreen
     if(this.hasCollided == false){
         if(this.x <= 0 || this.x >= canvas.width - this.width || this.y <= 0|| this.y >= canvas.height - this.height){
            this.hasCollided = true
            console.log('Collision detected')

        }
    }

     //check with objects
        //get list of objects in the scene, their current x, y positions and widths/heights

     //check with NPCs
        //get list of npcs in the scene, their current x, y positions and widths/heights
 }

 draw() {
   this.cxt.clearRect(this.x, this.y, this.width, this.height)
   var frame = this.animationFrames[this.frameIndex]
   console.log(frame,  Math.floor( frame/this.tileset.width)* this.height)
   this.cxt.drawImage(
                         this.image, // image
                         frame%this.tileset.width * this.width, // source x
                         Math.floor( frame/this.tileset.width) * this.height, // source y
                         this.width, // source width
                         this.height, // source height
                         this.x,  // target x
                         this.y, // target y
                         this.width, // target width
                         this.height // target height
                     );


 }

 update(tick){
        //console.log(this.animationFrames[this.frameIndex])

        if(this.isMoving == false ){
                console.log('Stopped moving')
        }
        else{
            //this.frameIndex += 1
            this.tickCount += 1;
                if (this.tickCount > this.ticksPerFrame) {
                	this.tickCount = 0;
                    // Go to the next frame
                    this.frameIndex += 1;
                }
            else if (this.frameIndex >= this.animationFrames.length-1 && this.loop){
                this.frameIndex = 0
            }
        }
        this.checkCollision()
        this.isMoving = false




}
animate(tick){
    window.requestAnimationFrame(this.animate)
    this.update(tick)


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





//var squall = new Sprite(squall, '../assets/tile_maps/characters/squall_sprites.png', 32, 8, 4, {x:0, y:0}, Game.local.contexts.foreground )
