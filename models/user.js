var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");
var UserSchema = new mongoose.Schema({
    firstname: String,
	lastname:String,
	username:String,
	password:String,
	CPassword:String,
	category:String,
	email:String,
	mobilenumber:String,
	day:String,
	month:String,
	year:String,
	street :String,
	city:String,
	state:String,
});
UserSchema.plugin(passportLocalMongoose);




module.exports = mongoose.model("User",UserSchema);