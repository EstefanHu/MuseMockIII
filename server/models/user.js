const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = require('./post').schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        require: true,
        trim: true,
        minlength: 2
    },
    lastName: {
        type: String, 
        require: true,
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    password: {
        type: String,
        require: true,
        minlength: 8
    },
    createdAt: {
        type: Date,
        require: true
    },
    credibility: Number,
    posts: [postSchema],
    archive: [postScfhema]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);