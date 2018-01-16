class GameData {
    constructor(){
        this.debug = true;
        this.worldSpeed = 256;
        this.localSpeed = 256;
        this.battleSpeed = 256;
        this.battleMode = "wait";
        this.gameStarted = moment().format('MMMM Do YYYY, h:mm:ss a');
        this.timeElapsed = 0.0; // time since beginning of game
        this.currentQuest = new Quest;
        this.localWorldState = {
                map: b_garden_infirmary,
                char_position: { x : 120 , y : 120 }
            };
        this.worldState = {
                char_position: { x : 120 , y : 120 }
            };
        this.characters = {

            "squall" : {
                inParty: true,
                inTeam: true,
                mainCharacter: true,
                sprite_map: "./assets/tile_maps/characters/squall_sprites.png",
                status: "none",
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
                sprite_map: "./assets/tile_maps/characters/quistis_sprites.png",
                status: "none",
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
                sprite_map: "./assets/tile_maps/characters/zell_sprites.png",
                status: "none",
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
