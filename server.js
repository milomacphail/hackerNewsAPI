const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dotenv = require('dotenv').config();
const cors = require('cors');

const articles = require("./routes/api/articles");

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to MongoDB");
})

app.use('/api/articles', articles);


const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});