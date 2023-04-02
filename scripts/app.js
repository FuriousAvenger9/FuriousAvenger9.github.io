"use-strict";

import { classes } from "./data/character-classes.js";
import { characterGrowth } from "./data/individual-growths.js";
import { classModifiers } from "./data/classModifiers.js";
import { classMaxStats } from "./data/classMaxStats.js";
import { characterMaxModifiers } from "./data/characterMaxModifiers.js";
import { baseStats } from "./data/characterBaseStats.js";



//calculates effective character growths (indidual growth + class modifiers)
function calcEffectiveGrowth(name)
{
    //get select box calling function
    const selectBox = document.querySelector('#'+name);

    //get the original character stats to modify 
    const baseGrowths =  characterGrowth[name];

    
    //get the selected class index
    const classIndex = selectBox.selectedIndex;
    //get the name of the class 
    let className = selectBox[classIndex].value;
    //see if class name is a character specific class marked by (characterinital) at the end 
    if(className.substr(className.length-1) == ")")
    {
        className = className.slice(0, className.length-3);
    }
    //now get the list of modifiers 
    const newClass = classModifiers[className];
    
    //apply the stats 
    if(classIndex !=0)
    {
        document.querySelector("#"+name+"hp").innerText = baseGrowths.hp+ newClass.hp;
        document.querySelector("#"+name+"str").innerText = baseGrowths.str+ newClass.str;
        document.querySelector("#"+name+"mag").innerText = baseGrowths.mag+ newClass.mag;
        document.querySelector("#"+name+"dex").innerText = baseGrowths.dex+ newClass.dex;
        document.querySelector("#"+name+"spd").innerText = baseGrowths.spd+ newClass.spd;
        document.querySelector("#"+name+"def").innerText = baseGrowths.def+ newClass.def;
        document.querySelector("#"+name+"res").innerText = baseGrowths.res+ newClass.res;
        document.querySelector("#"+name+"lck").innerText = baseGrowths.lck+ newClass.lck;
        document.querySelector("#"+name+"bld").innerText = baseGrowths.bld+ newClass.bld;
    }else{
        document.querySelector("#"+name+"hp").innerText = baseGrowths.hp
        document.querySelector("#"+name+"str").innerText = baseGrowths.str;
        document.querySelector("#"+name+"mag").innerText = baseGrowths.mag;
        document.querySelector("#"+name+"dex").innerText = baseGrowths.dex;
        document.querySelector("#"+name+"spd").innerText = baseGrowths.spd;
        document.querySelector("#"+name+"def").innerText = baseGrowths.def;
        document.querySelector("#"+name+"res").innerText = baseGrowths.res;
        document.querySelector("#"+name+"lck").innerText = baseGrowths.lck;
        document.querySelector("#"+name+"bld").innerText = baseGrowths.bld;
    }
     
}
function displayBaseGrowths(name)
{
    const baseGrowths =  characterGrowth[name];

    document.querySelector("#"+name+"hp").innerText = baseGrowths.hp
    document.querySelector("#"+name+"str").innerText = baseGrowths.str;
    document.querySelector("#"+name+"mag").innerText = baseGrowths.mag;
    document.querySelector("#"+name+"dex").innerText = baseGrowths.dex;
    document.querySelector("#"+name+"spd").innerText = baseGrowths.spd;
    document.querySelector("#"+name+"def").innerText = baseGrowths.def;
    document.querySelector("#"+name+"res").innerText = baseGrowths.res;
    document.querySelector("#"+name+"lck").innerText = baseGrowths.lck;
    document.querySelector("#"+name+"bld").innerText = baseGrowths.bld;
}
function displayMaxStats(name)
{
    const maxModifiers = characterMaxModifiers[name];

    //get class name 
    let classBox = document.querySelector('#'+name);

    if(classBox.selectedIndex!=0)
    {
        let classname = classBox[classBox.selectedIndex].value;

        //get the class max stats 
        const classMax = classMaxStats[classname];
        

        document.querySelector("#"+name+"hp").innerText =classMax.hp;
        document.querySelector("#"+name+"str").innerText = maxModifiers.str+classMax.str;
        document.querySelector("#"+name+"mag").innerText = maxModifiers.mag+classMax.mag;
        document.querySelector("#"+name+"dex").innerText = maxModifiers.dex+classMax.dex;
        document.querySelector("#"+name+"spd").innerText = maxModifiers.spd+classMax.spd;
        document.querySelector("#"+name+"def").innerText = maxModifiers.def+classMax.def;
        document.querySelector("#"+name+"res").innerText = maxModifiers.res+classMax.res;
        document.querySelector("#"+name+"lck").innerText = maxModifiers.lck+classMax.lck;
        document.querySelector("#"+name+"bld").innerText = classMax.bld;
    }else{
        document.querySelector("#"+name+"hp").innerText ="-";
        document.querySelector("#"+name+"str").innerText = maxModifiers.str;
        document.querySelector("#"+name+"mag").innerText = maxModifiers.mag;
        document.querySelector("#"+name+"dex").innerText = maxModifiers.dex;
        document.querySelector("#"+name+"spd").innerText = maxModifiers.spd;
        document.querySelector("#"+name+"def").innerText = maxModifiers.def;
        document.querySelector("#"+name+"res").innerText = maxModifiers.res;
        document.querySelector("#"+name+"lck").innerText = maxModifiers.lck;
        document.querySelector("#"+name+"bld").innerText ="-";
    }
    

}
function displayBaseStats(name){

    const characterBaseStats = baseStats[name];

    //find the name of default class
    let classname = characterBaseStats.class;

    //classbox of character
    let classBox = document.querySelector('#'+name);

    //find index of default class in classbox
    let classIndex = indexMatchingText(classBox,classname);   
    
    //setClassBox to display default class 
    classBox.selectedIndex = classIndex;
        

    document.querySelector("#"+name+"hp").innerText =characterBaseStats.hp;
    document.querySelector("#"+name+"str").innerText = characterBaseStats.str;
    document.querySelector("#"+name+"mag").innerText = characterBaseStats.mag;
    document.querySelector("#"+name+"dex").innerText = characterBaseStats.dex;
    document.querySelector("#"+name+"spd").innerText = characterBaseStats.spd;
    document.querySelector("#"+name+"def").innerText = characterBaseStats.def;
    document.querySelector("#"+name+"res").innerText = characterBaseStats.res;
    document.querySelector("#"+name+"lck").innerText = characterBaseStats.lck;
    document.querySelector("#"+name+"bld").innerText = characterBaseStats.bld;
    
}

