class GameData {
    constructor(){
        this.worldSpeed = 100;
        this.battleSpeed = 100;
        this.battleMode = "wait";
        this.gameStarted = new Date();
        this.timeElapsed = 0.0; // time since beginning of game
        this.localWorldState = {
            map: b_garden_infirmary,
            position: { x : 120 , y : 120 }
        };
        this.characters = {
            
            "squall" : {
                inParty: true,
                inTeam: true,
                mainCharacter: true,
                magic : { 
                },
                guardian_forces : [ ],
                weapons : { 
                        revolver : "equipped"
                    },
                limitBreaks : {
                        fatedCircle: "inactive"
                    }   
                },
            "quistis" : {
                inParty: false,
                inTeam: false,
                mainCharacter: false,
                magic : { 
                },
                guardian_forces : [ ],
                weapons : { 
                        chain_whip : "equipped"
                    },
                limitBreaks : {
                
                    }   
                },
            "zell" : {
                inParty: false,
                inTeam: false,
                mainCharacter: false,
                magic : { 
                },
                guardian_forces : [ ],
                weapons : { 
                        gloves : "equipped"
                    },
                limitBreaks : {
                      
                    }   
                }
                
            
            
        };
        this.guardian_forces = [ 
            /*
            gf 
            */  
        ];
        this.items = {
            /*
            itemID : quantity
            */
        };
        this.cards = {
            /*
            cardID : quantity
            */
        };
        this.kills = {
            /*
            monsterID : quantity
            */
        }
        
        
        
        
            
        
        
    };
    
    percentComplete() {
        
        return this.percentComplete();        
    }
    
    getMainCharacter(){
       var currentParty = this.characters
       var mainCharacter = ""
       Object.keys(this.characters).forEach(function(d, i){
            
            if(currentParty[d].mainCharacter){
                console.log(d, i)
                mainCharacter = d
            }
        })  
        return mainCharacter
    }
    percentComplete() {
        //check items
        //check magic
        //check GFs
        //check weapons
        //check main_quests
        //check side_quests
            // return percentComplete
    
    }
    
    
    
}

