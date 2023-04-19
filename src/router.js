/*
  This file will import each file on the routes folder and connect them to the server.
*/

const express = require('express');
const router = express.Router();

const base = require('./routes/base');
const users = require('./routes/users');
const files = require('./routes/files');

router.use('/', base);
router.use('/users', users);
router.use('/files', files);


module.exports = router;