// put all classes inside form
function populateClasses(selectBox)
{
    //we need to find the index of select class (it marks the beggining of generic classes)
    let startBaseClasses = classes.indexOf("Select Class");
   for(let i =startBaseClasses+1; i<classes.length; i++)
   {
        let classOption = document.createElement("option");
        classOption.value = classes[i];
        classOption.innerText = classes[i];
        selectBox.appendChild(classOption);
   }
}
//add character specific classes to the characters that have them
function populateCharacterSpecificClasses(classSelect)
{
    
    if(classSelect.name=="Alear")
    {   
        const dragonChild = document.createElement("option");
        dragonChild.value = "Dragon Child";
        dragonChild.innerText = "Dragon Child";
        classSelect.appendChild(dragonChild);

        const divineDragon = document.createElement("option");
        divineDragon.value = "Divine Dragon";
        divineDragon.innerText = "Divine Dragon";
        classSelect.appendChild(divineDragon);
    }
    if(classSelect.name == "Alfred")
    {
        const noble = document.createElement("option");
        noble.value = "Noble(a)";
        noble.innerText = "Noble";
        classSelect.appendChild(noble);

        const avenir =document.createElement("option");
        avenir.value = "Avenir";
        avenir.innerText = "Avenir";
        classSelect.appendChild(avenir);
    }
    if(classSelect.name == "Celine")
    {
        const noble = document.createElement("option");
        noble.value = "Noble(c)";
        noble.innerText = "Noble";
        classSelect.appendChild(noble);

        const vidame =document.createElement("option");
        vidame.value = "Vidame";
        vidame.innerText = "Vidame";
        classSelect.appendChild(vidame);
    }
    if(classSelect.name == "Diamant")
    {
        const lord = document.createElement("option");
        lord.value = "Lord(d)";
        lord.innerText = "Lord";
        classSelect.appendChild(lord);

        const successeur =document.createElement("option");
        successeur.value = "Successeur";
        successeur.innerText = "Successeur";
        classSelect.appendChild(successeur);
    }
    if(classSelect.name == "Alcryst")
    {
        const lord = document.createElement("option");
        lord.value = "Lord(a)";
        lord.innerText = "Lord";
        classSelect.appendChild(lord);

        const tireur =document.createElement("option");
        tireur.value = "Tireur d’élite";
        tireur.innerText = "Tireur d’élite";
        classSelect.appendChild(tireur);
    }
    if(classSelect.name == "Ivy")
    {
        const wingTamer = document.createElement("option");
        wingTamer.value = "Wing Tamer(i)";
        wingTamer.innerText = "Wing Tamer";
        classSelect.appendChild(wingTamer);

        const lindwurm =document.createElement("option");
        lindwurm.value = "Lindwurm";
        lindwurm.innerText = "Lindwurm";
        classSelect.appendChild(lindwurm);
    }
    if(classSelect.name == "Hortensia")
    {
        const wingTamer = document.createElement("option");
        wingTamer.value = "Wing Tamer(h)";
        wingTamer.innerText = "Wing Tamer";
        classSelect.appendChild(wingTamer);

        const sleipnirRider =document.createElement("option");
        sleipnirRider.value = "Sleipnir Rider";
        sleipnirRider.innerText = "Sleipnir Rider";
        classSelect.appendChild(sleipnirRider);
    }
    if(classSelect.name == "Timerra")
    {
        const sentinel = document.createElement("option");
        sentinel.value = "Sentinel(t)";
        sentinel.innerText = "Sentinel";
        classSelect.appendChild(sentinel);

        const picket =document.createElement("option");
        picket.value = "Picket";
        picket.innerText = "Picket";
        classSelect.appendChild(picket);
    }
    if(classSelect.name == "Fogado")
    {
        const sentinel = document.createElement("option");
        sentinel.value = "Sentinel(f)";
        sentinel.innerText = "Sentinel";
        classSelect.appendChild(sentinel);

        const cupido =document.createElement("option");
        cupido.value = "Cupido";
        cupido.innerText = "Cupido";
        classSelect.appendChild(cupido);
    }
    if(classSelect.name == "Veyle")
    {
        const fellChild = document.createElement("option");
        fellChild.value = "Fell Child";
        fellChild.innerText = "Fell Child";
        classSelect.appendChild(fellChild);

       
    }

    if(classSelect.name == "Seadall")
    {
        const dancer = document.createElement("option");
        dancer.value = "Dancer";
        dancer.innerText = "Dancer";
        classSelect.appendChild(dancer);

       
    }
}
//add options to display select 
function populateDisplay(selectBox)
{
    const effective = document.createElement("option");
    effective.value = "Effective Growth Rates";
    effective.innerText = "Effective Growth Rates";
    selectBox.appendChild(effective);

    const indivdual = document.createElement("option");
    indivdual.value = "Individual Growth Rate";
    indivdual.innerText = "Individual Growth Rate";
    selectBox.appendChild(indivdual);

    const max = document.createElement("option");
    max.value = "Max Stats";
    max.innerText = "Max Stats";
    selectBox.appendChild(max);

    const base = document.createElement("option");
    base.value = "Base Stats";
    base.innerText = "Base Stats";
    selectBox.appendChild(base);

    


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
            displayBaseGrowths(name);
            break;
        case 2: 
            displayMaxStats(name);
            break;
        case 3:
            displayBaseStats(name);
            break;
    }
        
}
//function I can call to force calculation of stats
function runCalc(classSelect)
{
    //get name of select box calling this 
    let name = classSelect.name;
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
            displayBaseGrowths(name);
            break;
        case 2: 
            displayMaxStats(name);
            break;
        case 3:
            displayBaseStats(name);
            break;
    }
        
}
//function to find index of option in select box
function indexMatchingText(ele, text) {
    for (var i=0; i<ele.length;i++) {
        if (ele[i].childNodes[0].nodeValue === text){
            return i;
        }
    }
    return undefined;
}


