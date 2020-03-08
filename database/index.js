const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'pets',
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`
    ( •_•)
    ( •_•)>⌐■-■
    (⌐■_■)
    `);
  }
});

module.exports = db;