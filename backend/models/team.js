//import module mongoose
const mongoose = require("mongoose");

//create team schema (attributes with types)
const teamSchem = mongoose.Schema({
    name: String,
    owner: String,
    founder: String,
    playersId: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Player"
        }
    ]
});

//create model Name and affect to schema
const team = mongoose.model("Team", teamSchem);

//make team exportable
module.exports = team;