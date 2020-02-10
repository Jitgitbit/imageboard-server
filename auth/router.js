const { Router } = require("express");
const { toJWT, toData } = require("./jwt");
const db = require("../db");
const Sequelize = require("sequelize");

const router = new Router();

// // User model
// const User = db.define("User", {
//   email: Sequelize.TEXT,
//   password: Sequelize.TEXT
// });
//CRUD CREATE
// router.post("/login", (request, response, next) => {
//   const { email, password } = request.body;
//   User.create({
//     email: email,
//     password: password
//   })
//     .then(user => {
//       if (!email || !password) {
//         response.status(400).send({
//           message: "Please supply a valid email and password"
//         });
//       } else {
//         response.send({
//           jwt: toJWT({ userId: 1 })
//         });
//       }
//     })
//     .catch(error => next(error));
// });

router.get('/secret-endpoint', (req, res) => {
  const auth = req.headers.authorization && req.headers.authorization.split(' ')
  if (auth && auth[0] === 'Bearer' && auth[1]) {
    try {
      const data = toData(auth[1])
      res.send({
        message: 'Thanks for visiting the secret endpoint.',
        data
      })
    }
    catch(error) {
      res.status(400).send({
        message: `Error ${error.name}: ${error.message}`,
      })
    }
  }
  else {
    res.status(401).send({
      message: 'Please supply some valid credentials'
    })
  }
})

module.exports = router
