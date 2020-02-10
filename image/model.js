const Sequelize = require(`sequelize`);
// import db from `./db`;
const db = require(`../db`)

const Image = db.define( `Image`, {
  title: Sequelize.TEXT,
  url: Sequelize.TEXT,
});

module.exports = {Image};