
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
        name: "L'Escalier",
        artist: "jazz_gir",
        art: [
            "╭L'ESCA─╮ ",
            "│ LIER  │ ",
            "│ ♪ ★ ♫ │ ",
            "╰───────╯ "
        ]
    },
   
    {
        name: "Cinéma Beaubien",
        artist: "film_flam",
        art: [
            "╔CINEMA══╗",
            "║BEAUBIEN║",
            "║ ◢▓▓◣   ║",
            "║ ◥▓▓◤   ║",
            "║ 1938   ║",
            "╚════════╝"
        ]
    },
    {
        name: "La Vitrola",
        artist: "vin_vole",
        art: [
            "╭LA─────╮ ",
            "│VITROLA│ ",
            "╰────────╯"
        ]
    },
    {
        name: "Palais Royale",
        artist: "cr_owl",
        art: [
            "▀PALAIS▀▀▀",
            "█ ROYALE █",
            "█ RESTO  █",
            "▔▔▔▔▔▔▔▔▔▔"
        ]
    },
    {
        name: "Sala Rossa",
        artist: "cri_cro",
        art: [
            "╭SALA────╮",
            "│ ROSSA  │",
            "│ R0SSA  │",
            "│ R0SSA  │",
            "│ R0SSA  │",
            "╰────────╯"
        ]
    },
    {
        name: "Notre-Dame Basilica",
        artist: "sac_swa",
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
        artist: "ca_chi",
        art: [
            "╭DEI─────╮",
            "│  CAMPI │",
            "│  CAFFE │",
            "│  ☕ ◉   │",
            "╰────────╯"
        ]
    },
    {
        name: "Arepera",
        artist: "are_alp",
        art: [
            "╭AREPERA ╮",
            "│ ◢■◣    │",
            "│ ★ ✦ ★  │",
            "│ ★ ✦ ★  │",
            "╰────────╯"
        ]
    },

    {
        name: "GiantRing",
        artist: "cr_owl",
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
        artist: "ca_cap",
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
        artist: "bre_bea",
        art: [
            "╭──ORR───╮",
            "│ CAFE   │",
            "│        │",
            "│        │",
            "╰────────╯"
        ]
    },
    {
        name: "Parc Laurier",
        artist: "po_pla",
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
        artist: "thri_tur",
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
        artist: "car_cari",
        art: [
            "╭LES─────╮",
            "│PETITS  │",
            "│FRERES  │",
            "│ ★ ♥ ★  │",
            "╰────────╯"
        ]
    },
    {
        name: "Westmount Greenhouse",
        artist: "gar_gaz",
        art: [
            "  ╱▔▔▔╲   ",
            " ╱ ☼ ◉ ╲  ",
            "│WEST   │ ",
            "│MOUNT  │ ",
            "│ GREEN │ ",
            "│░HOUSE░│ ",
            "╰───────╯ "
        ]
    },
    {
        name: "Chatime",
        artist: "bo_bu",
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
        name: "Frédéric_Back_Park",
        artist: "orb_oce",
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
        artist: "mar_mar",
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
        artist: "sa_sku",
        art: [
            "╭SAMOSA─╮ ",
            "│ KING  │ ",
            "│  $1   │ ",
            "│ ◢■◣   │ ",
            "│░~~~~E░│ ",
            "╰───────╯ "
        ]
    },
    {
        name: "Gnocchi $5",
        artist: "pa_po",
        art: [
            "╭GNOCCHI╮ ",
            "│  $5   │ ",
            "│ ◢■◣   │ ",
            "│ ◢■◣   │ ",
            "╰───────╯ "
        ]
    },
    {
        name: "St-Viateur Bagel",
        artist: "bag_bad",
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
        artist: "tun_tap",
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
        name: "SEGALS",
        artist: "deal_ding",
        art: [
            "╔════════╗",
            "║SEGALS. ║",
            "║DEALZ   ║",
            "║ DEALZ  ║",
            "╚═══██═══╝"
        ]
    },
    {
        name: "SWIRL",
        artist: "mclf",
        art: [
            "┌~~~~~~~─┐",
            "│~~SWIRL~│",
            "│~YUM~~~ │",
            "│ (/(\\))|│",
            "└~~~~~~~~┘"
        ]
    },
    {
        name: "MYRIADE",
        artist: "fli-fam",
        art: [
            "┌✺─✺─✺─✺┐ ",
            "┌───┴┬───┘",
            "│        │",
            "│MYRIADE │",
            "│        │",
            "└────────┘"
        ]
    },
    {
        name: "DEATH_FACT",
        artist: "bag_bad",

        art: [
            "┌────────┐",
            "│74^^^^^ │",
            "│EACH^^^ │",
            "│YEAR^^^^│",
            "│74^^^^^ │",
            "└────────┘"
        ]
    },
    {
        name: "AREPARA",
        artist: "bag_bad",

        art: [
            "┌────────┐",
            "│AREPARA │",
            "│  (0)   │",
            "│        │",
            "└────────┘"
        ]
    },

    {
        name: "BEAUTY_S",
        artist: "lio-lip",
        art: [
            "┌────────┐",
            "│BEAUTY'S│",
            "│LUNCH   │",
            "│ *< >*  │",
            "└────────┘"
        ]
    },
    {
        name: "SAQ",
        artist: "dil-ram",
        art: [
            "   _____  ",
            "  ╱ ╲╱ ╲  ",
            "╭╴SAQ    │",
            "│ WINES  │",
            "│ SPIRITS│",
            "└────────┘"
        ]
    },



    {
        name: "DRAWN_QUARTER",
        artist: "lio-lip",
        art: [
            "   ____   ",
            " ╱ ╲╱╲╱╲  ",
            "│DRAWN & │",
            "│QUARTER │",
            "│ COMICS │",
            "╰────────┘"
        ]
    },

    {
        name: "MAMIE_CLAFOUTIS",
        artist: "des",
        art: [
            " ┌───────┐",
            " │♥ MAMIE│",
            " │Claftis│",
            "_│ΞΞΞΞ│ ☐│",
            "_╰────┴──╯",
            "〚︸︸〛_♞_   "
        ]
    },
    {
        name: "FOUFOUNES",
        artist: "BE",
        art: [
            "⚡ϟϟϟϟϟϟ⚡  ",
            "◢ϟFOUFO ϟ◣",
            "││FOUNES │",
            "││ELEC   │",
            "╰┴──────┴╯"
        ]
    },
    {
        name: "CASERNE26",
        artist: "dz_ntz",
        art: [
            "    ◢◣    ",
            " ◢✦✦  ✦✦◣ ",
            "◢✶✶FIRE✶✶◣",
            "││CASERNE│",
            "││✧✧26✯✧││",
            "╰┴──────┴╯"
        ]
    },

    {
        name: "CHEVAL_BLANC",
        artist: "bag_bad",

        art: [
            "┌──╦──╦──┐",
            "│CHEVAL  │",
            "│BLANC   │",
            "│        │",
            "└───╩────┘"
        ]
    },
    {
        name: "BOUSTAN",
        artist: "bag_bad",

        art: [
            "   ╱╲╱╲   ",
            " ╱╲╱╲╱╲╱╲ ",
            "╭─BOUSTAN│",
            "│MUSHROOM│",
            "│ GOOD ! │",
            "└────────┘"
        ]
    },


    {
        name: "YMCA",
        artist: "bag_bad",

        art: [
            "┌────────┐",
            "│YMCA    │",
            "│ {{}}}} │",
            "└────────┘"
        ]
    },
    {
        name: "CAFE_OLIMPICO",
        artist: "katie jensen",
        art: [
            "⌯⌯⌯⤚⤙⌯⌯⌯⌯⌯",
            "│ ⊹ CAFÉ │",
            "│OLIMPICO│",
            "│ ☕  ♨   │",
            "└───⟿───┘ "
        ]
    },
    {
        name: "MONT_ROYAL",
        art: [
            "┌────────┐",
            "│MONT    │",
            "│  /   \\ │",
            "│ /  ^  \\│",
            "│ ROYAL  │",
            "└⚘─⚘──⚘─⚘┘"
        ]
    },
    {
        name: "SOUBOIS",
        art: [
            " ╭──────╮ ",
            "╭│SOUBO│╮ ",
            "│││IS   ││",
            "│││     ││",
            "╰┴┴────┴╯ "
        ]
    },
    {
        name: "SANTROPOL",
        artist: "mclf",
        art: [
            "┌◢╱╲◣◢╱╲◣ ",
            "│SANTRO  │",
            "│ POL    │",
            "│ (___)  │",
            "└────────┘"
        ]
    },
    {
        name: "INFINITE_LIBRARY",
        art: [
            "┌────────┐",
            "│INFINITE│",
            "│LIBRARY │",
            "│        │",
            "└────────┘"
        ]
    },

    {
        name: "MARCHE_JEAN_TALON",
        artist: "bag_bad",
        art: [
            "┌─━━━╋━━─┐",
            "│MARCHE  │",
            "│JEAN    │",
            "│ TALON  │",
            "└∞──∞∞──∞┘"
        ]
    },
    {
        name: "CASA_DEL_POPOLO",
        art: [
            "┏━━╋━━╋━━┓",
            "│CASA DEL│",
            "│ POPOLO │",
            "│ %%%%   │",
            "┗━━╋━━╋━━┛"
        ]
    },
    {
        name: "PARC_LAFONTAINE",
        art: [
            "┌────────┐",
            "│PARC LA │",
            "│FONT    │",
            "│  AINE  │",
            "└─⚘⚘⚘⚘⚘──┘"
        ]
    },
    {
        name: "CAMPI",
        art: [
            "┌────‡───┐",
            "│ CAFE ‡ │",
            "│ DEI ‡  │",
            "│CAMPI ‡ │",
            "└∞─∞∞──∞┘ "
        ]
    },
    {
        name: "QUAI_DES_BRUMES",
        artist: "bag_bad",

        art: [
            "┌◬◬◬◬◬◬◬◬┐",
            "│ QUAI   │",
            "│ DES    │",
            "│ BRUMES │",
            "└─∿∿∿∿∿∿─┘"
        ]
    },

    {
        name: "CLUB_SODA",
        artist: "bag_bad",

        art: [
            "┌∃∃─∃∃─∃∃┐",
            "│ CLUB   │",
            "│ SODA   │",
            "│ MUSIC  │",
            "└∄∄─∄∄─∄∄┘"
        ]
    },
    {
        name: "REUBEN",
        artist: "bag_bad",

        art: [
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
        name: "BIXI",
        artist: "Shreddy Acorn",
        artist: "bag_bad",

        art: [
            " * * * * *",
            " ,,,,,,,,,",
            " |  BIXI |",
            " |⚇ BIKE⚇|",
            " │ []_[] │",
            "/========\\"
        ]
    },
    {
        name: "ATWATER",
        artist: "bag_bad",

        art: [
            "   ╱■╲    ",
            " ╱╲╱╲╱╲   ",
            "│ATWATER│ ",
            "│ ⊙ FOOD│ ",
            "└────────┘"
        ]
    },




    {
        name: "BAGEL_BEAUBIEN",
        artist: "bag_bad",

        art: [
            "╔════════╗",
            "║ BAGEL  ║",
            "║BEAUBIEN║",
            "║ ⊙ ⊙ ⊙  ║",
            "╚════════╝"
        ]
    },

    {
        name: "PIKOLO",
        artist: "bag_bad",

        art: [
            "╔════════╗",
            "║ PIKOLO ║",
            "║ CAFE   ║",
            "║        ║",
            "╚════════╝"
        ]
    },

    {
        name: "RUE_LAJEUNESSE",
        artist: "bag_bad",

        art: [
            "    ||    ",
            "  |    |  ",
            " |      │ ",
            "|  RUE   │",
            "│LAJEUN- |",
            "╰────────╯"
        ]
    },
    {
        name: "APT11",
        artist: "bag_bad",

        art: [
            "██████████",
            "║ ░ ░░ ░ ║",
            "║ ░ ░░ ░ ║",
            "║ ────── ║",
            "║ ▒▒▒▒▒▒ ║",
            "╰────────╯"
        ]
    },
    {
        name: "APT12",
        artist: "bag_bad",

        art: [
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
        name: "APT14",
        artist: "bag_bad",

        art: [
            "▓▓▓▓▓▓▓▓▓▓",
            "║ ▲ ▲ ▲  ║",
            "║ ▲ ▲ ▲  ║",
            "║ ██████ ║",
            "╰╩╩╩╩╩╩╩╩╯"
        ]
    },
    {
        name: "PETIT_LAURIER",
        artist: "bag_bad",

        art: [
            "╭────────╮",
            "│PETIT   │",
            "│LAURIER │",
            "│CAFE    │",
            "༼つ╹ ╹ ༽つ│ ",
            "╰────────╯"
        ]
    },
     {
        name: "Cinéma du Parc",
        artist: "reel_lem",
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
        artist: "esp_eag",
        art: [
            "╭OLIMPICO╮",
            "│ESPRESSO│",
            "│ CAFFE  │",
            "│░1970░░ │",
            "╰────────╯"
        ]
    },
    {
        name: "Habitat_67",
        artist: "pix_peng",
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
        artist: "cos_koa",
        art: [
            "   ╱◇◇╲   ",
            "  ◇◇◇◇◇◇  ",
            " ◇◇◇◇◇◇◇◇ ",
            " ◇◇◇◇◇◇◇◇ ",
            "  ◇◇◇◇◇◇  ",
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
        artist: "cr_owl",
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
        artist: "star_slo",
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
        name: "ENCORE_BOOKS",
        artist: "Michael_Iantorno",
        art: [
            "▄▄▄▄▄▄▄▄▄▄",
            "▌◘ENCORE⦿▐",
            "┣─┬─┬─┬──┨",
            "│⋰│▨│█│⋰⋰│",
            "└─┴─┴─┴──┘"
        ]
    },
    {
        name: "Phi Centre",
        artist: "cr_owl",
        art: [
            "╔═══PHI══╗",
            "║ ◉ ART ◉║",
            "║▓▓▓▓▓▓▓▓║",
            "║        ║",
            "║▓▓▓▓▓▓▓▓║",
            "╚════════╝"
        ]
    },
    {
        name: "Musée d'Art Contemporain",
        artist: "melo_kit",
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
        artist: "su_fox",
        art: [
            "   ◢■■◣   ",
            "╭{      )╮",
            "│   ░░  │ ",
            "│  ░   ░ │",
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
        artist: "ano_pan",
        art: [
            " ╱▔▔▔▔▔▔▔╲",
            "│FAIRMOUNT│",
            "│ ◯ (o) ◯│",
            "│BAGELS. │",
            "╰────────╯"
        ]
    },

    {
        name: "Casa d'Italia",
        artist: "whi_wha",
        art: [
            "╔═CASA═══╗",
            "║D'ITALIA║",
            "║ ★ ★ ★  ║",
            "║▓▓▓▓▓▓▓▓║",
            "║CULTURA ║",
            "╚════════╝"
        ]
    },

    {
        name: "McCord Museum",
        artist: "gen_ot",
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
        artist: "vel_de",
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
        artist: "ja_gir",
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
        artist: "neon_fer",
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
        artist: "snu_se",
        art: [
            "╭DEPAN──╮ ",
            "│ NEUR  │ ",
            "│ CAFE  │ ",
            "╰───────╯ "
        ]
    },
    {
        name: "Drawn & Quarterly",
        artist: "jazz_gir",
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
        name: "TAROT_CARDS",
        artist: "bag_bad",

        artist: "d6",
        art: [
            " ◢⬒⬒◣◢⬒⬒◣ ",
            "◢⊞TAROT♀⊞◣",
            "││♂CARDS││",
            "││⊞⊞∏∏⊞⊞││",
            "╰┴──────┴╯"
        ]
    },
    {
        name: "MAISON_VELOS",
        artist: "B. R. Atislava",
        art: [
            " ︻︻︻︻︻    ",
            "|MAISON  |",
            "|⌾VÉLOS⌾ |",
            "|========|",
            "|==〚 〛==| ",
            ".........."
        ]
    },
    {
        name: "COOP_LA_MAISON",
        artist: "nexy",
        art: [
            " ♡♥♡♥♡♥♡♥ ",
            "││COOP LA╮",
            "││MAISON │",
            "││☆.｡* ⚧││",
            "╰┴──────┴╯"
        ]
    },
    {
        name: "MAISON_VERTE",
        artist: "KDI",
        art: [
            "   /\\  /\\\\",
            "/\\ ||_/\\||",
            "||/__ ||/|",
            "|Maison| |",
            "|Verte | |",
            "|______|/ "
        ]
    },
    {
        name: "PATATERIE",
        artist: "nexy",
        art: [
            "┌────────┐",
            "│ ⊞ ⊞ ⊞  │",
            "│PATATES │",
            "   . ° ·  ",
            "   * + ˙  ",
            "└────────┘"
        ]
    },
    {
        name: "BOITE_A_MUSIQUE",
        artist: "katie jensen",
        art: [
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
        name: "PHONOPOLIS",
        artist: "FP",
        art: [
            "[[[[[]]]]]",
            "│{PHONO} │",
            "│││POLIS││",
            "│││♪ ♫  ││",
            "╰┴┴────┴┴╯"
        ]
    },
    {
        name: "LUX_CAFE",
        artist: "Bea",
        art: [
            " ❀⁑╲☾☽╱⁑❀ ",
            "╭│⁂ LUX⁂╮ ",
            "││⁂CAFÉ⁂│ ",
            "││⁂☕☾☽⁂││ ",
            "╰┴┴─────┴╯"
        ]
    },
    {
        name: "CHEZ_CLAUDETTE",
        artist: "MOTCH",
        art: [
            " ◢╱╲◣ ◢╱╲◣",
            "╭│CHEZ   ╮",
            "│CLAUDET │",
            "│  TE    │",
            "╰┴──────┴╯"
        ]
    },
    {
        name: "CAFE_MYRIADE",
        artist: "FADA",
        art: [
            " ◢╱╲◣ ◢╱╲◣",
            "╭││CAFE │╮",
            "│││MYRIAD│",
            "│││ E  ☕││",
            "╰┴┴─────┴╯"
        ]
    },
    {
        name: "RENAISSANCE",
        artist: "katie jensen",
        art: [
            "▓▓▓▓▓▓▓▓▓▓",
            "┇RENAIS- ┇",
            "┇SANCE   ┇",
            "└✂-✂-✂⍁-┘┇"
        ]
    },
    {
        name: "ST_VIATEUR",
        artist: "Nathan",
        art: [
            " ________ ",
            "╭│ST    │╮",
            "││VIATEUR│",
            "││ ⊙⊙⊙  ││",
            "╰┴──────┴╯"
        ]
    },
    {
        name: "CINEMA_BEAUBIEN",
        artist: "Nathan",
        art: [
            " _________",
            "╭ CINEMA ╮",
            "│BEAUBIEN│",
            "│  ⊙⊙⊙   │",
            "|   ✂    |",
            "╰────────╯"
        ]
    },
    {
        name: "TURBO_HAÜS",
        artist: "KingBain",
        art: [
            "⬣⬒⬒⬒⬒⬒⬒⬒⬒⬣",
            "⬣TURBO ↱ ⬣",
            "⬣ ⇎⇎⇎⇎   ⬣",
            "⬣  HAÜS  ⬣",
            "⬣⬓⬓⬓⬓⬓⬓⬓⬓⬣"
        ]
    },
    {
        name: "CINEMA_DU_PARC",
        artist: "Michael Iantorno",
        art: [
            "︻︻︻︻︻     ",
            "│⬒CINEMA │",
            "│⬒⬒ DU ⬒⬒│",
            "│⬒PARC⬒⬒⬒│",
            "│⍂⍂⍂⌼⍂⍂⍂⍂│",
            "︼︼︼︼︼     "
        ]
    },
    {
        name: "BENELUX",
        artist: "Avery",
        art: [
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
        name: "JEWISH_GENERAL",
        artist: "Daniel O",
        art: [
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
        name: "DEPOT",
        artist: "weftandweaving",
        art: [
            "╭ DÉPÔT  ╮",
            "│││    ╭⌼│",
            "│││    │⌼│",
            "│││ ⊡  ╰⌼│",
            "╰┴┴─⍌────╯"
        ]
    },
    {
        name: "MAXI",
        artist: "Dharmy",
        art: [
            " ◢⬒⬒⬒⬒⬒⬒◣ ",
            "◢⬒       ⬒◣",
            "│|  FOOD|│",
            "││CHEAP ││",
            "│$      $│",
            "╰‰‰‰‰─⊟⊟┴╯"
        ]
    },
    {
        name: "CAFE_NOBLE",
        artist: "Lucas",
        art: [
            "▌▱▱▱▱▱▱▱▱▐",
            "▌≜≜≜≜≜≜≜≜▐",
            "▌▞▚ ▞▚ ▞▚▐",
            "▌▚▞ ▚▞ ▚▞▐",
            "▌    CAFE▐",
            "▌NOBLE   ▐",
            "▌⌈⌉⌈    ⌉▐",
            "▌  ⌊    ⌋▐",
            "▌        ▐",
            "▌⌊⌋      ▐"
        ]
    },
    {
        name: "BIOSPHERE_ON_A_STICK",
        artist: "SarahW",
        art: [
            "  ████████",
            " ██≑ ╔╗███",
            " ██ ≜╚╝ ≑█",
            " ███ ▉▯ ██",
            "  ███≑███ ",
            "     ≑    ",
            "     ≑    ",
            "     ≑    ",
            "    ≑≑≑   "
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
        name: "DANNY'S",
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
        name: "LE_CABANON",
        artist: "ROMZY",
        art: [
            "    ⚘⚘    ",
            "   ╭┻┺╮   ",
            "   ├✪✪┤   ",
            "╔══⌓═════╗",
            "║LE⚙     ║",
            "║CABANON★║",
            "║        ║",
            "║░░⚑░░⚑░░║",
            "╚════════╝",
            "   ╱  ╲   "
        ]
    },
    {
        name: "JEANS_JEANS_JEANS",
        artist: "Ellen",
        art: [
            "   ≜≜≜≜   ",
            "  ◇◇◇◇◇◇  ",
            "  ╱▧▧▧▧╲  ",
            "▛⋰  ██  ⋱▜",
            "▌░jeans ░▐",
            "▌▒ jeans▒▐",
            " ▒jeans ▒ ",
            "    ▛▜    ",
            " ◣/\▭▭/\◢ "
        ]
    },
    {
        name: "CINÉMA_L'AMOUR",
        artist: "BobWithHair",
        art: [
            "▮▤▤▤▤▤▤▤▤▮",
            "┇┌┐ ┌┐ ┌┐┇",
            "┇└┘║└┘ └┘┇",
            "┇┌┐║┌┐ ┌┐┇",
            "┇└┘║└┘⠀└┘┇",
            "┇⠀CINEMA⠀┇",
            "┇⠀L'AMOUR┇",
            "┇┎─────┰─┨",
            "┗┻━━━━━┹─┚"
        ]
    },
    {
        name: "DANS_MON_HOOD",
        artist: "Cinzia",
        art: [
            "      /\\  ",
            "     /  \\ ",
            "   /    ∥\\",
            "  DANS  ∥ ",
            " / MON ⧂- ",
            "/HOOD  /▊|",
            "|     |▊▊|",
            "|     |▊▊|"
        ]
    },
    {
        name: "BOTANICAL_GARDENS",
        artist: "Paloma",
        art: [
            "❀ ◑ ❃ ⍟  ⠗",
            "⌇◍❂ ✩ ⌇ ☆ ",
            "BOTANICAL⌡",
            "GARDEN ⚙ ○",
            "∿   ⠟  ⌠ ⚘"
        ]
    },



];


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






