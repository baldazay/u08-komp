const express = require('express');
const app = express();
const mongoose = require('mongoose');
const CountryModel = require('./models/Country');

app.use(express.json());

mongoose.connect('mongodb+srv://alisher:alisher@cluster0.c324gcx.mongodb.net/mern-app?retryWrites=true&w=majority', {
    useNewUrlParser: true
});


app.get('/', async (req, res) => {
    const country = new CountryModel({ countryName: 'Spain', cityName: 'Fuertaventura', visitedDate: '2018-01-01' });

    try {
        await country.save();
        res.send('country has been saved successfully');
    } catch (err) {
        console.log(err);
    }
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
