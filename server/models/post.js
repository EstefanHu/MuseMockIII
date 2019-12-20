const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchem = new Schema({
    title: String,
    description: String,
    content: String,
    userId: String
});

module.exports = mongoose.model('Post', postSchem);