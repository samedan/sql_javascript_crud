const Sequelize = require('sequelize');
module.exports = new Sequelize('codegig', 'postgres', 'Fuckyahoo667', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});
