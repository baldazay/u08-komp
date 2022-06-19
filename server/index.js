const express = require('express');
const app = express();
const mongoose = require('mongoose');

const CountryModel = require('./models/Country');

const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://alisher:alisher@cluster0.c324gcx.mongodb.net/mern-app?retryWrites=true&w=majority', {
    useNewUrlParser: true
});


app.post("/insert", async (req, res) => {

    const countryName = req.body.countryName;
    const cityName = req.body.cityName;
    const date = req.body.date;

    const country = new CountryModel({ countryName: countryName, cityName: cityName, visitedDate: date });

    try {
        await country.save();
        res.send('country has been saved successfully');
    } catch (err) {
        console.log(err);
    }
});


app.get("/read", async (req, res) => {
    CountryModel.find({}, (err, result) => {
        if (err) {
            res.send(err);
        }

        res.send(result);
    })
});


app.put("/update", async (req, res) => {

    const newCountryName = req.body.newCountryName;
    const id = req.body.id;

    try {
        await CountryModel.findById(id, (err, updatedCountry) => {
            updatedCountry.countryName = newCountryName;
            updatedCountry.save();
            res.send("update");
        });
    } catch (err) {
        console.log(err);
    };
});


/* app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;

    await CountryModel.findByIdAndDelete(id).exec();
    res.send("deleted");
}); */

app.delete("/delete/:id", async (req, res) => {
    const id = req.params.id;
    try {
        await CountryModel.findByIdAndDelete(id).exec();
        res.send("deleted");
    } catch (err) {
        console.log(err);
    }
})


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
