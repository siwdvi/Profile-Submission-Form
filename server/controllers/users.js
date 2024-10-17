const db = require('../modules/users');
const path = require('path');
const indexpath=path.resolve('../','client/index.html');

// ---------- ADD USER --------------------------------------------------------------

exports.addUser = (req, res) => {
    const userdata = req.body;
    const filedata = req.files;
    db.addUser(userdata, filedata, (err) => {
        if(err){
            console.error(err);
            res.status(500).send('<h1>Error creating User</h1>');
            return;
        }
        console.log('User Added')
        res.sendfile(indexpath)
    });
};

// ----------- GET ALL USERS ------------------------------------------------------------

exports.getAllUsers = (req, res) => {
    db.getAllUsers((err, users) => {
        if(err){
            console.error(err);
            res.status(500).send('Error getting user');
            return;
        }
        res.send(users);
    });
};

// ------------ GET USER BY ID -------------------------------------------------------------------

exports.getUsersById = (req, res) => {
    const userid = req.params.id;

    db.getUsersById(userid, (err, user) => {
        if(err){
            console.error(err);
            res.status(500).send(`<h1>Error getting user from server</h1>`);
            return;
        }
        if(!user){
            res.status(404).send(`<h1> Not valid user id: ${userid}</h1>`);
            return;
        }
        res.send(user);
    })
}
