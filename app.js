// invoke express
var express = require('express');

// invoke handlebars
var hdbars = require('express-handlebars');

// set app engine 
var app = express();
app.engine('handlebars', hdbars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// set a public static path
app.use('/public', express.static('public'));

// default route link
app.get('/', function (req, res){
	res.render('home');
});

app.get('/contact', function (req, res){
	res.render('contact');
});

app.get('/about', function (req, res){
	res.render('about');
});

app.get('/login', function (req, res){
	res.render('login');
});



// default error 404 link
app.get(function (req, res){
	res.status(404);
	res.render('404');
});

// default internal error 500 link
app.get(function (req, res){
	res.status(500);
	res.render('500');
});

// require custom port or set default port 3000
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function (){
	console.log('Development server is live http://localhost:'+app.get('port'));
	console.log('Press Ctrl+C to return ');
});