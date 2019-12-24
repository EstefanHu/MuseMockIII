const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const districtSchema = require('./district').schema;
const postSchema = require('./post').schema;

const citySchema = new Schema({
    name: String,
    districts: [districtSchema],
    posts: [postSchema]
});

module.exports = mongoose.model('City', citySchema);