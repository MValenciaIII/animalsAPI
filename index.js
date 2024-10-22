//? IMPORTING OUR PACKAGES to run on this file.
const express = require('express');

//? This is creating a "express" APP 
const app = express();
const port = 4000; 
const router = require('./app/routes/router')

app.listen(port, () => {
    console.log(`App is runnning on port ${port}`);
})

app.use('/api', router);