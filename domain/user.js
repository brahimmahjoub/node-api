var Sequelize = require("sequelize");

var User = function(sequelize){

	return sequelize.define('User', {
			id: {
				type: Sequelize.INTEGER,
				autoIncrement: true,
				primaryKey: true
			},
		    firstName: {
		    	type: Sequelize.STRING
		    },
		    lastName: {
				type: Sequelize.STRING
		    },
		    email: {
			    type: Sequelize.STRING,
			    validate:  {
			      isEmail: true			    }
			},
		    password: {
		    	type: Sequelize.STRING
		    	
		    }
		},
		{
			timestamps:false,
			underscored:true
		}
		);
}

module.exports = User;