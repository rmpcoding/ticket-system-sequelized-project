const Router = require('express').Router()
const Ticket = require('../models/ticket')

Router.get('/', (req, res) => {
  ticket = req.body.ticket_name;
  console.log(ticket)
  res.render('index')
})

module.exports = Router;