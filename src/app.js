const express = require('express');
const authRoutes = require('./routes/authRoutes');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(express.json());
app.use('/auth', authRoutes);

module.exports = app;
