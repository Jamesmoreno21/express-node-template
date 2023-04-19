const express = require('express');
const router = express.Router();

router.get('/download', (req, res) => {
  res.status(200);
  // To download a file from the server
  res.download('src/download-example.txt');
});




module.exports = router;