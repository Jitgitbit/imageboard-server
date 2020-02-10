const express = require(`express`);
// import db from `./db`;
// import Image from `./image/model`;
const db = require(`./db`)
const Image = require(`./image/model`)
const Sequelize = require(`sequelize`);
const imageRouter = require(`./image/router`)

const app = express();

const port = process.env.PORT || 4000;

app.use(imageRouter);

app.listen(port, () => console.log(`The imageboard-server API is listening on port ${port}!`));