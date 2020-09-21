const express = require('express');
const router = express.Router();
const db = require('../models');

// GET route
router.get('/api/tickets', (req, res) => {
    db.Ticket.findAll({}).then((tickets) => {
        // console.log(req.body)
        // console.log('======================================================================')
        // console.log(tickets)
        res.send(tickets);
        // res.render('index', tickets);
    });
});

// GET route by id
router.get('/api/find/:id', (req, res) => {
    db.Ticket.findAll({
        where: {
            id: req.params.id,
        },
    }).then((ticket) => {
        res.send(ticket);
    });
});

// POST route
router.post('/api/tickets', (req, res) => {
    db.Ticket.create({
        ticket_name: req.body.ticket_name,
        completed: false,
    }).then((submitted) => {
        res.send(submitted);
    });
});

// DELETE route
router.delete('/api/delete/:id', (req, res) => {
  db.Ticket.destroy({
    where: {
      id: req.params.id
    }
  }).then(() => {
    res.send('success')
  })
})


module.exports = router;
