interface licensePlate {
  id: number,
  plate: string,
  name_origin: string,
  county: string,
  state: string
}

const de_licensePlates: licensePlate[] = [
  {
    id: 1,
    plate: "A",
    name_origin: "Augsburg",
    county: "Stadt & Landkreis Augsburg",
    state: "Bayern"
  },
  {
    id: 2,
    plate: "AA",
    name_origin: "Aalen",
    county: "Ostalbkreis",
    state: "Baden-Württemberg"
  },
  {
    id: 3,
    plate: "AB",
    name_origin: "Aschaffenburg",
    county: "Landkreis & Stadt Aschaffenburg",
    state: "Bayern"
  },
  {
    id: 4,
    plate: "ABG",
    name_origin: "Altenburg",
    county: "Landkreis Altenburger Land",
    state: "Thüringen"
  },
  {
    id: 5,
    plate: "ABI",
    name_origin: "Anhalt-Bitterfeld",
    county: "Landkreis Anhalt-Bitterfeld",
    state: "Sachsen-Anhalt"
  },
  {
    id: 6,
    plate: "AC",
    name_origin: "Aachen",
    county: "Städteregion Aachen",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 7,
    plate: "AE",
    name_origin: "Auerbach im Vogtland",
    county: "Vogtlandkreis",
    state: "Sachsen"
  },
  {
    id: 8,
    plate: "AH",
    name_origin: "Ahaus",
    county: "Kreis Borken",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 9,
    plate: "AIB",
    name_origin: "Bad Aibling",
    county: "Landkreise München & Rosenheim",
    state: "Bayern"
  },
  {
    id: 10,
    plate: "AIC",
    name_origin: "Aichach",
    county: "Landkreis Aichach-Friedberg",
    state: "Bayern"
  },
  {
    id: 11,
    plate: "AK",
    name_origin: "Altenkirchen",
    county: "Landkreis Altenkirchen (Westerwald)",
    state: "Rheinland-Pfalz"
  },
  {
    id: 12,
    plate: "ALF",
    name_origin: "Alfeld (Leine)",
    county: "Landkreis Hildesheim",
    state: "Niedersachsen"
  },
  {
    id: 13,
    plate: "ALZ",
    name_origin: "Alzenau",
    county: "Landkreis Aschaffenburg",
    state: "Bayern"
  },
  {
    id: 14,
    plate: "AM",
    name_origin: "Amberg",
    county: "Stadt Amberg",
    state: "Bayern"
  },
  {
    id: 15,
    plate: "AN",
    name_origin: "Ansbach",
    county: "Landkreis & Stadt Ansbach",
    state: "Bayern"
  },
  {
    id: 16,
    plate: "ANA",
    name_origin: "Annaberg-Buchholz",
    county: "Erzgebirgskreis",
    state: "Sachsen"
  },
  {
    id: 17,
    plate: "ANK",
    name_origin: "Anklam",
    county: "Landkreis Vorpommern-Greifswald ohne Greifswald",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 18,
    plate: "AÖ",
    name_origin: "Altötting",
    county: "Landkreis Altötting",
    state: "Bayern"
  },
  {
    id: 19,
    plate: "AP",
    name_origin: "Apolda",
    county: "Landkreis Weimarer Land",
    state: "Thüringen"
  },
  {
    id: 20,
    plate: "APD",
    name_origin: "Apolda",
    county: "Landkreis Weimarer Land",
    state: "Thüringen"
  },
  {
    id: 21,
    plate: "ARN",
    name_origin: "Arnstadt",
    county: "Ilm-Kreis",
    state: "Thüringen"
  },
  {
    id: 22,
    plate: "ART",
    name_origin: "Artern",
    county: "Kyffhäuserkreis",
    state: "Thüringen"
  },
  {
    id: 23,
    plate: "AS",
    name_origin: "Amberg-Sulzbach",
    county: "Landkreis Amberg-Sulzbach",
    state: "Bayern"
  },
  {
    id: 24,
    plate: "ASL",
    name_origin: "Aschersleben",
    county: "Salzlandkreis",
    state: "Sachsen-Anhalt"
  },
  {
    id: 25,
    plate: "ASZ",
    name_origin: "Aue-Schwarzenberg",
    county: "Erzgebirgskreis",
    state: "Sachsen"
  },
  {
    id: 26,
    plate: "AT",
    name_origin: "Altentreptow",
    county: "Landkreis Mecklenburgische Seenplatte",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 27,
    plate: "AU",
    name_origin: "Aue (Sachsen)",
    county: "Erzgebirgskreis",
    state: "Sachsen"
  },
  {
    id: 28,
    plate: "AUR",
    name_origin: "Aurich",
    county: "Landkreis Aurich",
    state: "Niedersachsen"
  },
  {
    id: 29,
    plate: "AW",
    name_origin: "Ahrweiler",
    county: "Landkreis Ahrweiler",
    state: "Rheinland-Pfalz"
  },
  {
    id: 30,
    plate: "AZ",
    name_origin: "Alzey",
    county: "Landkreis Alzey-Worms",
    state: "Rheinland-Pfalz"
  },
  {
    id: 31,
    plate: "AZE",
    name_origin: "Anhalt-Zerbst",
    county: "Landkreis Anhalt-Bitterfeld",
    state: "Sachsen-Anhalt"
  },
  {
    id: 32,
    plate: "B",
    name_origin: "Berlin",
    county: "Stadt Berlin",
    state: "Berlin"
  },
  {
    id: 33,
    plate: "BA",
    name_origin: "Bamberg",
    county: "Landkreis & Stadt Bamberg",
    state: "Bayern"
  },
  {
    id: 34,
    plate: "BAD",
    name_origin: "Baden-Baden",
    county: "Stadt Baden-Baden",
    state: "Baden-Württemberg"
  },
  {
    id: 35,
    plate: "BAR",
    name_origin: "Barnim",
    county: "Landkreis Barnim",
    state: "Brandenburg"
  },
  {
    id: 36,
    plate: "BB",
    name_origin: "Böblingen",
    county: "Landkreis Böblingen",
    state: "Baden-Württemberg"
  },
  {
    id: 37,
    plate: "BBG",
    name_origin: "Bernburg (Saale)",
    county: "Salzlandkreis",
    state: "Sachsen-Anhalt"
  },
  {
    id: 38,
    plate: "BBL",
    name_origin: "Land Brandenburg",
    county: "Landesregierung, Landtag und Polizei",
    state: "Brandenburg"
  },
  {
    id: 39,
    plate: "BC",
    name_origin: "Biberach an der Riß",
    county: "Landkreis Biberach",
    state: "Baden-Württemberg"
  },
  {
    id: 40,
    plate: "BCH",
    name_origin: "Buchen (Odenwald)",
    county: "Neckar-Odenwald-Kreis",
    state: "Baden-Württemberg"
  },
  {
    id: 41,
    plate: "BD",
    name_origin: "Bund",
    county: "Deutscher Bundestag, Bundesrat, Bundespräsidialamt, Bundesregierung, Bundesministerien, Finanzverwaltung, Verfassungsgericht",
    state: "bundesweit"
  },
  {
    id: 42,
    plate: "BED",
    name_origin: "Brand-Erbisdorf",
    county: "Landkreis Mittelsachsen",
    state: "Sachsen"
  },
  {
    id: 43,
    plate: "BER",
    name_origin: "Bernau bei Berlin",
    county: "Landkreis Barnim",
    state: "Brandenburg"
  },
  {
    id: 44,
    plate: "BF",
    name_origin: "Burgsteinfurt",
    county: "Kreis Steinfurt",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 45,
    plate: "BGL",
    name_origin: "Berchtesgadener Land",
    county: "Landkreis Berchtesgadener Land",
    state: "Bayern"
  },
  {
    id: 46,
    plate: "BI",
    name_origin: "Bielefeld",
    county: "Stadt Bielefeld",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 47,
    plate: "BID",
    name_origin: "Biedenkopf",
    county: "Landkreis Marburg-Biedenkopf",
    state: "Hessen"
  },
  {
    id: 48,
    plate: "BIN",
    name_origin: "Bingen",
    county: "Landkreis Mainz-Bingen",
    state: "Rheinland-Pfalz"
  },
  {
    id: 49,
    plate: "BIR",
    name_origin: "Birkenfeld",
    county: "Landkreis Birkenfeld",
    state: "Rheinland-Pfalz"
  },
  {
    id: 50,
    plate: "BIT",
    name_origin: "Bitburg",
    county: "Eifelkreis Bitburg-Prüm",
    state: "Rheinland-Pfalz"
  },
  {
    id: 51,
    plate: "BIW",
    name_origin: "Bischofswerda",
    county: "Landkreis Bautzen",
    state: "Sachsen"
  },
  {
    id: 52,
    plate: "BK",
    name_origin: "Börde(kreis)",
    county: "Landkreis Börde",
    state: "Sachsen-Anhalt"
  },
  {
    id: 53,
    plate: "BKS",
    name_origin: "Bernkastel-Kues",
    county: "Landkreis Bernkastel-Wittlich",
    state: "Rheinland-Pfalz"
  },
  {
    id: 54,
    plate: "BL",
    name_origin: "Balingen",
    county: "Zollernalbkreis",
    state: "Baden-Württemberg"
  },
  {
    id: 55,
    plate: "BLB",
    name_origin: "Bad Berleburg",
    county: "Kreis Siegen-Wittgenstein",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 56,
    plate: "BLK",
    name_origin: "Burgenlandkreis",
    county: "Burgenlandkreis",
    state: "Sachsen-Anhalt"
  },
  {
    id: 57,
    plate: "BM",
    name_origin: "Bergheim",
    county: "Rhein-Erft-Kreis",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 58,
    plate: "BN",
    name_origin: "Bonn",
    county: "Stadt Bonn",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 59,
    plate: "BNA",
    name_origin: "Borna",
    county: "Landkreis Leipzig",
    state: "Sachsen"
  },
  {
    id: 60,
    plate: "BO",
    name_origin: "Bochum",
    county: "Stadt Bochum",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 61,
    plate: "BÖ",
    name_origin: "Börde",
    county: "Landkreis Börde",
    state: "Sachsen-Anhalt"
  },
  {
    id: 62,
    plate: "BOH",
    name_origin: "Bocholt",
    county: "Kreis Borken",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 63,
    plate: "BOR",
    name_origin: "Borken",
    county: "Kreis Borken",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 64,
    plate: "BOT",
    name_origin: "Bottrop",
    county: "Stadt Bottrop",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 65,
    plate: "BP",
    name_origin: "Bundespolizei",
    county: "Bundespolizei",
    state: "bundesweit"
  },
  {
    id: 66,
    plate: "BRA",
    name_origin: "Brake (Unterweser)",
    county: "Landkreis Wesermarsch",
    state: "Niedersachsen"
  },
  {
    id: 67,
    plate: "BRB",
    name_origin: "Brandenburg an der Havel",
    county: "Stadt Brandenburg an der Havel",
    state: "Brandenburg"
  },
  {
    id: 68,
    plate: "BRG",
    name_origin: "Burg bei Magdeburg",
    county: "Landkreis Jerichower Land",
    state: "Sachsen-Anhalt"
  },
  {
    id: 69,
    plate: "BRK",
    name_origin: "Bad Brückenau",
    county: "Landkreis Bad Kissingen",
    state: "Bayern"
  },
  {
    id: 70,
    plate: "BRL",
    name_origin: "Braunlage",
    county: "Landkreis Goslar",
    state: "Niedersachsen"
  },
  {
    id: 71,
    plate: "BRV",
    name_origin: "Bremervörde",
    county: "Landkreis Rotenburg (Wümme)",
    state: "Niedersachsen"
  },
  {
    id: 72,
    plate: "BS",
    name_origin: "Braunschweig",
    county: "Stadt Braunschweig",
    state: "Niedersachsen"
  },
  {
    id: 73,
    plate: "BT",
    name_origin: "Bayreuth",
    county: "Landkreis & Stadt Bayreuth",
    state: "Bayern"
  },
  {
    id: 74,
    plate: "BTF",
    name_origin: "Bitterfeld",
    county: "Landkreis Anhalt-Bitterfeld",
    state: "Sachsen-Anhalt"
  },
  {
    id: 75,
    plate: "BÜD",
    name_origin: "Büdingen",
    county: "Wetteraukreis",
    state: "Hessen"
  },
  {
    id: 76,
    plate: "BUL",
    name_origin: "Burglengenfeld",
    county: "Landkreise Amberg-Sulzbach & Schwandorf",
    state: "Bayern"
  },
  {
    id: 77,
    plate: "BÜS",
    name_origin: "Büsingen",
    county: "Gemeinde Büsingen am Hochrhein",
    state: "Baden-Württemberg"
  },
  {
    id: 78,
    plate: "BÜZ",
    name_origin: "Bützow",
    county: "Landkreis Rostock",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 79,
    plate: "BW",
    name_origin: "Bundeswasser verwaltung",
    county: "Bundeswasser verwaltung",
    state: "bundesweit"
  },
  {
    id: 80,
    plate: "BWL",
    name_origin: "Land Baden-Württemberg",
    county: "Landesregierung, Landtag und Polizei",
    state: "Baden-Württemberg"
  },
  {
    id: 81,
    plate: "BYL",
    name_origin: "Land Bayern",
    county: "Landesregierung und Landtag",
    state: "Bayern"
  },
  {
    id: 82,
    plate: "BZ",
    name_origin: "Bautzen",
    county: "Landkreis Bautzen",
    state: "Sachsen"
  },
  {
    id: 83,
    plate: "C",
    name_origin: "Chemnitz",
    county: "Stadt Chemnitz",
    state: "Sachsen"
  },
  {
    id: 84,
    plate: "CA",
    name_origin: "Calau",
    county: "Landkreis Oberspreewald-Lausitz",
    state: "Brandenburg"
  },
  {
    id: 85,
    plate: "CAS",
    name_origin: "Castrop-Rauxel",
    county: "Kreis Recklinghausen",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 86,
    plate: "CB",
    name_origin: "Cottbus",
    county: "Stadt Cottbus",
    state: "Brandenburg"
  },
  {
    id: 87,
    plate: "CE",
    name_origin: "Celle",
    county: "Landkreis Celle",
    state: "Niedersachsen"
  },
  {
    id: 88,
    plate: "CHA",
    name_origin: "Cham",
    county: "Landkreis Cham",
    state: "Bayern"
  },
  {
    id: 89,
    plate: "CLP",
    name_origin: "Cloppenburg",
    county: "Landkreis Cloppenburg",
    state: "Niedersachsen"
  },
  {
    id: 90,
    plate: "CLZ",
    name_origin: "Clausthal-Zellerfeld",
    county: "Landkreis Goslar",
    state: "Niedersachsen"
  },
  {
    id: 91,
    plate: "CO",
    name_origin: "Coburg",
    county: "Landkreis & Stadt Coburg",
    state: "Bayern"
  },
  {
    id: 92,
    plate: "COC",
    name_origin: "Cochem",
    county: "Landkreis Cochem-Zell",
    state: "Rheinland-Pfalz"
  },
  {
    id: 93,
    plate: "COE",
    name_origin: "Coesfeld",
    county: "Kreis Coesfeld",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 94,
    plate: "CUX",
    name_origin: "Cuxhaven",
    county: "Landkreis Cuxhaven",
    state: "Niedersachsen"
  },
  {
    id: 95,
    plate: "CW",
    name_origin: "Calw",
    county: "Landkreis Calw",
    state: "Baden-Württemberg"
  },
  {
    id: 96,
    plate: "D",
    name_origin: "Düsseldorf",
    county: "Stadt Düsseldorf",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 97,
    plate: "DA",
    name_origin: "Darmstadt",
    county: "Stadt Darmstadt & Landkreis Darmstadt-Dieburg",
    state: "Hessen"
  },
  {
    id: 98,
    plate: "DAH",
    name_origin: "Dachau",
    county: "Landkreis Dachau",
    state: "Bayern"
  },
  {
    id: 99,
    plate: "DAN",
    name_origin: "Dannenberg",
    county: "Landkreis Lüchow-Dannenberg",
    state: "Niedersachsen"
  },
  {
    id: 100,
    plate: "DAU",
    name_origin: "Daun",
    county: "Landkreis Vulkaneifel",
    state: "Rheinland-Pfalz"
  },
  {
    id: 101,
    plate: "DBR",
    name_origin: "Bad Doberan",
    county: "Landkreis Rostock",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 102,
    plate: "DD",
    name_origin: "Dresden",
    county: "Stadt Dresden",
    state: "Sachsen"
  },
  {
    id: 103,
    plate: "DE",
    name_origin: "Dessau",
    county: "Stadt Dessau-Roßlau",
    state: "Sachsen-Anhalt"
  },
  {
    id: 104,
    plate: "DEG",
    name_origin: "Deggendorf",
    county: "Landkreis Deggendorf",
    state: "Bayern"
  },
  {
    id: 105,
    plate: "DEL",
    name_origin: "Delmenhorst",
    county: "Stadt Delmenhorst",
    state: "Niedersachsen"
  },
  {
    id: 106,
    plate: "DGF",
    name_origin: "Dingolfing",
    county: "Landkreis Dingolfing-Landau",
    state: "Bayern"
  },
  {
    id: 107,
    plate: "DH",
    name_origin: "Diepholz",
    county: "Landkreis Diepholz",
    state: "Niedersachsen"
  },
  {
    id: 108,
    plate: "DI",
    name_origin: "Dieburg",
    county: "Landkreis Darmstadt-Dieburg",
    state: "Hessen"
  },
  {
    id: 109,
    plate: "DIN",
    name_origin: "Dinslaken",
    county: "Kreis Wesel",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 110,
    plate: "DIZ",
    name_origin: "Diez",
    county: "Rhein-Lahn-Kreis",
    state: "Rheinland-Pfalz"
  },
  {
    id: 111,
    plate: "DKB",
    name_origin: "Dinkelsbühl",
    county: "Landkreis Ansbach",
    state: "Bayern"
  },
  {
    id: 112,
    plate: "DL",
    name_origin: "Döbeln",
    county: "Landkreis Mittelsachsen",
    state: "Sachsen"
  },
  {
    id: 113,
    plate: "DLG",
    name_origin: "Dillingen an der Donau",
    county: "Landkreis Dillingen an der Donau",
    state: "Bayern"
  },
  {
    id: 114,
    plate: "DM",
    name_origin: "Demmin",
    county: "Landkreis Mecklenburgische Seenplatte ohne Stadt Neubrandenburg",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 115,
    plate: "DN",
    name_origin: "Düren",
    county: "Kreis Düren",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 116,
    plate: "DO",
    name_origin: "Dortmund",
    county: "Stadt Dortmund",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 117,
    plate: "DON",
    name_origin: "Donauwörth",
    county: "Landkreis Donau-Ries",
    state: "Bayern"
  },
  {
    id: 118,
    plate: "DU",
    name_origin: "Duisburg",
    county: "Stadt Duisburg",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 119,
    plate: "DUD",
    name_origin: "Duderstadt",
    county: "Landkreis Göttingen",
    state: "Niedersachsen"
  },
  {
    id: 120,
    plate: "DÜW",
    name_origin: "Bad Dürkheim an der Weinstraße",
    county: "Landkreis Bad Dürkheim",
    state: "Rheinland-Pfalz"
  },
  {
    id: 121,
    plate: "DW",
    name_origin: "Dippoldiswalde",
    county: "Landkreis Sächsische Schweiz-Osterzgebirge",
    state: "Sachsen"
  },
  {
    id: 122,
    plate: "DZ",
    name_origin: "Delitzsch",
    county: "Landkreis Nordsachsen",
    state: "Sachsen"
  },
  {
    id: 123,
    plate: "E",
    name_origin: "Essen",
    county: "Stadt Essen",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 124,
    plate: "EA",
    name_origin: "Eisenach",
    county: "Stadt Eisenach",
    state: "Thüringen"
  },
  {
    id: 125,
    plate: "EB",
    name_origin: "Eilenburg",
    county: "Landkreis Nordsachsen",
    state: "Sachsen"
  },
  {
    id: 126,
    plate: "EBE",
    name_origin: "Ebersberg",
    county: "Landkreis Ebersberg",
    state: "Bayern"
  },
  {
    id: 127,
    plate: "EBS",
    name_origin: "Ebermannstadt",
    county: "Landkreise Bayreuth, Forchheim & Kulmbach",
    state: "Bayern"
  },
  {
    id: 128,
    plate: "ECK",
    name_origin: "Eckernförde",
    county: "Kreis Rendsburg-Eckernförde",
    state: "Schleswig-Holstein"
  },
  {
    id: 129,
    plate: "ED",
    name_origin: "Erding",
    county: "Landkreis Erding",
    state: "Bayern"
  },
  {
    id: 130,
    plate: "EE",
    name_origin: "Elbe-Elster",
    county: "Landkreis Elbe-Elster",
    state: "Brandenburg"
  },
  {
    id: 131,
    plate: "EF",
    name_origin: "Erfurt",
    county: "Stadt Erfurt",
    state: "Thüringen"
  },
  {
    id: 132,
    plate: "EG",
    name_origin: "Eggenfelden",
    county: "Landkreis Rottal-Inn",
    state: "Bayern"
  },
  {
    id: 133,
    plate: "EI",
    name_origin: "Eichstätt",
    county: "Landkreis Eichstätt",
    state: "Bayern"
  },
  {
    id: 134,
    plate: "EIC",
    name_origin: "Eichsfeld",
    county: "Landkreis Eichsfeld",
    state: "Thüringen"
  },
  {
    id: 135,
    plate: "EIL",
    name_origin: "Eisleben",
    county: "Landkreis Mansfeld-Südharz",
    state: "Sachsen-Anhalt"
  },
  {
    id: 136,
    plate: "EIN",
    name_origin: "Einbeck",
    county: "Landkreis Northeim",
    state: "Niedersachsen"
  },
  {
    id: 137,
    plate: "EIS",
    name_origin: "Eisenberg",
    county: "Saale-Holzland-Kreis",
    state: "Thüringen"
  },
  {
    id: 138,
    plate: "EL",
    name_origin: "Emsland",
    county: "Landkreis Emsland",
    state: "Niedersachsen"
  },
  {
    id: 139,
    plate: "EM",
    name_origin: "Emmendingen",
    county: "Landkreis Emmendingen",
    state: "Baden-Württemberg"
  },
  {
    id: 140,
    plate: "EMD",
    name_origin: "Emden",
    county: "Stadt Emden",
    state: "Niedersachsen"
  },
  {
    id: 141,
    plate: "EMS",
    name_origin: "Bad Ems",
    county: "Rhein-Lahn-Kreis",
    state: "Rheinland-Pfalz"
  },
  {
    id: 142,
    plate: "EN",
    name_origin: "Ennepe",
    county: "Ennepe-Ruhr-Kreis",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 143,
    plate: "ER",
    name_origin: "Erlangen",
    county: "Stadt Erlangen",
    state: "Bayern"
  },
  {
    id: 144,
    plate: "ERB",
    name_origin: "Erbach (Odenwald)",
    county: "Odenwaldkreis",
    state: "Hessen"
  },
  {
    id: 145,
    plate: "ERH",
    name_origin: "Erlangen-Höchstadt",
    county: "Landkreis Erlangen-Höchstadt",
    state: "Bayern"
  },
  {
    id: 146,
    plate: "ERK",
    name_origin: "Erkelenz",
    county: "Kreis Heinsberg",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 147,
    plate: "ERZ",
    name_origin: "Erzgebirge",
    county: "Erzgebirgskreis",
    state: "Sachsen"
  },
  {
    id: 148,
    plate: "ES",
    name_origin: "Esslingen am Neckar",
    county: "Landkreis Esslingen",
    state: "Baden-Württemberg"
  },
  {
    id: 149,
    plate: "ESB",
    name_origin: "Eschenbach in der Oberpfalz",
    county: "Landkreise Amberg-Sulzbach, Bayreuth, Neustadt an der Waldnaab & Nürnberger Land",
    state: "Bayern"
  },
  {
    id: 150,
    plate: "ESW",
    name_origin: "Eschwege",
    county: "Werra-Meißner-Kreis",
    state: "Hessen"
  },
  {
    id: 151,
    plate: "EU",
    name_origin: "Euskirchen",
    county: "Kreis Euskirchen",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 152,
    plate: "EW",
    name_origin: "Eberswalde",
    county: "Landkreis Barnim",
    state: "Brandenburg"
  },
  {
    id: 153,
    plate: "F",
    name_origin: "Frankfurt",
    county: "Stadt Frankfurt am Main",
    state: "Hessen"
  },
  {
    id: 154,
    plate: "FB",
    name_origin: "Friedberg (Hessen)",
    county: "Wetteraukreis",
    state: "Hessen"
  },
  {
    id: 155,
    plate: "FD",
    name_origin: "Fulda",
    county: "Landkreis Fulda",
    state: "Hessen"
  },
  {
    id: 156,
    plate: "FDB",
    name_origin: "Friedberg",
    county: "Landkreis Aichach-Friedberg",
    state: "Bayern"
  },
  {
    id: 157,
    plate: "FDS",
    name_origin: "Freudenstadt",
    county: "Landkreis Freudenstadt",
    state: "Baden-Württemberg"
  },
  {
    id: 158,
    plate: "FEU",
    name_origin: "Feuchtwangen",
    county: "Landkreis Ansbach",
    state: "Bayern"
  },
  {
    id: 159,
    plate: "FF",
    name_origin: "Frankfurt",
    county: "Stadt Frankfurt an der Oder",
    state: "Brandenburg"
  },
  {
    id: 160,
    plate: "FFB",
    name_origin: "Fürstenfeldbruck",
    county: "Landkreis Fürstenfeldbruck",
    state: "Bayern"
  },
  {
    id: 161,
    plate: "FG",
    name_origin: "Freiberg",
    county: "Landkreis Mittelsachsen",
    state: "Sachsen"
  },
  {
    id: 162,
    plate: "FI",
    name_origin: "Finsterwalde",
    county: "Landkreis Elbe-Elster",
    state: "Brandenburg"
  },
  {
    id: 163,
    plate: "FL",
    name_origin: "Flensburg",
    county: "Stadt Flensburg",
    state: "Schleswig-Holstein"
  },
  {
    id: 164,
    plate: "FLÖ",
    name_origin: "Flöha",
    county: "Landkreis Mittelsachsen",
    state: "Sachsen"
  },
  {
    id: 165,
    plate: "FN",
    name_origin: "Friedrichshafen",
    county: "Bodenseekreis",
    state: "Baden-Württemberg"
  },
  {
    id: 166,
    plate: "FO",
    name_origin: "Forchheim",
    county: "Landkreis Forchheim",
    state: "Bayern"
  },
  {
    id: 167,
    plate: "FOR",
    name_origin: "Forst (Lausitz)",
    county: "Landkreis Spree-Neiße",
    state: "Brandenburg"
  },
  {
    id: 168,
    plate: "FR",
    name_origin: "Freiburg im Breisgau",
    county: "Landkreis Breisgau-Hochschwarzwald",
    state: "Baden-Württemberg"
  },
  {
    id: 169,
    plate: "FRG",
    name_origin: "Freyung-Grafenau",
    county: "Landkreis Freyung-Grafenau",
    state: "Bayern"
  },
  {
    id: 170,
    plate: "FRI",
    name_origin: "Friesland",
    county: "Landkreis Friesland",
    state: "Niedersachsen"
  },
  {
    id: 171,
    plate: "FRW",
    name_origin: "Bad Freienwalde (Oder)",
    county: "Landkreis Märkisch-Oderland",
    state: "Brandenburg"
  },
  {
    id: 172,
    plate: "FS",
    name_origin: "Freising",
    county: "Landkreis Freising",
    state: "Bayern"
  },
  {
    id: 173,
    plate: "FT",
    name_origin: "Frankenthal",
    county: "Stadt Frankenthal (Pfalz)",
    state: "Rheinland-Pfalz"
  },
  {
    id: 174,
    plate: "FTL",
    name_origin: "Freital",
    county: "Landkreis Sächsische Schweiz-Osterzgebirge",
    state: "Sachsen"
  },
  {
    id: 175,
    plate: "FÜ",
    name_origin: "Fürth",
    county: "Stadt & Landkreis Fürth",
    state: "Bayern"
  },
  {
    id: 176,
    plate: "FÜS",
    name_origin: "Füssen",
    county: "Landkreis Ostallgäu",
    state: "Bayern"
  },
  {
    id: 177,
    plate: "G",
    name_origin: "Gera",
    county: "Stadt Gera",
    state: "Thüringen"
  },
  {
    id: 178,
    plate: "GA",
    name_origin: "Gardelegen",
    county: "Altmarkkreis Salzwedel",
    state: "Sachsen-Anhalt"
  },
  {
    id: 179,
    plate: "GAN",
    name_origin: "Bad Gandersheim",
    county: "Landkreis Northeim",
    state: "Niedersachsen"
  },
  {
    id: 180,
    plate: "GAP",
    name_origin: "Garmisch-Partenkirchen",
    county: "Landkreis Garmisch-Partenkirchen",
    state: "Bayern"
  },
  {
    id: 181,
    plate: "GC",
    name_origin: "Glauchau",
    county: "Landkreis Zwickau",
    state: "Sachsen"
  },
  {
    id: 182,
    plate: "GD",
    name_origin: "Schwäbisch Gmünd",
    county: "Ostalbkreis",
    state: "Baden-Württemberg"
  },
  {
    id: 183,
    plate: "GDB",
    name_origin: "Gadebusch",
    county: "Landkreis Nordwestmecklenburg",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 184,
    plate: "GE",
    name_origin: "Gelsenkirchen",
    county: "Stadt Gelsenkirchen",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 185,
    plate: "GEO",
    name_origin: "Gerolzhofen",
    county: "Landkreis Schweinfurt",
    state: "Bayern"
  },
  {
    id: 186,
    plate: "GER",
    name_origin: "Germersheim",
    county: "Landkreis Germersheim",
    state: "Rheinland-Pfalz"
  },
  {
    id: 187,
    plate: "GF",
    name_origin: "Gifhorn",
    county: "Landkreis Gifhorn",
    state: "Niedersachsen"
  },
  {
    id: 188,
    plate: "GG",
    name_origin: "Groß-Gerau",
    county: "Landkreis Groß-Gerau",
    state: "Hessen"
  },
  {
    id: 189,
    plate: "GHA",
    name_origin: "Geithain",
    county: "Landkreis Leipzig",
    state: "Sachsen"
  },
  {
    id: 190,
    plate: "GHC",
    name_origin: "Gräfenhainichen",
    county: "Landkreis Wittenberg",
    state: "Sachsen-Anhalt"
  },
  {
    id: 191,
    plate: "GI",
    name_origin: "Gießen",
    county: "Landkreis Gießen",
    state: "Hessen"
  },
  {
    id: 192,
    plate: "GK",
    name_origin: "Geilenkirchen",
    county: "Kreis Heinsberg",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 193,
    plate: "GL",
    name_origin: "Bergisch Gladbach",
    county: "Rheinisch-Bergischer Kreis",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 194,
    plate: "GLA",
    name_origin: "Gladbeck",
    county: "Kreis Recklinghausen",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 195,
    plate: "GM",
    name_origin: "Gummersbach",
    county: "Oberbergischer Kreis",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 196,
    plate: "GMN",
    name_origin: "Grimmen",
    county: "Landkreis Vorpommern-Rügen ohne Stralsund",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 197,
    plate: "GN",
    name_origin: "Gelnhausen",
    county: "Main-Kinzig-Kreis ohne Hanau",
    state: "Hessen"
  },
  {
    id: 198,
    plate: "GNT",
    name_origin: "Genthin",
    county: "Landkreis Jerichower Land",
    state: "Sachsen-Anhalt"
  },
  {
    id: 199,
    plate: "GÖ",
    name_origin: "Göttingen",
    county: "Landkreis & Stadt Göttingen",
    state: "Niedersachsen"
  },
  {
    id: 200,
    plate: "GOA",
    name_origin: "Sankt Goar",
    county: "Rhein-Hunsrück-Kreis",
    state: "Rheinland-Pfalz"
  },
  {
    id: 201,
    plate: "GOH",
    name_origin: "Sankt Goarshausen",
    county: "Rhein-Lahn-Kreis",
    state: "Rheinland-Pfalz"
  },
  {
    id: 202,
    plate: "GP",
    name_origin: "Göppingen",
    county: "Landkreis Göppingen",
    state: "Baden-Württemberg"
  },
  {
    id: 203,
    plate: "GR",
    name_origin: "Görlitz",
    county: "Landkreis Görlitz",
    state: "Sachsen"
  },
  {
    id: 204,
    plate: "GRA",
    name_origin: "Grafenau",
    county: "Landkreis Freyung-Grafenau",
    state: "Bayern"
  },
  {
    id: 205,
    plate: "GRH",
    name_origin: "Großenhain",
    county: "Landkreis Meißen",
    state: "Sachsen"
  },
  {
    id: 206,
    plate: "GRI",
    name_origin: "Bad Griesbach im Rottal",
    county: "Landkreis Rottal-Inn",
    state: "Bayern"
  },
  {
    id: 207,
    plate: "GRM",
    name_origin: "Grimma",
    county: "Landkreis Leipzig",
    state: "Sachsen"
  },
  {
    id: 208,
    plate: "GRZ",
    name_origin: "Greiz",
    county: "Landkreis Greiz",
    state: "Thüringen"
  },
  {
    id: 209,
    plate: "GS",
    name_origin: "Goslar",
    county: "Landkreis Goslar",
    state: "Niedersachsen"
  },
  {
    id: 210,
    plate: "GT",
    name_origin: "Gütersloh",
    county: "Kreis Gütersloh",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 211,
    plate: "GTH",
    name_origin: "Gotha",
    county: "Landkreis Gotha",
    state: "Thüringen"
  },
  {
    id: 212,
    plate: "GÜ",
    name_origin: "Güstrow",
    county: "Landkreis Rostock",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 213,
    plate: "GUB",
    name_origin: "Guben",
    county: "Landkreis Spree-Neiße",
    state: "Brandenburg"
  },
  {
    id: 214,
    plate: "GUN",
    name_origin: "Gunzenhausen",
    county: "Landkreis Weißenburg-Gunzenhausen",
    state: "Bayern"
  },
  {
    id: 215,
    plate: "GVM",
    name_origin: "Grevesmühlen",
    county: "Landkreis Nordwestmecklenburg",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 216,
    plate: "GW",
    name_origin: "Greifswald",
    county: "Landkreis Vorpommern-Greifswald ohne Greifswald",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 217,
    plate: "GZ",
    name_origin: "Günzburg",
    county: "Landkreis Günzburg",
    state: "Bayern"
  },
  {
    id: 218,
    plate: "H",
    name_origin: "Hannover",
    county: "Region & Stadt Hannover",
    state: "Niedersachsen"
  },
  {
    id: 219,
    plate: "HA",
    name_origin: "Hagen",
    county: "Stadt Hagen",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 220,
    plate: "HAB",
    name_origin: "Hammelburg",
    county: "Landkreis Bad Kissingen",
    state: "Bayern"
  },
  {
    id: 221,
    plate: "HAL",
    name_origin: "Halle an der Saale",
    county: "Stadt Halle an der Saale",
    state: "Sachsen-Anhalt"
  },
  {
    id: 222,
    plate: "HAM",
    name_origin: "Hamm",
    county: "Stadt Hamm",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 223,
    plate: "HAS",
    name_origin: "Haßfurt",
    county: "Landkreis Haßberge",
    state: "Bayern"
  },
  {
    id: 224,
    plate: "HB",
    name_origin: "Bremen",
    county: "Städte Bremerhaven & Bremen",
    state: "Bremen"
  },
  {
    id: 225,
    plate: "HBN",
    name_origin: "Hildburghausen",
    county: "Landkreis Hildburghausen",
    state: "Thüringen"
  },
  {
    id: 226,
    plate: "HBS",
    name_origin: "Halberstadt",
    county: "Landkreis Harz",
    state: "Sachsen-Anhalt"
  },
  {
    id: 227,
    plate: "HC",
    name_origin: "Hainichen",
    county: "Landkreis Mittelsachsen",
    state: "Sachsen"
  },
  {
    id: 228,
    plate: "HCH",
    name_origin: "Hechingen",
    county: "Zollernalbkreis",
    state: "Baden-Württemberg"
  },
  {
    id: 229,
    plate: "HD",
    name_origin: "Heidelberg",
    county: "Rhein-Neckar-Kreis & Stadt Heidelberg",
    state: "Baden-Württemberg"
  },
  {
    id: 230,
    plate: "HDH",
    name_origin: "Heidenheim an der Brenz",
    county: "Landkreis Heidenheim",
    state: "Baden-Württemberg"
  },
  {
    id: 231,
    plate: "HDL",
    name_origin: "Haldensleben",
    county: "Landkreis Börde",
    state: "Sachsen-Anhalt"
  },
  {
    id: 232,
    plate: "HE",
    name_origin: "Helmstedt",
    county: "Landkreis Helmstedt",
    state: "Niedersachsen"
  },
  {
    id: 233,
    plate: "HEB",
    name_origin: "Hersbruck",
    county: "Landkreis Nürnberger Land",
    state: "Bayern"
  },
  {
    id: 234,
    plate: "HEF",
    name_origin: "Bad Hersfeld",
    county: "Landkreis Hersfeld-Rotenburg",
    state: "Hessen"
  },
  {
    id: 235,
    plate: "HEI",
    name_origin: "Heide (Holstein)",
    county: "Kreis Dithmarschen",
    state: "Schleswig-Holstein"
  },
  {
    id: 236,
    plate: "HEL",
    name_origin: "Land Hessen",
    county: "Landesregierung und Landtag",
    state: "Hessen"
  },
  {
    id: 237,
    plate: "HER",
    name_origin: "Herne",
    county: "Stadt Herne",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 238,
    plate: "HET",
    name_origin: "Hettstedt",
    county: "Landkreis Mansfeld-Südharz",
    state: "Sachsen-Anhalt"
  },
  {
    id: 239,
    plate: "HF",
    name_origin: "Herford",
    county: "Kreis Herford",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 240,
    plate: "HG",
    name_origin: "Bad Homburg vor der Höhe",
    county: "Hochtaunuskreis",
    state: "Hessen"
  },
  {
    id: 241,
    plate: "HGN",
    name_origin: "Hagenow",
    county: "Landkreis Ludwigslust-Parchim",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 242,
    plate: "HGW",
    name_origin: "Hansestadt Greifswald",
    county: "Stadt Greifswald",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 243,
    plate: "HH",
    name_origin: "Hamburg",
    county: "Freie und Hansestadt Hamburg",
    state: "Hamburg"
  },
  {
    id: 244,
    plate: "HHM",
    name_origin: "Hohenmölsen",
    county: "Burgenlandkreis",
    state: "Sachsen-Anhalt"
  },
  {
    id: 245,
    plate: "HI",
    name_origin: "Hildesheim",
    county: "Landkreis Hildesheim",
    state: "Niedersachsen"
  },
  {
    id: 246,
    plate: "HIG",
    name_origin: "Heiligenstadt",
    county: "Landkreis Eichsfeld",
    state: "Thüringen"
  },
  {
    id: 247,
    plate: "HIP",
    name_origin: "Hilpoltstein",
    county: "Landkreis Roth",
    state: "Bayern"
  },
  {
    id: 248,
    plate: "HK",
    name_origin: "Heidekreis",
    county: "Landkreis Heidekreis",
    state: "Niedersachsen"
  },
  {
    id: 249,
    plate: "HL",
    name_origin: "Hansestadt Lübeck",
    county: "Stadt Lübeck",
    state: "Schleswig-Holstein"
  },
  {
    id: 250,
    plate: "HM",
    name_origin: "Hameln",
    county: "Landkreis Hameln-Pyrmont",
    state: "Niedersachsen"
  },
  {
    id: 251,
    plate: "HMÜ",
    name_origin: "Hannover Münden",
    county: "Landkreis Göttingen",
    state: "Niedersachsen"
  },
  {
    id: 252,
    plate: "HN",
    name_origin: "Heilbronn",
    county: "Landkreis & Stadt Heilbronn",
    state: "Baden-Württemberg"
  },
  {
    id: 253,
    plate: "HO",
    name_origin: "Hof",
    county: "Landkreis & Stadt Hof",
    state: "Bayern"
  },
  {
    id: 254,
    plate: "HOG",
    name_origin: "Hofgeismar",
    county: "Landkreis Kassel",
    state: "Hessen"
  },
  {
    id: 255,
    plate: "HOL",
    name_origin: "Holzminden",
    county: "Landkreis Holzminden",
    state: "Niedersachsen"
  },
  {
    id: 256,
    plate: "HOM",
    name_origin: "Homburg",
    county: "Saarpfalz-Kreis ohne St. Ingbert",
    state: "Saarland"
  },
  {
    id: 257,
    plate: "HOT",
    name_origin: "Hohenstein-Ernstthal",
    county: "Landkreis Zwickau",
    state: "Sachsen"
  },
  {
    id: 258,
    plate: "HP",
    name_origin: "Heppenheim (Bergstraße)",
    county: "Landkreis Bergstraße",
    state: "Hessen"
  },
  {
    id: 259,
    plate: "HR",
    name_origin: "Homberg (Efze)",
    county: "Schwalm-Eder-Kreis",
    state: "Hessen"
  },
  {
    id: 260,
    plate: "HRO",
    name_origin: "Hansestadt Rostock",
    county: "Stadt Rostock",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 261,
    plate: "HS",
    name_origin: "Heinsberg",
    county: "Kreis Heinsberg",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 262,
    plate: "HSK",
    name_origin: "Hochsauerlandkreis",
    county: "Hochsauerlandkreis",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 263,
    plate: "HST",
    name_origin: "Hansestadt Stralsund",
    county: "Stadt Stralsund",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 264,
    plate: "HU",
    name_origin: "Hanau",
    county: "Stadt Hanau",
    state: "Hessen"
  },
  {
    id: 265,
    plate: "HV",
    name_origin: "Havelberg",
    county: "Landkreis Stendal",
    state: "Sachsen-Anhalt"
  },
  {
    id: 266,
    plate: "HVL",
    name_origin: "Havelland",
    county: "Landkreis Havelland",
    state: "Brandenburg"
  },
  {
    id: 267,
    plate: "HWI",
    name_origin: "Hansestadt Wismar",
    county: "Stadt Wismar",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 268,
    plate: "HX",
    name_origin: "Höxter",
    county: "Kreis Höxter",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 269,
    plate: "HY",
    name_origin: "Hoyerswerda",
    county: "Landkreis Bautzen",
    state: "Sachsen"
  },
  {
    id: 270,
    plate: "HZ",
    name_origin: "Harz",
    county: "Landkreis Harz",
    state: "Sachsen-Anhalt"
  },
  {
    id: 271,
    plate: "IGB",
    name_origin: "St. Ingbert",
    county: "Stadt St. Ingbert",
    state: "Saarland"
  },
  {
    id: 272,
    plate: "IK",
    name_origin: "Ilm-Kreis",
    county: "Ilm-Kreis",
    state: "Thüringen"
  },
  {
    id: 273,
    plate: "IL",
    name_origin: "Ilmenau",
    county: "Ilm-Kreis",
    state: "Thüringen"
  },
  {
    id: 274,
    plate: "ILL",
    name_origin: "Illertissen",
    county: "Landkreis Neu-Ulm",
    state: "Bayern"
  },
  {
    id: 275,
    plate: "IN",
    name_origin: "Ingolstadt",
    county: "Stadt Ingolstadt",
    state: "Bayern"
  },
  {
    id: 276,
    plate: "IZ",
    name_origin: "Itzehoe",
    county: "Kreis Steinburg",
    state: "Schleswig-Holstein"
  },
  {
    id: 277,
    plate: "J",
    name_origin: "Jena",
    county: "Stadt Jena",
    state: "Thüringen"
  },
  {
    id: 278,
    plate: "JE",
    name_origin: "Jessen (Elster)",
    county: "Landkreis Wittenberg",
    state: "Sachsen-Anhalt"
  },
  {
    id: 279,
    plate: "JL",
    name_origin: "Jerichower Land",
    county: "Landkreis Jerichower Land",
    state: "Sachsen-Anhalt"
  },
  {
    id: 280,
    plate: "JÜL",
    name_origin: "Jülich",
    county: "Kreis Düren",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 281,
    plate: "K",
    name_origin: "Köln",
    county: "Stadt Köln",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 282,
    plate: "KA",
    name_origin: "Karlsruhe",
    county: "Stadt & Landkreis Karlsruhe",
    state: "Baden-Württemberg"
  },
  {
    id: 283,
    plate: "KB",
    name_origin: "Korbach",
    county: "Landkreis Waldeck-Frankenberg",
    state: "Hessen"
  },
  {
    id: 284,
    plate: "KC",
    name_origin: "Kronach",
    county: "Landkreis Kronach",
    state: "Bayern"
  },
  {
    id: 285,
    plate: "KE",
    name_origin: "Kempten",
    county: "Stadt Kempten (Allgäu)",
    state: "Bayern"
  },
  {
    id: 286,
    plate: "KEH",
    name_origin: "Kelheim",
    county: "Landkreis Kelheim",
    state: "Bayern"
  },
  {
    id: 287,
    plate: "KEM",
    name_origin: "Kemnath",
    county: "Landkreise Bayreuth & Tirschenreuth",
    state: "Bayern"
  },
  {
    id: 288,
    plate: "KF",
    name_origin: "Kaufbeuren",
    county: "Stadt Kaufbeuren",
    state: "Bayern"
  },
  {
    id: 289,
    plate: "KG",
    name_origin: "Bad Kissingen",
    county: "Landkreis Bad Kissingen",
    state: "Bayern"
  },
  {
    id: 290,
    plate: "KH",
    name_origin: "Bad Kreuznach",
    county: "Landkreis & Stadt Bad Kreuznach",
    state: "Rheinland-Pfalz"
  },
  {
    id: 291,
    plate: "KI",
    name_origin: "Kiel",
    county: "Stadt Kiel",
    state: "Schleswig-Holstein"
  },
  {
    id: 292,
    plate: "KIB",
    name_origin: "Kirchheimbolanden",
    county: "Donnersbergkreis",
    state: "Rheinland-Pfalz"
  },
  {
    id: 293,
    plate: "KL",
    name_origin: "Kaiserslautern",
    county: "Landkreis & Stadt Kaiserslautern",
    state: "Rheinland-Pfalz"
  },
  {
    id: 294,
    plate: "KLE",
    name_origin: "Kleve",
    county: "Kreis Kleve",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 295,
    plate: "KLZ",
    name_origin: "Klötze",
    county: "Altmarkkreis Salzwedel",
    state: "Sachsen-Anhalt"
  },
  {
    id: 296,
    plate: "KM",
    name_origin: "Kamenz",
    county: "Landkreis Bautzen",
    state: "Sachsen"
  },
  {
    id: 297,
    plate: "KN",
    name_origin: "Konstanz",
    county: "Landkreis Konstanz ohne Büsingen am Hochrhein",
    state: "Baden-Württemberg"
  },
  {
    id: 298,
    plate: "KO",
    name_origin: "Koblenz",
    county: "Stadt Koblenz",
    state: "Rheinland-Pfalz"
  },
  {
    id: 299,
    plate: "KÖN",
    name_origin: "Bad Königshofen im Grabfeld",
    county: "Landkreis Rhön-Grabfeld",
    state: "Bayern"
  },
  {
    id: 300,
    plate: "KÖT",
    name_origin: "Köthen (Anhalt)",
    county: "Landkreis Anhalt-Bitterfeld",
    state: "Sachsen-Anhalt"
  },
  {
    id: 301,
    plate: "KÖZ",
    name_origin: "Kötzting",
    county: "Landkreis Cham",
    state: "Bayern"
  },
  {
    id: 302,
    plate: "KR",
    name_origin: "Krefeld",
    county: "Stadt Krefeld",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 303,
    plate: "KRU",
    name_origin: "Krumbach (Schwaben)",
    county: "Landkreis Günzburg",
    state: "Bayern"
  },
  {
    id: 304,
    plate: "KS",
    name_origin: "Kassel",
    county: "Stadt & Landkreis Kassel",
    state: "Hessen"
  },
  {
    id: 305,
    plate: "KT",
    name_origin: "Kitzingen",
    county: "Landkreis Kitzingen",
    state: "Bayern"
  },
  {
    id: 306,
    plate: "KU",
    name_origin: "Kulmbach",
    county: "Landkreis Kulmbach",
    state: "Bayern"
  },
  {
    id: 307,
    plate: "KÜN",
    name_origin: "Künzelsau",
    county: "Hohenlohekreis",
    state: "Baden-Württemberg"
  },
  {
    id: 308,
    plate: "KUS",
    name_origin: "Kusel",
    county: "Landkreis Kusel",
    state: "Rheinland-Pfalz"
  },
  {
    id: 309,
    plate: "KY",
    name_origin: "Kyritz",
    county: "Landkreis Ostprignitz-Ruppin",
    state: "Brandenburg"
  },
  {
    id: 310,
    plate: "KYF",
    name_origin: "Kyffhäuser",
    county: "Kyffhäuserkreis",
    state: "Thüringen"
  },
  {
    id: 311,
    plate: "L",
    name_origin: "Leipzig",
    county: "Stadt & Landkreis Leipzig",
    state: "Sachsen"
  },
  {
    id: 312,
    plate: "LA",
    name_origin: "Landshut",
    county: "Landkreis & Stadt Landshut",
    state: "Bayern"
  },
  {
    id: 313,
    plate: "LAU",
    name_origin: "Lauf an der Pegnitz",
    county: "Landkreis Nürnberger Land",
    state: "Bayern"
  },
  {
    id: 314,
    plate: "LB",
    name_origin: "Ludwigsburg",
    county: "Landkreis Ludwigsburg",
    state: "Baden-Württemberg"
  },
  {
    id: 315,
    plate: "LBS",
    name_origin: "Bad Lobenstein",
    county: "Saale-Orla-Kreis",
    state: "Thüringen"
  },
  {
    id: 316,
    plate: "LBZ",
    name_origin: "Lübz",
    county: "Landkreis Ludwigslust-Parchim",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 317,
    plate: "LD",
    name_origin: "Landau in der Pfalz",
    county: "Stadt Landau in der Pfalz",
    state: "Rheinland-Pfalz"
  },
  {
    id: 318,
    plate: "LDK",
    name_origin: "Lahn-Dill-Kreis",
    county: "Lahn-Dill-Kreis ohne Wetzlar",
    state: "Hessen"
  },
  {
    id: 319,
    plate: "LDS",
    name_origin: "Landkreis Dahme-Spreewald",
    county: "Landkreis Dahme-Spreewald",
    state: "Brandenburg"
  },
  {
    id: 320,
    plate: "LEO",
    name_origin: "Leonberg",
    county: "Landkreis Böblingen",
    state: "Baden-Württemberg"
  },
  {
    id: 321,
    plate: "LER",
    name_origin: "Leer (Ostfriesland)",
    county: "Landkreis Leer",
    state: "Niedersachsen"
  },
  {
    id: 322,
    plate: "LEV",
    name_origin: "Leverkusen",
    county: "Stadt Leverkusen",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 323,
    plate: "LG",
    name_origin: "Lüneburg",
    county: "Landkreis Lüneburg",
    state: "Niedersachsen"
  },
  {
    id: 324,
    plate: "LI",
    name_origin: "Lindau am Bodensee",
    county: "Landkreis Lindau am Bodensee",
    state: "Bayern"
  },
  {
    id: 325,
    plate: "LIB",
    name_origin: "Bad Liebenwerda",
    county: "Landkreis Elbe-Elster",
    state: "Brandenburg"
  },
  {
    id: 326,
    plate: "LIF",
    name_origin: "Lichtenfels",
    county: "Landkreis Lichtenfels",
    state: "Bayern"
  },
  {
    id: 327,
    plate: "LIP",
    name_origin: "Lippe",
    county: "Kreis Lippe",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 328,
    plate: "LL",
    name_origin: "Landsberg am Lech",
    county: "Landkreis Landsberg am Lech",
    state: "Bayern"
  },
  {
    id: 329,
    plate: "LM",
    name_origin: "Limburg an der Lahn",
    county: "Landkreis Limburg-Weilburg",
    state: "Hessen"
  },
  {
    id: 330,
    plate: "LÖ",
    name_origin: "Lörrach",
    county: "Landkreis Lörrach",
    state: "Baden-Württemberg"
  },
  {
    id: 331,
    plate: "LÖB",
    name_origin: "Löbau",
    county: "Landkreis Görlitz",
    state: "Sachsen"
  },
  {
    id: 332,
    plate: "LOS",
    name_origin: "Landkreis Oder-Spree",
    county: "Landkreis Oder-Spree",
    state: "Brandenburg"
  },
  {
    id: 333,
    plate: "LP",
    name_origin: "Lippstadt",
    county: "Kreis Soest",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 334,
    plate: "LRO",
    name_origin: "Landkreis Rostock",
    county: "Landkreis Rostock",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 335,
    plate: "LSA",
    name_origin: "Land Sachsen-Anhalt",
    county: "Landesregierung, Landtag und Polizei",
    state: "Sachsen-Anhalt"
  },
  {
    id: 336,
    plate: "LSN",
    name_origin: "Land Sachsen",
    county: "Landesregierung und Landtag",
    state: "Sachsen"
  },
  {
    id: 337,
    plate: "LSZ",
    name_origin: "Bad Langensalza",
    county: "Unstrut-Hainich-Kreis",
    state: "Thüringen"
  },
  {
    id: 338,
    plate: "LU",
    name_origin: "Ludwigshafen am Rhein",
    county: "Stadt Ludwigshafen am Rhein",
    state: "Rheinland-Pfalz"
  },
  {
    id: 339,
    plate: "LÜN",
    name_origin: "Lünen",
    county: "Kreis Unna",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 340,
    plate: "LUP",
    name_origin: "Ludwigslust-Parchim",
    county: "Landkreis Ludwigslust-Parchim",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 341,
    plate: "LWL",
    name_origin: "Ludwigslust",
    county: "Landkreis Ludwigslust-Parchim",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 342,
    plate: "M",
    name_origin: "München",
    county: "Stadt & Landkreis München",
    state: "Bayern"
  },
  {
    id: 343,
    plate: "MA",
    name_origin: "Mannheim",
    county: "Stadt Mannheim",
    state: "Baden-Württemberg"
  },
  {
    id: 344,
    plate: "MAB",
    name_origin: "Marienberg",
    county: "Erzgebirgskreis",
    state: "Sachsen"
  },
  {
    id: 345,
    plate: "MAI",
    name_origin: "Mainburg",
    county: "Landkreis Kelheim",
    state: "Bayern"
  },
  {
    id: 346,
    plate: "MAK",
    name_origin: "Marktredwitz",
    county: "Landkreis Wunsiedel im Fichtelgebirge",
    state: "Bayern"
  },
  {
    id: 347,
    plate: "MB",
    name_origin: "Miesbach",
    county: "Landkreis Miesbach",
    state: "Bayern"
  },
  {
    id: 348,
    plate: "MC",
    name_origin: "Malchin",
    county: "Landkreis Mecklenburgische Seenplatte",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 349,
    plate: "MD",
    name_origin: "Magdeburg",
    county: "Stadt Magdeburg",
    state: "Sachsen-Anhalt"
  },
  {
    id: 350,
    plate: "ME",
    name_origin: "Mettmann",
    county: "Kreis Mettmann",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 351,
    plate: "MEI",
    name_origin: "Meißen",
    county: "Landkreis Meißen",
    state: "Sachsen"
  },
  {
    id: 352,
    plate: "MEK",
    name_origin: "Mittlerer Erzgebirgskreis",
    county: "Erzgebirgskreis",
    state: "Sachsen"
  },
  {
    id: 353,
    plate: "MER",
    name_origin: "Merseburg",
    county: "Saalekreis",
    state: "Sachsen-Anhalt"
  },
  {
    id: 354,
    plate: "MET",
    name_origin: "Mellrichstadt",
    county: "Landkreis Rhön-Grabfeld",
    state: "Bayern"
  },
  {
    id: 355,
    plate: "MG",
    name_origin: "Mönchengladbach",
    county: "Stadt Mönchengladbach",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 356,
    plate: "MGN",
    name_origin: "Meiningen",
    county: "Landkreis Schmalkalden-Meiningen",
    state: "Thüringen"
  },
  {
    id: 357,
    plate: "MH",
    name_origin: "Mülheim an der Ruhr",
    county: "Stadt Mülheim an der Ruhr",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 358,
    plate: "MHL",
    name_origin: "Mühlhausen/Thüringen",
    county: "Unstrut-Hainich-Kreis",
    state: "Thüringen"
  },
  {
    id: 359,
    plate: "MI",
    name_origin: "Minden",
    county: "Kreis Minden-Lübbecke",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 360,
    plate: "MIL",
    name_origin: "Miltenberg",
    county: "Landkreis Miltenberg",
    state: "Bayern"
  },
  {
    id: 361,
    plate: "MK",
    name_origin: "Mark",
    county: "Märkischer Kreis",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 362,
    plate: "MKK",
    name_origin: "Main-Kinzig-Kreis",
    county: "Main-Kinzig-Kreis ohne Hanau",
    state: "Hessen"
  },
  {
    id: 363,
    plate: "ML",
    name_origin: "Mansfelder Land",
    county: "Landkreis Mansfeld-Südharz",
    state: "Sachsen-Anhalt"
  },
  {
    id: 364,
    plate: "MM",
    name_origin: "Memmingen",
    county: "Stadt Memmingen",
    state: "Bayern"
  },
  {
    id: 365,
    plate: "MN",
    name_origin: "Mindelheim",
    county: "Landkreis Unterallgäu",
    state: "Bayern"
  },
  {
    id: 366,
    plate: "MO",
    name_origin: "Moers",
    county: "Kreis Wesel",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 367,
    plate: "MOD",
    name_origin: "Marktoberdorf",
    county: "Landkreis Ostallgäu",
    state: "Bayern"
  },
  {
    id: 368,
    plate: "MOL",
    name_origin: "Märkisch-Oderland",
    county: "Landkreis Märkisch-Oderland",
    state: "Brandenburg"
  },
  {
    id: 369,
    plate: "MON",
    name_origin: "Monschau",
    county: "Städteregion Aachen",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 370,
    plate: "MOS",
    name_origin: "Mosbach",
    county: "Neckar-Odenwald-Kreis",
    state: "Baden-Württemberg"
  },
  {
    id: 371,
    plate: "MQ",
    name_origin: "Merseburg-Querfurt",
    county: "Saalekreis",
    state: "Sachsen-Anhalt"
  },
  {
    id: 372,
    plate: "MR",
    name_origin: "Marburg-Biedenkopf",
    county: "Landkreis Marburg-Biedenkopf",
    state: "Hessen"
  },
  {
    id: 373,
    plate: "MS",
    name_origin: "Münster",
    county: "Stadt Münster (Westfalen)",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 374,
    plate: "MSE",
    name_origin: "Mecklenburgische Seenplatte",
    county: "Landkreis Mecklenburgische Seenplatte",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 375,
    plate: "MSH",
    name_origin: "Mansfeld-Südharz",
    county: "Landkreis Mansfeld-Südharz",
    state: "Sachsen-Anhalt"
  },
  {
    id: 376,
    plate: "MSP",
    name_origin: "Main-Spessart",
    county: "Landkreis Main-Spessart",
    state: "Bayern"
  },
  {
    id: 377,
    plate: "MST",
    name_origin: "Mecklenburg-Strelitz",
    county: "Landkreis Mecklenburgische Seenplatte",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 378,
    plate: "MTK",
    name_origin: "Main-Taunus-Kreis",
    county: "Main-Taunus-Kreis",
    state: "Hessen"
  },
  {
    id: 379,
    plate: "MTL",
    name_origin: "Muldentalkreis",
    county: "Landkreis Leipzig",
    state: "Sachsen"
  },
  {
    id: 380,
    plate: "MÜ",
    name_origin: "Mühldorf am Inn",
    county: "Landkreis Mühldorf am Inn",
    state: "Bayern"
  },
  {
    id: 381,
    plate: "MÜB",
    name_origin: "Münchberg",
    county: "Landkreis Bayreuth",
    state: "Bayern"
  },
  {
    id: 382,
    plate: "MÜR",
    name_origin: "Müritz",
    county: "Landkreis Mecklenburgische Seenplatte",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 383,
    plate: "MVL",
    name_origin: "Land Mecklenburg-Vorpommern",
    county: "Landesregierung, Landtag und Polizei",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 384,
    plate: "MW",
    name_origin: "Mittweida",
    county: "Landkreis Mittelsachsen",
    state: "Sachsen"
  },
  {
    id: 385,
    plate: "MY",
    name_origin: "Mayen",
    county: "Landkreis Mayen-Koblenz",
    state: "Rheinland-Pfalz"
  },
  {
    id: 386,
    plate: "MYK",
    name_origin: "Mayen-Koblenz",
    county: "Landkreis Mayen-Koblenz",
    state: "Rheinland-Pfalz"
  },
  {
    id: 387,
    plate: "MZ",
    name_origin: "Mainz",
    county: "Stadt Mainz & Landkreis Mainz-Bingen",
    state: "Rheinland-Pfalz"
  },
  {
    id: 388,
    plate: "MZG",
    name_origin: "Merzig",
    county: "Landkreis Merzig-Wadern",
    state: "Saarland"
  },
  {
    id: 389,
    plate: "N",
    name_origin: "Nürnberg",
    county: "Stadt Nürnberg & Landkreis Nürnberger Land",
    state: "Bayern"
  },
  {
    id: 390,
    plate: "NAB",
    name_origin: "Nabburg",
    county: "Landkreise Amberg-Sulzbach & Schwandorf",
    state: "Bayern"
  },
  {
    id: 391,
    plate: "NB",
    name_origin: "Neubrandenburg",
    county: "Stadt Neubrandenburg",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 392,
    plate: "ND",
    name_origin: "Neuburg an der Donau",
    county: "Landkreis Neuburg-Schrobenhausen",
    state: "Bayern"
  },
  {
    id: 393,
    plate: "NDH",
    name_origin: "Nordhausen",
    county: "Landkreis Nordhausen",
    state: "Thüringen"
  },
  {
    id: 394,
    plate: "NE",
    name_origin: "Neuss",
    county: "Rhein-Kreis Neuss",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 395,
    plate: "NEA",
    name_origin: "Neustadt an der Aisch",
    county: "Landkreis Neustadt an der Aisch-Bad Windsheim",
    state: "Bayern"
  },
  {
    id: 396,
    plate: "NEB",
    name_origin: "Nebra (Unstrut)",
    county: "Burgenlandkreis",
    state: "Sachsen-Anhalt"
  },
  {
    id: 397,
    plate: "NEC",
    name_origin: "Neustadt bei Coburg",
    county: "Landkreis Coburg",
    state: "Bayern"
  },
  {
    id: 398,
    plate: "NEN",
    name_origin: "Neunburg vorm Wald",
    county: "Landkreis Schwandorf",
    state: "Bayern"
  },
  {
    id: 399,
    plate: "NES",
    name_origin: "Bad Neustadt an der Saale",
    county: "Landkreis Rhön-Grabfeld",
    state: "Bayern"
  },
  {
    id: 400,
    plate: "NEW",
    name_origin: "Neustadt an der Waldnaab",
    county: "Landkreis Neustadt an der Waldnaab",
    state: "Bayern"
  },
  {
    id: 401,
    plate: "NF",
    name_origin: "Nordfriesland",
    county: "Kreis Nordfriesland",
    state: "Schleswig-Holstein"
  },
  {
    id: 402,
    plate: "NH",
    name_origin: "Neuhaus am Rennweg",
    county: "Landkreis Sonneberg",
    state: "Thüringen"
  },
  {
    id: 403,
    plate: "NI",
    name_origin: "Nienburg/Weser",
    county: "Landkreis Nienburg/Weser",
    state: "Niedersachsen"
  },
  {
    id: 404,
    plate: "NK",
    name_origin: "Neunkirchen",
    county: "Landkreis Neunkirchen",
    state: "Saarland"
  },
  {
    id: 405,
    plate: "NL",
    name_origin: "Land Niedersachsen",
    county: "Landesregierung und Landtag",
    state: "Niedersachsen"
  },
  {
    id: 406,
    plate: "NM",
    name_origin: "Neumarkt in der Oberpfalz",
    county: "Landkreis Neumarkt in der Oberpfalz",
    state: "Bayern"
  },
  {
    id: 407,
    plate: "NMB",
    name_origin: "Naumburg (Saale)",
    county: "Burgenlandkreis",
    state: "Sachsen-Anhalt"
  },
  {
    id: 408,
    plate: "NMS",
    name_origin: "Neumünster",
    county: "Stadt Neumünster",
    state: "Schleswig-Holstein"
  },
  {
    id: 409,
    plate: "NÖ",
    name_origin: "Nördlingen",
    county: "Landkreis Donau-Ries",
    state: "Bayern"
  },
  {
    id: 410,
    plate: "NOH",
    name_origin: "Nordhorn",
    county: "Landkreis Grafschaft Bentheim",
    state: "Niedersachsen"
  },
  {
    id: 411,
    plate: "NOL",
    name_origin: "Niederschlesische Oberlausitz",
    county: "Landkreis Görlitz",
    state: "Sachsen"
  },
  {
    id: 412,
    plate: "NOM",
    name_origin: "Northeim",
    county: "Landkreis Northeim",
    state: "Niedersachsen"
  },
  {
    id: 413,
    plate: "NOR",
    name_origin: "Norden",
    county: "Landkreis Aurich",
    state: "Niedersachsen"
  },
  {
    id: 414,
    plate: "NP",
    name_origin: "Neuruppin",
    county: "Landkreis Ostprignitz-Ruppin",
    state: "Brandenburg"
  },
  {
    id: 415,
    plate: "NR",
    name_origin: "Neuwied am Rhein",
    county: "Landkreis & Stadt Neuwied",
    state: "Rheinland-Pfalz"
  },
  {
    id: 416,
    plate: "NRW",
    name_origin: "Land Nordrhein-Westfalen",
    county: "Landesregierung, Landtag und Polizei",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 417,
    plate: "NU",
    name_origin: "Neu-Ulm",
    county: "Landkreis Neu-Ulm",
    state: "Bayern"
  },
  {
    id: 418,
    plate: "NVP",
    name_origin: "Nordvorpommern",
    county: "Landkreis Vorpommern-Rügen ohne Stralsund",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 419,
    plate: "NW",
    name_origin: "Neustadt an der Weinstraße",
    county: "Stadt Neustadt an der Weinstraße",
    state: "Rheinland-Pfalz"
  },
  {
    id: 420,
    plate: "NWM",
    name_origin: "Nordwestmecklenburg",
    county: "Landkreis Nordwestmecklenburg ohne Wismar",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 421,
    plate: "NY",
    name_origin: "Niesky",
    county: "Landkreis Görlitz",
    state: "Sachsen"
  },
  {
    id: 422,
    plate: "NZ",
    name_origin: "Neustrelitz",
    county: "Landkreis Mecklenburgische Seenplatte",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 423,
    plate: "OA",
    name_origin: "Oberallgäu",
    county: "Landkreis Oberallgäu",
    state: "Bayern"
  },
  {
    id: 424,
    plate: "OAL",
    name_origin: "Ostallgäu",
    county: "Landkreis Ostallgäu",
    state: "Bayern"
  },
  {
    id: 425,
    plate: "OB",
    name_origin: "Oberhausen",
    county: "Stadt Oberhausen",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 426,
    plate: "OBG",
    name_origin: "Osterburg (Altmark)",
    county: "Landkreis Stendal",
    state: "Sachsen-Anhalt"
  },
  {
    id: 427,
    plate: "OC",
    name_origin: "Oschersleben (Bode)",
    county: "Landkreis Börde",
    state: "Sachsen-Anhalt"
  },
  {
    id: 428,
    plate: "OCH",
    name_origin: "Ochsenfurt",
    county: "Landkreis Würzburg",
    state: "Bayern"
  },
  {
    id: 429,
    plate: "OD",
    name_origin: "Bad Oldesloe",
    county: "Kreis Stormarn",
    state: "Schleswig-Holstein"
  },
  {
    id: 430,
    plate: "OE",
    name_origin: "Olpe",
    county: "Kreis Olpe",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 431,
    plate: "OF",
    name_origin: "Offenbach",
    county: "Landkreis Offenbach & Stadt Offenbach am Main",
    state: "Hessen"
  },
  {
    id: 432,
    plate: "OG",
    name_origin: "Offenburg",
    county: "Ortenaukreis",
    state: "Baden-Württemberg"
  },
  {
    id: 433,
    plate: "OH",
    name_origin: "Ostholstein",
    county: "Kreis Ostholstein",
    state: "Schleswig-Holstein"
  },
  {
    id: 434,
    plate: "OHA",
    name_origin: "Osterode am Harz",
    county: "Landkreis Osterode am Harz",
    state: "Niedersachsen"
  },
  {
    id: 435,
    plate: "OHV",
    name_origin: "Oberhavel",
    county: "Landkreis Oberhavel",
    state: "Brandenburg"
  },
  {
    id: 436,
    plate: "OHZ",
    name_origin: "Osterholz-Scharmbeck",
    county: "Landkreis Osterholz",
    state: "Niedersachsen"
  },
  {
    id: 437,
    plate: "OK",
    name_origin: "Ohrekreis",
    county: "Landkreis Börde",
    state: "Sachsen-Anhalt"
  },
  {
    id: 438,
    plate: "OL",
    name_origin: "Oldenburg",
    county: "Stadt Oldenburg & Oldenburg",
    state: "Niedersachsen"
  },
  {
    id: 439,
    plate: "OPR",
    name_origin: "Ostprignitz-Ruppin",
    county: "Landkreis Ostprignitz-Ruppin",
    state: "Brandenburg"
  },
  {
    id: 440,
    plate: "OS",
    name_origin: "Osnabrück",
    county: "Landkreis Osnabrück",
    state: "Niedersachsen"
  },
  {
    id: 441,
    plate: "OSL",
    name_origin: "Oberspreewald-Lausitz",
    county: "Landkreis Oberspreewald-Lausitz",
    state: "Brandenburg"
  },
  {
    id: 442,
    plate: "OVI",
    name_origin: "Oberviechtach",
    county: "Landkreis Schwandorf",
    state: "Bayern"
  },
  {
    id: 443,
    plate: "OVL",
    name_origin: "Obervogtland",
    county: "Vogtlandkreis",
    state: "Sachsen"
  },
  {
    id: 444,
    plate: "OZ",
    name_origin: "Oschatz",
    county: "Landkreis Nordsachsen",
    state: "Sachsen"
  },
  {
    id: 445,
    plate: "P",
    name_origin: "Potsdam",
    county: "Stadt Potsdam",
    state: "Brandenburg"
  },
  {
    id: 446,
    plate: "PA",
    name_origin: "Passau",
    county: "Landkreis & Stadt Passau",
    state: "Bayern"
  },
  {
    id: 447,
    plate: "PAF",
    name_origin: "Pfaffenhofen an der Ilm",
    county: "Landkreis Pfaffenhofen an der Ilm",
    state: "Bayern"
  },
  {
    id: 448,
    plate: "PAN",
    name_origin: "Pfarrkirchen",
    county: "Landkreis Rottal-Inn",
    state: "Bayern"
  },
  {
    id: 449,
    plate: "PAR",
    name_origin: "Parsberg",
    county: "Landkreise Kelheim & Neumarkt in der Oberpfalz",
    state: "Bayern"
  },
  {
    id: 450,
    plate: "PB",
    name_origin: "Paderborn",
    county: "Kreis Paderborn",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 451,
    plate: "PCH",
    name_origin: "Parchim",
    county: "Landkreis Ludwigslust-Parchim",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 452,
    plate: "PE",
    name_origin: "Peine",
    county: "Landkreis Peine",
    state: "Niedersachsen"
  },
  {
    id: 453,
    plate: "PEG",
    name_origin: "Pegnitz",
    county: "Landkreise Bayreuth, Forchheim & Nürnberger Land",
    state: "Bayern"
  },
  {
    id: 454,
    plate: "PF",
    name_origin: "Pforzheim",
    county: "Stadt Pforzheim",
    state: "Baden-Württemberg"
  },
  {
    id: 455,
    plate: "PI",
    name_origin: "Pinneberg",
    county: "Kreis Pinneberg",
    state: "Schleswig-Holstein"
  },
  {
    id: 456,
    plate: "PIR",
    name_origin: "Pirna",
    county: "Landkreis Sächsische Schweiz-Osterzgebirge",
    state: "Sachsen"
  },
  {
    id: 457,
    plate: "PL",
    name_origin: "Plauen",
    county: "Vogtlandkreis",
    state: "Sachsen"
  },
  {
    id: 458,
    plate: "PLÖ",
    name_origin: "Plön",
    county: "Kreis Plön",
    state: "Schleswig-Holstein"
  },
  {
    id: 459,
    plate: "PM",
    name_origin: "Potsdam-Mittelmark",
    county: "Landkreis Potsdam-Mittelmark",
    state: "Brandenburg"
  },
  {
    id: 460,
    plate: "PN",
    name_origin: "Pößneck",
    county: "Saale-Orla-Kreis",
    state: "Thüringen"
  },
  {
    id: 461,
    plate: "PR",
    name_origin: "Prignitz",
    county: "Landkreis Prignitz",
    state: "Brandenburg"
  },
  {
    id: 462,
    plate: "PRÜ",
    name_origin: "Prüm",
    county: "Eifelkreis Bitburg-Prüm",
    state: "Rheinland-Pfalz"
  },
  {
    id: 463,
    plate: "PS",
    name_origin: "Pirmasens",
    county: "Landkreis Südwestpfalz & Stadt Pirmasens",
    state: "Rheinland-Pfalz"
  },
  {
    id: 464,
    plate: "PW",
    name_origin: "Pasewalk",
    county: "Landkreis Vorpommern-Greifswald ohne Greifswald",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 465,
    plate: "QFT",
    name_origin: "Querfurt",
    county: "Saalekreis",
    state: "Sachsen-Anhalt"
  },
  {
    id: 466,
    plate: "QLB",
    name_origin: "Quedlinburg",
    county: "Landkreis Harz",
    state: "Sachsen-Anhalt"
  },
  {
    id: 467,
    plate: "R",
    name_origin: "Regensburg",
    county: "Stadt & Landkreis Regensburg",
    state: "Bayern"
  },
  {
    id: 468,
    plate: "RA",
    name_origin: "Rastatt",
    county: "Landkreis Rastatt",
    state: "Baden-Württemberg"
  },
  {
    id: 469,
    plate: "RC",
    name_origin: "Reichenbach im Vogtland",
    county: "Vogtlandkreis",
    state: "Sachsen"
  },
  {
    id: 470,
    plate: "RD",
    name_origin: "Rendsburg",
    county: "Kreis Rendsburg-Eckernförde",
    state: "Schleswig-Holstein"
  },
  {
    id: 471,
    plate: "RDG",
    name_origin: "Ribnitz-Damgarten",
    county: "Landkreis Vorpommern-Rügen ohne Stralsund",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 472,
    plate: "RE",
    name_origin: "Recklinghausen",
    county: "Kreis Recklinghausen",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 473,
    plate: "REG",
    name_origin: "Regen",
    county: "Landkreis Regen",
    state: "Bayern"
  },
  {
    id: 474,
    plate: "REH",
    name_origin: "Rehau",
    county: "Landkreis Wunsiedel im Fichtelgebirge",
    state: "Bayern"
  },
  {
    id: 475,
    plate: "RG",
    name_origin: "Riesa-Großenhain",
    county: "Landkreis Meißen",
    state: "Sachsen"
  },
  {
    id: 476,
    plate: "RH",
    name_origin: "Roth",
    county: "Landkreis Roth",
    state: "Bayern"
  },
  {
    id: 477,
    plate: "RI",
    name_origin: "Rinteln",
    county: "Landkreis Schaumburg",
    state: "Niedersachsen"
  },
  {
    id: 478,
    plate: "RID",
    name_origin: "Riedenburg",
    county: "Landkreis Kelheim",
    state: "Bayern"
  },
  {
    id: 479,
    plate: "RIE",
    name_origin: "Riesa",
    county: "Landkreis Meißen",
    state: "Sachsen"
  },
  {
    id: 480,
    plate: "RL",
    name_origin: "Rochlitz",
    county: "Landkreis Mittelsachsen",
    state: "Sachsen"
  },
  {
    id: 481,
    plate: "RM",
    name_origin: "Röbel/Müritz",
    county: "Landkreis Mecklenburgische Seenplatte",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 482,
    plate: "RO",
    name_origin: "Rosenheim",
    county: "Landkreis & Stadt Rosenheim",
    state: "Bayern"
  },
  {
    id: 483,
    plate: "ROD",
    name_origin: "Roding",
    county: "Landkreise Cham & Schwandorf",
    state: "Bayern"
  },
  {
    id: 484,
    plate: "ROF",
    name_origin: "Rotenburg an der Fulda",
    county: "Landkreis Hersfeld-Rotenburg",
    state: "Hessen"
  },
  {
    id: 485,
    plate: "ROK",
    name_origin: "Rockenhausen",
    county: "Donnersbergkreis",
    state: "Rheinland-Pfalz"
  },
  {
    id: 486,
    plate: "ROL",
    name_origin: "Rottenburg an der Laaber",
    county: "Landkreis Kelheim",
    state: "Bayern"
  },
  {
    id: 487,
    plate: "ROS",
    name_origin: "Rostock",
    county: "Landkreis Rostock",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 488,
    plate: "ROT",
    name_origin: "Rothenburg ob der Tauber",
    county: "Landkreis Ansbach",
    state: "Bayern"
  },
  {
    id: 489,
    plate: "ROW",
    name_origin: "Rotenburg an der Wümme",
    county: "Landkreis Rotenburg (Wümme)",
    state: "Niedersachsen"
  },
  {
    id: 490,
    plate: "RP",
    name_origin: "Rhein-Pfalz",
    county: "Rhein-Pfalz-Kreis",
    state: "Rheinland-Pfalz"
  },
  {
    id: 491,
    plate: "RPL",
    name_origin: "Land Rheinland-Pfalz",
    county: "Landesregierung, Landtag und Polizei",
    state: "Rheinland-Pfalz"
  },
  {
    id: 492,
    plate: "RS",
    name_origin: "Remscheid",
    county: "Stadt Remscheid",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 493,
    plate: "RSL",
    name_origin: "Roßlau (Elbe)",
    county: "Stadt Dessau-Roßlau",
    state: "Sachsen-Anhalt"
  },
  {
    id: 494,
    plate: "RT",
    name_origin: "Reutlingen",
    county: "Landkreis Reutlingen",
    state: "Baden-Württemberg"
  },
  {
    id: 495,
    plate: "RU",
    name_origin: "Rudolstadt",
    county: "Landkreis Saalfeld-Rudolstadt",
    state: "Thüringen"
  },
  {
    id: 496,
    plate: "RÜD",
    name_origin: "Rüdesheim am Rhein",
    county: "Rheingau-Taunus-Kreis",
    state: "Hessen"
  },
  {
    id: 497,
    plate: "RÜG",
    name_origin: "Rügen",
    county: "Landkreis Vorpommern-Rügen",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 498,
    plate: "RV",
    name_origin: "Ravensburg",
    county: "Landkreis Ravensburg",
    state: "Baden-Württemberg"
  },
  {
    id: 499,
    plate: "RW",
    name_origin: "Rottweil",
    county: "Landkreis Rottweil",
    state: "Baden-Württemberg"
  },
  {
    id: 500,
    plate: "RZ",
    name_origin: "Ratzeburg",
    county: "Kreis Herzogtum Lauenburg",
    state: "Schleswig-Holstein"
  },
  {
    id: 501,
    plate: "S",
    name_origin: "Stuttgart",
    county: "Stadt Stuttgart",
    state: "Baden-Württemberg"
  },
  {
    id: 502,
    plate: "SAB",
    name_origin: "Saarburg",
    county: "Landkreis Trier-Saarburg",
    state: "Rheinland-Pfalz"
  },
  {
    id: 503,
    plate: "SAD",
    name_origin: "Schwandorf",
    county: "Landkreis Schwandorf",
    state: "Bayern"
  },
  {
    id: 504,
    plate: "SAL",
    name_origin: "Land Saarland",
    county: "Landesregierung, Landtag und Polizei",
    state: "Saarland"
  },
  {
    id: 505,
    plate: "SAN",
    name_origin: "Stadtsteinach",
    county: "Landkreise Kronach & Kulmbach",
    state: "Bayern"
  },
  {
    id: 506,
    plate: "SAW",
    name_origin: "Salzwedel",
    county: "Altmarkkreis Salzwedel",
    state: "Sachsen-Anhalt"
  },
  {
    id: 507,
    plate: "SB",
    name_origin: "Saarbrücken",
    county: "Regionalverband Saarbrücken ohne Völklingen",
    state: "Saarland"
  },
  {
    id: 508,
    plate: "SBG",
    name_origin: "Strasburg",
    county: "Landkreis Vorpommern-Greifswald",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 509,
    plate: "SBK",
    name_origin: "Schönebeck (Elbe)",
    county: "Salzlandkreis",
    state: "Sachsen-Anhalt"
  },
  {
    id: 510,
    plate: "SC",
    name_origin: "Schwabach",
    county: "Stadt Schwabach",
    state: "Bayern"
  },
  {
    id: 511,
    plate: "SCZ",
    name_origin: "Schleiz",
    county: "Saale-Orla-Kreis",
    state: "Thüringen"
  },
  {
    id: 512,
    plate: "SDH",
    name_origin: "Sondershausen",
    county: "Kyffhäuserkreis",
    state: "Thüringen"
  },
  {
    id: 513,
    plate: "SDL",
    name_origin: "Stendal",
    county: "Landkreis Stendal",
    state: "Sachsen-Anhalt"
  },
  {
    id: 514,
    plate: "SE",
    name_origin: "Bad Segeberg",
    county: "Kreis Segeberg",
    state: "Schleswig-Holstein"
  },
  {
    id: 515,
    plate: "SEB",
    name_origin: "Sebnitz",
    county: "Landkreis Sächsische Schweiz-Osterzgebirge",
    state: "Sachsen"
  },
  {
    id: 516,
    plate: "SEE",
    name_origin: "Seelow",
    county: "Landkreis Märkisch-Oderland",
    state: "Brandenburg"
  },
  {
    id: 517,
    plate: "SEF",
    name_origin: "Scheinfeld",
    county: "Landkreis Neustadt an der Aisch-Bad Windsheim",
    state: "Bayern"
  },
  {
    id: 518,
    plate: "SEL",
    name_origin: "Selb",
    county: "Landkreis Wunsiedel im Fichtelgebirge",
    state: "Bayern"
  },
  {
    id: 519,
    plate: "SFB",
    name_origin: "Senftenberg",
    county: "Landkreis Oberspreewald-Lausitz",
    state: "Brandenburg"
  },
  {
    id: 520,
    plate: "SFT",
    name_origin: "Staßfurt",
    county: "Salzlandkreis",
    state: "Sachsen-Anhalt"
  },
  {
    id: 521,
    plate: "SG",
    name_origin: "Solingen",
    county: "Stadt Solingen",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 522,
    plate: "SGH",
    name_origin: "Sangerhausen",
    county: "Landkreis Mansfeld-Südharz",
    state: "Sachsen-Anhalt"
  },
  {
    id: 523,
    plate: "SH",
    name_origin: "Land Schleswig-Holstein",
    county: "Landesregierung, Landtag und Polizei",
    state: "Schleswig-Holstein"
  },
  {
    id: 524,
    plate: "SHA",
    name_origin: "Schwäbisch Hall",
    county: "Landkreis Schwäbisch Hall",
    state: "Baden-Württemberg"
  },
  {
    id: 525,
    plate: "SHG",
    name_origin: "Schaumburg oder Stadthagen",
    county: "Landkreis Schaumburg",
    state: "Niedersachsen"
  },
  {
    id: 526,
    plate: "SHK",
    name_origin: "Saale-Holzland-Kreis",
    county: "Saale-Holzland-Kreis",
    state: "Thüringen"
  },
  {
    id: 527,
    plate: "SHL",
    name_origin: "Suhl",
    county: "Stadt Suhl",
    state: "Thüringen"
  },
  {
    id: 528,
    plate: "SI",
    name_origin: "Siegen",
    county: "Kreis Siegen-Wittgenstein",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 529,
    plate: "SIG",
    name_origin: "Sigmaringen",
    county: "Landkreis Sigmaringen",
    state: "Baden-Württemberg"
  },
  {
    id: 530,
    plate: "SIM",
    name_origin: "Simmern/Hunsrück",
    county: "Rhein-Hunsrück-Kreis",
    state: "Rheinland-Pfalz"
  },
  {
    id: 531,
    plate: "SK",
    name_origin: "Saalekreis",
    county: "Saalekreis",
    state: "Sachsen-Anhalt"
  },
  {
    id: 532,
    plate: "SL",
    name_origin: "Schleswig",
    county: "Kreis Schleswig-Flensburg",
    state: "Schleswig-Holstein"
  },
  {
    id: 533,
    plate: "SLE",
    name_origin: "Schleiden",
    county: "Kreis Euskirchen",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 534,
    plate: "SLF",
    name_origin: "Saalfeld/Saale",
    county: "Landkreis Saalfeld-Rudolstadt",
    state: "Thüringen"
  },
  {
    id: 535,
    plate: "SLK",
    name_origin: "Salzlandkreis",
    county: "Salzlandkreis",
    state: "Sachsen-Anhalt"
  },
  {
    id: 536,
    plate: "SLN",
    name_origin: "Schmölln",
    county: "Landkreis Altenburger Land",
    state: "Thüringen"
  },
  {
    id: 537,
    plate: "SLS",
    name_origin: "Saarlouis",
    county: "Landkreis Saarlouis",
    state: "Saarland"
  },
  {
    id: 538,
    plate: "SLÜ",
    name_origin: "Schlüchtern",
    county: "Main-Kinzig-Kreis ohne Hanau",
    state: "Hessen"
  },
  {
    id: 539,
    plate: "SLZ",
    name_origin: "Bad Salzungen",
    county: "Wartburgkreis",
    state: "Thüringen"
  },
  {
    id: 540,
    plate: "SM",
    name_origin: "Schmalkalden-Meiningen",
    county: "Landkreis Schmalkalden-Meiningen",
    state: "Thüringen"
  },
  {
    id: 541,
    plate: "SN",
    name_origin: "Schwerin",
    county: "Stadt Schwerin",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 542,
    plate: "SO",
    name_origin: "Soest",
    county: "Kreis Soest",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 543,
    plate: "SOB",
    name_origin: "Schrobenhausen",
    county: "Landkreis Neuburg-Schrobenhausen",
    state: "Bayern"
  },
  {
    id: 544,
    plate: "SOG",
    name_origin: "Schongau",
    county: "Landkreis Weilheim-Schongau",
    state: "Bayern"
  },
  {
    id: 545,
    plate: "SOK",
    name_origin: "Saale-Orla-Kreis",
    county: "Saale-Orla-Kreis",
    state: "Thüringen"
  },
  {
    id: 546,
    plate: "SÖM",
    name_origin: "Sömmerda",
    county: "Landkreis Sömmerda",
    state: "Thüringen"
  },
  {
    id: 547,
    plate: "SON",
    name_origin: "Sonneberg",
    county: "Landkreis Sonneberg",
    state: "Thüringen"
  },
  {
    id: 548,
    plate: "SP",
    name_origin: "Speyer",
    county: "Stadt Speyer",
    state: "Rheinland-Pfalz"
  },
  {
    id: 549,
    plate: "SPB",
    name_origin: "Spremberg",
    county: "Landkreis Spree-Neiße",
    state: "Brandenburg"
  },
  {
    id: 550,
    plate: "SPN",
    name_origin: "Spree-Neiße",
    county: "Landkreis Spree-Neiße",
    state: "Brandenburg"
  },
  {
    id: 551,
    plate: "SR",
    name_origin: "Straubing-Bogen",
    county: "Landkreis Straubing-Bogen & Stadt Straubing",
    state: "Bayern"
  },
  {
    id: 552,
    plate: "SRB",
    name_origin: "Strausberg",
    county: "Landkreis Märkisch-Oderland",
    state: "Brandenburg"
  },
  {
    id: 553,
    plate: "SRO",
    name_origin: "Stadtroda",
    county: "Saale-Holzland-Kreis",
    state: "Thüringen"
  },
  {
    id: 554,
    plate: "ST",
    name_origin: "Steinfurt",
    county: "Kreis Steinfurt",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 555,
    plate: "STA",
    name_origin: "Starnberg",
    county: "Landkreis Starnberg",
    state: "Bayern"
  },
  {
    id: 556,
    plate: "STB",
    name_origin: "Sternberg",
    county: "Landkreis Ludwigslust-Parchim",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 557,
    plate: "STD",
    name_origin: "Stade",
    county: "Landkreis Stade",
    state: "Niedersachsen"
  },
  {
    id: 558,
    plate: "STE",
    name_origin: "Bad Staffelstein",
    county: "Landkreis Lichtenfels",
    state: "Bayern"
  },
  {
    id: 559,
    plate: "STL",
    name_origin: "Stollberg/Erzgeb.",
    county: "Erzgebirgskreis",
    state: "Sachsen"
  },
  {
    id: 560,
    plate: "SU",
    name_origin: "Siegburg",
    county: "Rhein-Sieg-Kreis",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 561,
    plate: "SUL",
    name_origin: "Sulzbach-Rosenberg",
    county: "Landkreis Amberg-Sulzbach",
    state: "Bayern"
  },
  {
    id: 562,
    plate: "SÜW",
    name_origin: "Südliche Weinstraße",
    county: "Landkreis Südliche Weinstraße",
    state: "Rheinland-Pfalz"
  },
  {
    id: 563,
    plate: "SW",
    name_origin: "Schweinfurt",
    county: "Landkreis & Stadt Schweinfurt",
    state: "Bayern"
  },
  {
    id: 564,
    plate: "SWA",
    name_origin: "Bad Schwalbach",
    county: "Rheingau-Taunus-Kreis",
    state: "Hessen"
  },
  {
    id: 565,
    plate: "SZ",
    name_origin: "Salzgitter",
    county: "Stadt Salzgitter",
    state: "Niedersachsen"
  },
  {
    id: 566,
    plate: "SZB",
    name_origin: "Schwarzenberg/Erzgeb.",
    county: "Erzgebirgskreis",
    state: "Sachsen"
  },
  {
    id: 567,
    plate: "TBB",
    name_origin: "Tauberbischofsheim",
    county: "Main-Tauber-Kreis",
    state: "Baden-Württemberg"
  },
  {
    id: 568,
    plate: "TDO",
    name_origin: "Torgau, Delitzsch, Oschatz",
    county: "Landkreis Nordsachsen",
    state: "Sachsen"
  },
  {
    id: 569,
    plate: "TE",
    name_origin: "Tecklenburg",
    county: "Kreis Steinfurt",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 570,
    plate: "TET",
    name_origin: "Teterow",
    county: "Landkreis Rostock",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 571,
    plate: "TF",
    name_origin: "Teltow-Fläming",
    county: "Landkreis Teltow-Fläming",
    state: "Brandenburg"
  },
  {
    id: 572,
    plate: "TG",
    name_origin: "Torgau",
    county: "Landkreis Nordsachsen",
    state: "Sachsen"
  },
  {
    id: 573,
    plate: "THL",
    name_origin: "Land Thüringen",
    county: "Landesregierung und Landtag",
    state: "Thüringen"
  },
  {
    id: 574,
    plate: "THW",
    name_origin: "Technisches Hilfswerk",
    county: "Bundesanstalt Technisches Hilfswerk",
    state: "bundesweit"
  },
  {
    id: 575,
    plate: "TIR",
    name_origin: "Tirschenreuth",
    county: "Landkreis Tirschenreuth",
    state: "Bayern"
  },
  {
    id: 576,
    plate: "TO",
    name_origin: "Torgau-Oschatz",
    county: "Landkreis Nordsachsen",
    state: "Sachsen"
  },
  {
    id: 577,
    plate: "TÖL",
    name_origin: "Bad Tölz",
    county: "Landkreis Bad Tölz-Wolfratshausen",
    state: "Bayern"
  },
  {
    id: 578,
    plate: "TR",
    name_origin: "Trier-Saarburg",
    county: "Landkreis Trier-Saarburg & Stadt Trier",
    state: "Rheinland-Pfalz"
  },
  {
    id: 579,
    plate: "TS",
    name_origin: "Traunstein",
    county: "Landkreis Traunstein",
    state: "Bayern"
  },
  {
    id: 580,
    plate: "TÜ",
    name_origin: "Tübingen",
    county: "Landkreis Tübingen",
    state: "Baden-Württemberg"
  },
  {
    id: 581,
    plate: "TUT",
    name_origin: "Tuttlingen",
    county: "Landkreis Tuttlingen",
    state: "Baden-Württemberg"
  },
  {
    id: 582,
    plate: "UE",
    name_origin: "Uelzen",
    county: "Landkreis Uelzen",
    state: "Niedersachsen"
  },
  {
    id: 583,
    plate: "UEM",
    name_origin: "Ueckermünde",
    county: "Landkreis Vorpommern-Greifswald ohne Greifswald",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 584,
    plate: "UFF",
    name_origin: "Uffenheim",
    county: "Landkreis Neustadt an der Aisch-Bad Windsheim",
    state: "Bayern"
  },
  {
    id: 585,
    plate: "UH",
    name_origin: "Unstrut-Hainich",
    county: "Unstrut-Hainich-Kreis",
    state: "Thüringen"
  },
  {
    id: 586,
    plate: "UL",
    name_origin: "Ulm",
    county: "Alb-Donau-Kreis",
    state: "Baden-Württemberg"
  },
  {
    id: 587,
    plate: "UM",
    name_origin: "Uckermark",
    county: "Landkreis Uckermark",
    state: "Brandenburg"
  },
  {
    id: 588,
    plate: "UN",
    name_origin: "Unna",
    county: "Kreis Unna",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 589,
    plate: "USI",
    name_origin: "Usingen",
    county: "Hochtaunuskreis",
    state: "Hessen"
  },
  {
    id: 590,
    plate: "V",
    name_origin: "Vogtland",
    county: "Vogtlandkreis",
    state: "Sachsen"
  },
  {
    id: 591,
    plate: "VB",
    name_origin: "Vogelsberg",
    county: "Vogelsbergkreis",
    state: "Hessen"
  },
  {
    id: 592,
    plate: "VEC",
    name_origin: "Vechta",
    county: "Landkreis Vechta",
    state: "Niedersachsen"
  },
  {
    id: 593,
    plate: "VER",
    name_origin: "Verden (Aller)",
    county: "Landkreis Verden",
    state: "Niedersachsen"
  },
  {
    id: 594,
    plate: "VG",
    name_origin: "Vorpommern, Greifswald",
    county: "Landkreis Vorpommern-Greifswald ohne Greifswald",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 595,
    plate: "VIB",
    name_origin: "Vilsbiburg",
    county: "Landkreis Rottal-Inn",
    state: "Bayern"
  },
  {
    id: 596,
    plate: "VIE",
    name_origin: "Viersen",
    county: "Kreis Viersen",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 597,
    plate: "VK",
    name_origin: "Völklingen",
    county: "Stadt Völklingen",
    state: "Saarland"
  },
  {
    id: 598,
    plate: "VOH",
    name_origin: "Vohenstrauß",
    county: "Landkreis Neustadt an der Waldnaab",
    state: "Bayern"
  },
  {
    id: 599,
    plate: "VR",
    name_origin: "Vorpommern, Rügen",
    county: "Landkreis Vorpommern-Rügen ohne Stralsund",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 600,
    plate: "VS",
    name_origin: "Villingen-Schwenningen",
    county: "Schwarzwald-Baar-Kreis",
    state: "Baden-Württemberg"
  },
  {
    id: 601,
    plate: "W",
    name_origin: "Wuppertal",
    county: "Stadt Wuppertal",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 602,
    plate: "WAF",
    name_origin: "Warendorf",
    county: "Kreis Warendorf",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 603,
    plate: "WAK",
    name_origin: "Wartburgkreis",
    county: "Wartburgkreis",
    state: "Thüringen"
  },
  {
    id: 604,
    plate: "WAN",
    name_origin: "Wanne-Eickel",
    county: "Stadt Herne",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 605,
    plate: "WAT",
    name_origin: "Wattenscheid",
    county: "Stadt Bochum",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 606,
    plate: "WB",
    name_origin: "Wittenberg",
    county: "Landkreis Wittenberg",
    state: "Sachsen-Anhalt"
  },
  {
    id: 607,
    plate: "WBS",
    name_origin: "Worbis",
    county: "Landkreis Eichsfeld",
    state: "Thüringen"
  },
  {
    id: 608,
    plate: "WDA",
    name_origin: "Werdau",
    county: "Landkreis Zwickau",
    state: "Sachsen"
  },
  {
    id: 609,
    plate: "WE",
    name_origin: "Weimar",
    county: "Stadt Weimar",
    state: "Thüringen"
  },
  {
    id: 610,
    plate: "WEL",
    name_origin: "Weilburg",
    county: "Landkreis Limburg-Weilburg",
    state: "Hessen"
  },
  {
    id: 611,
    plate: "WEN",
    name_origin: "Weiden in der Oberpfalz",
    county: "Stadt Weiden in der Oberpfalz",
    state: "Bayern"
  },
  {
    id: 612,
    plate: "WER",
    name_origin: "Wertingen",
    county: "Landkreis Dillingen an der Donau",
    state: "Bayern"
  },
  {
    id: 613,
    plate: "WES",
    name_origin: "Wesel",
    county: "Kreis Wesel",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 614,
    plate: "WF",
    name_origin: "Wolfenbüttel",
    county: "Landkreis Wolfenbüttel",
    state: "Niedersachsen"
  },
  {
    id: 615,
    plate: "WHV",
    name_origin: "Wilhelmshaven",
    county: "Stadt Wilhelmshaven",
    state: "Niedersachsen"
  },
  {
    id: 616,
    plate: "WI",
    name_origin: "Wiesbaden",
    county: "Stadt Wiesbaden",
    state: "Hessen"
  },
  {
    id: 617,
    plate: "WIL",
    name_origin: "Wittlich",
    county: "Landkreis Bernkastel-Wittlich",
    state: "Rheinland-Pfalz"
  },
  {
    id: 618,
    plate: "WIS",
    name_origin: "Wismar",
    county: "Landkreis Nordwestmecklenburg",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 619,
    plate: "WIT",
    name_origin: "Witten",
    county: "Ennepe-Ruhr-Kreis",
    state: "Nordrhein-Westfalen"
  },
  {
    id: 620,
    plate: "WIZ",
    name_origin: "Witzenhausen",
    county: "Werra-Meißner-Kreis",
    state: "Hessen"
  },
  {
    id: 621,
    plate: "WK",
    name_origin: "Wittstock/Dosse",
    county: "Landkreis Ostprignitz-Ruppin",
    state: "Brandenburg"
  },
  {
    id: 622,
    plate: "WL",
    name_origin: "Winsen (Luhe)",
    county: "Landkreis Harburg",
    state: "Niedersachsen"
  },
  {
    id: 623,
    plate: "WLG",
    name_origin: "Wolgast",
    county: "Landkreis Vorpommern-Greifswald ohne Greifswald",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 624,
    plate: "WM",
    name_origin: "Weilheim in Oberbayern",
    county: "Landkreis Weilheim-Schongau",
    state: "Bayern"
  },
  {
    id: 625,
    plate: "WMS",
    name_origin: "Wolmirstedt",
    county: "Landkreis Börde",
    state: "Sachsen-Anhalt"
  },
  {
    id: 626,
    plate: "WN",
    name_origin: "Waiblingen",
    county: "Rems-Murr-Kreis",
    state: "Baden-Württemberg"
  },
  {
    id: 627,
    plate: "WND",
    name_origin: "St. Wendel",
    county: "Landkreis St. Wendel",
    state: "Saarland"
  },
  {
    id: 628,
    plate: "WO",
    name_origin: "Worms",
    county: "Stadt Worms",
    state: "Rheinland-Pfalz"
  },
  {
    id: 629,
    plate: "WOB",
    name_origin: "Wolfsburg",
    county: "Stadt Wolfsburg",
    state: "Niedersachsen"
  },
  {
    id: 630,
    plate: "WOH",
    name_origin: "Wolfhagen",
    county: "Landkreis Kassel",
    state: "Hessen"
  },
  {
    id: 631,
    plate: "WOR",
    name_origin: "Wolfratshausen",
    county: "Landkreise Bad Tölz-Wolfratshausen, München & Starnberg",
    state: "Bayern"
  },
  {
    id: 632,
    plate: "WOS",
    name_origin: "Wolfstein",
    county: "Landkreis Freyung-Grafenau",
    state: "Bayern"
  },
  {
    id: 633,
    plate: "WR",
    name_origin: "Wernigerode",
    county: "Landkreis Harz",
    state: "Sachsen-Anhalt"
  },
  {
    id: 634,
    plate: "WRN",
    name_origin: "Waren (Müritz)",
    county: "Landkreis Mecklenburgische Seenplatte",
    state: "Mecklenburg-Vorpommern"
  },
  {
    id: 635,
    plate: "WS",
    name_origin: "Wasserburg am Inn",
    county: "Landkreis Rosenheim",
    state: "Bayern"
  },
  {
    id: 636,
    plate: "WSF",
    name_origin: "Weißenfels",
    county: "Burgenlandkreis",
    state: "Sachsen-Anhalt"
  },
  {
    id: 637,
    plate: "WST",
    name_origin: "Westerstede",
    county: "Landkreis Ammerland",
    state: "Niedersachsen"
  },
  {
    id: 638,
    plate: "WSW",
    name_origin: "Weißwasser",
    county: "Landkreis Görlitz",
    state: "Sachsen"
  },
  {
    id: 639,
    plate: "WT",
    name_origin: "Waldshut-Tiengen",
    county: "Landkreis Waldshut",
    state: "Baden-Württemberg"
  },
  {
    id: 640,
    plate: "WTM",
    name_origin: "Wittmund",
    county: "Landkreis Wittmund",
    state: "Niedersachsen"
  },
  {
    id: 641,
    plate: "WÜ",
    name_origin: "Würzburg",
    county: "Stadt & Landkreis Würzburg",
    state: "Bayern"
  },
  {
    id: 642,
    plate: "WUG",
    name_origin: "Weißenburg in Bayern",
    county: "Landkreis Weißenburg-Gunzenhausen",
    state: "Bayern"
  },
  {
    id: 643,
    plate: "WÜM",
    name_origin: "Waldmünchen",
    county: "Landkreis Cham",
    state: "Bayern"
  },
  {
    id: 644,
    plate: "WUN",
    name_origin: "Wunsiedel",
    county: "Landkreis Wunsiedel im Fichtelgebirge",
    state: "Bayern"
  },
  {
    id: 645,
    plate: "WUR",
    name_origin: "Wurzen",
    county: "Landkreis Leipzig",
    state: "Sachsen"
  },
  {
    id: 646,
    plate: "WW",
    name_origin: "Westerwald",
    county: "Westerwaldkreis",
    state: "Rheinland-Pfalz"
  },
  {
    id: 647,
    plate: "WZ",
    name_origin: "Wetzlar",
    county: "Stadt Wetzlar",
    state: "Hessen"
  },
  {
    id: 648,
    plate: "WZL",
    name_origin: "Wanzleben",
    county: "Landkreis Börde",
    state: "Sachsen-Anhalt"
  },
  {
    id: 649,
    plate: "X",
    name_origin: "Internationale Hauptquartiere (NATO)",
    county: "NATO",
    state: "bundesweit"
  },
  {
    id: 650,
    plate: "Y",
    name_origin: "Bundeswehr",
    county: "Bundeswehr",
    state: "bundesweit"
  },
  {
    id: 651,
    plate: "Z",
    name_origin: "Zwickau",
    county: "Landkreis Zwickau",
    state: "Sachsen"
  },
  {
    id: 652,
    plate: "ZE",
    name_origin: "Zerbst/Anhalt",
    county: "Landkreis Anhalt-Bitterfeld",
    state: "Sachsen-Anhalt"
  },
  {
    id: 653,
    plate: "ZEL",
    name_origin: "Zell (Mosel)",
    county: "Landkreis Cochem-Zell",
    state: "Rheinland-Pfalz"
  },
  {
    id: 654,
    plate: "ZI",
    name_origin: "Zittau",
    county: "Landkreis Görlitz",
    state: "Sachsen"
  },
  {
    id: 655,
    plate: "ZP",
    name_origin: "Zschopau",
    county: "Erzgebirgskreis",
    state: "Sachsen"
  },
  {
    id: 656,
    plate: "ZR",
    name_origin: "Zeulenroda",
    county: "Landkreis Greiz",
    state: "Thüringen"
  },
  {
    id: 657,
    plate: "ZW",
    name_origin: "Zweibrücken",
    county: "Stadt Zweibrücken",
    state: "Rheinland-Pfalz"
  },
  {
    id: 658,
    plate: "ZZ",
    name_origin: "Zeitz",
    county: "Burgenlandkreis",
    state: "Sachsen-Anhalt"
  }
];

export default de_licensePlates;