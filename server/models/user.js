const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const postSchema = require('./post').schema;

const userSchema = new Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    lastName: {
        type: String, 
        required: true,
        trim: true,
        minlength: 2
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 5
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    createdAt: {
        type: Date,
        required: true
    },
    credibility: Number,
    posts: [postSchema],
    archive: [postSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('User', userSchema);