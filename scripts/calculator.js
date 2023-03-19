"use-strict"

//create character class 
/**class Character{
    constructor(name, hp, str, mag, dex, spd, def, res, lck, bld)
    {
        this.name = name;
        this.hp = hp;
        this.str = str;
        this.mag = mag;
        this.dex = dex; 
        this.spd = spd;
        this.def = def;
        this.res = res; 
        this.lck = lck;
        this.bld = bld;
    }
}
/**/ 

//A list of Classes
let classes = 
[
"Select Class",
"Dragon Child", 
"Divine Dragon",
"Fell Child",
"Noble",
"Avenir",
"Vidame",
"Lord",
"Successeur",
"Lord",
"Tireur d'elite",
"Wing Tamer",
"Lindwurm",
"Wing Tamer",
"Sleipnir Rider",
"Sentinel",
"Picket",
"Sentinel",
"Melusine",
"Sword Fighter",
"Swordmaster",
"Hero",
"Lance Fighter",
"Helberdier",
"Royal Knight",
"Axe Fighter",
"Beserker",
"Warrior",
"Archer",
"Sniper",
"Bow Knight",
"Sword Armor",
"Lance Armor",
"Axe Armor",
"General",
"General Knight",
"Sword Cavalier",
"Lance Cavalier",
"Axe Cavalier",
"Paladin",
"Wolf Knight",
"Mage",
"Sage",
"Mage Knight",
"Martial Knight",
"Marital Master",
"High Priest",
"Sword Flier",
"Lance Flier",
"Axe Flier",
"Griffin Knight",
"Wyvernm Knight",
"Thief",
"Dancer",
"Enchanter"
];
//a list of all character names 
let units = 
[
    "Alear",
    "Vander",
    "Clanne",
    "Framme",
    "Alfred",
    "Etie",
    "Boucheron",
    "Celine",
    "Chloe",
    "Louis",
    "Yunaka",
    "Alcryst",
    "Citrinne",
    "Lapis",
    "Diamant",
    "Amber",
    "Jade",
    "Ivy",
    "Kagetsu",
    "Zelkov",
    "Fogado",
    "Pandreo",
    "Bunet",
    "Timerra",
    "Panette",
    "Merrin",
    "Hortensia",
    "Seadall",
    "Rosado",
    "Goldmary",
    "Lindon",
    "Saphir",
    "Veyle",
    "Mauvier",
    "Anna",
    "Jean"
];
//a 2d array of all unit base growth rates 
//index 0 is unit name
let unitStats= 
[
    ["Alear",60,35,20,45,50,40,25,25,5],
    ["Vander", 60,25,10,25,35,35,20,10,5],
    ["Clanne", 40,35,10,4,50,30,25,20,5],
    ["Framme",55,30,25,35,55,25,30,25,0],
    ["Alfred", 65,40,5,35,40,40,20,40,10],
    ["Etie",45,40,0,25,35,25,30,25,5],
    ["Boucheron", 85,20,0,50,45,35,20,15,20],
    ["Celine", 50,35,25,30,45,30,40,50,5],
    ["Chloe", 75 ,25,35,40,55,30,25,25,5],
    ["Louis", 75,40,0,25,25,50,20,25,15],
    ["Yunaka", 50,35,25,40,45,15,45,25,5],
    ["Alcryst", 65,30,10,40,45,30,20,15,10],
    ["Citrinne", 45,10,40,,25,30,20,40,25,5],
    ["Lapis", 55,25,20,35,55,35,30,25,5],
    ["Diamant", 75,30,15,20,40,40,25,20,15],
    ["Amber", 65,45,0,25,30,35,5,35,15],
    ["Jade", 55,35,25,35,30,40,30,20,10],
    ["Ivy", 55,25,30,25,40,30,35,15,10],
    ["Kagetus", 60,30,15,50,50,40,25,40,10],
    ["Zelkov",65,35,15,40,35,35,15,25,10],
    ["Fogado",60,30,25,30,55,30,35,25,10],
    ["Pandreo", 60,5,30,45,45,15,55,30,15],
    ["Bunet", 65,30,10,40,35,45,25,40,10],
    ["Timerra", 55,25,25,45,45,30,30,30,10],
    ["Panette", 75,45,10,40,25,30,15,20,15],
    ["Merrin", 55,25,25,40,50,30,30,25,10],
    ["Hortensia",40,20,20,35,50,25,55,50,0],
    ["Seadall",55,25,15,25,50,25,25,35,10],
    ["Rosado",75,45,25,40,45,30,30,20,5],
    ["Goldmary",65,30,5,25,25,55,25,25,5],
    ["Lindon",65,25,25,25,40,25,40,15,10],
    ["Saphir",80,35,0,25,30,30,5,20,10],
    ["Veyle",40,25,45,35,30,25,35,20,0],
    ["Mauvier",70,35,40,40,35,50,45,15,15],
    ["Anna",55,15,50,50,50,20,35,45,5],
    ["Jean",50,20,20,35,40,25,20,25,5]

];
//a 2d array with all class names and modifiying number 
//index 0 is class name
let classModifiers=
[
    ["Dragon Child",10,10,0,10,15,10,10,5,5],
    ["Divine Dragon",10,10,0,10,15,15,15,10,5],
    ["Fell Child",10,10,25,10,5,10,25,0,0],
    ["Noble",15,15,0,5,5,20,5,15,0],
    ["Avenir",15,15,0,5,10,25,5,20,5],
    ["Noble",0,5,10,5,5,5,10,20,0],
    ["Vidame",5,10,15,5,5,5,15,20,0],
    ["Lord",15,20,0,10,10,10,0,5,0],
    ["Successeur",15,20,0,10,15,15,0,10,5],
    ["Lord", 10,10,0,25,10,10,0,5,0],
    ["Tireur d'elite",10,10,0,30,10,15,5,5,0],
    ["Wing Tamer",0,0,15,10,10,0,25,10,0],
    ["Sleipnir Rider",0,0,20,15,15,0,30,15,0],
    ["Sentinel",10,10,0,10,5,20,0,5,0],
    ["Picket",10,15,0,10,10,20,5,5,5],
    ["Sentinel", 10,5,0,15,15,5,15,0,0],
    ["Cupido",10,5,5,20,20,5,20,0,0],
    ["Melusine",10,10,10,10,15,10,10,0,5],
    ["Sword Fighter", 10,10,0,15,20,0,15,10,0],
    ["Swordmaster",10,10,0,15,20,0,15,15,0],
    ["Hero",15,15,0,10,15,0,10,15,0],
    ["Lance Fighter",10,10,5,20,5,10,5,0,0],
    ["Halberdier",10,15,5,20,10,15,5,5,0],
    ["Royal Knight",5,10,15,15,15,5,20,10,0],
    ["Axe Fighter",25,20,0,5,10,5,0,0,5],
    ["Berserker",30,30,0,5,10,5,0,0,10],
    ["Warrior",25,20,0,10,15,10,5,0,5],
    ["Archer", 10,15,0,25,10,5,0,5,0],
    ["Sniper",15,15,0,30,10,10,0,10,0],
    ["Bow Knight",10,10,0,20,20,0,15,15,0],
    ["Sword Armor",20,15,0,10,0,30,0,0,5],
    ["Lance Armor",20,15,0,10,0,30,0,0,5],
    ["Axe Armor",20,15,0,10,0,30,0,0,5],
    ["General",25,20,0,10,0,30,0,0,10],
    ["Great Knight",20,15,0,15,0,25,10,5,5],
    ["Sword Cavalier",10,10,0,10,10,10,10,10,0],
    ["Lance Cavalier",10,10,0,10,10,10,10,10,0],
    ["Axe Cavalier",10,10,0,10,10,10,10,10,0],
    ["Paladin",15,15,0,10,15,15,15,10,0],
    ["Wolf Knight",10,5,0,15,20,5,20,20,0],
    ["Mage",0,0,25,5,0,0,25,5,0],
    ["Sage",0,0,30,5,0,0,30,15,0],
    ["Mage knight",5,5,25,0,5,10,25,5,0],
    ["Martial Monk",0,10,25,0,0,10,20,10,0],
    ["Martial Master",5,10,20,0,0,15,25,10,0],
    ["High Priest",0,0,25,0,5,0,30,30,0],
    ["Sword Flier",5,10,5,10,0,10,10,0],
    ["Lance Flier",5,10,5,10,10,0,10,10,0],
    ["Axe Flier",5,10,5,10,10,0,10,10,0],
    ["Griffin Knight",0,10,15,15,20,0,15,15,0],
    ["Wyvern Knight",20,20,0,10,5,20,5,5,5],
    ["Theif",5,10,0,5,15,10,20,20,0],
    ["Dancer",5,10,0,5,15,10,20,20,0],
    ["Enchanter",5,15,15,15,10,5,5,15,5]
];

