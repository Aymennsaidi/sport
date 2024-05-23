const express = require("express"); // import module express
const bodyParser = require("body-parser"); // import module body parser
const mongoose = require("mongoose"); //import module mongoose
mongoose.connect('mongodb://127.0.0.1:27017/sportDB');//connect Express with DB
const bcrypt = require('bcrypt'); // import module bcrypt
const jwt = require('jsonwebtoken');//Module Importation JWT
const session = require('express-session');//Module Importation session
const axios = require("axios");//Import module Axios
const multer = require('multer');//import module Multer
const path = require('path'); // import module Path
const app = express(); // création app BE app

// bodyParser configuration
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );

    next();
});
//session configuration
const secretKey = 'your-secret-key';
app.use(session({
    secret: secretKey,
}));

//shortCutPath == Backend/uploads
app.use('/shortCutPath', express.static(path.join('backend/uploads')))
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}

// Multer Storage
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        if (isValid) {
            cb(null, 'backend/uploads')
        }
    },
    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});



//models importation
const Match = require("./models/match");
const Player = require("./models/player");
const Team = require("./models/team");
const User = require("./models/user");
const team = require("./models/team");


//static BD
// let matches = [
//     { id: 1, scoreOne: 3, scoreTwo: 2, teamOne: 'RMD', teamTwo: 'FCB' },
//     { id: 2, scoreOne: 2, scoreTwo: 3, teamOne: 'PSG', teamTwo: 'ATM' },
//     { id: 3, scoreOne: 1, scoreTwo: 3, teamOne: 'SEV', teamTwo: 'ARS' },
//     { id: 4, scoreOne: 3, scoreTwo: 3, teamOne: 'CIT', teamTwo: 'MBV' },
//     { id: 5, scoreOne: 2, scoreTwo: 1, teamOne: 'JUV', teamTwo: 'PSG' }
// ];

// let players = [
//     { id: 1, name: 'cr7', position: 'Forward', number: 7, age: 37 },
//     { id: 2, name: 'ramos', position: 'Defender', number: 4, age: 38 },
//     { id: 3, name: 'lewandowski', position: 'Forward', number: 7, age: 37 },
//     { id: 4, name: 'pepe', position: 'Defender', number: 9, age: 39 },
// ];

// let teams = [
//     { id: 1, name: 'FC Bayern Munich', owner: 'Thomas Tuchel', founder: 'Franz John' },
//     { id: 2, name: 'Real Madrid CF', owner: 'Carlo Ancelotti', founder: 'Adolfo Meléndez...' },
//     { id: 3, name: 'Chelsea F.C.', owner: 'Mauricio Pochettino', founder: 'Henry Augustus Mears' },
//     { id: 4, name: 'Arsenal F.C.', owner: 'Kroenke Sports & Entertainment', founder: 'Scotsman David Danskin' },
// ];

//here BL: Add Match
app.post('/api/matches', (req, res) => {
    console.log('here Add Match', req.body);
    let matchObj = new Match(req.body);
    matchObj.save();
    res.json({ message: 'match Added' });
})

//here BL: Get All Match
app.get('/api/matches', (req, res) => {
    Match.find().then((docs) => {
        console.log("Here Docs", docs);
        res.json({ matches: docs });
    });
});

//here BL: Get Match By Id
app.get('/api/matches/:id', (req, res) => {
    console.log("Here into BL :Get Match By ID", req.params.id);
    Match.findById(req.params.id).then((doc) => {
        console.log("Here Doc", doc);
        res.json({ match: doc });
    })
})

//here BL: delete Match
app.delete('/api/matches/:id', (req, res) => {
    console.log(' Here Into Match Deleted', req.params.id);
    Match.deleteOne({ _id: req.params.id }).then((deleteResponse) => {
        console.log('result', deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: "Success" })
        } else {
            res.json({ message: "Error" })
        }
    });
});

//here Trait Logique put Match
app.put('/api/matches', (req, res) => {
    console.log("Here into BL: Edit Match ", req.body);
    Match.updateOne({ _id: req.body._id }, req.body).then(
        (updateResponse) => {
            console.log('here response', updateResponse);
            if (updateResponse.nModified == 1) {
                res.json({ message: "Edited With Success" });
            } else {
                res.json({ message: "Error" });
            }
        });

});

