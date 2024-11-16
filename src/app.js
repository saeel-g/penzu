const express = require('express');
const { connectDB } = require('./config/database');
require('dotenv').config();

const app = express();

app.use(express.static("public"));
app.use(express.json());

connectDB();
const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Listening on localhost:${process.env.PORT}`);
})
