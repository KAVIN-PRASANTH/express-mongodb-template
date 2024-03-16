const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(bodyParser.json());
function start(port) {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    })
}
function connect(url) {
    mongoose.connect(url);
    const db = mongoose.connection;
    db.on('error', (err) => {
        console.error('MongoDB connection error:', err);
    });

    db.on('open', () => {
        console.log('Connected to MongoDB Atlas');
    });
    return db;
}
module.exports = {
    start,
    connect
}