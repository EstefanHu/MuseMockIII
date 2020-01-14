const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = require('./user').schema;
const hubSchema = require('./hub').schema;
const neighborhoodSchema = require('./neighborhood').schema;
const sectorSchema = require('./sector').schema;
const citySchema = require('./city').schema;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    genre: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        requried: true,
        trim: true
    },
    credibility: {
        type: Number
    },
    user: userSchema,
    hub: hubSchema,
    neighborhood: neighborhoodSchema,
    sector: sectorSchema,
    city: citySchema
}, {
    timestamps: true
});

module.exports = mongoose.model('Post', postSchema);