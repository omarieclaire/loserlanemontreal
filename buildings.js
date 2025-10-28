
// Add a building to LoserLane?

// https://marieflanagan.com/loserlane  

// ~~~Tips:
// *Max Width 10 characters / max height 9 characters
// *No Emoji (text only)

// ~~~Notes:
// *If drawing is scary, send me a building name instead and I’ll try to draw one for you.
// *If you want to improve an existing drawing, please do!



const TORONTO_BUILDINGS = [
    {
    name: "Habitat 67",
    art: [
      "  ▓▓  ▓▓  ",
      " ▓▓▓ ▓▓▓  ",
      "▓▓▓ 67 ▓▓▓",
      " ▓▓  ▓▓▓  ",
      "▓▓▓ ▓▓ ▓▓ ",
      " ▓▓  ▓▓ ▓▓"
    ]
  },
  {
    name: "Biosphere",
    art: [
      "   ╱◇◇╲   ",
      "  ◇◇◇◇◇  ",
      " ◇◇◇◇◇◇◇ ",
      " ◇◇◇◇◇◇◇ ",
      "  ◇◇◇◇◇  ",
      "   ╲◇◇╱   "
    ]
  },
  {
    name: "LE_CRAYON_MONTRÉALAIS",
    artist: "Aurélie",
    art: [
      " ⚛ ⚛ ",
      " ╔◢◣╗ ",
      " ⊡⊡⊡⊡ ",
      " ╚▒▒╝ ",
      " ▒▒ ",
      " ▒▒ "
    ]
  },
  
 
];

console.log('Buildings loaded:', TORONTO_BUILDINGS.length);


function checkBuildingWidth(buildings) {
    const nonCompliantBuildings = buildings.filter(building => 
        building.art.some(line => line.length > 10)
    );

    if (nonCompliantBuildings.length > 0) {
        console.log("vvv Non-compliant buildings (lines over 10 characters):");
        nonCompliantBuildings.forEach(building => console.log("vvv " + building.name));
    } else {
        console.log("vvv All buildings are compliant.");
    }
}

checkBuildingWidth(TORONTO_BUILDINGS);



    
                         

