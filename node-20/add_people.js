const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3001;

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const connection = mysql.createConnection(config);

connection.connect(err => {
    if (err) {
        console.error('Error to connect to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL!');
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/add-people', (req, res) => {
    const { name } = req.body;
    if (!name) {
        return res.status(400).send('<h1>Name is required</h1>');
    }
    const sql = `INSERT INTO people(name) VALUES(?)`;
    connection.query(sql, [name], (err, result) => {
        if (err) {
            console.error('Insert Error:', err);
            return res.status(500).send('<h1>Server Error</h1>');
        }
        console.log('People Added Successfully!');
        res.send('<h1>People Added Successfully!</h1>');
    });
});

app.listen(port, () => {
    console.log(`Running on door ${port}`);
});
