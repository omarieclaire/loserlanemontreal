
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
      "   ⚛ ⚛    ",
      "   ╔◢◣╗   ",
      "   ⊡⊡⊡⊡   ",
      "   ╚▒▒╝   ",
      "    ▒▒    ",
      "    ▒▒    "
    ]
  },
      {
        name: "BAIN_COLONIAL",
        artist: "Julia",
        art: [
            " ┏━━━━━━┓ ",
            " ┣━━━━━━┫ ",
            " ┃ BAIN ┃ ",
            " ┃      ┃ ",
            " ┃COLO  ┃ ",
            " ┃  NIAL┃ ",
            " ┃      ┃ ",
            " ┃      ┃ ",
            " ┗━━━━━━┛ "
        ]
    },
        {
        name: "SNAKE_FACTORY",
        artist: "Pen",
        art: [
            "  ∿∿∿⳻    ",
            "  ∿∿∿5⳻   ",
            "  ∿∿∿ S⳻  ",
            "  ∿∿∿ S⚕  ",
            "  ∿∿∿ S⚕  ",
            "  ∿∿∿ S⚕  ",
            "  ∿∿∿ S⚕  ",
            "  ∿⍝∿ S⚕  "
        ]
    },
        {
        name: "BLOBBY'S_BUNKER",
        artist: "Pen",
        art: [
            "   ⌓⌓⌓    ",
            "  ◯ ❂ ⌇   ",
            " ◯ ◜ ◝⌇   ",
            " ◯⋰◟◘◞⦆   "
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
    name: "Olympic Stadium",
    art: [
      "      ╱│  ",
      "     ╱ │  ",
      "    ╱  │  ",
      "   ╱╲  │  ",
      "  ╱  ╲ │  ",
      " ◢◣ ◢◣◣│  "
    ]
  },
  {
    name: "Place des Arts",
    art: [
      "▀▀▀▀▀▀▀▀▀▀",
      "█PLACE   █",
      "█DES ARTS█",
      "█ ▢ ▢ ▢ ▢█",
      "█ ▢ ▢ ▢ ▢█",
      "▔▔▔▔▔▔▔▔▔▔"
    ]
  },
  {
    name: "Phi Centre",
    art: [
      "╔═══PHI══╗",
      "║ ◉ ART ◉║",
      "║▓▓▓▓▓▓▓▓║",
      "║        ║",
      "║▓▓▓▓▓▓▓▓║",
      "╚═══════╝"
    ]
  },
  {
    name: "Musée d'Art Contemporain",
    art: [
      "▀▀▀MAC▀▀▀▀",
      "█ ◢■◣ ◢■◣█",
      "█ ◥■◤ ◥■◤█",
      "█ ART    █",
      "█        █",
      "▔▔▔▔▔▔▔▔▔▔"
    ]
  },
  {
    name: "SAT Societé",
    art: [
      "   ◢■◣   ",
      "╭{◉   ◉)╮",
      "│   ░░  │ ",
      "│  ░  ░ │",
      "│░ SAT ░│ ",
      "│▓▓▓▓▓▓▓│ ",
      "│░░░░░░░│ ",
      "╰───────╯ "
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
      "  ╱▔▔▔▔▔▔▔╲",
      " │FAIRMOUNT│ ",
      " │ ◯ (o) ◯ │ ",
      " │BAGELS.  │ ",
      " ╰─────────╯"
    ]
  },
  {
    name: "Casa d'Italia",
    art: [
      "╔═CASA═══╗ ",
      "║D'ITALIA║",
      "║ ★ ★ ★  ║",
      "║▓▓▓▓▓▓▓▓║",
      "║CULTURA ║",
      "╚════════╝"
    ]
  },

  {
    name: "McCord Museum",
    art: [
      "▀McCORD▀▀▀",
      "█        █",
      "█        █",
      "█        █",
      "█ ◢■◣◢■◣ █",
      "▔▔▔▔▔▔▔▔▔▔"
    ]
  },
  {
    name: "Quai des Brumes",
    art: [
      "╔═QUAI══╗ ",
      "║ DES   ║ ",
      "║BRUMES ║ ",
      "║♡      ║ ",
      "╚═══════╝ "
    ]
  },
  {
    name: "Cabaret Mile End",
    art: [
      "▁▁CABARET▁",
      "│ MILE   │",
      "│  END   │",
      "│ STAGE ▓│",
      "└────────┘"
    ]
  },
  {
    name: "Foufounes Électriques",
    art: [
      "╔FOUFOU═╗ ",
      "║NES    ║ ",
      "║ELEC   ║ ",
      "║TRIQUES║ ",
      "╚═══════╝ "
    ]
  },
  {
    name: "Le Dépanneur Café",
    art: [
      "╭DEPAN──╮ ",
      "│ NEUR  │ ",
      "│ CAFE  │ ",
      "╰───────╯ "
    ]
  },
  {
    name: "Drawn & Quarterly",
    art: [
      "╔DRAWN═╗  ",
      "║  &   ║  ",
      "║QRTLY ║  ",
      "║ ◢■◣  ║  ",
      "║BOOKS ║  ",
      "╚══════╝  "
    ]
  },
 
  {
    name: "L'Escalier",
    art: [
      "╭L'ESCA─╮ ",
      "│ LIER  │ ",
      "│ ♪ ★ ♫ │ ",
      "╰───────╯ "
    ]
  },
  {
    name: "Cinéma du Parc",
    art: [
      "▀▀CINEMA▀▀",
      "█ DU    █ ",
      "█ PARC  █ ",
      "█ ◢▓▓◣  █ ",
      "█ ◥▓▓◤  █ ",
      "▔▔▔▔▔▔▔▔▔▔"
    ]
  },



  {
    name: "Café Olimpico",
    art: [
      "╭OLIMPICO╮",
      "│ESPRESSO│",
      "│ CAFFE  │",
      "│░1970░░ │",
      "╰────────╯"
    ]
  },
  {
    name: "Cinéma Beaubien",
    art: [
      "╔CINEMA══╗",
      "║BEAUBIEN║",
      "║ ◢▓▓◣   ║",
      "║ ◥▓▓◤   ║",
      "║ 1938   ║",
      "╚════════╝ "
    ]
  },
  {
    name: "La Vitrola",
    art: [
      "╭LA─────╮ ",
      "│VITROLA│ ",
      "╰────────╯"
    ]
  },
  {
    name: "Palais Royale",
    art: [
      "▀PALAIS▀▀▀",
      "█ ROYALE █",
      "█ RESTO  █",
      "▔▔▔▔▔▔▔▔▔▔"
    ]
  },
  {
    name: "Sala Rossa",
    art: [
      "╭SALA────╮ ",
      "│ ROSSA  │ ",
      "╰────────╯"
    ]
  },
  {
    name: "Notre-Dame Basilica",
    art: [
      "   ╱▲╲    ",
      "  ╱▲▲ ╲   ",
      " ╱NOTRE ╲ ",
      "│  DAME  │",
      "│ ★ ✦ ★  │",
      "└────────┘"
    ]
  },
  {
    name: "Café dei Campi",
    art: [
      "╭DEI────╮",
      "│ CAMPI │",
      "│ CAFFE │",
      "│ ☕ ◉   │",
      "╰───────╯"
    ]
  },
  {
    name: "Arepera du Plateau",
    art: [
      "╭AREPERA ╮",
      "│ ◢■◣    │",
      "╰────────╯"
    ]
  },

  {
    name: "Giant Ring",
    art: [
      "   ◢◣◣    ",
      "  ◢   ◣   ",
      " ◢ RING◣  ",
      " ◥     ◤  ",
      "  ◥   ◤   ",
      "   ◥◤◤    "
    ]
  },
  {
    name: "Parquette",
    art: [
      "╭PAR____ ╮",
      "│ QUETTE │",
      "│ ★ ☕ ★  │",
      "│░.   E░░│",
      "╰────────╯"
    ]
  },
  {
    name: "Café Orr",
    art: [
      "╭──ORR──╮ ",
      "│ CAFE  │ ",
      "│       │ ",
      "╰───────╯"
    ]
  },
  {
    name: "Parc Laurier",
    art: [
      "  ☼ ◉ ☼   ",
      "║PARC░   ║",
      "║LAURIER░║",
      "║░POOL░  ║",
      "║ ░░░░░  ║",
      "║ ◉ ☼ ◉  ║"
    ]
  },


  {
    name: "Renaissance",
    art: [
      "╔RENAIS═╗ ",
      "║ SANCE ║ ",
      "║ THRIFT║ ",
      "║ BOOKS ║ ",
      "╚═══════╝ "
    ]
  },
  {
    name: "Les Petits Frères",
    art: [
      "╭LES────╮ ",
      "│PETITS │ ",
      "│FRERES │ ",
      "│ ★ ♥ ★ │ ",
      "╰───────╯"
    ]
  },
  {
    name: "Westmount Greenhouse",
    art: [
      "  ╱▔▔▔╲   ",
      " ╱ ☼ ◉ ╲  ",
      "│WEST   │ ",
      "│MOUNT  │ ",
      "│ GREEN │ ",
      "│░HOUSE░│ ",
      "╰───────╯"
    ]
  },
  {
    name: "Chatime",
    art: [
      "╭CHATIME╮ ",
      "│ BUBBLE│ ",
      "│  TEA  │ ",
      "│ ◉ ◉ ◉ │ ",
      "│░BOBA░░│ ",
      "╰────────╯"
    ]
  },
    {
    name: "Frédéric-Back Park",
    art: [
      "  ☼ ◉ ☼   ",
      " ░FRED░ ◉ ",
      "░░BACK░░  ",
      " ░ORBS░   ",
      "◉ ░░░◉░ ◉ ",
      "  ◉ ☼ ◉   "
    ]
  },
  {
    name: "Marché PA",
    art: [
      "╔MARCHE═╗ ",
      "║  PA   ║ ",
      "║ ◢■◣   ║ ",
      "║GROCERY║ ",
      "╚═══════╝ "
    ]
  },
  {
    name: "Samosa King",
    art: [
      "╭SAMOSA─╮ ",
      "│ KING  │ ",
      "│  $1   │ ",
      "│ ◢■◣   │ ",
      "│░SPICE░│ ",
      "╰───────╯"
    ]
  },
  {
    name: "Gnocchi $5",
    art: [
      "╭GNOCCHI╮ ",
      "│  $5   │ ",
      "│ ◢■◣   │ ",
      "╰───────╯"
    ]
  },
  {
    name: "St-Viateur Bagel",
    art: [
      "  ╱▔▔▔╲   ",
      " │ST-VIA│ ",
      " │ TEUR │ ",
      " │ ◯ ◯  │ ",
      " │BAGELS│ ",
      " ╰──────╯ "
    ]
  },
  {
    name: "Van Horne Underpass",
    art: [
      "  ▀▀▀▀▀   ",
      " │VAN   │ ",
      "╱│HORNE│╲ ",
      "││UNDER││ ",
      "││░PASS░││",
      "╰┴──────┴╯"
    ]
  },
  {
    "name": "SEGALS",
    "art": [
      "╔════════╗",
      "║SEGALS. ║",
      "║DEALZ   ║",
      "║ DEALZ  ║",
      "╚═══██═══╝"
    ]
  },
  {
    "name": "SWIRL",
    "artist": "mclf",
    "art": [
      "┌~~~~~~~─┐",
      "│~~SWIRL~│",
      "│~YUM~~~ │",
      "│ (/(\\))|│",
      "└~~~~~~~~┘"
    ]
  },
  {
    "name": "MYRIADE",
    "art": [
      "┌✺─✺─✺─✺┐ ",
      "┌───┴┬───┘",
      "│        │",
      "│MYRIADE │",
      "│        │",
      "└────────┘"
    ]
  },
  {
    "name": "DEATH_FACT",
    "art": [
      "┌────────┐",
      "│74^^^^^ │",
      "│EACH^^^ │",
      "│YEAR^^^^│",
      "│74^^^^^ │",
      "└────────┘"
    ]
  },
  {
    "name": "AREPARA",
    "art": [
      "┌────────┐",
      "│AREPARA │",
      "│  (0)   │",
      "│        │",
      "└────────┘"
    ]
  },

  {
    "name": "BEAUTY_S",
    "art": [
      "┌────────┐",
      "│BEAUTY'S│",
      "│LUNCH   │",
      "│ *< >*  │",
      "└────────┘"
    ]
  },
  {
    "name": "SAQ",
    "art": [
      "   _____  ",
      "  ╱ ╲╱ ╲  ",
      "╭╴SAQ    │",
      "│ WINES  │",
      "│ SPIRITS│",
      "└────────┘"
    ]
  },



  {
    "name": "DRAWN_QUARTER",
    "art": [
      "   ____   ",
      " ╱ ╲╱╲╱╲  ",
      "│DRAWN & │",
      "│QUARTER │",
      "│ COMICS │",
      "╰────────┘"
    ]
  },

  {
    "name": "MAMIE_CLAFOUTIS",
    "artist": "des",
    "art": [
      " ┌───────┐",
      " │♥ MAMIE│",
      " │Claftis│",
      "_│ΞΞΞΞ│ ☐│",
      "_╰────┴──╯",
      "〚︸︸〛_♞_  "
    ]
  },
  {
    "name": "FOUFOUNES",
    "artist": "BE",
    "art": [
      "⚡ϟϟϟϟϟϟ⚡  ",
      "◢ϟFOUFO ϟ◣",
      "││FOUNES │",
      "││ELEC   │",
      "╰┴──────┴╯"
    ]
  },
  {
    "name": "CASERNE26",
    "artist": "dz_ntz",
    "art": [
      "    ◢◣    ",
      " ◢✦✦  ✦✦◣ ",
      "◢✶✶FIRE✶✶◣",
      "││CASERNE│",
      "││✧✧26✯✧││",
      "╰┴──────┴╯"
    ]
  },

  {
    "name": "CHEVAL_BLANC",
    "art": [
      "┌──╦──╦──┐",
      "│CHEVAL  │",
      "│BLANC   │",
      "│        │",
      "└───╩────┘"
    ]
  },
  {
    "name": "BOUSTAN",
    "art": [
      "   ╱╲╱╲   ",
      " ╱╲╱╲╱╲╱╲ ",
      "╭─BOUSTAN│",
      "│MUSHROOM│",
      "│ GOOD ! │",
      "└────────┘"
    ]
  },


  {
    "name": "YMCA",
    "art": [
      "┌────────┐",
      "│YMCA    │",
      "│ {{}}}} │",
      "└────────┘"
    ]
  },
  {
    "name": "CAFE_OLIMPICO",
    "artist": "katie jensen",
    "art": [
      "⌯⌯⌯⤚⤙⌯⌯⌯⌯⌯",
      "│ ⊹ CAFÉ │",
      "│OLIMPICO│",
      "│ ☕  ♨   │",
      "└───⟿───┘ "
    ]
  },
  {
    "name": "MONT_ROYAL",
    "art": [
      "┌────────┐",
      "│MONT    │",
      "│  /   \\ │",
      "│ /  ^  \\│",
      "│ ROYAL  │",
      "└⚘─⚘──⚘─⚘┘"
    ]
  },
  {
    "name": "SOUBOIS",
    "art": [
      " ╭──────╮ ",
      "╭│SOUBO│╮ ",
      "│││IS   ││",
      "│││     ││",
      "╰┴┴────┴╯ "
    ]
  },
  {
    "name": "SANTROPOL",
    "artist": "mclf",
    "art": [
      "┌◢╱╲◣◢╱╲◣ ",
      "│SANTRO  │",
      "│ POL    │",
      "│ (___)  │",
      "└────────┘"
    ]
  },
  {
    "name": "INFINITE_LIBRARY",
    "art": [
      "┌────────┐",
      "│INFINITE│",
      "│LIBRARY │",
      "│        │",
      "└────────┘"
    ]
  },
  {
    "name": "FAIRMOUNT",
    "art": [
      "┌────────┐",
      "│FAIR    │",
      "│MOUNT   │",
      "│ ⊙⊙⊙⊙   │",
      "└────────┘"
    ]
  },
  {
    "name": "MARCHE_JEAN_TALON",
    "art": [
      "┌─━━━╋━━─┐",
      "│MARCHE  │",
      "│JEAN    │",
      "│ TALON  │",
      "└∞──∞∞──∞┘"
    ]
  },
  {
    "name": "CASA_DEL_POPOLO",
    "art": [
      "┏━━╋━━╋━━┓",
      "│CASA DEL│",
      "│ POPOLO │",
      "│ %%%%   │",
      "┗━━╋━━╋━━┛"
    ]
  },
  {
    "name": "PARC_LAFONTAINE",
    "art": [
      "┌────────┐",
      "│PARC LA │",
      "│FONT    │",
      "│  AINE  │",
      "└─⚘⚘⚘⚘⚘──┘"
    ]
  },
  {
    "name": "CAMPI",
    "art": [
      "┌────‡───┐",
      "│ CAFE ‡ │",
      "│ DEI ‡  │",
      "│CAMPI ‡ │",
      "└∞─∞∞──∞┘ "
    ]
  },
  {
    "name": "QUAI_DES_BRUMES",
    "art": [
      "┌◬◬◬◬◬◬◬◬┐",
      "│ QUAI   │",
      "│ DES    │",
      "│ BRUMES │",
      "└─∿∿∿∿∿∿─┘"
    ]
  },

  {
    "name": "CLUB_SODA",
    "art": [
      "┌∃∃─∃∃─∃∃┐",
      "│ CLUB   │",
      "│ SODA   │",
      "│ MUSIC  │",
      "└∄∄─∄∄─∄∄┘"
    ]
  },
  {
    "name": "REUBEN",
    "art": [
      "    ┌✷─✷┐ ",
      "  ┌─✷─✷─┐ ",
      "┌─✷─✷─✷─┐ ",
      "│ MAYNARD│",
      "│POUTINE │",
      "│        │",
      "└────────┘"
    ]
  },
  {
    "name": "BIXI",
    "artist": "Shreddy Acorn",
    "art": [
      " * * * * *",
      " ,,,,,,,,,",
      " |  BIXI |",
      " |⚇ BIKE⚇|",
      " │ []_[] │",
      "/========\\"
    ]
  },
  {
    "name": "ATWATER",
    "art": [
      "   ╱■╲    ",
      " ╱╲╱╲╱╲   ",
      "│ATWATER│ ",
      "│ ⊙ FOOD│ ",
      "└────────┘"
    ]
  },




  {
    "name": "BAGEL_BEAUBIEN",
    "art": [
      "╔════════╗",
      "║ BAGEL  ║",
      "║BEAUBIEN║",
      "║ ⊙ ⊙ ⊙  ║",
      "╚════════╝"
    ]
  },
  
  {
    "name": "PIKOLO",
    "art": [
      "╔════════╗",
      "║ PIKOLO ║",
      "║ CAFE   ║",
      "║        ║",
      "╚════════╝"
    ]
  },
 
  {
    "name": "RUE_LAJEUNESSE",
    "art": [
      "    ||    ",
      "  |    |  ",
      " |      │ ",
      "|  RUE   │",
      "│LAJEUN- |",
      "╰────────╯"
    ]
  },
  {
    "name": "APT11",
    "art": [
      "██████████",
      "║ ░ ░░ ░ ║",
      "║ ░ ░░ ░ ║",
      "║ ────── ║",
      "║ ▒▒▒▒▒▒ ║",
      "╰────────╯"
    ]
  },
  {
    "name": "APT12",
    "art": [
      "▓▓▓▓▓▓▓▓▓▓",
      "║ ○●● ●● ║",
      "║ ○●● ●● ║",
      "║ ○●● ●● ║",
      "║ ────── ║",
      "║ ░░░░░░ ║",
      "╰╩╩╩╩╩╩╩╩╯"
    ]
  },
  {
    "name": "APT14",
    "art": [
      "▓▓▓▓▓▓▓▓▓▓",
      "║ ▲ ▲ ▲  ║",
      "║ ▲ ▲ ▲  ║",
      "║ ██████ ║",
      "╰╩╩╩╩╩╩╩╩╯"
    ]
  },
  {
    "name": "PETIT_LAURIER",
    "art": [
      "╭────────╮",
      "│PETIT   │",
      "│LAURIER │",
      "│CAFE    │",
      "༼つ╹ ╹ ༽つ│ ",
      "╰────────╯"
    ]
  },
  
  {
    "name": "TAROT_CARDS",
    "artist": "d6",
    "art": [
      " ◢⬒⬒◣◢⬒⬒◣ ",
      "◢⊞TAROT♀⊞◣",
      "││♂CARDS││",
      "││⊞⊞∏∏⊞⊞││",
      "╰┴──────┴╯"
    ]
  },
  {
    "name": "MAISON_VELOS",
    "artist": "B. R. Atislava",
    "art": [
      " ︻︻︻︻︻    ",
      "|MAISON  |",
      "|⌾VÉLOS⌾ |",
      "|========|",
      "|==〚 〛==| ",
      ".........."
    ]
  },
  {
    "name": "COOP_LA_MAISON",
    "artist": "nexy",
    "art": [
      " ♡♥♡♥♡♥♡♥ ",
      "││COOP LA╮",
      "││MAISON │",
      "││☆.｡* ⚧││",
      "╰┴──────┴╯"
    ]
  },
  {
    "name": "MAISON_VERTE",
    "artist": "KDI",
    "art": [
      "   /\\  /\\\\",
      "/\\ ||_/\\||",
      "||/__ ||/|",
      "|Maison| |",
      "|Verte | |",
      "|______|/ "
    ]
  },
  {
    "name": "PATATERIE",
    "artist": "nexy",
    "art": [
      "┌────────┐",
      "│ ⊞ ⊞ ⊞  │",
      "│PATATES │",
      "   . ° ·  ",
      "   * + ˙  ",
      "└────────┘"
    ]
  },
  {
    "name": "BOITE_A_MUSIQUE",
    "artist": "katie jensen",
    "art": [
      " ✦ ☾ ✧ ☁  ",
      "≡█▓≡█▓≡█▓≡",
      "⌼ BOÎTE ⌼ ",
      "⌼   À    ⌼",
      "⌼ MUSIQUE⌼",
      "⌼ « ▶ ⏏  ⌼",
      "⌼ ⍁⍂ ⍁⍂  ⌼"
    ]
  },
  {
    "name": "PHONOPOLIS",
    "artist": "FP",
    "art": [
      "[[[[[]]]]]",
      "│{PHONO} │",
      "│││POLIS││",
      "│││♪ ♫  ││",
      "╰┴┴────┴┴╯"
    ]
  },
  {
    "name": "LUX_CAFE",
    "artist": "Bea",
    "art": [
      " ❀⁑╲☾☽╱⁑❀ ",
      "╭│⁂ LUX⁂╮ ",
      "││⁂CAFÉ⁂│ ",
      "││⁂☕☾☽⁂││ ",
      "╰┴┴─────┴╯"
    ]
  },
  {
    "name": "CHEZ_CLAUDETTE",
    "artist": "MOTCH",
    "art": [
      " ◢╱╲◣ ◢╱╲◣",
      "╭│CHEZ   ╮",
      "│CLAUDET │",
      "│  TE    │",
      "╰┴──────┴╯"
    ]
  },
  {
    "name": "CAFE_MYRIADE",
    "artist": "FADA",
    "art": [
      " ◢╱╲◣ ◢╱╲◣",
      "╭││CAFE │╮",
      "│││MYRIAD│",
      "│││ E  ☕││",
      "╰┴┴─────┴╯"
    ]
  },
  {
    "name": "RENAISSANCE",
    "artist": "katie jensen",
    "art": [
      "▓▓▓▓▓▓▓▓▓▓",
      "┇RENAIS- ┇",
      "┇SANCE   ┇",
      "└✂-✂-✂⍁-┘┇"
    ]
  },
  {
    "name": "ST_VIATEUR",
    "artist": "Nathan",
    "art": [
      " ________ ",
      "╭│ST    │╮",
      "││VIATEUR│",
      "││ ⊙⊙⊙  ││",
      "╰┴──────┴╯"
    ]
  },
  {
    "name": "CINEMA_BEAUBIEN",
    "artist": "Nathan",
    "art": [
      " _________",
      "╭ CINEMA ╮",
      "│BEAUBIEN│",
      "│  ⊙⊙⊙   │",
      "|   ✂    |",
      "╰────────╯"
    ]
  },
  {
    "name": "TURBO_HAÜS",
    "artist": "KingBain",
    "art": [
      "⬣⬒⬒⬒⬒⬒⬒⬒⬒⬣",
      "⬣TURBO ↱ ⬣",
      "⬣ ⇎⇎⇎⇎   ⬣",
      "⬣  HAÜS  ⬣",
      "⬣⬓⬓⬓⬓⬓⬓⬓⬓⬣"
    ]
  },
  {
    "name": "CINEMA_DU_PARC",
    "artist": "Michael Iantorno",
    "art": [
      "︻︻︻︻︻     ",
      "│⬒CINEMA │",
      "│⬒⬒ DU ⬒⬒│",
      "│⬒PARC⬒⬒⬒│",
      "│⍂⍂⍂⌼⍂⍂⍂⍂│",
      "︼︼︼︼︼     "
    ]
  },
  {
    "name": "BENELUX",
    "artist": "Avery",
    "art": [
      " ◢╱╲◣◢╱╲◣ ",
      "|BENELUX │",
      "│ ⚄BIÈRE⚄│",
      "│ FOOD   │",
      "│MUSIC   │",
      "│ ♨ ♨ ♨  │",
      "╰┴──────┴╯"
    ]
  },
  {
    "name": "JEWISH_GENERAL",
    "artist": "Daniel O",
    "art": [
      "  ╓ ✚ ╖   ",
      "║ ▨GENER▧║",
      "║ ▨AL   ▧║",
      "║ ▨    ▨ ║",
      "╟══EMERG═╢",
      "║   ┍━┑ ⛯║",
      "║   │╬│⛟ ║"
    ]
  },
  {
    "name": "DEPOT",
    "artist": "weftandweaving",
    "art": [
      "╭ DÉPÔT  ╮",
      "│││    ╭⌼│",
      "│││    │⌼│",
      "│││ ⊡  ╰⌼│",
      "╰┴┴─⍌────╯"
    ]
  },
  {
    "name": "MAXI",
    "artist": "Dharmy",
    "art": [
      " ◢⬒⬒⬒⬒⬒⬒◣ ",
      "◢⬒ MAXI ⬒◣",
      "│|  FOOD|│",
      "││CHEAP ││",
      "│$      $│",
      "╰‰‰‰‰─⊟⊟┴╯"
    ]
  },
  {
    "name": "SOCIETE_DES_ARTS",
    "artist": "",
    "art": [
      "┌────────┐",
      "│SOCIÉTÉ │",
      "│DES     │",
      "│ARTS    │",
      "│TECH    │",
      "└────────┘"
    ]
  }
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



    
                         

