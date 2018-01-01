
var currentGame = new Game()

currentGame.currentMap = 'b_garden_infirmary'
currentGame.currentQuest = new Quest()

console.log(currentGame)




function saveGame(saveSlot){
    // need to also implement save game overwrite checking
    localStorage.setItem("saveGame_" + saveSlot, currentGame) 
    return true
}

function loadGame(saveSlot){

    currentGame = localStorage.getItem("saveGame_" + saveSlot, currentGame) 
    return true
    
}
    

