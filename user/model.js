const Sequelize = require('sequelize')
const sequelize = require('../db')

const User = sequelize.define('User', {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
    // unique: true   //your choice, can be false too
  },
}, {
  timestamps: false,
  tableName: 'Users'
})
module.exports = User