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
        this.items = items;
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

var items = [
    { "Potion": { "help" : "Restores 200 HP", "quantity" : 10, "type": "recovery" }},
    { "Potion+" : { "help" : "Restores 400 HP", "quantity" : 10, "type": "recovery" }},
    { "Hi-Potion": { "help" : "Restores 1,000 HP", "quantity" : 10, "type": "recovery" }},
    { "Hi-Potion+" :	{"help" : "Restores 2,000 HP", "quantity" : 10, "type": "recovery" }},
    { "X-Potion" :	{"help" : "Fully restores HP", "quantity" : 10, "type": "recovery" }},
    { "Mega-Potion" :	{"help" : "Restores 1,000 HP to the entire party", "quantity" : 10, "type": "recovery" }},
    { "Elixir" :	{"help" : "Fully restores HP", "quantity" : 10, "type": "recovery" }},
    { "Megalixir" :	{"help" : "Fully restores HP and status to entire party", "quantity" : 10, "type": "recovery" }}
]
    /*
    Phoenix Down	Revives a fallen member	50	MED LV UP	Mega-Phoenix
    Mega-Phoenix	Revives all fellen members	3	TOOL-RF	Phoenix Pinion

    Status Items
    Antidote	Cures Poison	1	ST MAG-RF	Bio
    Soft	Cures Petrification	1	ST MAG-RF	3 Break
    Eye Drops	Cures Blindness	1	ST MAG-RF	Blind
    Echo Screen	Cures Silence	1	ST MAG-RF	2 Silence
    Holy Water	Cures Zombie and Curse status	1	L MAG-RF	2 Zombie
    Remedy	Cures abnormal status effects	10
    Remedy+	Cures abnormal status and magical effects	10	MED LV UP	Elixir

    Battle Items
    Hero Trial	May make a character invisible	10	MED LV UP	Hero
    Hero	Makes a character invisible	10	MED LV UP	Holy War-Trial
    Holy War-Trial	May make party invisible	10	MED LV UP	Holy War
    Holy War	Makes party invisible	5	GFAB MED-RF	Knight's Code
    Shell Stone	Casts Shell	1	SUPT MAG-RF	Shell
    Protect Stone	Casts Protect	1	SUPT MAG-RF	Protect
    Aura Stone	Casts Aura	1	SUPT MAG-RF	Aura
    Death Stone	Casts Death	1	L MAG-RF	Death
    Holy Stone	Casts Holy	1	L MAG-RF	Holy
    Flare Stone	Casts Flare	1	F MAG-RF	Flare
    Meteor Stone	Casts Meteor	1	FORBID MAG-RF	Meteor
    Ultima Stone	CASTS ULTIMA	1	FORBID MAG-RF	Ultima
    Gyshal Greens	Summons Boko GF	-	-	-
    Phoenix Pinion	Summons Phoenix GF	20

    Housing Items
    Tent	Fully restores everyone's HP and status	4
    Pet House	Fully restores all GF's HP	1	GF RECOV MED-RF	2 G-Returner
    Cottage	Restores both party and GF's HP and status	2

    GF Recovery Items
    G-Potion	Restores 200 HP to GF	-	-	-
    G-Hi-Potion	Restores 1,000 HP to GF	-	-	-
    G-Mega-Potion	Restores 1,000 HP to all GF	-	-	-
    G-Returner	Revives fallen GF	-	-	-
    Rename Card	Change GF'S name	-	-	-
    GF Ability Items
    Amnesia Greens	Removes a GF's ability	-	-	-
    HP-J Scroll	Teaches the HP-J ability	10	GFAB MED-RF	Giant's Ring
    Str-J Scroll	Teaches the Str-J ability	10	GFAB MED-RF	Power Wrist
    Vit-J Scroll	Teaches the VIT-J ability	10	GFAB MED-RF	Orihalcon
    Mag-J Scroll	Teaches the MAG-J ability	10	GFAB MED-RF	Force Armlet
    Spr-J Scroll	Teaches the SPR-J ability	10	GFAB MED-RF	Hypnocrown
    Spd-J Scroll	TEACHES SPD-J ABILITY	10	GFAB MED-RF	Jet Engine
    Luck-J Scroll	Teaches the LUCK-J ability	1	FORBID MED-RF	Luck Up
    Aegis Amulet	Teaches the EVA-J ability	2
    Elem Atk	Teaches the ELEM-ATK-J ability	1	FORBID MED-RF	4 Elixir
    Elem Guard	Teaches the ELEM-DEFx4 ability	1	FORBID MED-RF	4 Elixir
    Status Atk	Teaches the ST-Atk-J	1	FORBID MED-RF	4 Elixir
    Status Guard	Teaches the ST-DEFx4 ability	1	FORBID MED-RF	4 Elixir
    Rosetta Stone	Teaches the Abilityx4	1	TOOL-RF	Shaman Stone
    Magic Scroll	Teaches the Magic ability	1	TOOL-RF	10 Wizard Stones
    GF Scroll	Teaches the GF Ability	1	TOOL-RF	10 Wizard Stones
    Draw Scroll	Teaches the Draw ability	1	TOOL-RF	10 Wizard Stones
    Item Scroll	Teaches the Item ability	1	TOOL-RF	10 Wizard Stones
    Gambler Spirit	TEaches the Card ability	1	TOOL-RF	10 Wizard Stones
    Healing Ring	Teaches the Recover ability	1	RECOV MED-RF
    Phoenix Spirit	Teaches the Revive ability	1	RECOV MED-RF
    Med Kit	Teaches the Treatment ability	1	ST MED-RF
    Bomb Spirit	Teaches the Kamakazi ability	1	F MAG-RF	100 Firaga
    Hungry Cookpot	Teaches the Devour ability	1	TOOL-RF	Shaman Stone
    Mog's Amulet	Teaches the Mini Mog ability	1	TOOL-RF	Shaman Stone
    Steel Pipe	Teaches the SUMMAG+10% ability	1
    Star Fragment	Teaches the SUMMAG+20% ability	1
    FORBID MAG-RF	2 Meteor Stone
    Energy Crystal	Teaches the SUMMAG+30% ability	1
    Samantha Soul	Teaches the SUMMAG+40% ability	20
    1	GFAB MED-RF
    TIME MAG-RF	Elem Atk
    60 Triple
    Healing Mail	Teaches the GFHP+10% ability	1
    1
    1	RECOV MED-RF
    GF RECOV MED-RF
    L MAG-RF	6 Hi-Potion
    Pet House
    20 Curaga
    Silver mail	Teaches the GFHP+20% ability	1
    5	GF RECOV MED-RF
    GFAB MED-RF	2 Pet House
    Gold Armor
    Gold Armor	Teaches the GFHP+30% ability	1
    5	GF RECOV MED-RF
    GFAB MED-RF	4 Pet Houses
    Diamond Armor
    Diamond Armor	Teaches the GFHP+40% ability	1
    1
    5	TOOL-RF
    GF RECOV MED-RF
    GFAB MED-RF	50 Cottages
    16 Pet Houses
    Elem Guard
    Regen Ring	Teaches the HP+20% ability	1
    1
    1
    1	RECOV MED-RF
    TOOL-RF
    GF RECOV MED-RF
    L MAG-RF	8 Phoenix Downs
    5 Tents
    6 G-Returners
    20 Full-Life
    Giant's Ring	Teaches the HP+40% ability	10
    1	GFAB MED-RF
    SUPT MAG-RF	Gaea's Ring
    60 Protect
    Gaea's Ring	Teaches the HP+80% ability	1	FORBID MED-RF	HP Up
    Strength Love	Teaches the STR+20% ability	1	TOOL-RF	2 Aura Stone
    Power Wrist	Teaches the STR+40% ability	1
    10	TOOL-RF
    GFAB MED-RF	10 Aura Stone
    Hyper Wrist
    Hyper Wrist	Teaches the STR+60% ability	10	FORBID MAG-RF	Str Up
    Turtle Shell	Teaches the VIT+20% ability	1
    1	TOOL-RF
    SUPT MAG-RF	10 Protect Stone
    30 Protect
    Orihalcon	Teaches the VIT+40% ability	1
    10	TOOL-RF
    GFAB MED-RF	30 Protect Stone
    Adamantine
    Adamantine	Teaches the VIT+60% ability	5
    20	FORBID MED
    GFAB MED-RF	Vit Up
    Steel Curtain
    Rune Armlet	Teaches the SPR+20% ability	1
    1	TOOL-RF
    SUPT MAG-RF	10 Shell Stone
    40 Shell
    Force Armlet	Teaches the SPR+40% ability	1
    10	TOOL-RF
    GFAB MED-RF	30 Shell Stone
    Magic Armlet
    Magic Armlet	Teaches the SPR+60% ability	10
    20	FORBID MED-RF
    GFAB MED-RF	Spr Up
    Moon Curtain
    Circlet	Teaches the MAG+20% ability	1	TOOL-RF	2 Aura Stone
    Hypno Crown	Teaches the MAG+40% ability	1
    10	TOOL-RF
    GFAB MED-RF	10 Aura Stone
    Royal Crown
    Royal Crown	Teaches the MAG+60% ability	10
    20	FORBID MED-RF
    GFAB MED-RF	Mag Up
    Status Atk
    Jet Engine	Teaches the SPD+20% ability	50
    10	FORBID MED-RF
    GFAB MED-RF	Spd Up
    Rocket Engine
    Rocket Engine	Teaches the SPD+40% ability	5
    1	FORBID MED-RF
    TIME MAG-RF	Spd Up
    50 Triple
    Moon Curtain	Teaches the Auto-Shell ability	1	SUPT MAG-RF	100 Shell
    Steel Curtain	Teaches the Auto-Protect ability	1	SUPT MAG-RF	100 Protect
    Glow Curtain	Teaches the Auto-Reflect ability	2
    1	GFAB MED-RF
    SUPT MAG-RF	Monk's Code
    100 Reflect
    Accelerator	Teaches the Auto-Haste ability	1	TIME MAG-RF	100 Haste
    Monk's Code	Teaches the Counter ability	1	FORBID MED-RF	Str Up
    Knight's Code	Teaches the Cover ability	1	FORBID MED-RF	Vit Up
    Doc's Code	Teaches the Med Data ability	1	FORBID MED-RF	Megalixir
    Hundred Needles	Teaches the Return Damage ability	1	FORBID MED-RF	Spd Up
    Three Stars	Teaches the EXPENDx3 ability	1	TIME MAG-RF	100 Triples
    Ribbon	Teaches the Ribbon ability	1	GFAB MED-RF	Status Guard
    Ammo Items
    Normal Ammo	Regular Ammo	1	AMMO-RF	Fast Ammo
    Shotgun Ammo	Ammo that hits all enemies	1	AMMO-RF	2 Fast Ammo
    Dark Ammo	Status changing ammo	-	-	-
    Fire Ammo	Fire-elemental ammo	-	-	-
    Demolition Ammo	Ammo 3x more powerful than normal ammo	-	-	-
    Fast Ammo	Rapid fire ammo	-	-	-
    AP Ammo	Armor-piercing ammo	-	-	-
    Pulse Ammo	Devastating Ammo	5	FORBID MAG-RF	Ultima
    Tool Items
    M-Stone Piece	Stone with little magic power	1
    Magic Stone	Stone with magic power	1
    Wizard Stone	Stone with powerful magic	1
    Ochu Tentacle	Strong tentacle	1
    Healing Water	Water with life	1
    Cockatrice Pinion	Feather with the power of stone	1
    Zombie powder	Powder with Zombie affect	1	ST MED-RF
    Lightweight	Makes you light on your feet	100
    Sharp Spike	Long, sharp claw	1	AMMO-RF	10 AP Ammo
    Screw	Used in remodeling weapons	1	AMMO-RF	8 Normal Ammo
    Saw Blade	Serrated blade	1
    Mesmerize Blade	Long, sharp blade	1
    Vampire fang	Fand with vampire attack	1	SUPT MAG-RF	20 Drain
    Fury Fragment	Stone containing morale	1
    Betrayal Sword	Sword that betray's allies	1
    Sleep Powder	Causes one to sleep	1
    Life Ring	Ring with life force	1
    Dragon Fang	Dragon's tooth with recovery elements	1

    Blue Magic items
    Spider Web	Teaches Blue Magic: Ultra Wave	1	TIME MAG-RF	20 Slow
    Coral Fragment	Teaches Blue Magic: Electrocute	1	T MAG-RF	20 Thundara
    Curse Spike	Teaches Blue Magic: LV? Death	1
    Black Hole	Teaches Blue Magic: Degenerator	1	TIME MAG-RF	30 Demi
    Water Crystal	Teaches Blue Magic: Aqua Breath	1	I MAG-RF	50 Water
    Missile	Teaches Blue Magic: Micro Missile	1	AMMO-RF	20 Demoltion Ammo
    Mystery Fluid	Teaches Blue Magic: Acid	1	ST MAG-RF	10 Meltdown
    Running Fire	Teaches Blue Magic: Gatling Gun	1	AMMO-RF	40 Demolition Ammo
    Inferno Fang	Teaches Blue Magic: Fire breath	1
    Whisper	Teaches Blue Magic: White Wind	1
    Laser Cannon	Teaches Blue Magic: Homing Laser	1	AMMO-RF	5 Pulse Ammo
    Barrier	Teaches Blue Magic: Mighty Guard	50
    Power Generator	Teaches Blue Magic: Ray Bomb	1
    Dark Matter	Teaches Blue Magic: Shockwave Pulsar	1

    Compatibility Items
    Bomb Fragment	Stone with fire element	1
    100
    1	AMMO-RF
    GFAB MED-RF
    F MAG-RF	20 Fire Ammo
    Bomb Spirit
    20 Firaga
    Red Fang	Dragon's fang imbued with fire	1
    1	AMMO-RF
    F MAG-RF	40 Fire Ammo
    20 Firaga
    Arctic Wind	Contains ice elemental wind	1	I MAG-RF	20 Blizzara
    North Wind	Contains strong ice elemental wind	1	I MAG-RF	20 Blizzaga
    Dynamo Stone	Stone with thunder element	1	T MAG-RF	20 Thundaga
    Shear Feather	Bird's feather flying on the wind	1	T MAG-RF	20 Aero
    Venom Fang	Poisonous fang	1
    1
    1	ST MED-RF
    AMMO-RF
    ST MAG-RF	10 Antidote
    20 Dark Ammo
    20 Bio
    Steel Orb	Orb with gravitational power	1	TIME MAG-RF	15 Demi
    Moon Stone	Holy moon stone with monsters inside	1
    1	TOOL-RF
    FORBID MAG-RF	2 Holy Stone
    20 Holy
    Dino Bone	Large dinosaur bone	1	TIME MAG-RF	20 Quakes
    Windmill	Windmill containing wind energy	1	T MAG-RF	20 Tornado
    Dragon Skin	Durable dragon skin	100
    1	GFAB MED-RF
    SUPT MAG-RF	Glow Curtain
    20 Reflect
    Fish Fin	Fastitocalon's fin	1	I MAG-RF	20 Water
    Dragon Fin	Very hard dragon scale	1	TIME MAG-RF	20 Double
    Silence Powder	Powder containing silence	1
    1	ST MED-RF
    ST MAG-RF	3 Echo Screens
    20 Silence
    Poison Powder	Powder Containing Poison	1
    1	ST MED-RF
    AMMO-RF	3 Antidote
    10 Dark Ammo
    Dead Spirit	Contains Death	1	TOOL-RF
    L MAG-RF	2 Death Stones
    20 Death
    Chef's Knife	Tonberry's Knife	1
    1	AMMO-RF
    L MAG-RF	20 AP Ammo
    30 Death
    Cactus thorn	Cactuar's Thorn	1
    100	AMMO-RF
    GFAB MED-RF	40 Demolition Ammo
    Hundred Needles
    Shaman Stone	Stone with mystical power	1
    10
    1	TOOL-RF
    FORBID MED-RF*
    GFAB MED-RF	LuvluvG
    Hero Trial
    Rosetta Stone
    *Indicates Doomtrain needs to be at LV 100, to refine 10 Shaman Stones into 1 Hero Trial
    Power-Up Items
    HP Up	Raises HP by 10	2	GFAB MED-RF	HP-J Scroll
    Str Up	Raises strength by 1	2	GFAB MED-RF	Str-J Scroll
    Vit Up	Raises vitality by 1	2	GFAB MED-RF	Vit-J Scroll
    Mag Up	Raises magic by 1	2	GFAB MED-RF	Mag-J Scroll
    Spr Up	Raises spirit by 1	2	GFAB MED-RF	Spr-J Scroll
    Spd Up	Raises speed by 1	2	GFAB MED-RF	Spd-J Scroll
    Luck Up	Raises luck by 1	2	GFAB MED-RF	Luck-J Scroll
    LuvluvG	Raises all GF compatibility by 20	-	-	-
    Misc./Event Items
    Fuel	Fuel for rental car	1	AMMO-RF	10 Fire Ammo
    Girl Next Door	A naughty magazine	-	-	-
    Sorceress' Letter	Edea's introduction letter	-	-	-
    Chocobo's Tag	Changes Chicobo's name	-	-	-
    Pet Nametag	Changes Angelo's name	-	-	-
    Solomon Ring	Summons Doomtrain	-	-	-
    Magical Lamp	Summons Diablos

}
*/

var magic = {


}

var guardian_forces = {


}

var monsters = {


}
