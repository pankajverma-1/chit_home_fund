require('dotenv').config();
require('./db/db');
const cors = require('cors');
const express = require('express');
const Route = require('./routes/Routers');
const bodyParser = require('body-parser');

const port = process.env.PORT || 5000;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/', Route);

app.listen(port, () => console.log(`app run port ${port}`));