const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const hubSchema = require('./hub').schema;
const postSchema = require('./post').schema;

const districtSchema = new Schema({
    name: String,
    hubs: [hubSchema],
    posts: [postSchema]
});

module.exports = mongoose.model('District', districtSchema);