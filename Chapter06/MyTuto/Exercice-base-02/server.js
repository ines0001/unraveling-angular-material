// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
var app = express();

  

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('app'));
app.use(express.static('node_modules'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/app/views/index.html');
});

app.get("/cities", function (request, response) {
  response.json(cities);
}).get("/competitions", function (request, response) {
  response.json(competitions_map);
})

var cities = [
      "Budapest",
      "Brussels",
      "Prague",
      "Bratislava",
      "Warsaw",
      "Berlin",
      "Bucharest",
      "Beograd",
      "Ljubjana",
      "Rome",
      "Zurich",
      "Amsterdam",
      "Madrid",
      "Paris",
      "London",
      "Luxemburg",
      "Lisbon",
      "Athens",
      "La Valetta",
      "Istanbul",
      "Moscow",
      "Oslo",
      "Stockholm",
      "Helsinki",
      "Rejkjavik",
      "Copenhagen"
    ];

var competitions_map = [
  {
    "name": "Woodlake",
    "athlete": 676,
    "map": 14
  },
  {
    "name": "Kraemer",
    "athlete": 1125,
    "map": 31
  },
  {
    "name": "Madaket",
    "athlete": 1369,
    "map": 4
  },
  {
    "name": "Nelson",
    "athlete": 537,
    "map": 6
  },
  {
    "name": "Hiwasse",
    "athlete": 209,
    "map": 6
  },
  {
    "name": "Veyo",
    "athlete": 562,
    "map": 36
  },
  {
    "name": "Sunriver",
    "athlete": 738,
    "map": 47
  },
  {
    "name": "Waiohinu",
    "athlete": 169,
    "map": 30
  },
  {
    "name": "Felt",
    "athlete": 926,
    "map": 50
  },
  {
    "name": "Crenshaw",
    "athlete": 803,
    "map": 24
  },
  {
    "name": "Buxton",
    "athlete": 1891,
    "map": 25
  },
  {
    "name": "Rossmore",
    "athlete": 376,
    "map": 22
  },
  {
    "name": "Blairstown",
    "athlete": 181,
    "map": 31
  },
  {
    "name": "Fedora",
    "athlete": 850,
    "map": 15
  },
  {
    "name": "Konterra",
    "athlete": 1681,
    "map": 1
  },
  {
    "name": "Otranto",
    "athlete": 1414,
    "map": 50
  },
  {
    "name": "Coral",
    "athlete": 283,
    "map": 23
  },
  {
    "name": "Oasis",
    "athlete": 971,
    "map": 31
  },
  {
    "name": "Loomis",
    "athlete": 1678,
    "map": 2
  },
  {
    "name": "Rutherford",
    "athlete": 608,
    "map": 29
  },
  {
    "name": "Fairlee",
    "athlete": 1875,
    "map": 26
  },
  {
    "name": "Malott",
    "athlete": 420,
    "map": 41
  },
  {
    "name": "Noxen",
    "athlete": 433,
    "map": 27
  },
  {
    "name": "Kylertown",
    "athlete": 722,
    "map": 27
  },
  {
    "name": "Cliff",
    "athlete": 1060,
    "map": 24
  },
  {
    "name": "Bellfountain",
    "athlete": 736,
    "map": 7
  },
  {
    "name": "Goodville",
    "athlete": 1237,
    "map": 19
  },
  {
    "name": "Greenfields",
    "athlete": 1408,
    "map": 40
  },
  {
    "name": "Hollins",
    "athlete": 1543,
    "map": 40
  },
  {
    "name": "Wintersburg",
    "athlete": 1965,
    "map": 18
  },
  {
    "name": "Loma",
    "athlete": 1879,
    "map": 36
  },
  {
    "name": "Enlow",
    "athlete": 1304,
    "map": 45
  },
  {
    "name": "Esmont",
    "athlete": 1021,
    "map": 39
  },
  {
    "name": "Strykersville",
    "athlete": 803,
    "map": 34
  },
  {
    "name": "Interlochen",
    "athlete": 820,
    "map": 35
  },
  {
    "name": "Yonah",
    "athlete": 332,
    "map": 10
  },
  {
    "name": "Faywood",
    "athlete": 1240,
    "map": 35
  },
  {
    "name": "Savage",
    "athlete": 640,
    "map": 40
  },
  {
    "name": "Brecon",
    "athlete": 351,
    "map": 5
  },
  {
    "name": "Chilton",
    "athlete": 243,
    "map": 2
  },
  {
    "name": "Chelsea",
    "athlete": 1020,
    "map": 29
  },
  {
    "name": "Gorham",
    "athlete": 1830,
    "map": 33
  },
  {
    "name": "Levant",
    "athlete": 235,
    "map": 37
  },
  {
    "name": "Eastmont",
    "athlete": 1577,
    "map": 26
  },
  {
    "name": "Haena",
    "athlete": 550,
    "map": 44
  },
  {
    "name": "Lowgap",
    "athlete": 1895,
    "map": 10
  },
  {
    "name": "Greenbackville",
    "athlete": 1987,
    "map": 15
  },
  {
    "name": "Wolcott",
    "athlete": 1860,
    "map": 39
  },
  {
    "name": "Coultervillle",
    "athlete": 570,
    "map": 29
  },
  {
    "name": "Gasquet",
    "athlete": 1087,
    "map": 38
  },
  {
    "name": "Taft",
    "athlete": 642,
    "map": 21
  },
  {
    "name": "Glenbrook",
    "athlete": 902,
    "map": 24
  },
  {
    "name": "Whipholt",
    "athlete": 1022,
    "map": 39
  },
  {
    "name": "Broadlands",
    "athlete": 802,
    "map": 31
  },
  {
    "name": "Hiseville",
    "athlete": 746,
    "map": 6
  },
  {
    "name": "Catharine",
    "athlete": 775,
    "map": 35
  },
  {
    "name": "Irwin",
    "athlete": 1753,
    "map": 3
  },
  {
    "name": "Hiko",
    "athlete": 145,
    "map": 40
  },
  {
    "name": "Moquino",
    "athlete": 1438,
    "map": 32
  },
  {
    "name": "Sylvanite",
    "athlete": 298,
    "map": 13
  },
  {
    "name": "Hoagland",
    "athlete": 330,
    "map": 30
  },
  {
    "name": "Oretta",
    "athlete": 748,
    "map": 37
  },
  {
    "name": "Belleview",
    "athlete": 338,
    "map": 47
  },
  {
    "name": "Trinway",
    "athlete": 666,
    "map": 23
  },
  {
    "name": "Omar",
    "athlete": 413,
    "map": 8
  },
  {
    "name": "Woodlands",
    "athlete": 489,
    "map": 23
  },
  {
    "name": "Allamuchy",
    "athlete": 836,
    "map": 39
  },
  {
    "name": "Lopezo",
    "athlete": 437,
    "map": 18
  },
  {
    "name": "Davenport",
    "athlete": 811,
    "map": 49
  },
  {
    "name": "Waukeenah",
    "athlete": 984,
    "map": 34
  },
  {
    "name": "Ironton",
    "athlete": 882,
    "map": 2
  },
  {
    "name": "Moscow",
    "athlete": 1301,
    "map": 17
  },
  {
    "name": "Bangor",
    "athlete": 402,
    "map": 0
  },
  {
    "name": "Waverly",
    "athlete": 1245,
    "map": 40
  },
  {
    "name": "Cataract",
    "athlete": 408,
    "map": 22
  },
  {
    "name": "Calverton",
    "athlete": 186,
    "map": 10
  },
  {
    "name": "Ribera",
    "athlete": 135,
    "map": 5
  },
  {
    "name": "Detroit",
    "athlete": 1484,
    "map": 45
  },
  {
    "name": "Russellville",
    "athlete": 723,
    "map": 43
  },
  {
    "name": "Baden",
    "athlete": 1546,
    "map": 20
  },
  {
    "name": "Kula",
    "athlete": 848,
    "map": 4
  },
  {
    "name": "Brethren",
    "athlete": 1343,
    "map": 19
  },
  {
    "name": "Wildwood",
    "athlete": 464,
    "map": 31
  },
  {
    "name": "Cashtown",
    "athlete": 168,
    "map": 40
  },
  {
    "name": "Celeryville",
    "athlete": 1734,
    "map": 50
  },
  {
    "name": "Tolu",
    "athlete": 1609,
    "map": 50
  },
  {
    "name": "Turpin",
    "athlete": 434,
    "map": 19
  },
  {
    "name": "Clara",
    "athlete": 523,
    "map": 30
  },
  {
    "name": "Bagtown",
    "athlete": 891,
    "map": 1
  },
  {
    "name": "Abiquiu",
    "athlete": 1652,
    "map": 38
  },
  {
    "name": "Echo",
    "athlete": 723,
    "map": 38
  },
  {
    "name": "Bowmansville",
    "athlete": 1448,
    "map": 47
  },
  {
    "name": "Vandiver",
    "athlete": 1020,
    "map": 6
  },
  {
    "name": "Hoehne",
    "athlete": 956,
    "map": 0
  },
  {
    "name": "Fruitdale",
    "athlete": 1888,
    "map": 15
  },
  {
    "name": "Keyport",
    "athlete": 1265,
    "map": 19
  },
  {
    "name": "Independence",
    "athlete": 748,
    "map": 5
  },
  {
    "name": "Riegelwood",
    "athlete": 1892,
    "map": 41
  },
  {
    "name": "Alamo",
    "athlete": 574,
    "map": 46
  },
  {
    "name": "Craig",
    "athlete": 1361,
    "map": 49
  }
];


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
