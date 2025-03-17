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

app.get('/', (req, res) => {
    const sql = `INSERT INTO people(name) VALUES('Turisco')`;
    connection.query(sql, (err, result) => {
        if (err) {
            console.error('Error to insert data:', err);
            res.status(500).send('<h1>Error Server</h1>');
            return;
        }

        console.log('People Added Successfully!');
        res.send('<h1>People Added Successfully</h1>');
    });
});

app.listen(port, () => {
    console.log(`Running on door ${port}`);
});
