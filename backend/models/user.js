//import module mongoose
const mongoose = require("mongoose");

//create user schema (attributes with types)
const userSchem = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    TEL: String,
    role:String,
    avatar:String,
});

//create model Name and affect to schema
const user = mongoose.model("User", userSchem);

//make user exportable
module.exports = user;