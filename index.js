const express = require('express');
require('dotenv').config({
    path: ".env"
});
const mysql = require('mysql2');
const app = express();
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});
db.connect(err => {
    if (err) throw err;
    console.log('Connesso a MySQL');
});

const createTableQuery = `
  CREATE TABLE IF NOT EXISTS cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(50) NOT NULL,
    modello VARCHAR(50) NOT NULL,
    targa VARCHAR(10) UNIQUE NOT NULL
  );
`;

db.query(createTableQuery, (err, results) => {
  if (err) {
    console.error('Error creating table:', err);
  } else {
    console.log('Table "cars" is ready.');
  }
});

app.get('/cars', (req, res) => {
    db.query('SELECT * FROM cars', (err, results) => {
        if (err) return res.status(500).send(err);
        res.send(results);
    });
});

app.post('/cars', (req, res) => {
    const { marca, modello, targa } = req.body; 
    db.query('INSERT INTO cars (marca, modello, targa) VALUES (?, ?, ?)',
        [marca, modello, targa], (err, result) => {
            if (err) return res.status(500).send(err);
            res.send({ message: 'Auto aggiunta!', id: result.insertId });
        });
});

app.put('/cars/:id', (req, res) => {
    const { marca, modello, targa } = req.body; 
    const { id } = req.params;
    db.query('UPDATE cars SET marca=?, modello=?, targa=? WHERE id=?',
        [marca, modello, targa, id], (err) => {
            if (err) return res.status(500).send(err);
            res.send({ message: 'Auto aggiornata!' });
        });
});

app.delete('/cars/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM cars WHERE id=?', [id], (err) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Auto eliminata!' });
    });
});

app.listen(3002, () => console.log('Server avviato sulla porta 3000'));