const tbody = document.querySelector("#mainTable tbody");
window.onload=addSelectAll;

function changeAll()
{
    //get the class select box 
    const classSelect = document.querySelector("#ChangeAll");
    //get the display box 
    const displaySelect =document.querySelector("#displayChangeAll");

    //get both selected indexs 
    const classValue = classSelect[classSelect.selectedIndex].value;
    const displayIndex = displaySelect.selectedIndex;

    //set all the characters to these options 
    Object.entries(characterGrowth).forEach(([ characterName ]) => {
        //get the characters class and display box
        const characterClassSelect = document.querySelector("#"+characterName);
        const characterDisplaySelect = document.querySelector("#display"+characterName);


        let classIndex = indexMatchingText(characterClassSelect, classValue);
        //set the indexes to be equal 
        characterClassSelect.selectedIndex = classIndex;
        characterDisplaySelect.selectedIndex = displayIndex;

        runCalc(characterClassSelect);


    })

    
}

function addSelectAll()
{
    
    const tr = document.createElement("tr");

    //character level
    const lvlTD = document.createElement("td");
    lvlTD.innerText = "-";
    lvlTD.id = "lvl";
    tr.appendChild(lvlTD);

    //name
    const nameTD = document.createElement("td");
    tr.appendChild(nameTD);
    nameTD.innerText = "Change All";

    //create class select 
    const classSelect = document.createElement("select");
    classSelect.name = "ChangeAll"; 
    classSelect.id = "ChangeAll"; 
    const selectOption = document.createElement("option");
    selectOption.value = "Select Class";
    selectOption.innerText = "Select Class";
    classSelect.appendChild(selectOption);
    populateClasses(classSelect);
    classSelect.addEventListener("change", changeAll);

    //create td to append to
    const tdClassSelect = document.createElement("td");
    tdClassSelect.appendChild(classSelect);

    //create display select
    const displaySelect = document.createElement("select");
    displaySelect.name = "displayChangeAll"; 
    displaySelect.id = "displayChangeAll"; 
    displaySelect.value = "indivdual growth rates";
    populateDisplay(displaySelect);
    displaySelect.addEventListener("change", changeAll);
    //create td to append to
    const tdDisplaySelect = document.createElement("td");
    tdDisplaySelect.appendChild(displaySelect);
    
    //add these select options to the table
    tr.appendChild(tdClassSelect);
    tr.appendChild(tdDisplaySelect);

    //append the row to the tbody
    tbody.insertBefore(tr,tbody.childNodes[1]);


}
Object.entries(characterGrowth).forEach(([ characterName, baseGrowth ]) => {

    
    
    const tr = document.createElement("tr");

    //character level
    const lvlTD = document.createElement("td");
    lvlTD.innerText = baseStats[characterName].lvl;
    lvlTD.id = characterName+"lvl";
    tr.appendChild(lvlTD);

    //character name
    const nameTD = document.createElement("td");
    tr.appendChild(nameTD)
    nameTD.innerText = characterName;


    //create class select 
    const classSelect = document.createElement("select");
    classSelect.name = characterName; 
    classSelect.id = characterName; 
    const selectOption = document.createElement("option");
    selectOption.value = "Select Class";
    selectOption.innerText = "Select Class";
    classSelect.appendChild(selectOption);
    populateCharacterSpecificClasses(classSelect);
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
    hpTD.innerText = baseGrowth.hp;
    hpTD.id = characterName+"hp";
    tr.appendChild(hpTD);

    //str
    const strTD = document.createElement("td");
    strTD.innerText = baseGrowth.str;
    strTD.id = characterName+"str";
    tr.appendChild(strTD);

    //mag
    const magTD = document.createElement("td");
    magTD.innerText = baseGrowth.mag;
    magTD.id = characterName+"mag";
    tr.appendChild(magTD);

    //dex
    const dexTD = document.createElement("td");
    dexTD.innerText = baseGrowth.dex;
    dexTD.id = characterName+"dex";
    tr.appendChild(dexTD);

    //spd
    const spdTD = document.createElement("td");
    spdTD.innerText = baseGrowth.spd;
    spdTD.id =characterName+ "spd";
    tr.appendChild(spdTD);

    //def
    const defTD = document.createElement("td");
    defTD.innerText = baseGrowth.def;
    defTD.id = characterName+"def";
    tr.appendChild(defTD);

    //res 
    const resTD = document.createElement("td");
    resTD.innerText = baseGrowth.res;
    resTD.id = characterName+"res";
    tr.appendChild(resTD);

    //lck
    const lckTD = document.createElement("td");
    lckTD.innerText = baseGrowth.lck;
    lckTD.id = characterName+"lck";
    tr.appendChild(lckTD);

    //bld 
    const bldTD = document.createElement("td");
    bldTD.innerText = baseGrowth.bld;
    bldTD.id = characterName+"bld";
    tr.appendChild(bldTD);



    //append the row to the tbody
    tbody.appendChild(tr);
    
})

