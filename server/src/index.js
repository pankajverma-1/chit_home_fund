require('dotenv').config();
require('./db/db');
const express = require('express');
8;
const port = process.env.PORT || 5000;
const app = express();

app.listen(port, () => console.log(`app run port ${port}`));