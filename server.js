// Requiring necessary npm middleware packages 
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("./config/passport");
var hbs = require("hbs");
var mysql = require("mysql");
var sdkClient = require('./api_SDK/astro-api-nodejs-client-master/sdk/sdk');
// Setting up port
var PORT = process.env.PORT || 8080;
//Import the models folder
var db = require("./models");
// Creating express app and configuring middleware 
//needed to read through our public folder
//we are doing a GET to test if our server is working fine
var app = express();
app.set('view engine', 'hbs')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
//
// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

app.get("/", (req, res) => {

  res.render("templates");
});
app.get("/:sign", (req, res) => {

  var pictureUrl = "";
  var planet = "";
  var element = "";
  var color = "";
  var luckyNumbers = "";
  var strengths = "";
  var weaknesses = "";
  var zodiacChosen = req.params.sign;

  var data = {
    'date': 0,
    'month': 0,
    'year': 1990,
    'hour': 12,
    'minute': 25,
    'latitude': 39,
    'longitude': -104,
    'timezone': 5.5
  };
  console.log(zodiacChosen)
  switch (zodiacChosen) {
    case "taurus":
      {
        pictureUrl = "/images/zodiacbackground/taurus.jpg"
        planet = "Venus",
          element = "Earth",
          color = "Green, Pink",
          luckyNumbers = "2, 6, 9, 12, 24",
          strengths = " Reliable, patient, practical, devoted, responsible, stable",
          weaknesses = "Stubborn, possessive, uncompromising",
          data.date = 23;
        data.month = 7;
        break;
      }
    case "aries":
      {
        pictureUrl = "/images/zodiacbackground/aries.jpg";
        planet = "Mars",
          element = "Fire",
          color = "Red",
          luckyNumbers = "1, 8, 17",
          strengths = "Courageous, determined, confident, enthusiastic, optimistic, honest, passionate",
          weaknesses = "Impatient, moody, short-tempered, impulsive, aggressive"
        data.date = 10;
        data.month = 7;
        break;
      }

    case "gemini":
      {
        pictureUrl = "/images/zodiacbackground/gemini.jpg"
        planet = "Venus",
          element = "Earth",
          color = "Green, Pink",
          luckyNumbers = "2, 6, 9, 12, 24",
          strengths = " Reliable, patient, practical, devoted, responsible, stable",
          weaknesses = "Stubborn, possessive, uncompromising"
        data.date = 10;
        data.month = 8;
        break;
      }
    case "cancer":
      {
        pictureUrl = "/images/zodiacbackground/cancer.jpg"
        planet = "Moon",
          element = "Water",
          color = "White",
          luckyNumbers = "2, 3, 15, 20",
          strengths = "Tenacious, highly imaginative, loyal, emotional, sympathetic, persuasive",
          weaknesses = "Moody, pessimistic, suspicious, manipulative, insecure",
          data.date = 10;
        data.month = 9;
        break;
      }
    case "leo":
      {
        pictureUrl = "/images/zodiacbackground/leo.jpg"
        planet = "Sun",
          element = "Fire",
          color = " Gold, Yellow, Orange",
          luckyNumbers = "1, 3, 10, 19",
          strengths = "Creative, passionate, generous, warm-hearted, cheerful, humorous",
          weaknesses = "Arrogant, stubborn, self-centered, lazy, inflexible",
          data.date = 10;
        data.month = 10;
        break;
      }
    case "virgo":
      {
        pictureUrl = "/images/zodiacbackground/virgo.jpg"
        planet = "Mercury",
          element = "Earth",
          color = "Grey, Beige, Pale-Yellow",
          luckyNumbers = "5, 14, 15, 23, 32",
          strengths = "Loyal, analytical, kind, hardworking, practical",
          weaknesses = "Shyness, worry, overly critical of self and others, all work and no play",
          data.date = 10;
        data.month = 12;
        break;
      }
    case "libra":
      {
        pictureUrl = "/images/zodiacbackground/libra.jpg"
        planet = "Venus",
          element = "Air",
          color = "Pink, Green",
          luckyNumbers = "4, 6, 13, 15, 24",
          strengths = "Cooperative,diplomatic, gracious, fair-minded, social",
          weaknesses = "Indecisive, avoids confrontations, will carry a grudge, self-pity",
          data.date = 10;
        data.month = 1
        break;
      }
    case "scorpio":
      {
        pictureUrl = "/images/zodiacbackground/scorpio.jpg"
        planet = "Pluto, Mars",
          element = "Water",
          color = "Scarlet, Red, Rust",
          luckyNumbers = "8, 11, 18, 22",
          strengths = "Resourceful, brave, passionate, stubborn, a true friend",
          weaknesses = "Distrusting, jealous, secretive, violent",
          data.date = 30;
        data.month = 1;
        break;
      }
    case "sagitarius":
      {
        pictureUrl = "/images/zodiacbackground/sagitarius.jpg"
        planet = "Jupiter",
          element = "Fire",
          color = "Blue",
          luckyNumbers = "3, 7, 9, 12, 21",
          strengths = "Generous, idealistic, great sense of humor",
          weaknesses = "Promises more than can deliver, very impatient, will say anything no matter how undiplomatic"
        data.date = 10;
        data.month = 3;
        break;
      }
    case "capricorn":
      {
        pictureUrl = "/images/zodiacbackground/capricorn.jpg"
        planet = "Saturn",
          element = "Earth",
          color = "Brown, Black",
          luckyNumbers = "4, 8, 13, 22",
          strengths = "Responsible, disciplined, self-control, good managers",
          weaknesses = "Know-it-all, unforgiving, condescending, expecting the worst",
          data.date = 10;
        data.month = 5;
        break;
      }
    case "aquarius":
      {
        pictureUrl = "/images/zodiacbackground/aquarius.jpg"
        planet = "Uranus, Saturn",
          element = "Air",
          color = "Light-Blue, Silver",
          luckyNumbers = "4, 7, 11, 22, 29",
          strengths = "Progressive, original, independent, humanitarian",
          weaknesses = "Runs from emotional expression, temperamental, uncompromising, aloof"
        data.date = 30;
        data.month = 5;
        break;
      }
    case "pisces":
      {
        pictureUrl = "/images/zodiacbackground/pieces.jpg"
        planet = "Neptune, Jupiter",
          element = "Water",
          color = "Mauve, Lilac, Purple, Violet, Sea green",
          luckyNumbers = " 3, 9, 12, 15, 18, 24",
          strengths = "Compassionate, artistic, intuitive, gentle, wise, musical",
          weaknesses = "Fearful, overly trusting, sad, desire to escape reality, can be a victim or a martyr"
        data.date = 10;
        data.month = 6;
        break;
      }
  }
  console.log(data.date);
  console.log(data.month);

  var resource = "general_ascendant_report/tropical";

  sdkClient.call(resource, data.date, data.month, data.year, data.hour, data.minute, data.latitude, data.longitude, data.timezone, function (error, result) {

    console.log(data.date);
    console.log(data.month);
    console.log(resource);

    if (error) {
      console.log("Error returned!!");
    }
    else {
      console.log('Response has arrived from API server --');
      console.log(JSON.parse(result));
      res.render("horoscopeTemplate", {
        pageTitle: req.params.sign,
        pictureUrl: pictureUrl,
        horoscope: result,
        planet: planet,
        element: element,
        color: color,
        luckyNumbers: luckyNumbers,
        strengths: strengths,
        weaknesses: weaknesses

      });
    }
  });
});
//
//this will listen to and show all activities on our terminal to 
//let us know what is happening in our app

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}

db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});