const sqlite3 = require('sqlite3').verbose();
const bancoDeDados = new sqlite3.Database('../bancoDeDados.db')

module.exports = bancoDeDados; 
