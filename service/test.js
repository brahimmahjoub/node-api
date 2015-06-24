	var EventEmitter = require("events").EventEmitter;
	 
	var ee = new EventEmitter();
	ee.on("addUser", addUserService);



	 function addUserService(User, command, next) {

	    User.sync({force: false}).then(function () {

			User.create({
		    firstName: command.firstName,
		    lastName: command.lastName,
		    email: command.email,
		    password: command.password

			}).then(function (){
				console.log('user has been created successfully')
				next('/list');			
			}).catch(function(err) {
				console.log('an error has been occured in test service !')
				next('/');	
			});
		});
	}
	 
	 module.exports = ee;