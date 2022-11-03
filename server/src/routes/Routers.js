const express = require('express');
const multer = require('multer');
const upload = multer();
const { hello, registerUser } = require('../controllers/Controllers');

const router = express.Router();

router.get('/', hello);
router.post('/register', upload.any(), registerUser);

module.exports = router;