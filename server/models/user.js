const mongoose = require('mongoose');
const Schema = mongoose.Schema;\
const postSchema = require('./post');

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    credibility: Number,
    posts: [postSchema],
    archive: [postSchema]
});

module.exports = mongoose.model('User', userSchema);