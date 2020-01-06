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
        res.json({"posts": [
            {
                "id": "1",
                "title": "Hello World",
                "description": "whats up this is an example post",
                "genre": "Poem",
                "author": "Estefan",
                "credibility": 4927550
            },
            {
                "id": "2",
                "title": "A brave new world",
                "description": "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris. Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus vulputate vehicula. Donec lobortis risus a elit. Etiam tempor. Ut ullamcorper, ligula eu tempor congue, eros est euismod turpis, id tincidunt sapien risus a quam. Maecenas fermentum consequat mi. Donec fermentum. Pellentesque malesuada nulla a mi. Duis sapien sem, aliquet nec, commodo eget, consequat quis, neque. Aliquam faucibus, elit ut dictum aliquet, felis nisl adipiscing sapien, sed malesuada diam lacus eget erat. Cras mollis scelerisque nunc. Nullam arcu. Aliquam consequat. Curabitur augue lorem, dapibus quis, laoreet et, pretium ac, nisi. Aenean magna nisl, mollis quis, molestie eu, feugiat in, orci. In hac habitasse platea dictumst.",
                "genre": "Short Story",
                "author": "Justin",
                "credibility": 8763
            }]});
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