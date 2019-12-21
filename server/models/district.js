const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const districtSchema = new Schema({
    name: String,
    cityId: String
});

module.exports = mongoose.model('District', districtSchema);