const sqlite3 = require('sqlite3').verbose();
const path = require('path');

let db;

function connectDB() {
    db = new sqlite3.Database(path.resolve(__dirname, '../../database.sqlite'), (err) => {
        if (err) {
            console.error('Could not connect to database', err);
        } else {
            console.log('Connected to SQLite database');
        }
    });
    module.exports.db = db;
}
module.exports = { connectDB, db };
