const router = require('express').Router();

router.route('/').get((req, res) => {
  res.json({"hello": "World"});
});

module.exports = router;