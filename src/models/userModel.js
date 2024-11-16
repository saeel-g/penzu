// TODO Use ORM: https://sequelize.org/
const { db } = require('../config/database');

// Create Users table if it doesn’t exist
db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL
        )
    `);
});``

const createUser = (username, password, callback) => {
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], callback);
};

const findUserByUsername = (username, callback) => {
    db.get('SELECT * FROM users WHERE username = ?', [username], callback);
};

module.exports = { createUser, findUserByUsername };
