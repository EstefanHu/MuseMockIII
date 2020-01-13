const router = require('express').Router();

router.route('/').get((req, res) => {
  res.json({"hello": "World"});
});

router.route('/createPublication').post((req, res) => {
  try {
    let data = req.body;
    console.log(data);
  } catch(err) {
    res.type('text').status(500).send('Error: ' + err);
  }
})

module.exports = router;