const db = require('../config/database');

const createUser = (username, password, callback) => {
    db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password], callback);
};

const findUserByUsername = (username, callback) => {
    db.get('SELECT * FROM users WHERE username = ?', [username], callback);
};

module.exports = { createUser, findUserByUsername };
