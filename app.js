'use strict'

const express = require('express');
const app = express();

// tell express where our files are
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.listen(3000)
