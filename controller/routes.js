var express = require('express');
var router = express.Router();
var Sequelize = require("sequelize");


//Setting up the connection with mysql

var env = "dev";
var config = require("../conf/dataSource.json")[env];
 
//Setting up the config
var sequelize = new Sequelize(config.database, config.user, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.driver
});

sequelize.authenticate()
  .then(function(err) {
    console.log('Connection has been established successfully.');
  }, function (err) { 
    console.log('Unable to connect to the database:', err);
  });



var importUser = require('../domain/user');
var User = importUser(sequelize);

router.get('/', function (req, res){
	res.render('index',{error:null});
});

var serv = require('../service/test');

router.post('/register', function (req, res){
	var firstName = req.body.firstName;
	var lastName = req.body.lastName;
	var email = req.body.email;
	var password = req.body.password;

	// res.render('index');

	var command = User.build({
		firstName: firstName,
		lastName: lastName,
		email: email,
		password: password
	});

	 var pass = serv.emit("addUser", User, command);
	// var errors ;
	// user.save().catch(function(err) {
	//     // Ooops, do some error-handling
	//     errors = err['errors'][0].message;
	//     res.render('index',{error:errors});
	//     return;
	//   });
});

router.get('/list', function (req, res){

	User.findAll().then(function(person) {
		res.render('list', {users:person});
	});
});

module.exports = router;