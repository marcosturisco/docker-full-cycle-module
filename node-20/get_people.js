const express = require('express');
const mysql = require('mysql2');
const app = express();
const port = 3002;
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

app.get('/people', (req, res) => {
    const sql = `SELECT * FROM people`;
    connection.query(sql, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).send('<h1>Error Server</h1>');
            return;
        }
        let responseHtml = '<h1>Full Cycle Rocks!</h1><ul>';
        results.forEach(person => {
            responseHtml += `<li>${person.id}: ${person.name}</li>`;
        });
        responseHtml += '</ul>';
        res.send(responseHtml);
    });
});

app.listen(port, () => {
    console.log(`Running on door ${port}`);
});
