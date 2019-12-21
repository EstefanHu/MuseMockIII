const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const hubSchema = new Schema({
    name: String,
    districtId: String,
    neighborhoodId: String
});

module.exports = mongoose.model('Hub', hubSchema);