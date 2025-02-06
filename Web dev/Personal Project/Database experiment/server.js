const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

const db = new sqlite3.Database('./database.db');

var path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/login.html');
});

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    
    db.get ( //Query the database
        'SELECT * FROM USER WHERE username = ? AND password = ?',
        [username, password], 
        (err, row) => {
            if (err){
                console.error(err);
                res.status(500).send('Server Error');
            }else{
                if (row){ //Login successful
                    res.send('Login successful!');
                }else{
                    res.send('Login failed: Invalid username or password.');
                }
            }
        }
    );
});

app.listen(port, () => {
    console.log("Server running at https://localhost:" + port);
});