const express = require('express');
const { getalluser } = require('../controllers/user');

const router = express.Router();

router.get('/alluser',getalluser);

module.exports = router;