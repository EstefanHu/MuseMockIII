const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sectorSchema = require('./sector').schema;
const postSchema = require('./post').schema;

const citySchema = new Schema({
    name: String,
    sectors: [sectorSchema],
    posts: [postSchema]
});

module.exports = mongoose.model('City', citySchema);