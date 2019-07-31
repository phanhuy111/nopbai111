const express = require('express');
const router = express.Router();

const controller = require('../controllers/museum.controller');

// api/

router.get('/', controller.getMuseum);

module.exports = router;