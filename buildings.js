
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
        name: "LE_CRAYON_MONTRÉALAIS",
        artist: "Aurélie",
        art: [
            "   ⚛ ⚛    ",
            "   ╔◢◣╗   ",
            "   ⊡⊡⊡⊡   ",
            "   ╚▒▒╝   ",
            "    ▒▒    ",
            "    ▒▒    "
        ]
    },
   
    {
        name: "OBSERVATOIRE",
        artist: "Pen",
        art: [
            "   ╭⦿⦿╮   ",
            "  ╭ ⠁⠑ ╮  ",
            " ╭ ⠛  ⠅⠝╮ ",
            " ╰⠇ ⠋   ╯ ",
            "  ╰⠕⠜ ⠜╯  ",
            "   ╰  ╯   ",
            "    ░░    ",
            "    ▒▒    ",
            "    ▓▓    ",
            "    ██    "
        ]
    },
    {
        name: "ÉCOCENTRE_SAINT-LAURENT",
        artist: "Pen",
        art: [
            "    ∥     ",
            "   HH     ",
            "  ▲▲▲▲    ",
            "  ****    ",
            " ⌠~◊ +≋   ",
            "/⍞╳ 9 ⌯\  ",
            "⌞╤╗ ⏏ ⌘╔╕ ",
            "⌜╪╝⎇U ⠒╚╛ "
        ]
    },

    {
        name: "BANQ",
        artist: "Julia",
        art: [
            " ┏━━━━━━┓ ",
            " ┃BAnQ  ┃ ",
            " ┣━━━━━━┛ ",
            " ┃    ┃   ",
            " ┃    ┃   ",
            " ┃    ┃   ",
            " ┃ ┌┐ ┃   ",
            " ┃ ││ ┃   ",
            " ┗━┷┷━┛   "
        ]
    },


    {
        name: "BRANCHE_D'OLIVIER",
        artist: "Alison",
        art: [
            "╔BRANCH═╕ ",
            "║⁂D◞[] ⁂║ ",
            "║OLIVIER║ ",
            "║ ⠀✦✦✦ ⠀║ ",
            "║⁂⠀⠀⠀⠀ ⁂║ ",
            "╚═══════╛ "
        ]
    },
    {
        name: "SLUMLORD_TOWERS",
        artist: "d6",
        art: [
            "╔════════╗",
            "║SLUMLORD║",
            "║ TOWERS ║",
            "║⋰       ║",
            "╚════════╝",
            "▒▀█▀░░░█▀░",
            "▒▀░◾▒▒▨█▀█",
            "▒█░█▒▒▒▒█░",
            "█◾█▄██▄█▄█",
            "█╳█▌◾◾▐█╳█"
        ]
    },


    {
        name: "WILENSKY'S_DELI",
        artist: "hlep",
        art: [
            "╱▔▔▔▔▔▔▔▔╲",
            "║══║▣▣║══║",
            "║══║▣▣║══║",
            "║══║▣▣║══║",
            "▒▒▒▒▒▒▒▒▒▒",
            "▒▣▣▣▣▣▣▣▣▓",
            "▒W▣▣▣▣▣▣Y▒",
            "▒▣I▣▣▣▣K▣▒",
            "▒▣▣LENS▣▣▒",
            "██████████"
        ]
    },

    {
        name: "STADE_OLYMPIQUE",
        artist: "Darzington",
        art: [
            "    ┌──   ",
            "    │⚜╱   ",
            "    ╱╱    ",
            "   ╱╱     ",
            "  ╱╱      ",
            " ╱│────_⚐ ",
            "╱ │▒▒▒▒▒\⚐",
            "╱///||\\\╲",
            "▉▉▉▉▉▉▉▉▉▉"
        ]
    },
    {
        name: "Fairmount Bagel",
        art: [
            " ╱▔▔▔▔▔▔▔╲",
            "│FAIRMOUNT│",
            "│ ◯ (o) ◯│",
            "│BAGELS. │",
            "╰────────╯"
        ]
    },
    {
        name: "BUCHI_BOUTIQUE",
        artist: "Buchi",
        art: [
            "   ≜≜≜≜   ",
            "  ◇◇◇◇◇◇  ",
            "  ╱▧▧▧▧╲  ",
            " ⋰      ⋱ ",
            " ░ ╳  ╳ ░ ",
            "⳻▒  ◟◞  ▒⳺",
            " ▒BUCHI⛫▒ ",
            " ░      ░ ",
            " ◣▭▭▭▭▭▭◢ "
        ]
    },
    {
        name: "DANNY’S",
        artist: "d",
        art: [
            "⌣┌══════┐ ",
            "┆║DANNYS║⌣",
            " C⧂IFFURE✫",
            "✫║UNISEX║ ",
            " └══════┘ "
        ]
    },
    {
        name: "L'INSOUMISE",
        artist: "Lorenzo",
        art: [
            "L^        ",
            "INSOUMISE ",
            "LIBRAIRIE ",
            "ANARCHISTE",
            "▒▒▒▒░░▒▒▒▒",
            "▒▒▒▒  ▒▒▒▒",
            "▒▒▒▒  ▒▒▒▒"
        ]
    },

    {
        name: "CHAMPS_ETC",
        artist: "D",
        art: [
            "⌓⚜◊⌓⌓⌓◊⚜⌓ ",
            "▏STUDIO │ ",
            "│✫✫✫✫✫✫✫│ ",
            "▏RIP DB │ ",
            "⠒⠒⠒⠒⠒⠒⠒⠒⠒ ",
            "▏       │ ",
            "CHAMPS  │ ",
            "⠖⠒⠒⠒    │ ",
            "▏       │ ",
            "▏▒      │ "
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



    
                         

