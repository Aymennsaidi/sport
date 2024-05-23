//import module mongoose
const mongoose = require("mongoose");

//create player schema (attributes with types)
const playerSchem = mongoose.Schema({
    name: String,
    position: String,
    number: Number,
    age: Number,
    teamId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Team",
    },
});

//create model Name and affect to schema
const player = mongoose.model("Player", playerSchem);

//make player exportable
module.exports = player;