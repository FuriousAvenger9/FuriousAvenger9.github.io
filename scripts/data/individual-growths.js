const characterGrowth = 
{
    "Alear": { hp: 60, str: 35, mag: 20, dex: 45, spd: 50, def: 40, res: 25, lck: 25, bld: 5 },
    "Vander": { hp: 60, str: 25, mag: 10, dex: 25, spd: 35, def: 35, res: 20, lck: 10, bld: 5 },
    "Clanne": { hp: 40, str: 35, mag: 10, dex: 40, spd: 50, def: 30, res: 25, lck: 20, bld: 5 },
    "Framme": { hp: 55, str: 30, mag: 25, dex: 35, spd: 55, def: 25, res: 30, lck: 25, bld: 0 },
    "Alfred": { hp: 65, str: 40, mag: 5, dex: 35, spd: 40, def: 40, res: 20, lck: 40, bld: 10 },
    "Etie": { hp: 45, str: 40, mag: 0, dex: 25, spd: 35, def: 25, res: 30, lck: 25, bld: 5 },
    "Boucheron": { hp: 85, str: 20, mag: 0, dex: 50, spd: 45, def: 35, res: 20, lck: 15, bld: 20 },
    "Celine": { hp: 50, str: 35, mag: 25, dex: 30, spd: 45, def: 30, res: 40, lck: 50, bld: 5 },
    "Chloe": { hp: 75, str:  25, mag: 35, dex: 40, spd: 55, def: 30, res: 25, lck: 25, bld: 5 },
    "Louis": { hp: 75, str: 40, mag: 0, dex: 25, spd: 25, def: 50, res: 20, lck: 25, bld: 15 },
    "Yunaka": { hp: 50, str: 35, mag: 25, dex: 40, spd: 45, def: 15, res: 45, lck: 25, bld: 5 },
    "Alcryst": { hp: 65, str: 30, mag: 10, dex: 40, spd: 45, def: 30, res: 20, lck: 15, bld: 10 },
    "Citrinne": { hp: 45, str: 10, mag: 40, dex: 25, spd: 30, def: 20, res: 40, lck: 25, bld: 5 },
    "Lapis": { hp: 55, str: 25, mag: 20, dex: 35, spd: 55, def: 35, res: 30, lck: 25, bld: 5 },
    "Diamant": { hp: 75, str: 30, mag: 15, dex: 20, spd: 40, def: 40, res: 25, lck: 20, bld: 15 },
    "Amber": { hp: 65, str: 45, mag: 0, dex: 25, spd: 30, def: 35, res: 5, lck: 35, bld: 15 },
    "Jade": { hp: 55, str: 35, mag: 25, dex: 35, spd: 30, def: 40, res: 30, lck: 20, bld: 10 },
    "Ivy": { hp: 55, str: 25, mag: 30, dex: 25, spd: 40, def: 30, res: 35, lck: 15, bld: 10 },
    "Kagetsu": { hp: 60, str: 30, mag: 15, dex: 50, spd: 50, def: 40, res: 25, lck: 40, bld: 10 },
    "Zelkov": { hp: 65, str: 35, mag: 15, dex: 40, spd: 35, def: 35, res: 15, lck: 25, bld: 10 },
    "Fogado": { hp: 60, str: 30, mag: 25, dex: 30, spd: 55, def: 30, res: 35, lck: 25, bld: 10 },
    "Pandreo": { hp: 60, str: 5, mag: 30, dex: 45, spd: 45, def: 15, res: 55, lck: 30, bld: 15 },
    "Bunet": { hp: 65, str: 30, mag: 10, dex: 40, spd: 35, def: 45, res: 25, lck: 40, bld: 10 },
    "Timerra": { hp: 55, str: 25, mag: 25, dex: 45, spd: 45, def: 30, res: 30, lck: 30, bld: 10 },
    "Panette": { hp: 75, str: 45, mag: 10, dex: 40, spd: 25, def: 30, res: 15, lck: 20, bld: 15 },
    "Merrin": { hp: 55, str: 25, mag: 25, dex: 40, spd: 50, def: 30, res: 30, lck: 25, bld: 10 },
    "Hortensia": { hp: 40, str: 20, mag: 20, dex: 35, spd: 50, def: 25, res: 55, lck: 50, bld: 0 },
    "Seadall": { hp: 55, str: 25, mag: 15, dex: 25, spd: 50, def: 25, res: 25, lck: 35, bld: 10 },
    "Rosado": { hp: 75, str: 45, mag: 25, dex: 40, spd: 45, def: 30, res: 30, lck: 20, bld: 5 },
    "Goldmary": { hp: 65, str: 30, mag: 5, dex: 25, spd: 25, def: 55, res: 25, lck: 25, bld: 5 },
    "Lindon": { hp: 65, str: 25, mag: 25, dex: 25, spd: 40, def: 25, res: 40, lck: 15, bld: 10 },
    "Saphir": { hp: 80, str: 35, mag: 0, dex: 25, spd: 30, def: 30, res: 5, lck: 20, bld: 10 },
    "Veyle": { hp: 40, str: 25, mag: 45, dex: 35, spd: 30, def: 25, res: 35, lck: 20, bld: 0 },
    "Mauvier": { hp: 70, str: 35, mag: 40, dex: 40, spd: 35, def: 50, res: 45, lck: 15, bld: 15 },
    "Anna": { hp: 55, str: 15, mag: 50, dex: 50, spd: 50, def: 20, res: 35, lck: 45, bld: 5 },
    "Jean": { hp: 100, str: 40, mag: 40, dex: 70, spd: 80, def: 50, res: 40, lck: 50, bld: 10 },

};


export { characterGrowth } 
