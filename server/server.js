'use strict';
const express = requir('express');
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
