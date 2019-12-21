const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const neighborhoodSchema = new Schema({
    name: String,
    districtId: String
});

module.exports = mongoose.model('Neighborhood', neighborhoodSchema);