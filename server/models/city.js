const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sectorSchema = require('./sector').schema;

const citySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    sectors: [sectorSchema]
});

module.exports = mongoose.model('City', citySchema);