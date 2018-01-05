function sprite(options){
    var that = {}
    that.x = options.x
    that.y = options.y
    that.width = 32;
    that.height = 32;
    this.cols = 16;
    this.rows = 16;
    this.tile_size = 64;
    this.tileset = './assets/tile_maps/local_maps/demo_tiles.png';
    this.layers = {
          "background":[
                      2, 2, 2, 2, 2, 2, 2, 2,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 1, 1, 1, 1, 1, 1, 1
                ],
          "midground":[
                      1, 1, 1, 1, 1, 1, 1, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 1, 1, 1, 1, 1, 1, 1
                ],
          "character":[
                      1, 1, 1, 1, 1, 1, 1, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 2, 2, 2, 2, 2, 2, 1,
                      1, 1, 1, 1, 1, 1, 1, 1
                ],
          "foreground":[
                      1, 1, 1, 1, 1, 1, 1, 1,
                      1, 1, 1, 1, 3, 1, 1, 1,
                      1, 1, 1, 1, 3, 1, 1, 1,
                      1, 1, 3, 3, 3, 1, 1, 1,
                      1, 1, 1, 1, 3, 1, 1, 1,
                      1, 1, 1, 1, 3, 1, 1, 1,
                      1, 1, 1, 1, 3, 1, 1, 1,
                      1, 1, 1, 1, 1, 1, 1, 1
                ]
    };


    that.render = function(){


    }

    that.drawSprite = function(sprite_id){
        that.context.drawImage(
            sprite_id
        )
    }



    return that

}
