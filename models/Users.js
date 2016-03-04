var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
	username:{
		type: String,
		require: true,
		trim: true
	},
	password:{
		type: String,
		require: true,
		trim: true
	},
	crated:{
		type:Date,
		default:Date.now
	}
	
});

var User = mongoose.model('users', UserSchema);

module.exports ={
	User:User
};