//here Trait Logique Add player
app.post('/api/players', (req, res) => {
    console.log('here Add Player', req.body);
    // let playerObj = new Player(req.body);
    Team.findById(req.body.tId).then((team) => {
        if (!team) {
            res.json({ message: "team not found" })
        } else {
            //team founded
            let player = new Player({
                name: req.body.name,
                age: req.body.age,
                number: req.body.number,
                position: req.body.position,
                teamId: team._id
            });
            player.save((err, doc) => {
                if (err) {
                    res.json({ message: "player not saved" })
                } else {
                    team.playersId.push(doc);
                    team.save();
                    res.json({ message: "player saved with success" })
                }
            });
        }
    })
});

//here Trait Logique Get player
app.get('/api/players', (req, res) => {
    Player.find().then((docs) => {
        console.log("Here Docs", docs);
        res.json({ players: docs });
    });
})

//here Trait Logique Get player By Id
app.get('/api/players/:id', (req, res) => {
    console.log("Here into BL :Get Player By ID", req.params.id);
    Player.findById(req.params.id).then((doc) => {
        console.log("Here Doc", doc);
        res.json({ player: doc });
    });
});

//here Trait Logique delete player
app.delete('/api/players/:id', (req, res) => {
    console.log(' Here Into Player Deleted', req.params.id);
    Player.deleteOne({ _id: req.params.id }).then((deleteResponse) => {
        console.log('result', deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: "Success" })
        } else {
            res.json({ message: "Error" })
        }
    });
});

