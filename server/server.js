'use strict';
const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

require('dotenv').config();

app.use(cors());
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}));

const DB_CONNECTION = 'MuseDB';
mongoose.connect(`mongodb://localhost/${DB_CONNECTION}`, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false });

mongoose.connection.once('open', () => {
    console.log(`connection has been established to ${DB_CONNECTION}`);
}).on('err', err => {
    console.log('Connection Error: ' + err);
});

// Might want to break routes into deligated router foulders useing router from require('express').Router()

app.get('/headerStories', (req,res) => {
    try {
        res.json({"posts": [{"id": "1", "title": "Hello World", "description": "whats up this is an example post"}, {"id": "2", "title": "Hello World", "description": "whats up this is an example post"}]});
    } catch(err) {
        res.type('text').status(500).send('Error: ' + err);
    }
});

app.get('/city', (req, res) => {
    try{

    } catch(err) {
        res.type('text').status(500).send('Error: ' + err);
    }
});

app.get('/developmentCity', (req, res) => {
    let count = 0;
    for (let i = 0; i < 5; i++) {
        
    }
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});