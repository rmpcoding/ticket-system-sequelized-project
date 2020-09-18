const Sequelize = require('sequelize');
const sequelize = require('../config/connection');

const Ticket = sequelize.define('ticket', {
  ticket_name: Sequelize.STRING,
  completed: Sequelize.BOOLEAN
},
{
  freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
})

Ticket.sync({force: true}); // Drops then creates table if exists {force: true}

module.exports = Ticket;