const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const statusSchema = new Schema({
    content: String
})

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    status: [statusSchema]
});

module.exports = mongoose.model('User', userSchema);