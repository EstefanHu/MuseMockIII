const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = require('./user').schema;
const postSchema = require('./post').schema;

const hubSchema = new Schema({
    name: String,
    admins: [userSchema],
    members: [userSchema],
    posts: [postSchema]
});

module.exports = mongoose.model('Hub', hubSchema);