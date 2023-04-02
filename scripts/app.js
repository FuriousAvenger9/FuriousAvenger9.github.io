"use-strict";

import { classes } from "./data/character-classes.js";
import { stats } from "./data/individual-growths.js";
import { classModifiers } from "./data/classModifiers.js";
import { classMaxStats } from "./data/classMaxStats.js";
import { characterMaxModifiers } from "./data/characterMaxModifiers.js";



//calculates effective character growths (indidual growth + class modifiers)
function calcEffectiveGrowth(name)
{
   
    //get the name of what sent this 
    //const name = this.name;
    //get select box calling function
    const selectBox = document.querySelector('#'+name);


    //get the original character stats to modify 
    const baseStats =  stats[name];

    
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

const tbody = document.querySelector("#mainTable tbody");
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