//here Trait Logique put player
app.put('/api/players', (req, res) => {
    console.log("Here into BL: Edit Player ", req.body);
    Player.updateOne({ _id: req.body._id }, req.body).then(
        (updateResponse) => {
            console.log('here response', updateResponse);
            if (updateResponse.nModified == 1) {
                res.json({ message: "Edited With Success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});

//here Trait Logique Add team
app.post('/api/teams', (req, res) => {
    console.log('here Add Team', req.body);
    let teamObj = new Team(req.body);
    teamObj.save();
    res.json({ message: 'Team Added' });
})

//here Trait Logique Get team
app.get('/api/teams', (req, res) => {
    Team.find().then((docs) => {
        console.log("Here Docs", docs);
        res.json({ teams: docs });
    });
})

//here Trait Logique Get team By Id
app.get('/api/teams/:id', (req, res) => {
    console.log("Here into BL :Get Team By ID", req.params.id);
    Team.findById(req.params.id).then((doc) => {
        console.log("Here Doc", doc);
        res.json({ team: doc });
    });
});

//here Trait Logique delete team
app.delete('/api/teams/:id', (req, res) => {
    console.log(' Here Into Team Deleted', req.params.id);
    Team.deleteOne({ _id: req.params.id }).then((deleteResponse) => {
        console.log('result', deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: "Success" })
        } else {
            res.json({ message: "Error" })
        }
    });
});

//here Trait Logique put team
app.put('/api/teams', (req, res) => {
    console.log("Here into BL: Edit Team ", req.body);
    Team.updateOne({ _id: req.body._id }, req.body).then(
        (updateResponse) => {
            console.log('here response', updateResponse);
            if (updateResponse.nModified == 1) {
                res.json({ message: "Edited With Success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});

//here Trait Logique Add user
app.post('/api/users/signup', multer({ storage: storage }).single('img'), (req, res) => {
    // console.log('here Add User', req.body);
    bcrypt.hash(req.body.password, 10).then((cryptedPassword) => {
        console.log("here Crypted password", cryptedPassword);
        req.body.password = cryptedPassword;
        req.body.avatar = `http://localhost:3000/shortCutPath/${req.file.filename}`
        let userObj = new User(req.body);
        userObj.save();
        res.json({ message: 'User Added' });
    });
});

//here Trait Logique Get User
app.get('/api/users', (req, res) => {
    User.find().then((docs) => {
        console.log("Here Docs", docs);
        res.json({ users: docs });
    });
});
app.post('/api/users/login', (req, res) => {
    console.log('here into login', req.body);
    User.findOne({ email: req.body.email }).then((doc) => {
        console.log('herer doc', doc);
        if (!doc) {
            res.json({ message: 'check u re email' });
        } else {
            //doc exist
            bcrypt.compare(req.body.password, doc.password).then((cryptedPassword) => {
                console.log('here password result', cryptedPassword);
                if (!cryptedPassword) {
                    res.json({ message: 'check u re passswrd' });
                } else {
                    let userToSend = {
                        role: doc.role,
                        firstName: doc.firstName,
                        lastName: doc.lastName,
                        tel: doc.TEL,
                        id: doc._id,
                        avatar: doc.avatar,
                    };
                    // Encoder userToSend
                    const token = jwt.sign(userToSend, secretKey, {
                        expiresIn: '1h'
                    });
                    res.json({ message: 'welcome', user: token });
                }
            });
        }
    });

});
//here BL 
app.put("/api/users", (req, res) => {
    console.log("here into bl edit profile ......", req.body);
    //user.findById(req.body.userId)
    User.findOne({ _id: req.body.userId }).then((doc) => {
        console.log('here founded user ', doc);
        if (!doc) {
            req.json({ message: 'user not found' });
        } else {
            bcrypt.compare(req.body.oldPassword, doc.password).then((passwordResult) => {
                console.log('here password Result', passwordResult);
                if (!passwordResult) {
                    res.json({ message: "please chech your old password" })
                } else {
                    bcrypt.hash(req.body.newPassword, 10).then((cryptedPassword) => {
                        console.log('here crypted password', cryptedPassword);
                        let newObj = { TEL: req.body.TEL, password: cryptedPassword };
                        User.updateOne({ _id: req.body.userId }, newObj).then((editResult) => {
                            console.log('here edit Result', editResult);
                            if (editResult.nModified == 1) {
                                res.json({ message: "Updated with success" })
                            } else {
                                res.json({ message: "error" })
                            }
                        })
                    })
                }
            })
        }
    })
});


// here Trait Logique Get User By Id
app.get('/api/users/:id', (req, res) => {
    console.log("Here into BL :Get User By ID", req.params.id);
    User.findById(req.params.id).then((doc) => {
        console.log("Here Doc", doc);
        res.json({ user: doc });
    });
})

//here Trait Logique delete User
app.delete('/api/users/:id', (req, res) => {
    console.log(' Here Into User Deleted', req.params.id);
    User.deleteOne({ _id: req.params.id }).then((deleteResponse) => {
        console.log('result', deleteResponse);
        if (deleteResponse.deletedCount == 1) {
            res.json({ message: "Success" })
        } else {
            res.json({ message: "Error" })
        }
    });
});

//here Trait Logique put User
app.put('/api/users', (req, res) => {
    console.log("Here into BL: Edit User ", req.body);
    User.updateOne({ _id: req.body._id }, req.body).then(
        (updateResponse) => {
            console.log('here response', updateResponse);
            if (updateResponse.nModified == 1) {
                res.json({ message: "Edited With Success" });
            } else {
                res.json({ message: "Error" });
            }
        });
});

//Here into BL Get All Teams With Players
app.get("/api/teamsPlayers", (req, res) => {
    console.log('here into BL:get all teams with players');
    Team.find().populate("playersId").then((teamDoc) => {
        console.log('here team docs', teamDoc);
        res.json({ teams: teamDoc })
    })
});

app.get("/api/playersTeams", (req, res) => {
    console.log('here into BL:get all players with teams');
    Player.find().populate("teamId").then((playerDoc) => {
        console.log('here player docs', playerDoc);
        res.json({ players: playerDoc })
    })
})

//here BL search weather
app.post("/weather", (req, res) => {
    console.log("here obj", req.body);
    let key = '4a8acf064fa6215dc0cfad5ee252f9b7'
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key}`;
    axios.get(apiURL).then((apiResponse) => {
        console.log('here response from API', apiResponse.data);
        let weatherResponse = {
            temp: apiResponse.data.main.temp,
            humidity: apiResponse.data.main.humidity,
            pressure: apiResponse.data.main.pressure,
            speed: apiResponse.data.wind.speed,
            description: apiResponse.data.weather[0].description,
        };
        res.json({ apiRes: weatherResponse })
    })
});

module.exports = app; // make app exportable