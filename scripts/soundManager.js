//soundManager.js


class Sound{
    constructor(src) {
        this.name = src.split(".")[0]
        this.src = src
        this.sound = undefined
    }

    load(){
        console.log("Playing sound " + this.name )
        this.sound = document.getElementById('soundEffect')
        this.sound.src = this.src

    }

    play(){
        if(this.sound){
            console.log("Playing sound " + this.name )
            this.sound.play()
        }
        else{
            this.load()
            this.sound.play()
        }

    }

    pause(){
        console.log("Playing sound " + this.name )
        this.sound.pause()
    }

    destory(){
        this.sound = undefined
    }

}





var soundEffect = {
    "menu_move":  "./assets/sounds/menu_move.mp3",
    "menu_error":  "./assets/sounds/menu_error.mp3",
    "step_1":  "./assets/sounds/step_1.mp3",
    "step_2":  "./assets/sounds/step_2.mp3"

    }
