
var fs = require('fs');
var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');
const { nextTick } = require('process');
var port = process.env.PORT || 8251;
var app = express();





/*app.engine('handlebars', exphbs.engine(
	{defaultLayout: 'base'}
	));*/

app.engine('handlebars', exphbs.engine({defaultLayout: 'null'}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.get('/', function(req, res) {
   res.sendFile(path.join(__dirname, '/public/calc.html'));
});




app.get('*', function (req, res) {
   res.sendFile(path.join(__dirname, '/public/404.html'));
});

app.listen(port, function() {
   console.log("------- Server is running on port :", port);
});
