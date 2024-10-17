const config = require('../config/config');
const mysql=require('mysql2');
const fs= require('fs');
const path = require('path');

// ------- DATABASE CONNECTION ----------------------------------------------------------------------------------

const db=mysql.createConnection({
    host : config.host,
    user : config.user,
    password : config.password,
    database : config.database
});

db.connect((err) => {
    if(err){
        console.error('Error connecting to database',err)
        return
    }
    console.log('Server Connected to database')
});


// ----------- ADD USER -----------------------------------------------------------------------------------------

exports.addUser = (userdata, filedata, callback) => {
    db.query(
        `INSERT INTO users (full_name, age, city, mobile_no, mail) VALUES ('${userdata.fname}',${userdata.age},'${userdata.city}',${userdata.mobile},'${userdata.mail}')`,
        callback
        );
        
        const val=0;
        let mx=0;
        db.query('select * from users', (err, data) => {
            if(err) throw err;
        const userdata = data;
        for(i of userdata){
            if(mx < i.id){
                mx = i.id;
            }
        }  
        console.log(mx)
        const fofile='USR0000'+mx;
        const fpath = './uploads/'+fofile;
        fs.mkdirSync(fpath);

        fs.readdir('./uploads',(err, files) => {
            if(err) throw err;
            
        })

        fs.readdir('./uploads',(err, files) => {
            if(err) throw err;
            files.forEach(file => {
                const a=file.split('.')
                if(a[1] == 'png'){
        
                    const oldfile = './uploads/'+file;
                    const newfile = './uploads/'+fofile+'/Image.png';
                    fs.rename(oldfile, newfile, (err) => {
                        if(err) throw err;
                    })
                }
                else if(a[1] == 'pdf'){
                    const oldfile = './uploads/'+file;
                    const newfile = './uploads/'+fofile+'/resume.pdf';
                    fs.rename(oldfile, newfile, (err) => {
                        if(err) throw err;
                    })
                }
                else if(a[1] != null){
                    const oldfile = './uploads/'+file;
                    const newfile = './uploads/'+fofile+'/resume.docx';
                    fs.rename(oldfile, newfile, (err) => {
                        if(err) throw err;
                    })
                }
                
            });
        })
    })
};


// -------------- GET ALL USERS ---------------------------------------------------------------------------------

exports.getAllUsers = (callback) => {
    db.query('SELECT * FROM users',callback);
};

// ---------------- GET USER BY ID -----------------------------------------------------------------------------

exports.getUsersById = (userid,callback) => {
    db.query('SELECT * FROM users WHERE id = ?', userid, (err, result) => {
        if(err){
            callback(err,null);
            return;
        }
        callback(null,result[0]);
    });
};