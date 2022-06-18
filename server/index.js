const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(express.json());

mongoose.connect('mongodb+srv://alisher:alisher@cluster0.c324gcx.mongodb.net/mern-app?retryWrites=true&w=majority', {
    useNewUrlParser: true
})


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
