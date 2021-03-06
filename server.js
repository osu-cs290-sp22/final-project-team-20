

var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
const { nextTick } = require('process');
var port = process.env.PORT || 8251;
var app = express();

var jsonData = require('./equationData.json');
var calcData = {
   "cards": []
}
Object.values(jsonData).forEach(function(value, i) {
   calcData.cards.push(value);
});


var calculators = {
   BMI: [ /**/ ],
   BMRM: [ /**/ ],
   BMRW: [ /**/ ],
   HYPOT: [ /**/ ],
 };
 

app.engine('handlebars', exphbs.engine({defaultLayout: 'base'}));
app.set('view engine', 'handlebars');


app.use(express.static('public'));

app.get('/', function(req, res) {
   res.status(200).sendFile(path.join(__dirname, '/public/calc.html'));
});

app.get('/calc', function(req, res) {
   // res.status(200).sendFile(path.join(__dirname, '/public/calc.html'));
   res.status(200).render('home', calcData);
});

app.get('/instructions',(req,res)=>{
   res.status(200).render('howTo');
  });

app.get('/calc/:calcName', function (req, res) {
   var calcName = req.params.calcName;

   if (jsonData[calcName]) {
      res.render('specific', jsonData[calcName]);
    } else {
      res.status(404).render('404');
    }
  
});


app.get('*', function (req, res) {
   res.status(404).render('404');
});

app.listen(port, function() {
   console.log("------- Server is running on port :", port);
});

