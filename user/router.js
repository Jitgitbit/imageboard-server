const { Router } = require("express");
const { toJWT, toData } = require("../auth/jwt");
const db = require("../db");
const Sequelize = require("sequelize");

const router = new Router();

router.post("/login", (request, response, next) => {
  const { email, password } = request.body;
  User.create({
    email: email,
    password: password
  })
    .then(user => {
      if (!email || !password) {
        response.status(400).send({
          message: "Please supply a valid email and password"
        });
      } else {
        response.send({
          jwt: toJWT({ userId: 1 })
        });
      }
    })
    .catch(error => next(error));
});

module.exports = router
