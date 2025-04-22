//? IMPORTING OUR PACKAGES to run on this file.
const express = require('express');

//? This is creating a "express" APP 
const app = express();
const path = require('path');
const port = 9000; 
const router = require('./app/routes/router')

app.listen(port, () => {
    console.log(`App is runnning on port ${port}`);
})

app.get('/callback', (req, res) => {
    res.sendFile(path.join(__dirname, 'callback.html'));
})
app.get('/dudee', (req, res) => {
    res.sendFile(path.join(__dirname, 'doodie.html'));
})

app.use('/api', router);