const { Router } = require('express')
const router = new Router()
const { Image } = require(`./model`);
const db = require(`../db`);

router.get('/image', (req, res, next) => {
  Image.findAll()
    .then(images => {
      res.send(images);
    })
    .catch(err => next(err))
});

router.post(`/image`, (req, res, next) => {
  console.log(req.body)
  Image.create(req.body)
    .then(image => {
      res.send(image);
    })
    .catch(err => next(err))
})

module.exports = router;