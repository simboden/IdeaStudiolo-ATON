// Dati degli Artwork pubblicati del Virtual Studiolo --- sono 35 in totale 
//
// legenda delle abbreviazioni:
//
// --- artist role
// AUTHOR   = 'A'
// CREATOR  = 'C'
// PAINTER  = 'P'
// SCULPTOR = 'S'

// --- artwork kind
const artwork_kind = {
    'F' : 'forniture',
    'P' : 'painting',
    'S' : 'statuette',
    'M' : 'medals and coins',
    'D' : 'decorative elem.',
    'A' : 'architecture elem.',
    'G' : 'gems and jewels',
    'X' : 'space' 
}

// -- reference type
// BOOK = 'B'
// SITE = 'S'
// MUSEUM = 'M'
// GALLERY = 'G'
// EXHIBIT = 'E'
// ARTICLE = 'A'
// CHAPTER = 'CH'
// CATALOG = 'C'

// -- reference states
// UNKNOWN                         = 'UK'
// AQUISITION_DATE                 = 'AD'
// LOCATION_IN_STUDIOLO            = 'LS'
// AQUISITION_DATE_AND_LOCATION    = 'AL'
// CURRENT_LOCATION                = 'CL'
// CURRENT_APPEARANCE              = 'CA'
// CURRENT_LOCATION_AND_APPEARANCE = 'CX'
// ALL                             = 'XX'

