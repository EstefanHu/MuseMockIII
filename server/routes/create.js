const router = require('express').Router();

router.route('/').get((req, res) => {
  res.json({"hello": "World"});
});

router.route('/createPublication').get((req, res) => {
  try {
    res.json({"Hello": "fromCreatePublicaiton"});
  } catch(err) {
    res.type('text').status(500).send('Error: ' + err);
  }
})

module.exports = router;