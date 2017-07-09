// invoke express
var express = require('express');

// invoke handlebars
var hdbars = require('express-handlebars');

// set app engine 
var app = express();
app.engine('handlebars', hdbars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


// default route link
app.get('/', function (req, res){
	res.render('home');
});

// require custom port or set default port 3000
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function (){
	console.log('Development server is live http://localhost:'+app.get('port'));
});