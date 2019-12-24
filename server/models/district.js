const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const neighborhoodSchema = require('./neighborhood').schema;
const hubSchema = require('./hub').schema;
const postSchema = require('./post').schema;

const districtSchema = new Schema({
    name: String,
    neighborhoods: [neighborhoodSchema],
    hubs: [hubSchema],
    posts: [postSchema]
});

module.exports = mongoose.model('District', districtSchema);