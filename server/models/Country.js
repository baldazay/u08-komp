const mongoose = require('mongoose');

const CountrySchema = new mongoose.Schema({
    countryName: {
        type: String,
        required: true,
    },

    cityName: {
        type: String,
        required: true,
    },

    visitedDate: {
        type: Date,
        required: true,
    },
});

const Country = mongoose.model('Country', CountrySchema);
module.exports = Country;