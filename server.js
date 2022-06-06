
var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
const { nextTick } = require('process');
var port = process.env.PORT || 3000;
var app = express();


app.use(express.static(path.join(__dirname, 'public')));


/*app.engine('handlebars', exphbs.engine(
	{defaultLayout: 'base'}
	));*/

app.set('view engine', 'handlebars');

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, '/calc.html'));
});




app.get('*', function (req, res) {
   res.sendFile(path.join(__dirname, '/404.html'));
});

app.listen(port, function() {
   console.log("------- Server is running on port :", port);
});