window.addEventListener("load", populateClasses);
//window.addEventListener("load", populateCharacterForm("etie"));

let alearClassBox =document.getElementById("classAlear");
alearClassBox.addEventListener("change", calculateStats);

function calculateStats()
{
    //select all the table data in the stats area 
    let stats = document.querySelectorAll(".alearStats")

    let characterIndex = findName(unitStats, "Alear")
    
    //get the original character stats to modify 
    let baseStats =  unitStats[characterIndex];

    //get the selected class index
    let classIndex = alearClassBox.selectedIndex;

    //get our class from the 2d array above 
    let newClass = classModifiers[classIndex-1];
    
    //change all the stats to their new value
    if(classIndex!=0)
    {
        for(let i=0; i<stats.length; i++)
        {
            stats[i].innerHTML= baseStats[i+1] +newClass[i+1];
        }
    }else{
        for(let i=0; i<stats.length; i++)
        {
            stats[i].innerHTML= baseStats[i+1];
        }
    }
    
}

//function to find the index of character names 
function findName(arr, name)
{
    for(let i=0; i<arr.length; i++)
    {
        if(arr[i][0]==name)
        {
            return i;
        }
    }
}

function populateCharacterForm(id)
{
    //get the table to append to
    let table = document.getElementById("classForms")

    //Get the form to append to
    let form = document.createElement("form");
    form.setAttribute("id", id);
    form.setAttribute("method", "post");
    
    //create first row 
    let row = document.createElement("tr");
    
    //add row to form
    form.appendChild(row);

    

    //append the td to the span
    for(let i =0; i<12; i++){
        //create name td 
        let td = document.createElement("td");
        td.innerHTML = id;
        row.appendChild(td);
    }
    

    //add row to form 
    form.appendChild(row);

    table.appendChild(form);
}

//function to put all classes inside fourm
function populateClasses()
{
   let classBoxes = document.querySelectorAll("select.classes");

   for(let i =0; i<classes.length; i++)
   {
        //for each classes select we need to create and add a node for each class
        for(let n=0; n<classBoxes.length; n++)
        {
            let classOption = document.createElement("option");
            classOption.value = classes[i];
            classOption.innerHTML = classes[i];
            classBoxes[n].appendChild(classOption);
        }
        
   }
}

