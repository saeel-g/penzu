const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createUser, findUserByUsername } = require('../models/userModel');

// Sign Up
const signup = async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    createUser(username, hashedPassword, (err) => {
        if (err) return res.status(500).send('User already exists!');
        res.status(201).send('User created successfully');
    });
};

// Login
const login = (req, res) => {
    const { username, password } = req.body;

    findUserByUsername(username, async (err, user) => {
        if (err || !user) return res.status(400).send('User not found');

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) return res.status(401).send('Invalid credentials');

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
    });
};

module.exports = { signup, login };
