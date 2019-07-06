const express = require('express');
const app = express();
const parser = require('body-parser');
const path = require('path');
const cors = require('cors');
const connect = require('../db/connect.js');

app.use(cors());
app.use(parser.json());
app.use(
    parser.urlencoded({
        extended: true,
    })
)

app.use(express.static(path.join(__dirname + '/../dist')));



let port = process.env.PORT || 3008;

connect('mongodb://localhost:27017/boxscore')
    .then(() => app.listen(port, () => {
        console.log(`listening on port ${port}`);
    }))
    .catch(e => console.error(e))
