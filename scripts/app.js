"use-strict";

import { classes } from "./data/character-classes.js";
import { stats } from "./data/base-stats.js";
import { classModifiers } from "./data/classModifiers.js";

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

//calculates effective character growths (indidual growth + class modifiers)
function calcEffectiveGrowth(name)
{
   
    //get the name of what sent this 
    //const name = this.name;
    //get select box calling function
    const selectBox = document.querySelector('#'+name);

    //get associated display box
    let displayBox = document.querySelector("#display"+name);
    //get index of display box 
    let displayIndex = displayBox.selectedIndex;
    


    //get the original character stats to modify 
    const baseStats =  stats[name];

    
    //get the selected class index
    const classIndex = selectBox.selectedIndex;
    //get the name of the class 
    const className = selectBox[classIndex].value;
    //now get the list of modifiers 
    const newClass = classModifiers[className];
    
    //apply the stats 
    if(classIndex !=0)
    {
        document.querySelector("#"+name+"hp").innerText = baseStats.hp+ newClass.hp;
        document.querySelector("#"+name+"str").innerText = baseStats.str+ newClass.str;
        document.querySelector("#"+name+"mag").innerText = baseStats.mag+ newClass.mag;
        document.querySelector("#"+name+"dex").innerText = baseStats.dex+ newClass.dex;
        document.querySelector("#"+name+"spd").innerText = baseStats.spd+ newClass.spd;
        document.querySelector("#"+name+"def").innerText = baseStats.def+ newClass.def;
        document.querySelector("#"+name+"res").innerText = baseStats.res+ newClass.res;
        document.querySelector("#"+name+"lck").innerText = baseStats.lck+ newClass.lck;
        document.querySelector("#"+name+"bld").innerText = baseStats.bld+ newClass.bld;
    }else{
        document.querySelector("#"+name+"hp").innerText = baseStats.hp
        document.querySelector("#"+name+"str").innerText = baseStats.str;
        document.querySelector("#"+name+"mag").innerText = baseStats.mag;
        document.querySelector("#"+name+"dex").innerText = baseStats.dex;
        document.querySelector("#"+name+"spd").innerText = baseStats.spd;
        document.querySelector("#"+name+"def").innerText = baseStats.def;
        document.querySelector("#"+name+"res").innerText = baseStats.res;
        document.querySelector("#"+name+"lck").innerText = baseStats.lck;
        document.querySelector("#"+name+"bld").innerText = baseStats.bld;
    }
    

    
}
function displayBaseStats(name)
{
    const baseStats =  stats[name];

    document.querySelector("#"+name+"hp").innerText = baseStats.hp
    document.querySelector("#"+name+"str").innerText = baseStats.str;
    document.querySelector("#"+name+"mag").innerText = baseStats.mag;
    document.querySelector("#"+name+"dex").innerText = baseStats.dex;
    document.querySelector("#"+name+"spd").innerText = baseStats.spd;
    document.querySelector("#"+name+"def").innerText = baseStats.def;
    document.querySelector("#"+name+"res").innerText = baseStats.res;
    document.querySelector("#"+name+"lck").innerText = baseStats.lck;
    document.querySelector("#"+name+"bld").innerText = baseStats.bld;
}

//function to put all classes inside form
function populateClasses(selectBox)
{
   for(let i =0; i<classes.length; i++)
   {
        let classOption = document.createElement("option");
        classOption.value = classes[i];
        classOption.innerText = classes[i];
        selectBox.appendChild(classOption);
   }
}
//fucntion to add options to display select 
function populateDisplay(selectBox)
{
    let effective = document.createElement("option");
    effective.value = "Effective Growth Rates";
    effective.innerText = "Effective Growth Rates";
    selectBox.appendChild(effective);

    let indivdual = document.createElement("option");
    indivdual.value = "Individual Growth Rate";
    indivdual.innerText = "Individual Growth Rate";
    selectBox.appendChild(indivdual);
}

//function to decide what function to call depending on value of display box 
function decideCalculation()
{
    //get name of select box calling this 
    let name = this.name;
    //if the display select called this message we need to modify name so we only pass the characters name
    if(name.includes("display"))
    {
        name= name.slice(7);
    }

    //get associated display box
    let displayBox = document.querySelector("#display"+name);

    //get index of display box 
    let displayIndex = displayBox.selectedIndex;

    switch(displayIndex)
    {
        case 0: 
            calcEffectiveGrowth(name);
            break;
        case 1:
            displayBaseStats(name);
            break;
        case 2: 
            displayMaxStats(name);
            break;
    }
        
}

const tbody = document.querySelector("#mainTable tbody")
Object.entries(stats).forEach(([ characterName, baseStats ]) => {

    //console.log({characterName, baseStats})
    const tr = document.createElement("tr");
    const nameTD = document.createElement("td");
    tr.appendChild(nameTD)
    nameTD.innerText = characterName;


    //create class select 
    const classSelect = document.createElement("select");
    classSelect.name = characterName; 
    classSelect.id = characterName; 
    classSelect.value = "Select Class";
    populateClasses(classSelect);
    classSelect.addEventListener("change", decideCalculation);

    //create td to append to
    const tdClassSelect = document.createElement("td");
    tdClassSelect.appendChild(classSelect);

    //create display select
    const displaySelect = document.createElement("select");
    displaySelect.name = "display"+characterName; 
    displaySelect.id = "display"+characterName; 
    displaySelect.value = "indivdual growth rates";
    populateDisplay(displaySelect);
    displaySelect.addEventListener("change", decideCalculation);
    //create td to append to
    const tdDisplaySelect = document.createElement("td");
    tdDisplaySelect.appendChild(displaySelect);
    
    //add these select options to the table
    tr.appendChild(tdClassSelect);
    tr.appendChild(tdDisplaySelect);
    
    //add the base stats
    //hp
    const hpTD = document.createElement("td");
    hpTD.innerText = baseStats.hp;
    hpTD.id = characterName+"hp";
    tr.appendChild(hpTD);

    //str
    const strTD = document.createElement("td");
    strTD.innerText = baseStats.str;
    strTD.id = characterName+"str";
    tr.appendChild(strTD);

    //mag
    const magTD = document.createElement("td");
    magTD.innerText = baseStats.mag;
    magTD.id = characterName+"mag";
    tr.appendChild(magTD);

    //dex
    const dexTD = document.createElement("td");
    dexTD.innerText = baseStats.dex;
    dexTD.id = characterName+"dex";
    tr.appendChild(dexTD);

    //spd
    const spdTD = document.createElement("td");
    spdTD.innerText = baseStats.spd;
    spdTD.id =characterName+ "spd";
    tr.appendChild(spdTD);

    //def
    const defTD = document.createElement("td");
    defTD.innerText = baseStats.def;
    defTD.id = characterName+"def";
    tr.appendChild(defTD);

    //res 
    const resTD = document.createElement("td");
    resTD.innerText = baseStats.res;
    resTD.id = characterName+"res";
    tr.appendChild(resTD);

    //lck
    const lckTD = document.createElement("td");
    lckTD.innerText = baseStats.lck;
    lckTD.id = characterName+"lck";
    tr.appendChild(lckTD);

    //bld 
    const bldTD = document.createElement("td");
    bldTD.innerText = baseStats.bld;
    bldTD.id = characterName+"bld";
    tr.appendChild(bldTD);



    //append the row to the tbody
    tbody.appendChild(tr)
    
})