let Artworks = [
    {
      "id": 1,
      "name": "Door 1",
      "fullname": "Door from studiolo to grotta",
      "kind": "D",
      "medium": "wood, marble",
      "dimensions": "",
      "aq_date": "1522 - 1524",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [
        {
          "name": "Tullio Lombardo",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "A",
          "pos": "page 77",
          "label": "Ventura (2001)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/ventura%202001/titleCreatorYear",
          "states": "UK"
        },
        {
          "kind": "B",
          "pos": "page 174 n.71",
          "label": "Brown (2005)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202005/titleCreatorYear/items/PKUQ35ZN/item-list",
          "states": "UK"
        },
        {
          "kind": "B",
          "pos": "pages 126-30",
          "label": "Brown (1989-90)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/items/itemKey/XE2TAZ75",
          "states": "UK"
        }
      ],
      "asset": [],
      "asset_s": [],
      "asset_v": [
        {
          "name": "porta",
          "label": ""
        }
      ],
      "asset_m": []
    },
    {
      "id": 2,
      "name": "Door2",
      "fullname": "Door from grotta to studiolo",
      "kind": "F",
      "medium": "wood, marble",
      "dimensions": "",
      "aq_date": "1500",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [
        {
          "name": "Gian Cristoforo Romano",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "A",
          "pos": "page 77",
          "label": "Ventura (2001)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/ventura%202001/titleCreatorYear",
          "states": "UK"
        },
        {
          "kind": "B",
          "pos": "pages 45, 91",
          "label": "Brown (2005)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202005/titleCreatorYear/items/PKUQ35ZN/item-list",
          "states": "UK"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Detail (Wikimedia)",
          "url": "https://commons.wikimedia.org/wiki/File:Studiolo_di_Isabella_d%27Este,_dettaglio.jpg",
          "states": "CA"
        }
      ],
      "asset": [],
      "asset_s": [],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 3,
      "name": "Studiolo ceiling",
      "fullname": "Studiolo ceiling",
      "kind": "A",
      "medium": "wood, gold and blue paint",
      "dimensions": "",
      "aq_date": "1519 - 1525",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [
        {
          "name": "Maestro Sebastiano",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "B",
          "pos": "pages 144, 158, 340, 342, 357 n.5",
          "label": "Brown (2005)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202005/titleCreatorYear/items/PKUQ35ZN/item-list",
          "states": "UK"
        },
        {
          "kind": "A",
          "pos": "pages 75, 77",
          "label": "Ventura (2001)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/ventura%202001/titleCreatorYear",
          "states": "UK"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (LombardiaBeniCulturali)",
          "url": "http://www.lombardiabeniculturali.it/opere-arte/schede/MN020-00087/",
          "states": "CX"
        }
      ],
      "asset": [
        "studiolo_soffitto_vano_finestra"
      ],
      "asset_s": [],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 4,
      "name": "Grotta ceiling",
      "fullname": "Grotta ceiling",
      "kind": "A",
      "medium": "wood, gold and blue paint",
      "dimensions": "",
      "aq_date": "1522",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [
        {
          "name": "Maestro Sebastiano",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "CH",
          "pos": "",
          "label": "Brown (1997)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%201997/titleCreatorYear/items/8GEJZ7QN/item-list",
          "states": "UK"
        },
        {
          "kind": "B",
          "pos": "page 144",
          "label": "Brown (2005)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202005/titleCreatorYear/items/PKUQ35ZN/item-list",
          "states": "AD"
        }
      ],
      "asset": [
        "grotta_vp_soffitto"
      ],
      "asset_s": [],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 6,
      "name": "Intarsia 1",
      "fullname": "Cityscape triptych left",
      "kind": "D",
      "medium": "wood",
      "dimensions": "",
      "aq_date": "1506",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [
        {
          "name": "Paolo and Antonio Mola",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "A",
          "pos": "page 78",
          "label": "Ventura (2001)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/ventura%202001/titleCreatorYear",
          "states": "AD"
        },
        {
          "kind": "B",
          "pos": "pages 151, 157-158",
          "label": "Brown (2005)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202005/titleCreatorYear/items/PKUQ35ZN/item-list",
          "states": "UK"
        }
      ],
      "asset": [
        "grotta_vp_parete_E_intarsio2",
        "grotta_vp_parete_E_intarsio4",
        "grotta_vp_parete_E_intarsio1",
        "grotta_vp_parete_E_intarsio3"
      ],
      "asset_s": [
        "intarsia1"
      ],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 7,
      "name": "Candelabra",
      "fullname": "Wooden candelabras (between the painting spaces)",
      "kind": "D",
      "medium": "wood",
      "dimensions": "",
      "aq_date": "1500",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [
        {
          "name": "Paolo and Antonio Mola",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "A",
          "pos": "page 75",
          "label": "Ventura (2001)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/ventura%202001/titleCreatorYear",
          "states": "AL"
        },
        {
          "kind": "B",
          "pos": "pages 354-355",
          "label": "Brown (2005)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202005/titleCreatorYear/items/PKUQ35ZN/item-list",
          "states": "UK"
        }
      ],
      "asset": [],
      "asset_s": [],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 8,
      "name": "Parnassus",
      "fullname": "Mars & Venus / Parnassus",
      "kind": "P",
      "medium": "Tempera on canvas",
      "dimensions": "",
      "aq_date": "1497",
      "inventory": "7322",
      "transcription": "Item, uno altro quadro de pictura apresso il soprascripto, nella medema faciata, quale fu depinto per il quondam messer Andrea Mantinea, nel quale \u00e8 dipinto uno Marte, una Venere che stanno in appiacere, con uno Vulcano e uno Orpheo che suona, et gli sono nove nimphe che ballano.",
      "transcription_tr": "Item, another painted picture near the above mentioned one, on the same wall, which was painted by the late Master Andrea Mantegna, in which is depicted a Mars, a Venus who are standing as they please, with a Vulcan and an Orpheus who is playing music, and there are nine nymphs who are dancing.",
      "artists": [
        {
          "name": "Andrea Mantegna",
          "role": "painter"
        }
      ],
      "references": [
        {
          "kind": "B",
          "pos": "page 45",
          "label": "Brown (2005)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202005/titleCreatorYear/items/PKUQ35ZN/item-list",
          "states": "LS"
        },
        {
          "kind": "B",
          "pos": "pages 117-144, 287-291",
          "label": "Campbell (2004)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/items/itemKey/SBIP53CF",
          "states": "UK"
        },
        {
          "kind": "C",
          "pos": "pages 199-205",
          "label": "Ferino-Pagden (1994)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/items/itemKey/IDZAR3ZU/q/ferino-pagden%201994",
          "states": "UK"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (Louvre)",
          "url": "http://cartelen.louvre.fr/cartelen/visite?srv=car_not_frame&idNotice=14286&langue=en",
          "states": "CL"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "card (Louvre)",
          "url": "https://www.pop.culture.gouv.fr/notice/joconde/000PE025683",
          "states": "AD"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (Wikimedia)",
          "url": "https://commons.wikimedia.org/wiki/File:La_Parnasse,_by_Andrea_Mantegna,_from_C2RMF_retouched.jpg",
          "states": "CA"
        },
        {
          "kind": "C",
          "pos": "",
          "label": "Ferrari (2003)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Ferrari%202003/titleCreatorYear/items/P3JXQJEF/item-list",
          "states": "UK"
        }
      ],
      "asset": [],
      "asset_s": [
        "picture_3"
      ],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 9,
      "name": "Triumph",
      "fullname": "Triumph of the Virtues/Minerva Expelling the Vices from the Garden of Virtue",
      "kind": "P",
      "medium": "tempera on canvas",
      "dimensions": "H. 1.60 m; W. 1.92 m",
      "aq_date": "1497 - 1502",
      "inventory": "7327",
      "transcription": "Item, uno quadro de pictura posto al lato sinistro alla intrata della Crotta, quale fu facto per il suprascripto messer Andrea Mantinea, nel quale \u00e8 depinto la Virt\u00f9 che schaccia li Vitii, fra li quali gli \u00e8 l'Occio conduto da la Inercia e l'Ignorantia portata dall'Ingratitudine e Avaritia.",
      "transcription_tr": "Item, a painted picture placed at the left side of the entry to the Grotta, which was made by the above-noted Master Andrea Mantegna, in which is depicted Virtue who chases away the Vices, among which there are Idleness led by Inertia and Ignorance led by Ingratitude and Avarice",
      "artists": [
        {
          "name": "Andrea Mantegna",
          "role": "painter"
        }
      ],
      "references": [
        {
          "kind": "B",
          "pos": "page 46",
          "label": "Brown (2005)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202005/titleCreatorYear/items/PKUQ35ZN/item-list",
          "states": "UK"
        },
        {
          "kind": "B",
          "pos": "pages 145-168, 343-350",
          "label": "Campbell (2004)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/items/itemKey/SBIP53CF",
          "states": "UK"
        },
        {
          "kind": "C",
          "pos": "pages 210-217",
          "label": "Ferino-Pagden (1994)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/items/itemKey/IDZAR3ZU/q/ferino-pagden%201994",
          "states": "UK"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (Wikimedia)",
          "url": "https://commons.wikimedia.org/wiki/File:VicesVertusMantegna.jpg",
          "states": "CA"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (Louvre)",
          "url": "http://cartelen.louvre.fr/cartelen/visite?srv=car_not_frame&idNotice=14292&langue=en",
          "states": "CL"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "card (Louvre)",
          "url": "https://www.pop.culture.gouv.fr/notice/joconde/000PE025684",
          "states": "AD"
        },
        {
          "kind": "C",
          "pos": "",
          "label": "Ferrari (2003)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Ferrari%202003/titleCreatorYear/items/P3JXQJEF/item-list",
          "states": "UK"
        }
      ],
      "asset": [],
      "asset_s": [
        "picture_6"
      ],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 10,
      "name": "Battle",
      "fullname": "Battle Between Love and Chastity",
      "kind": "P",
      "medium": "oil on canvas",
      "dimensions": "",
      "aq_date": "1503 - 1505",
      "inventory": "7321",
      "transcription": "Item, uno altro quadro de pictura apresso il soprascripto, nella medema faciata, quale fu depinto per il quondam Petro Perosino, nel quale \u00e8 dipinti diversi amorini et altre varie figure de nimphe stimulati da dicti amori, con alcuni arbori a verdura.",
      "transcription_tr": "Item, another painting near the one described above, on the same wall, which was painted by the late Pietro Perugino, in which are painted various Cupids and other various figures of nymphs who are prodded by these Cupids, with some trees and greenery.",
      "artists": [
        {
          "name": "Pietro Perugino",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "B",
          "pos": "page 46",
          "label": "Brown (2005)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202005/titleCreatorYear/items/PKUQ35ZN/item-list",
          "states": "UK"
        },
        {
          "kind": "B",
          "pos": "pages 169-190, 285-86, 290-298",
          "label": "Campbell (2004)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/items/itemKey/SBIP53CF",
          "states": "UK"
        },
        {
          "kind": "C",
          "pos": "pages 221-227",
          "label": "Ferino-Pagden (1994)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/items/itemKey/IDZAR3ZU/q/ferino-pagden%201994",
          "states": "UK"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (Wikimedia)",
          "url": "https://commons.wikimedia.org/wiki/File:Perugino,_lotta_tra_amore_e_castit%C3%A0_1.jpg",
          "states": "CA"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "card (Louvre)",
          "url": "https://www.pop.culture.gouv.fr/notice/joconde/000PE026941",
          "states": "AD"
        },
        {
          "kind": "C",
          "pos": "",
          "label": "Ferrari (2003)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Ferrari%202003/titleCreatorYear/items/P3JXQJEF/item-list",
          "states": "UK"
        }
      ],
      "asset": [],
      "asset_s": [
        "picture_2"
      ],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 11,
      "name": "Coronation",
      "fullname": "Coronation of a Woman Poet / Isabella d\u2019Este in the Kingdom of Love",
      "kind": "P",
      "medium": "oil and tempera? on canvas",
      "dimensions": "h: 164.5 cm; w: 197.5 cm",
      "aq_date": "1504-1506",
      "inventory": "7320",
      "transcription": "Item, uno quadro de pictura de man del quondam messer Lorenzo Costa pictore, con diverse figure dentro, che \u00e8 dal lato de dicta finestra, a mano dextra e con verdure dentro et una incoronatione.",
      "transcription_tr": "Item, a painted picture by the hand of the late Master Lorenzo Costa, painter, with various figures in it, which is on the side of the said window, to the right, and with greenery in it and  a coronation.",
      "artists": [
        {
          "name": "Lorenzo Costa",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "B",
          "pos": "pages 191-204",
          "label": "Campbell (2004)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/items/itemKey/SBIP53CF",
          "states": "UK"
        },
        {
          "kind": "C",
          "pos": "page 349",
          "label": "Ferrari (2003)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Ferrari%202003/titleCreatorYear/items/P3JXQJEF/item-list",
          "states": "UK"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (Louvre)",
          "url": "http://mini-site.louvre.fr/mantegna/acc/xmlen/section_8_3.html",
          "states": "CA"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (Wikimedia)",
          "url": "https://commons.wikimedia.org/wiki/File:All%C3%A9gorie_de_la_cour_d%27Isabelle_d%27Este,_Costa_(Louvre_INV_255)_01.jpg",
          "states": "CA"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (Louvre)",
          "url": "http://cartelen.louvre.fr/cartelen/visite?srv=car_not_frame&idNotice=14959&langue=fr",
          "states": "CL"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "card (Louvre)",
          "url": "https://www.pop.culture.gouv.fr/notice/joconde/000PE024818",
          "states": "AD"
        }
      ],
      "asset": [],
      "asset_s": [
        "picture_1"
      ],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 12,
      "name": "Comus",
      "fullname": "The Reign of Comus",
      "kind": "P",
      "medium": "oil on canvas",
      "dimensions": "h: 1.52 m; w: 2.39 m",
      "aq_date": "1507 - 1511",
      "inventory": "7325",
      "transcription": "Item, uno altro quadro quale e a mano sinistra della fenestra, fatto per messer Lorenzo Costa, nel quale \u00e8 depinto uno archo triumphale, et molte figure che fano una musicha, con una fabula de Leda.",
      "transcription_tr": "Item, another painting which is to the left of the window, done in the hand of Master Lorenzo Costa, in which is depicted a triumphal arch, and many figures who are making music, with a story of Leda.",
      "artists": [
        {
          "name": "Lorenzo Costa",
          "role": "painter"
        },
        {
          "name": "Andrea Mantegna",
          "role": "painter"
        }
      ],
      "references": [
        {
          "kind": "S",
          "pos": "",
          "label": "Image (Louvre)",
          "url": "http://cartelen.louvre.fr/cartelen/visite?srv=car_not_frame&idNotice=14956&langue=fr",
          "states": "CL"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (Louvre)",
          "url": "http://mini-site.louvre.fr/mantegna/acc/xmlen/section_8_4.html",
          "states": "AD"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (Wikimedia)",
          "url": "https://commons.wikimedia.org/wiki/File:Le_R%C3%A8gne_de_Comus,_Costa_(Louvre_INV_256)_02.jpg",
          "states": "CA"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "card (Louvre)",
          "url": "https://www.pop.culture.gouv.fr/notice/joconde/000PE024819",
          "states": "UK"
        },
        {
          "kind": "C",
          "pos": "",
          "label": "Ferrari (2003)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Ferrari%202003/titleCreatorYear/items/P3JXQJEF/item-list",
          "states": "UK"
        },
        {
          "kind": "B",
          "pos": "pages 205-19, 284-85, 359-64",
          "label": "Campbell (2004)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/items/itemKey/SBIP53CF",
          "states": "UK"
        }
      ],
      "asset": [],
      "asset_s": [
        "picture_7"
      ],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 13,
      "name": "Vices",
      "fullname": "Allegory of the Passions (Allegory of Vices)",
      "kind": "P",
      "medium": "Tempera on canvas",
      "dimensions": "h: 1.52 m; w: 2.39 m",
      "aq_date": "1528-1530",
      "inventory": "7323",
      "transcription": "Item, dui quadri posti dal cappo della porta, nella intrata, facti per il quondam Antonio da Coregia, in uno de' quali \u00e8 depinto la historia de Appollo et Marsia, nel altro le trei Virtu, cio\u00e8 Fortezza, Iustitia e Temperantia, le quale insegnano ad uno fanciullo a mostrare il tempo, acci\u00f2 possa essere coronato di lauro et aquistare la palma.",
      "transcription_tr": "Item, two paintings placed at the head of the door, in the entry, made by the late Antonio da Correggio, in one of which is depicted the story of Apollo and Marsyas; in the other the three Virtues, meaning  Fortitude, Justice, and Temperance, who are instructing a boy to measure time, so that he may be crowned with the laurel and win the [victory] palm.",
      "artists": [
        {
          "name": "Correggio (Antonio Allegri)",
          "role": "painter"
        }
      ],
      "references": [
        {
          "kind": "S",
          "pos": "",
          "label": "Image (Louvre)",
          "url": "http://mini-site.louvre.fr/mantegna/acc/xmlen/section_8_5.html",
          "states": "AD"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (Wikimedia)",
          "url": "https://commons.wikimedia.org/wiki/File:Correggio_-_Allegory_of_Vices_-_WGA05339.jpg",
          "states": "CA"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "card (Louvre)",
          "url": "https://www.pop.culture.gouv.fr/notice/joconde/000PE024816",
          "states": "AL"
        },
        {
          "kind": "C",
          "pos": "",
          "label": "Ferrari (2003)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Ferrari%202003/titleCreatorYear/items/P3JXQJEF/item-list",
          "states": "UK"
        },
        {
          "kind": "B",
          "pos": "pages 221-49, 364-71",
          "label": "Campbell (2004)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/items/itemKey/SBIP53CF",
          "states": "UK"
        }
      ],
      "asset": [],
      "asset_s": [
        "picture_4"
      ],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 14,
      "name": "Virtues",
      "fullname": "Allegory of Philosophy (Allegory of Virtue)",
      "kind": "P",
      "medium": "Tempera on canvas",
      "dimensions": "h: 1.48 m; w: 0.88 m",
      "aq_date": "1528-1530",
      "inventory": "7323",
      "transcription": "Item, dui quadri posti dal cappo della porta, nella intrata, facti per il quondam Antonio da Coregia, in uno de' quali \u00e8 depinto la historia de Appollo et Marsia, nel altro le trei Virtu, cio\u00e8 Fortezza, Iustitia e Temperantia, le quale insegnano ad uno fanciullo a mostrare il tempo, acci\u00f2 possa essere coronato di lauro et aquistare la palma.",
      "transcription_tr": "Item, two paintings placed at the head of the door, in the entry, made by the late Antonio da Correggio, in one of which is depicted the story of Apollo and Marsyas; in the other the three Virtues, meaning  Fortitude, Justice, and Temperance, who are instructing a boy to measure time, so that he may be crowned with the laurel and win the [victory] palm.",
      "artists": [
        {
          "name": "Correggio (Antonio Allegri)",
          "role": "painter"
        }
      ],
      "references": [
        {
          "kind": "S",
          "pos": "",
          "label": "Image (Louvre)",
          "url": "http://mini-site.louvre.fr/mantegna/acc/xmlen/section_8_6.html",
          "states": "XX"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (Wikimedia)",
          "url": "https://commons.wikimedia.org/wiki/File:Correggio_-_Allegory_of_Virtues_-_WGA05338.jpg",
          "states": "CX"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "card (Louvre)",
          "url": "https://www.pop.culture.gouv.fr/notice/joconde/000PE024815",
          "states": "UK"
        },
        {
          "kind": "C",
          "pos": "",
          "label": "Ferrari (2003)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Ferrari%202003/titleCreatorYear/items/P3JXQJEF/item-list",
          "states": "UK"
        },
        {
          "kind": "B",
          "pos": "pages 221-49, 364-71",
          "label": "Campbell (2004)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/items/itemKey/SBIP53CF",
          "states": "UK"
        }
      ],
      "asset": [],
      "asset_s": [
        "picture_5"
      ],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 15,
      "name": "Venus",
      "fullname": "Venus Felix",
      "kind": "S",
      "medium": "bronze, gold, wood base",
      "dimensions": "H. 29,8 cm",
      "aq_date": "1510",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [
        {
          "name": "Antico (Pier Jacopo Bonacolsi)",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "B",
          "pos": "pages 91-112",
          "label": "Allison (1995)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Allison%201995/titleCreatorYear/items/UEC3RCIF/item-list",
          "states": "UK"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (KHM)",
          "url": "http://www.khm.at/de/object/0ee513926c/",
          "states": "XX"
        }
      ],
      "asset": [
        "venere"
      ],
      "asset_s": [
        "venere"
      ],
      "asset_v": [
        {
          "name": "venere",
          "label": "name: venere\r\nwidth: 11 cm\r\nheight: 30 cm\r\ndepth: 14 cm\r\nnum tri: 20000"
        }
      ],
      "asset_m": [
        {
          "name": "venere",
          "image": "measure_venere_1px_01mm.jpg",
          "scale": 0.01
        }
      ]
    },
    {
      "id": 16,
      "name": "Hercules1",
      "fullname": "Hercules & Antaeus",
      "kind": "S",
      "medium": "bronze",
      "dimensions": "",
      "aq_date": "1519",
      "inventory": "7286",
      "transcription": "[Cose de bronzo sopra li cornisotti] Item, uno Hercule e uno Anteo.",
      "transcription_tr": "[Bronze pieces above the doorframes] Item, a Hercules and and Antaeus.",
      "artists": [
        {
          "name": "Antico (Pier Jacopo Bonacolsi)",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "B",
          "pos": "pages 91-112",
          "label": "Allison (1995)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Allison%201995/titleCreatorYear/items/UEC3RCIF/item-list",
          "states": "UK"
        },
        {
          "kind": "C",
          "pos": "pages 22, 309",
          "label": "Ferrari (2003)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Ferrari%202003/titleCreatorYear/items/P3JXQJEF/item-list",
          "states": "UK"
        },
        {
          "kind": "B",
          "pos": "",
          "label": "Kryza-Gersch (2008)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/ercole%20e%20anteo/titleCreatorYear/items/WD6M27JJ/item-list",
          "states": "UK"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (KHM)",
          "url": "http://www.khm.at/de/object/ef2a15796f/",
          "states": "XX"
        }
      ],
      "asset": [],
      "asset_s": [],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 17,
      "name": "Hercules2",
      "fullname": "Hercules with Mace",
      "kind": "S",
      "medium": "bronze, silver",
      "dimensions": "H. 34,5 cm",
      "aq_date": "1519",
      "inventory": "7299",
      "transcription": "[Cose de bronzo sopra li cornisotti] Item, una figura con uno calamaro sotto li piedi e con uno bastone in mano.",
      "transcription_tr": "[Bronze pieces above the doorframes] Item, a figure with an inkwell underfoot and with a mace in its hand.",
      "artists": [
        {
          "name": "Antico (Pier Jacopo Bonacolsi)",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "B",
          "pos": "pages 91-112",
          "label": "Allison (1995)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Allison%201995/titleCreatorYear/items/UEC3RCIF/item-list",
          "states": "UK"
        },
        {
          "kind": "C",
          "pos": "pages 22, 347",
          "label": "Ferrari (2003)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Ferrari%202003/titleCreatorYear/items/P3JXQJEF/item-list",
          "states": "UK"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (KHM)",
          "url": "http://www.khm.at/de/object/51bd987933/",
          "states": "XX"
        }
      ],
      "asset": [
        "hercules"
      ],
      "asset_s": [
        "hercules"
      ],
      "asset_v": [
        {
          "name": "hercules",
          "label": "name: hercules\r\nwidth: 18 cm\r\nheight: 34 cm\r\ndepth: 13 cm\r\nnum tri: 20000"
        }
      ],
      "asset_m": [
        {
          "name": "hercules",
          "image": "measure_hercules_1px_01mm.jpg",
          "scale": 0.01
        }
      ]
    },
    {
      "id": 18,
      "name": "Atropos",
      "fullname": "Atropos",
      "kind": "S",
      "medium": "bronze",
      "dimensions": "",
      "aq_date": "1519",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [
        {
          "name": "Antico (Pier Jacopo Bonacolsi)",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "B",
          "pos": "pages 91-112",
          "label": "Allison (1995)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Allison%201995/titleCreatorYear/items/UEC3RCIF/item-list",
          "states": "UK"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (KHM)",
          "url": "http://www.khm.at/de/object/0cd5a511c7/",
          "states": "XX"
        }
      ],
      "asset": [],
      "asset_s": [],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 19,
      "name": "Bacchus",
      "fullname": "Head of Bacchus",
      "kind": "S",
      "medium": "bronze, gold",
      "dimensions": "59 cm high",
      "aq_date": "1520-1522",
      "inventory": "7296",
      "transcription": "[Cose de bronzo sopra li cornisotti] Item, una testa dello dio delli horti.",
      "transcription_tr": "[Bronze pieces above the doorframes] Item, a head of the god of gardens.",
      "artists": [
        {
          "name": "Antico (Pier Jacopo Bonacolsi)",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "CH",
          "pos": "",
          "label": "Allison (1995)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Allison%201995/titleCreatorYear/items/UEC3RCIF/item-list",
          "states": "UK"
        },
        {
          "kind": "CH",
          "pos": "",
          "label": "Brown (2008)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202008/titleCreatorYear",
          "states": "UK"
        },
        {
          "kind": "CH",
          "pos": "",
          "label": "Kryza-Gersch (2008)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/ercole%20e%20anteo/titleCreatorYear/items/WD6M27JJ/item-list",
          "states": "AL"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (KHM)",
          "url": "https://www.khm.at/de/object/360ec4ad34",
          "states": "CA"
        },
        {
          "kind": "C",
          "pos": "pages 317-322",
          "label": "Leithe-Jasper (1994)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Leithe/titleCreatorYear/items/DC7TH4ZZ/item-list",
          "states": "UK"
        },
        {
          "kind": "CH",
          "pos": "pages 357-360",
          "label": "Leithe-Jasper (1994)(2)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Leithe/titleCreatorYear/items/6ZE494N6/item-list",
          "states": "UK"
        }
      ],
      "asset": [
        "bacco"
      ],
      "asset_s": [
        "bacco"
      ],
      "asset_v": [
        {
          "name": "bacco",
          "label": "name: bacco\r\nwidth: 49 cm\r\nheight: 59 cm\r\ndepth: 39 cm\r\nnum tri: 32000"
        }
      ],
      "asset_m": [
        {
          "name": "bacco",
          "image": "measure_bacco_1px_02mm.jpg",
          "scale": 0.02
        }
      ]
    },
    {
      "id": 20,
      "name": "Medal",
      "fullname": "Portrait medallion of Isabella d'Este",
      "kind": "M",
      "medium": "gold, gems, enamel",
      "dimensions": "diameter: 7cm",
      "aq_date": "1505",
      "inventory": "7126",
      "transcription": "Item, una medalia d'oro con l'effigie di Madama bone memorie, quando sua signoria era giovene, con litere di diamanti atorno che dicono 'Isabella', con rosette tra l'una e l'altra litera smaltate de rosso, con uno retortio atorno, con rosette smaltate de biancho e azuro et de roverso una victoria de relevo.",
      "transcription_tr": "Item, a gold medal with the effigy of Madama of good memory, when her ladyship was young, with letters and diamonds around it that say 'Isabella,' with red enameled rosettes between the letters, with a twist around it with white and blue enameled rosettes and on the reverse side a Victory in relief.",
      "artists": [
        {
          "name": "Gian Cristoforo Romano",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "C",
          "pos": "pages 22-23, 339-340",
          "label": "Ferrari (2003)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Ferrari%202003/titleCreatorYear/items/P3JXQJEF/item-list",
          "states": "UK"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (WGA)",
          "url": "https://www.wga.hu/html_m/r/romano/p_medal.html",
          "states": "UK"
        },
        {
          "kind": "CH",
          "pos": "",
          "label": "Syson (1997)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/items/itemKey/42WCKN55/q/syson",
          "states": "UK"
        },
        {
          "kind": "CH",
          "pos": "",
          "label": "Bernoldo & Centanni (2015)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/bonoldi/titleCreatorYear/items/MGZH3BV4/item-list",
          "states": "AD"
        }
      ],
      "asset": [],
      "asset_s": [
        "medaglione"
      ],
      "asset_v": [
        {
          "name": "medaglione",
          "label": "name: medaglione\r\nwidth: 55 mm\r\nheight: 64 mm\r\ndepth: 5 mm\r\nnum tri : 74000"
        }
      ],
      "asset_m": [
        {
          "name": "medaglione",
          "image": "measure_medaglione_1px_002mm.jpg",
          "scale": 0.002
        }
      ]
    },
    {
      "id": 23,
      "name": "Studiolo floor",
      "fullname": "Studiolo floor",
      "kind": "A",
      "medium": "majolica tiles",
      "dimensions": "",
      "aq_date": "1519-1523",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [],
      "references": [
        {
          "kind": "B",
          "pos": "pages 143-146, 174-175, 185, 222",
          "label": "Brown (2005)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202005/titleCreatorYear/items/PKUQ35ZN/item-list",
          "states": "UK"
        },
        {
          "kind": "CH",
          "pos": "",
          "label": "Brown (1997)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%201997/titleCreatorYear/items/8GEJZ7QN/item-list",
          "states": "UK"
        },
        {
          "kind": "A",
          "pos": "",
          "label": "Ventura (2001)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/ventura%202001/titleCreatorYear",
          "states": "UK"
        },
        {
          "kind": "A",
          "pos": "pages 121-130",
          "label": "Brown (1989)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/marble/titleCreatorYear/items/NTXVUWQF/item-list",
          "states": "CA"
        },
        {
          "kind": "CH",
          "pos": "page 87",
          "label": "Leithe-Jasper (1994)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Leithe/titleCreatorYear/items/DC7TH4ZZ/item-list",
          "states": "AL"
        },
        {
          "kind": "CH",
          "pos": "pages 173-174",
          "label": "Mallet (1981)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/mallet/titleCreatorYear/items/MNP99IXF/item-list",
          "states": "LS"
        }
      ],
      "asset": [
        "studiolo_pavimento"
      ],
      "asset_s": [],
      "asset_v": [
        {
          "name": "piastrelle",
          "label": "name: piastrelle"
        }
      ],
      "asset_m": [
        {
          "name": "piastrelle",
          "image": "measure_piastrelle_1px_025mm.jpg",
          "scale": 0.025
        }
      ]
    },
    {
      "id": 28,
      "name": "Grotta MS Floor",
      "fullname": "Grotta main space floor",
      "kind": "A",
      "medium": "Venetian inlaid marble",
      "dimensions": "",
      "aq_date": "1522",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [
        {
          "name": "Tullio Lombardo",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "B",
          "pos": "pages 136, 143-146, 174-175, 185, 222",
          "label": "Brown (2005)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202005/titleCreatorYear/items/PKUQ35ZN/item-list",
          "states": "UK"
        },
        {
          "kind": "CH",
          "pos": "pages 314-315",
          "label": "Brown (1997)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%201997/titleCreatorYear/items/8GEJZ7QN/item-list",
          "states": "AD"
        },
        {
          "kind": "A",
          "pos": "",
          "label": "Brown (1989)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/marble/titleCreatorYear/items/NTXVUWQF/item-list",
          "states": "UK"
        },
        {
          "kind": "A",
          "pos": "",
          "label": "Ventura (2001)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/ventura%202001/titleCreatorYear",
          "states": "UK"
        }
      ],
      "asset": [
        "grotta_vp_pavimento"
      ],
      "asset_s": [],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 33,
      "name": "Bas-relief",
      "fullname": "Proserpina in Hades",
      "kind": "D",
      "medium": "Marble",
      "dimensions": "74,5x87x13,5cm",
      "aq_date": "1523",
      "inventory": "7319 (Ferrari 2003)",
      "transcription": "Item, uno quadro di marmoro de basso relevo, con uno Plutone e Prosepina, Mercurio e Cerbaro, murato sotto dicta finestra et anticho.",
      "transcription_tr": "Item, a marble picture in bas-relief, with a Pluto and a Proserpina, Mercury and Cerberus, encased in the wall under the said window, and ancient.",
      "artists": [],
      "references": [
        {
          "kind": "CH",
          "pos": "",
          "label": "L'Occaso (2013)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/items/itemKey/VN6B2WSP",
          "states": "XX"
        },
        {
          "kind": "C",
          "pos": "",
          "label": "Ferrari (2003)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/Ferrari%202003/titleCreatorYear/items/P3JXQJEF/item-list",
          "states": "UK"
        }
      ],
      "asset": [
        "bassorilievo"
      ],
      "asset_s": [
        "bassorilievo"
      ],
      "asset_v": [
        {
          "name": "bassorilievo",
          "label": "name: bassorilievo\r\nwidth: 87 cm\r\nheight: 73 cm\r\ndepth: 22 cm\r\nnum tri : 20000"
        }
      ],
      "asset_m": []
    },
    {
      "id": 40,
      "name": "wainscoting7",
      "fullname": "Panel over the window embrasure of the Grotta",
      "kind": "D",
      "medium": "wood",
      "dimensions": "",
      "aq_date": "1522",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [
        {
          "name": "Maestro Sebastiano",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "B",
          "pos": "pages 155, 280-281",
          "label": "Brown (2005)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202005/titleCreatorYear/items/PKUQ35ZN/item-list",
          "states": "UK"
        },
        {
          "kind": "B",
          "pos": "page 144",
          "label": "Brown (2005)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202005/titleCreatorYear/items/PKUQ35ZN/item-list",
          "states": "AD"
        }
      ],
      "asset": [],
      "asset_s": [],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 47,
      "name": "step",
      "fullname": "Marble step with the inset \"YS\"",
      "kind": "D",
      "medium": "marble",
      "dimensions": "",
      "aq_date": "",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [],
      "references": [
        {
          "kind": "B",
          "pos": "pages 154, 267",
          "label": "Brown (2005)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202005/titleCreatorYear/items/PKUQ35ZN/item-list",
          "states": "UK"
        }
      ],
      "asset": [],
      "asset_s": [
        "logo_ys"
      ],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 52,
      "name": "Studiolo",
      "fullname": "Studiolo",
      "kind": "X",
      "medium": "",
      "dimensions": "",
      "aq_date": "",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [],
      "references": [],
      "asset": [],
      "asset_s": [],
      "asset_v": [],
      "asset_m": [
        {
          "name": "studiolo",
          "image": "measure_studiolo_1px_2mm.jpg",
          "scale": 0.2
        }
      ]
    },
    {
      "id": 53,
      "name": "Grotta",
      "fullname": "Grotta",
      "kind": "X",
      "medium": "",
      "dimensions": "",
      "aq_date": "",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [],
      "references": [],
      "asset": [],
      "asset_s": [],
      "asset_v": [],
      "asset_m": [
        {
          "name": "grotta",
          "image": "measure_grotta_1px_2mm.jpg",
          "scale": 0.2
        }
      ]
    },
    {
      "id": 54,
      "name": "Intarsia 2",
      "fullname": "Cityscape triptych middle",
      "kind": "D",
      "medium": "wood",
      "dimensions": "",
      "aq_date": "1506",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [
        {
          "name": "Paolo and Antonio Mola",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "A",
          "pos": "page 78",
          "label": "Ventura (2001)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/ventura%202001/titleCreatorYear",
          "states": "AD"
        },
        {
          "kind": "B",
          "pos": "pages 151, 157-158",
          "label": "Brown (2005)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202005/titleCreatorYear/items/PKUQ35ZN/item-list",
          "states": "UK"
        },
        {
          "kind": "S",
          "pos": "",
          "label": "Image (Wikimedia)",
          "url": "https://commons.wikimedia.org/wiki/File:Mantua_2013_021.jpg",
          "states": "CA"
        }
      ],
      "asset": [],
      "asset_s": [
        "intarsia2"
      ],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 55,
      "name": "Intarsia 3",
      "fullname": "Cityscape triptych right",
      "kind": "D",
      "medium": "wood",
      "dimensions": "",
      "aq_date": "1506",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [
        {
          "name": "Paolo and Antonio Mola",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "A",
          "pos": "page 78",
          "label": "Ventura (2001)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/ventura%202001/titleCreatorYear",
          "states": "AD"
        },
        {
          "kind": "B",
          "pos": "pages 151, 157-158",
          "label": "Brown (2005)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202005/titleCreatorYear/items/PKUQ35ZN/item-list",
          "states": "UK"
        }
      ],
      "asset": [],
      "asset_s": [
        "intarsia3"
      ],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 56,
      "name": "Intarsia 4",
      "fullname": "Music triptych Ockeghem",
      "kind": "D",
      "medium": "wood",
      "dimensions": "",
      "aq_date": "1506",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [
        {
          "name": "Paolo and Antonio Mola",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "A",
          "pos": "page 78",
          "label": "Ventura (2001)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/ventura%202001/titleCreatorYear",
          "states": "AD"
        },
        {
          "kind": "B",
          "pos": "pages 151, 157-158",
          "label": "Brown (2005)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202005/titleCreatorYear/items/PKUQ35ZN/item-list",
          "states": "UK"
        }
      ],
      "asset": [],
      "asset_s": [
        "intarsia4"
      ],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 57,
      "name": "Intarsia 5",
      "fullname": "Music triptych viole",
      "kind": "D",
      "medium": "wood",
      "dimensions": "",
      "aq_date": "",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [],
      "references": [],
      "asset": [],
      "asset_s": [
        "intarsia5"
      ],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 58,
      "name": "Intarsia 6",
      "fullname": "Music triptych spinet & lute",
      "kind": "D",
      "medium": "wood",
      "dimensions": "",
      "aq_date": "",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [],
      "references": [
        {
          "kind": "S",
          "pos": "",
          "label": "Image (Wikimedia)",
          "url": "https://upload.wikimedia.org/wikipedia/commons/9/94/Studiolo_di_Isabella_d%27Este.jpg",
          "states": "CA"
        }
      ],
      "asset": [],
      "asset_s": [
        "intarsia6"
      ],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 59,
      "name": "scroll 1",
      "fullname": "Scroll NEC SPE NEC METV",
      "kind": "D",
      "medium": "Wood, paint",
      "dimensions": "",
      "aq_date": "",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [],
      "references": [],
      "asset": [],
      "asset_s": [
        "cartiglio1"
      ],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 60,
      "name": "scroll2",
      "fullname": "Scroll ISABELA",
      "kind": "D",
      "medium": "Wood, paint",
      "dimensions": "",
      "aq_date": "",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [],
      "references": [],
      "asset": [],
      "asset_s": [
        "cartiglio2"
      ],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 61,
      "name": "scroll 3",
      "fullname": "Scroll NEC SPE NEC METU",
      "kind": "D",
      "medium": "Wood,  paint",
      "dimensions": "",
      "aq_date": "",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [],
      "references": [],
      "asset": [],
      "asset_s": [
        "cartiglio3"
      ],
      "asset_v": [],
      "asset_m": []
    },
    {
      "id": 62,
      "name": "wainscoting",
      "fullname": "Grotta wainscoting",
      "kind": "D",
      "medium": "wood",
      "dimensions": "",
      "aq_date": "",
      "inventory": "",
      "transcription": "",
      "transcription_tr": "",
      "artists": [
        {
          "name": "Maestro Sebastiano",
          "role": "creator"
        }
      ],
      "references": [
        {
          "kind": "B",
          "pos": "pages 145, 155-158, 285-290",
          "label": "Brown (2005)",
          "url": "https://www.zotero.org/groups/1472028/idea_bibliography/search/brown%202005/titleCreatorYear/items/PKUQ35ZN/item-list",
          "states": "UK"
        }
      ],
      "asset"  : [],
      "asset_s": [],
      "asset_v": [],
      "asset_m": []
    }
]
// sort artworks by name 
Artworks.sort( function(a,b) { return a.name > b.name ? 1 : -1 } )
// sort references by kind --- Books before Sites
Artworks.forEach( a => { 
    a.references.sort( function(a,b) { return a.kind > b.kind ? 1 : -1 } )
})