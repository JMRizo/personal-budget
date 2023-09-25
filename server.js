// Budget API

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;
const fs = require('fs');

app.use(cors());
app.use('/', express.static('public'));

app.get('/budget', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error in server.js involving data.json');
            return;
        }
        res.send(JSON.parse(data));
    });
});

app.listen(port, () => {
    console.log(`API served at http://localhost:${port}`);
});