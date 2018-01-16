//sprites.js
class Sprite {
 constructor(key, tileset, tilesize, num_width, num_height, position){
    this.key = key;
    this.tileset = tileset
    this.tilesize = tilesize
    this.width = 30
    this.height = 50
    this.x = position.x
    this.y = position.y
    this.frames = num_width * num_height
    this.cxt = document.getElementById('character').getContext('2d')
    this.image = new Image()
    this.image.src = this.tileset

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
    this.animationFrames = [ 1, 0 ]
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
    this.animationFrames = [ 1, 0 ]
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
    this.animationFrames = [ 0, 1, 2, 1 ]
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
    this.animationFrames = [ 5, 4, 3, 4 ]
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
   var frame = this.animationFrames[this.frameIndex]
   //console.log(frame)
   this.cxt.drawImage(
                         this.image, // image
                         frame * this.tilesize, // source x
                         0, // source y
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
