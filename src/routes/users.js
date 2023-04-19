const express = require('express');
const router = express.Router();


/* 
  Notice that '/all' has to be before '/:id' 
  because otherwise it will always go to '/:id'
  with id = 'all'
*/

router.get('/all', (req, res) => {
  const userId = req.params.id;
  res.status(200);
  res.json({
    message: `Hello user ${userId}!`
  });
});

router.route('/:id')
  .get((req, res) => {
    const userId = req.params.id;
    res.status(200);
    res.json({
      message: `Hello user ${userId}!`
    });
  })
  .post((req, res) => {
    const userId = req.params.id;
    res.status(200);
    res.json({
      message: `Hello user ${userId}!`
    });
  })
// We can add more methods here

// We can also use param method to get the id
router.param('id', (req, res, next, id) => {
  console.log(`The id is ${id}`);
  next();
});

module.exports = router;