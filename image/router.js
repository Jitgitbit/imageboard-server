const { Router } = require('express')
const router = new Router()
const { Image } = require(`./model`);
const db = require(`../db`);
const auth = require(`../auth/middleware`)

router.get('/image', (req, res, next) => {
  Image.findAll()
    .then(images => {
      res.send(images);
    })
    .catch(err => next(err))
});

router.post(`/image`, auth, (req, res, next) => {
  console.log(req.body)
  Image.create(req.body)
    .then(image => {
      res.send(image);
    })
    .catch(err => next(err))
})

module.exports = router;
