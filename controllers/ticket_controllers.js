const Router = require('express').Router()
const db = require('../models')

Router.get('/', (req, res) => {
  db.Ticket.findAll({}).then(function(dbTicket) {
    // We have access to the todos as an argument inside of the callback function
    res.json(dbTicket);
  });
})

module.exports = Router;