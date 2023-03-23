const classModifiers=
{
    "Lindwurm": {hp: 5, str: 0, mag: 25, dex: 5, spd: 0, def: 15, res:25 , lck:0 , bld: 0},
    "Dragon Child": {hp: 10, str: 10, mag:0, dex: 10, spd: 15, def: 10, res: 10, lck: 5,bld: 5},
    "Divine Dragon":{hp:10, str: 10, mag:0, dex: 10, spd: 15, def: 15, res: 15, lck: 10,bld: 5},
    "Fell Child":{hp:10, str: 10, mag:25, dex: 10, spd: 5, def: 10, res: 25, lck: 0,bld: 0 },
    "Noble":{hp:15, str: 15, mag:0, dex: 5, spd: 5, def: 20, res: 5, lck: 15,bld: 0 },
    "Avenir":{hp:15, str: 15, mag:0, dex: 5, spd: 10, def: 25, res: 5, lck: 20,bld: 5 },
    "Noble":{hp:0, str: 5,mag: 10, dex:5, spd: 5, def: 5, res: 10, lck: 20, bld: 0 },
    "Vidame":{hp:5, str: 10, mag:15, dex: 5, spd: 5, def: 5, res: 15, lck: 20,bld: 0 },
    "Lord":{hp:15, str: 20, mag:0, dex: 10, spd: 10, def: 10, res: 0, lck: 5,bld: 0 },
    "Successeur":{hp:15, str: 20, mag:0, dex: 10, spd: 15, def: 15, res: 0, lck: 10,bld: 5 },
    "Lord":{hp: 10, str: 10, mag:0, dex: 25, spd: 10, def: 10, res: 0, lck: 5,bld: 0 },
    "Tireur d'elite":{hp:10, str: 10, mag:0, dex: 30, spd: 10, def: 15, res: 5, lck: 5,bld: 0 },
    "Wing Tamer":{hp:0, str: 0, mag:15, dex: 10, spd: 10, def: 0, res: 25, lck: 10,bld: 0 },
    "Sleipnir Rider":{hp:0, str: 0, mag:20, dex: 15, spd: 15, def: 0, res: 30, lck: 15,bld: 0 },
    "Sentinel":{hp:10, str: 10, mag:0, dex: 10, spd: 5, def: 20, res: 0, lck: 5,bld: 0 },
    "Picket":{hp:10, str: 15, mag:0, dex: 10, spd: 10, def: 20, res: 5, lck: 5,bld: 5 },
    "Sentinel":{hp: 10, str: 5, mag:0, dex: 15, spd: 15, def: 5, res: 15, lck: 0,bld: 0 },
    "Cupido":{hp:10, str: 5, mag:5, dex: 20, spd: 20, def: 5, res: 20, lck: 0,bld: 0 },
    "Melusine":{hp:10, str: 10, mag:10, dex: 10, spd: 15, def: 10, res: 10, lck: 0,bld: 5 },
    "Sword Fighter":{hp: 10, str: 10, mag:0, dex: 15, spd: 20, def: 0, res: 15, lck: 10,bld: 0 },
    "Swordmaster":{hp:10,str: 10, mag:0, dex: 15, spd: 20, def: 0, res: 15, lck: 15,bld: 0 },
    "Hero":{hp:15, str: 15, mag:0, dex: 10, spd: 15, def: 0, res: 10, lck: 15,bld: 0 },
    "Lance Fighter":{hp:10, str: 10, mag:5, dex: 20, spd: 5, def: 10, res: 5, lck: 0,bld: 0 },
    "Halberdier":{hp:10, str: 15, mag:5, dex: 20, spd: 10, def: 15, res: 5, lck: 5,bld: 0 },
    "Royal Knight":{hp:5, str: 10, mag:15, dex: 15, spd: 15, def: 5, res: 20, lck: 10,bld: 0 },
    "Axe Fighter":{hp:25, str: 20, mag:0, dex: 5, spd: 10, def: 5, res: 0, lck: 0,bld: 5 },
    "Berserker":{hp:30, str: 30, mag:0, dex: 5, spd: 10, def: 5, res: 0, lck: 0,bld: 10 },
    "Warrior":{hp:25, str: 20, mag:0, dex: 10, spd: 15, def: 10, res: 5, lck: 0,bld: 5 },
    "Archer":{hp: 10, str: 15, mag:0, dex: 25, spd: 10, def: 5,res:0 , lck: 5,bld: 0 },
    "Sniper":{hp:15, str: 15, mag:0, dex: 30, spd: 10, def: 10, res: 0, lck: 10,bld: 0 },
    "Bow Knight":{hp:10, str: 10, mag:0, dex: 20, spd: 20, def: 0, res: 15, lck: 15,bld: 0 },
    "Sword Armor":{hp:20, str: 15, mag:0, dex: 10, spd: 0, def: 30, res: 0, lck: 0,bld: 5 },
    "Lance Armor":{hp:20, str: 15, mag:0, dex: 10, spd: 0, def: 30, res: 0, lck: 0,bld: 5 },
    "Axe Armor":{hp:20, str: 15, mag:0, dex: 10, spd: 0, def: 30, res: 0, lck: 0,bld: 5 },
    "General":{hp:25, str: 20, mag:0, dex: 10, spd: 0, def: 30, res: 0, lck: 0,bld: 10 },
    "Great Knight":{hp:20, str: 15, mag:0, dex: 15, spd: 0, def: 25, res: 10, lck: 5,bld: 5 },
    "Sword Cavalier":{hp:10, str: 10, mag:0, dex: 10, spd: 10, def: 10, res: 10, lck: 10,bld: 0 },
    "Lance Cavalier":{hp:10, str: 10, mag:0, dex: 10, spd: 10, def: 10, res: 10, lck: 10,bld: 0 },
    "Axe Cavalier":{hp:10, str: 10, mag:0, dex: 10, spd: 10, def: 10, res: 10, lck: 10,bld: 0 },
    "Paladin":{hp:15, str: 15, mag:0, dex: 10, spd: 15, def: 15, res: 15, lck: 10,bld: 0 },
    "Wolf Knight":{hp:10, str: 5, mag:0, dex: 15, spd: 20, def: 5, res: 20, lck: 20,bld: 0 },
    "Mage":{hp:0, str: 0, mag:25, dex: 5, spd: 0, def: 0, res: 25, lck: 5,bld: 0 },
    "Sage":{hp:0, str: 0, mag:30, dex: 5, spd: 0, def: 0, res: 30, lck: 15,bld: 0 },
    "Mage knight":{hp:5, str: 5, mag:25, dex: 0, spd: 5, def: 10, res: 25, lck: 5,bld: 0 },
    "Martial Monk":{hp:0, str: 10, mag:25, dex: 0, spd: 0, def: 10, res: 20, lck: 10,bld: 0 },
    "Martial Master":{hp:5, str: 10, mag:20, dex: 0, spd: 0, def: 15, res: 25, lck: 10,bld: 0 },
    "High Priest":{hp:0, str: 0, mag:25, dex: 0, spd: 5, def: 0, res: 30, lck: 30,bld: 0 },
    "Sword Flier":{hp:5, str: 10, mag:5, dex: 10, spd: 0, def: 10, res: 10, lck: 0, bld: 0 },
    "Lance Flier":{hp:5, str: 10, mag:5, dex: 10, spd: 10, def: 0, res: 10, lck: 10,bld: 0 },
    "Axe Flier":{hp:5, str: 10, mag:5, dex: 10, spd: 10, def: 0, res: 10, lck: 10,bld: 0 },
    "Griffin Knight":{hp:0, str: 10, mag:15, dex: 15, spd: 20, def: 0, res: 15, lck: 15,bld: 0 },
    "Wyvern Knight":{hp:20, str: 20, mag:0, dex: 10, spd: 5, def: 20, res: 5, lck: 5,bld: 5 },
    "Theif":{hp:5, str: 10, mag:0, dex: 5, spd: 15, def: 10, res: 20, lck: 20,bld: 0 },
    "Dancer":{hp:5, str: 10, mag:0, dex: 5, spd: 15, def: 10, res: 20, lck: 20,bld: 0 },
    "Enchanter":{hp:5, str: 15, mag:15, dex: 15, spd: 10, def: 5, res: 5, lck: 15,bld: 5 }
};

export { classModifiers } 