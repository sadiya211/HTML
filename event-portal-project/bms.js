
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'sadiya2005',
  database: 'banksys'
});

connection.connect(err => {
  if (err) {
    console.error('MySQL connection error:', err);
  } else {
    console.log('Connected to MySQL database.');
  }
});

module.exports = connection; 
