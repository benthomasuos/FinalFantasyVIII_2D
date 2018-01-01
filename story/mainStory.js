class Quest {
    constructor(){
        this.id = null;
        this.questName = null;
        this.started = false;
        this.completed = false;
        this.before = null;
        this.after = null;
        this.subtasks = [
               // "defaultTask" :{ "started": false, "completed" : false }
            ],
        this.requirements = {
            "items" : [
                // { "itemID" : numberRequired }
                ],
            "npc_dialogue" : [
                // { "npcID" : { "state" : Quest.id, "completed": true/false     } }
                ],
            "kills": [
                // { "monsterID" : number }    
                ]
        };
        
    };
    
    //Getters
     get isCompleted() {
        if( checkItems() && checkNPCs() && checkKills() ){
            this.completed = true
            return true;
        }
        else {
            this.completed = flase
            return false;
        }
    };
    
    
    // Methods
    checkItems(){
        var requirementsMet = false;
        var requiredItems = this.requirements.items; // Get list of required items for this quest
        var requiredNum = this.requirements.items.length; // number of items collections that need to be collected
        var completedNum = 0;
        requiredItems.forEach(function(d, i){
            //compare each item in the requirement list and see if the global items contain the correct number
            if(globalItems[d] == i){
               completedNum += 1
            }
        })
        
        if( requiredNum == completedNum ){
            // requirements for item collection have been met
            return true;
            
        }
        else {
            return false
            }
        
    };
    
    checkNPCs(){
        var requirementsMet = false;
        var requiredItems = this.requirements.items; // Get list of required items for this quest
        var requiredNum = this.requirements.items.length; // number of items collections that need to be collected
        var completedNum = 0;
        requiredItems.forEach(function(d, i){
            //compare each item in the requirement list and see if the global items contain the correct number
            if(globalItems[d] == i){
               completedNum += 1
            }
        })
        
        if( requiredNum == completedNum ){
            // requirements for item collection have been met
            return true;
            
        }
        else {
            return false
            }
        
    };
    
    checkKills(){
        var requirementsMet = false;
        var requiredItems = this.requirements.kills; // Get list of required items for this quest
        var requiredNum = this.requirements.kills.length; // number of items collections that need to be collected
        var completedNum = 0;
        requiredItems.forEach(function(d, i){
            //compare each item in the requirement list and see if the global items contain the correct number
            if(globalKills[d] == i){
               completedNum += 1
            }
        })
        
        if( requiredNum == completedNum ){
            // requirements for item collection have been met
            return true;
            
        }
        else {
            return false
            }
        
    };
  
    
}

