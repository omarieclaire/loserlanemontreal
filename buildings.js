
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
        name: "SCHWARTZ_DELI",
        art: [
            "╔════════╗",
            "║SEGALS. ║",
            "║DEALZ   ║",
            "║ GOOD   ║",
            "║ DEALZ  ║",
            "╚═══██═══╝"
        ]
    },
    {
        name: "PHO_BAC",
        artist: "mclf",
        art: [
            "┌~~~~~~~─┐",
            "│~~SWIRL~│",
            "│~YUM~~~ │",
            "│ (/(\\)\\)│",
            "│ \\_\\_/_/│",
            "└~~~~~~~~┘"


     
        ]
    },
    {
        name: "MYRIADE",
        art: [
            "┌✺─✺─✺─✺┐",
            "┌───┴┬───┘",
            "│        │",
            "│MYRIADE │",
            "│        │",
            "└────────┘"
        ]
    },
    {
        name: "DEATH_FACT",
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
        art: [
            "┌────────┐",
            "│AREPARA │",
            "│  (0)   │",
            "|        │",
            "└────────┘"
        ]
    },
    {
        name: "BRUTOPIA",
        art: [
            "┌────────┐",
            "│BRUTO   │",
            "│ PIA    │",
            "│  BAR   │",
            "└────────┘"
        ]
    },

    {
        name: "BEAUTY_S",
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
        name: "FAMEUX",
        art: [
            "⸨⎻⎻⎻◄o►⎻⎻⸩",
            "│FAMEUX  │",
            "│⊰BURGER⊱│",
            "│ 99 ♡   │",
            "╚═⳺⳻⳺⳻⳺⳻═╝"
        ]
    },
    {
        name: "JEANNE_MANCE",
        art: [
            "┌────────┐",
            "│JEANNE  │",
            "│MANCE   │",
            "│        │",
            "└────────┘"
        ]
    },
    {
        name: "DRAWN_QUARTER",
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
        name: "LE_DEVOIR",
        artist: "AT",
        art: [
            "┌────────┐",
            "│ϟ LE   ϟ│",
            "│ϟDEVOIRϟ│",
            "│JOURNAL││",
            "│ϟϟϟϟϟϟϟ││",
            "╰───────┴╯"
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
            "〚︸︸〛_♞_"
        ]
    },
        {
        name: "FOUFOUNES",
        artist: "BE",
        art: [
            "⚡ϟϟϟϟϟϟ⚡",
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
            "    ◢◣   ", 
            " ◢✦✦  ✦✦◣",
            "◢✶✶FIRE✶✶◣",
            "││CASERNE│",
            "││✧✧26✯✧││",
            "╰┴──────┴╯"
        ]
    },
        {
        name: "LAFONTAINERINK",
        artist: "AT",
        art: [
            "┌────────┐",
            "│❄   ❅  ❄│",
            "│  LA    │",
            "│FONTAINE│",
            "│ RINK   │",
            "│❄   ❅  ❄│",
            "╰┴──────┴╯"
        ]
    },
    {
        name: "CHEVAL_BLANC",
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
        art: [
            "   ╱╲╱╲   ",
            " ╱╲╱╲╱╲╱╲",
            "╭─BOUSTAN│",
            "│MUSHROOM│",
            "│ GOOD ! │",
            "└────────┘"
        ]
    },
    {
        name: "AMIR",
        art: [
            "╔═══◊◊◊══╗",
            "│ AMIR   │",
            "│RESTO   │",
            "│        │",
            "└────────┘"
        ]
    },
    {
        name: "DIPERIE",
        artist: "mclf",
        art: [
            "╒═════╤══╕",
            "│⋰⋱⋰⋱  │",
            "│ │DIPÉRI│",
            "│ │E ICE │",
            "│ │CREAM │",
            "| └──────│"
        ]
    },
    {
        name: "MILE_END",
        art: [
            "┌───[]───┐",
            "│MILE END│",
            "│        │",
            "│  [[]]  │",
            "└────────┘"
        ]
    },
    {
        name: "SQDC",
        art: [
            "┌═▲═▼═▼═─┐",
            "│SQDC    │",
            "│        │",
            "│  WEEEED│",
            "│  WEEEED│",
            "└────────┘"
        ]
    },
    {
        name: "BOULANGIE",
        art: [
            "┌──(█)───┐",
            "│BOULANG │",
            "│ ERIE   │",
            "│ YUM    │",
            "└────────┘"
        ]
    },
    {
        name: "BOITANOIR",
        art: [
            "┌─(⌒∩∩⌒)─┐",
            "│BOITE   │",
            "│ NOIR   │",
            "│ VHS    │",
            "│ DVD    │",
            "│ *&*&*  │",
            "└────────┘"
        ]
    },
    {
        name: "YMCA",
        art: [
            "┌────────┐",
            "│YMCA  │",
            "│ {{}}}} │",
            "└────────┘"
        ]
    },
    {
        name: "CAFE_OLIMPICO",
        art: [
            "┌───‡────┐",
            "│ CAFE   │",
            "«OLIMPICO»",
            "│  ‡‡‡   │",
            "└────────┘"
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
            "╭│SOUBO│╮",
            "│││IS   ││",
            "│││    ││",
            "╰┴┴────┴╯"
        ]
    },
    {
        name: "SANTROPOL",
        artist: "mclf",
        art: [
            "┌◢╱╲◣◢╱╲◣",
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
        name: "FAIRMOUNT",
        art: [
            "┌────────┐",
            "│FAIR    │",
            "│MOUNT   │",
            "│ ⊙⊙⊙⊙   │",
            "└────────┘"
        ]
    },
    {
        name: "MARCHE_JEAN_TALON",
        art: [
            "┌─━━━╋━━─┐",
            "│MARCHE  │",
            "│JEAN    │",
            "│ TALON  │",
            "└∞──∞∞──∞┘"
        ]
    },
    {
        name: "MAINOMAINON",
        art: [
            "┌─◢───◣──┐",
            "│MAINOM  │",
            "│AINON   │",
            "│        │",
            "└─◥───◤──┘"
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
            "┌────‡──┐",
            "│ CAFE ‡ │",
            "│ DEI ‡  │",
            "│CAMPI ‡ │",
            "└∞─∞∞──∞┘"
        ]
    },
    {
        name: "QUAI_DES_BRUMES",
        art: [
            "┌◬◬◬◬◬◬◬◬┐",
            "│ QUAI   │",
            "│ DES    │",
            "│ BRUMES │",
            "└─∿∿∿∿∿∿─┘"
        ]
    },
    {
        name: "PARC_DU_PORTUGAL",
        art: [
            "┌──⫷─⫸──┐",
            "│PARC DU │",
            "│PORTUGAL│",
            "│ GREEN  │",
            "└▒░▒▓░▓▒░┘"
        ]
    },
    {
        name: "CLUB_SODA",
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
        art: [
            "    ┌✷─✷┐",
            "  ┌─✷─✷─┐",
            "┌─✷─✷─✷─┐",
            "│ MAYNARD│",
            "│POUTINE │",
            "│        │",
            "└────────┘"
        ]
    },
    {
        name: "BIXI",
        art: [
            "╔══╤══╤══╗",
            "║  │  │  ║",
            "║⚇⚇BIXI⚇⚇║",
            "║⚇⚇BIKE⚇⚇║",
            "║  │  │  ║",
            "╚══╧══╧══╝"
        ]
    },
    {
        name: "ATWATER",
        art: [
            "   ╱■╲    ",
            " ╱╲╱╲╱╲   ",
            "╱╲╱╲╱╲╱╲  ",
            "│ ATWATER│",
            "│ MARKET │",
            "└────────┘"
        ]
    },
    {
        name: "BARRACA",
        artist: "MCLF",
        art: [
            "╔════════╗",
            "║BARRACA ║",
            "║        ║",
            "║  PERÚ  ║",
            "║ ╱■╲ ╱■╲║",
            "╚════════╝"
        ]
    },
    {
        name: "LA_BANQUISE",
        art: [
            "┌─═══─═══┐",
            "│LA BAN  │",
            "│ QUISE  │",
            "│░▒█▒░█▒░│",
            "│POUTINE!│",
            "└────────┘"
        ]
    },
    {
        name: "CHEZ_JOSE",
        art: [
            "┌═══════─┐",
            "│CHEZ    │",
            "│ JOSÉ   │",
            "│  ☼☼☼   │",
            "└────────┘"
        ]
    },
    {
        name: "DIEU_DU_CIEL",
        art: [
            "┌─═══─═══┐",
            "│DIEU DU │",
            "│  CIEL  │",
            "│ ♨ ♨ ♨  │",
            "└────────┘"
        ]
    },
    {
        name: "PHONOPOLIS",
        art: [
            "┌══════─═┐",
            "│PHONO   │",
            "│ POLIS  │",
            "│♪ ♫ ♪ ♫ │",
            "└────────┘"
        ]
    },
    {
        name: "KAZU",
        art: [
            "╔═══════─╗",
            "║  KAZU  ║",
            "║ RAMEN  ║",
            "║  HOT!  ║",
            "╚════════╝"
        ]
    },
    {
        name: "BIERES_BROS",
        art: [
            "┌────╦═══┐",
            "│BIÉRES  │",
            "│ BROS   │",
            "│ ♨ ♨ ♨  │",
            "└────────┘"
        ]
    },
    {
        name: "GRUMPY",
        art: [
            "┌────────┐",
            "│GRUMPY  │",
            "│ BOOKS  │",
            "│[][][][]│",
            "└────────┘"
        ]
    },
    {
        name: "ROOM_237",
        art: [
            "┌──╱╲╱╲──┐",
            "│ ROOM   │",
            "│  237   │",
            "│  ☾☾☾   │",
            "└────────┘"
        ]
    },
    {
        name: "PARC_JARRY",
        art: [
            "┌───────┐",
            "│PARC   │",
            "│JARRY  │",
            "│ ░▒▓   │",
            "└───────┘"
        ]
    },
    {
        name: "BILY_KUN",
        art: [
            "╔═══════╗",
            "║BILY KUN║",
            "║ ░▒█▓  ║",
            "║  CZECH║",
            "╚═══════╝"
        ]
    },
    {
        name: "CASSE_CROUTE_BENNY",
        art: [
            "┌────────┐",
            "│CASSE   │",
            "│CROÛTE  │",
            "│ BENNY  │",
            "└────────┘"
        ]
    },
    {
        name: "NOTRE_DAME",
        art: [
            "   ╱▲╲    ",
            " ╱▲▲▲▲╲   ",
            "│NOTRE   │",
            "│ DAME   │",
            "│ BASIL  │",
            "└────────┘"
        ]
    },
    {
        name: "STASH_CAFE",
        art: [
            "╔═══════╗",
            "║ STASH  ║",
            "║ CAFÉ   ║",
            "║░░░░░░░ ║",
            "╚═══════╝"
        ]
    },
    {
        name: "VIEUX_DUBLIN",
        art: [
            "┌──═══───┐",
            "│ VIEUX  │",
            "│ DUBLIN │",
            "│ ♣ ♣ ♣  │",
            "└────────┘"
        ]
    },
    {
        name: "GARDE_MANGER",
        art: [
            "┌════════┐",
            "│GARDE   │",
            "│MANGER  │",
            "│ CHEF   │",
            "└────────┘"
        ]
    },
    {
        name: "LAURIER_EST",
        art: [
            "┌────────┐",
            "│LAURIER │",
            "│  PARC  │",
            "│  →→→   │",
            "└────────┘"
        ]
    },
    {
        name: "BAGEL_BEAUBIEN",
        art: [
            "╔═══════╗",
            "║ BAGEL  ║",
            "║BEAUBIEN║",
            "║ ⊙⊙⊙⊙   ║",
            "╚═══════╝"
        ]
    },
    {
        name: "PARC_METRO",
        art: [
            "┌═══╦═══┐",
            "│MÉTRO   │",
            "│ PARC   │",
            "│   M    │",
            "└────────┘"
        ]
    },
    {
        name: "JARDIN_BOTANIQUE",
        art: [
            "┌────────┐",
            "│JARDIN  │",
            "│BOTANI  │",
            "│ QUE    │",
            "└⚘─⚘──⚘─⚘┘"
        ]
    },
    {
        name: "TAM_TAMS",
        art: [
            "┌────────┐",
            "│ TAM    │",
            "│ TAMS   │",
            "│ ♫♪♫♪   │",
            "└────────┘"
        ]
    },
    {
        name: "PIKOLO",
        art: [
            "╔═══════╗",
            "║ PIKOLO ║",
            "║ESPRESSO║",
            "║       ║",
            "╚═══════╝"
        ]
    },
    {
        name: "BISCUITERIE_OSCAR",
        art: [
            "┌────────┐",
            "│BISCUIT │",
            "│ ERIE   │",
            "│ OSCAR  │",
            "└────────┘"
        ]
    },
      {
        name: "JANKIES_PLACE",
        art: [
          "╔════════╗",
          "║JANKIE'S║",
          "║ ─PLACE-║",
          "║ ▒▒▒▒▒▒ ║",   
          "╰────────╯",
        ],
      },
      {
        name: "APT8",
        art: [
          "▓▓▓▓▓▓▓▓▓▓",
          "║ ► ◄► ◄ ║",
          "║ ► ◄► ◄ ║",
          "║ ══════ ║",
          "║ ░░░░░░ ║",
          "╰╩╩╩╩╩╩╩╩╯",
        ],
      },
      {
        name: "48_MILLION",
        art: [
          "██████████",
          "║ ◆ 48 ◆ ║",
          "║ MILLION║",
          "║ ══════ ║",
          "║ ▒▒▒▒▒▒ ║",
          "╰╩╩╩╩╩╩╩╩╯",
        ],
      },
    
      {
        name: "APT10",
        art: [
          "▓▓▓▓▓▓▓▓▓▓",
          "║ ✱ ✱✱ ✱ ║",
          "║ ✱ ✱✱ ✱ ║",
          "║ ────── ║",
          "║ ░░░░░░ ║",
          "╰╩╩╩╩╩╩╩╩╯",
        ],
      },
      {
        name: "RUE_LAJEUNESSE",
        art: [
             "    ||    ",
             "  |    |  ",
             " |      │ ",
             "|  RUE   │",
             "│LAJEUN- |",
             "╰────────╯"
          ],
      },
  
      {
        name: "APT11",
        art: [
          "██████████",
          "║ ░ ░░ ░ ║",
          "║ ░ ░░ ░ ║",
          "║ ────── ║",
          "║ ▒▒▒▒▒▒ ║",
          "╰────────╯",
        ],
      },
    
      {
        name: "APT12",
        art: [
          "▓▓▓▓▓▓▓▓▓▓",
          "║ ○●● ●● ║",
          "║ ○●● ●● ║",
          "║ ○●● ●● ║",
          "║ ────── ║",
          "║ ░░░░░░ ║",
          "╰╩╩╩╩╩╩╩╩╯",
        ],
      },
    
    //   {
    //     name: "APT13",
    //     art: [
    //       "██████████",
    //       "║ ══════ ║",
    //       "║ ░░░░░░ ║",
    //       "╰────────╯",
    //     ],
    //   },
    
      {
        name: "APT14",
        art: [
          "▓▓▓▓▓▓▓▓▓▓",
          "║ ▲ ▲ ▲  ║",
          "║ ▲ ▲ ▲  ║",
          "║ ██████ ║",
          "╰╩╩╩╩╩╩╩╩╯",
        ],
      },
      



      {
        name: "PETIT_LAURIER",
        art: [
            "╭────────╮",
            "│PETIT   │",
            "│LAURIER │",
            "│CAFE    │",
            "༼つ╹ ╹ ༽つ│",
            "╰────────╯"
        ],
    },
    {
        name: "PHO_LIEN",
        art: [
            ":::::::::",
            "!       !",
            "!       !",
            "! PHO   !",
            "! LIEN  !",
            "!       !",
            "!       !",
            ":::::::::"
           
        ],
    },
    {
        name: "PLAZA_ST_HUBERT",
        art: [
            "::::::::::",
            "!        !",
            "!PLAZA ST!",
            "! HUBERT !",
            "!   __   !",
            "!  :  :  !",
            "!  :  :  !",
            "::::  ::::"           
        ],
    },
    {
       	name: "TAROT_CARDS",
   	    artist: "d6",
   	    art: [
           	" ◢⬒⬒◣◢⬒⬒◣",
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
            " ︻︻︻︻︻ ",
            "|MAISON  |",
            "|⌾VÉLOS⌾ |",
            "|========|",
            "|==〚 〛==|",
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
        "   ｡𖦹°‧ ",
		"   ⊹ ࣪ ˖ ",
        "└────────┘"

 ]
},

{
    name: "BOITE_A_MUSIQUE",
    artist: "katie jensen",
    art: [
        " ✦ ☾ ✧ ☁  ",
        "≡█▓≡█▓≡█▓≡",
        "⌼ BOÎTE ⌼",
        "⌼   À    ⌼",
        "⌼ MUSIQUE⌼",
 		"⌼ « ▶ ⏏  ⌼",
        "⌼ ⍁⍂ ⍁⍂  ⌼"

 ]
},
{
    name: "SEGAL_CENTRE",
    artist: "katie jensen",
    art: [
        " _________",
        "↼↼↼↼↼⇀⇀⇀⇀⇀",
        "│OUI.    │",
        "│⬚ CENTRE│",
        "╰≛≛≛≛≛≛≛≛╯"
 ]
},


{
    name: "CAFE_OLIMPICO",
    artist: "katie jensen",
    art: [
        "⌯⌯⌯⤚⤙⌯⌯⌯⌯⌯",
        "│ ⊹ CAFÉ │",
        "│OLIMPICO│",
        "│ ☕  ♨  │",
        "└───⟿───┘"
 ]
},

{
    name: "PHONOPOLIS",
    artist: "FP",
    art: [
        "[[[[[]]]]]",
        "│{PHONO}│",
        "│││POLIS││",
        "│││♪ ♫  ││",
        "╰┴┴────┴┴╯"

 ]
},

{
    name: "LUX_CAFE",
    artist: "Bea",
    art: [
        " ❀⁑╲☾☽╱⁑❀",
        "╭│⁂ LUX⁂╮",
        "││⁂CAFÉ⁂│",
        "││⁂☕☾☽⁂│",
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
        " _______",
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
        "︻︻︻︻︻",
        "│⬒CINEMA │",
        "│⬒⬒ DU ⬒⬒│",
        "│⬒PARC⬒⬒⬒│",
        "│⍂⍂⍂⌼⍂⍂⍂⍂│",
        "︼︼︼︼︼"
    ]
},

{
    name: "BENELUX",
    artist: "Avery",
    art: [
        " ◢╱╲◣◢╱╲◣",
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
        "  ╓ ✚ ╖  ",
        "║ ▨GENER▧║",
        "║ ▨AL   ▧║",
        "║ ▨    ▨ ║",
        "╟══EMERG═╢",
        "║   ┍━┑ ⛯║",
        "║   │╬│⛟║"
    ]
},

{
    name: "BIXI",
    artist: "Shreddy Acorn",
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
    " ◢⬒⬒⬒⬒⬒⬒◣",
    "◢⬒ MAXI ⬒◣",
    "│|  FOOD|│",
    "││CHEAP ││",
    "│$      $│",
    "╰‰‰‰‰─⊟⊟┴╯"
    ]
},

{
    name: "SOCIETE_DES_ARTS",
    artist: "",
    art: [
        "┌───────┐",
        "│SOCIÉTÉ│",
        "│DES    │",
        "│ARTS   │",
        "│TECH   │",
        "└───────┘"
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



    
                         

