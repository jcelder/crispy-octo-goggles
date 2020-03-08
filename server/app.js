const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const db = require('../database');

const STATIC_DIR = path.resolve(__dirname, '..', 'public');

const app = express();

app.use(express.static(STATIC_DIR));
app.use(bodyParser.json());

app.get('/pets', (req, res) => {
  const sql = `SELECT * FROM pets`;
  db.query(sql, (err, pets) => {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      res.send(pets);
    }
  })
});

app.post('/pets', (req, res) => {
  const { name, breed, rating} = req.body;
  const sql = `INSERT INTO pets (name, breed, rating) VALUES (? , ?, ?)`;
  db.query(sql, [name, breed, rating], (err) => {
    if (err) {
      console.log(err);
      res.status(500).send();
    } else {
      res.status(201).send();
    }
  });
});

module.exports = app;
