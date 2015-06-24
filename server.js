var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var Sequelize = require("sequelize");

var app = express();

//configure app
app.engine('.html', require('ejs').__express);
app.set('view engine', 'html');
//make our pages *.html in views folder
app.set('views', path.join(__dirname, 'views'));


//use middleware
app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(express.static(path.join(__dirname, 'web-app')));

//define routes

app.use(require('./controller/routes'));



//app listen on port 8080
app.listen(8080, function (){
	console.log('server started on http://localhost:8080/')
});













// var http = require('http');

// http.createServer(function (req, res){
// 	res.writeHead(200, {'contentType' : 'text/plain'});
// 	res.end('Hello World');
// }).listen(8080);