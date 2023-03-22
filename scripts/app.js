"use-strict";

import { classes } from "./data/character-classes.js";
import { stats } from "./data/base-stats.js";

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


//a list of all character names 

//a 2d array of all unit base growth rates 
//index 0 is unit name


/*


const characterNames = Object.keys(unitStats);
console.log(characterNames[0]);

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

//populate all class options for charaters
window.addEventListener("load", function(){
    populateClasses();
    addEventCalculateStats();
    setCharacterStats();

});


//calculates individual growth rate
function calculateStats()
{
    //get the name of what sent this 
    let name = this.name;

    //all names should be class then the name ex: classAlear 
    //remove class from the begining of the string 
    name = name.slice(5);
    //make it lowercase
    name = name.toLowerCase();

    //select all the table data in the stats area 
    let stats = document.querySelectorAll("."+name+"Stats");


    //find the index of the character in the base unitStats list
    //also capitalizing first letter in name cause thats how it is in the list
    let characterIndex = findName(unitStats, name.charAt(0).toUpperCase() + name.slice(1));
    
    //get the original character stats to modify 
    let baseStats =  unitStats[characterIndex];

    //get the selected class index
    let classIndex = this.selectedIndex;

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

//finds the index of character names 
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

//populats all class options in class select boxes 
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

//function to put all classes inside form
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

function setStats(classBox)
{
    //get the name of what sent this 
    let name = classBox.name;

    //all names should be class then the name ex: classAlear 
    //remove class from the begining of the string 
    name = name.slice(5);
    //make it lowercase
    name = name.toLowerCase();

    //select all the table data in the stats area 
    let stats = document.querySelectorAll("."+name+"Stats");


    //find the index of the character in the base unitStats list
    //also capitalizing first letter in name cause thats how it is in the list
    let characterIndex = findName(unitStats, name.charAt(0).toUpperCase() + name.slice(1));
    
n    //get the original character stats to modify 
    let baseStats =  unitStats[characterIndex];

    for(let i=0; i<stats.length; i++)
    {
        stats[i].innerHTML= baseStats[i+1];
    }
    
}
//Add event listener to set base stats of all characters
function setCharacterStats()
{
    let classBoxes = document.querySelectorAll("select.classes");
    for(let i =0; i<classBoxes.length; i++)
    {
        setStats(classBoxes[i]);
    }
}
//Adds event listener for calculate stats function to each character 
function  addEventCalculateStats()
{
    let classBoxes = document.querySelectorAll("select.classes");
    for(let i =0; i<classBoxes.length; i++)
    {
        classBoxes[i].addEventListener("change", calculateStats);
    }
}
*/



const tbody = document.querySelector("#mainTable tbody")
Object.entries(stats).forEach(([ characterName, baseStats ]) => {

    //console.log({characterName, baseStats})
    const tr = document.createElement("tr");
    const nameTD = document.createElement("td");
    tr.appendChild(nameTD)
    nameTD.innerText = characterName;

    // temp spacers
    //create select 
    
    const tdClassSelect = document.createElement("td");
    const classSelect = document.createElement("select");
    classSelect.name = characterName; 
    classSelect.id = characterName; 
    classSelect.value = "Select Class";
    tdClassSelect.appendChild(classSelect);

    const tdDisplaySelect = document.createElement("td");
    const displaySelect = document.createElement("select");
    displaySelect.name = "display"+characterName; 
    classSelect.id = "display"+characterName; 
    classSelect.value = "indivdual growth rates";
    tdDisplaySelect.appendChild(displaySelect);
    


    tr.appendChild(tdClassSelect);
    tr.appendChild(tdDisplaySelect);
    
    
    
    const hpTD = document.createElement("td");
    hpTD.innerText = baseStats.hp;
    tr.appendChild(hpTD);

    tbody.appendChild(tr)
})

