const express = require('express');
const router = express.Router();
const db = require('../models');

// GET route
router.get('/', (req, res) => {
    db.Ticket.findAll({}).then((tickets) => {
        let hbrs = {
            // mapping out object because handlebars forbids accessing prototype properties
            Ticket: tickets.map((ticket) => {
                return {
                    id: ticket.id,
                    ticket_name: ticket.ticket_name,
                    completed: ticket.completed,
                };
            }),
        };
        res.render('index', hbrs);
    });
});

// POST route
router.post('/api/tickets', (req, res) => {
    db.Ticket.create({
        ticket_name: req.body.ticket_name,
        completed: false,
    }).then((ticket) => {
        res.json(ticket)
    });
});


// UPDATE route
router.put('/api/update', (req, res) => {
    db.Ticket.update(
        {
            completed: true
        },
        {
            where: { 
                id: parseInt(req.body.id)
            },
        }
    ).then((ticket) => {
        res.json(ticket);
    });
});

// DELETE route
router.delete('/api/delete/:id', (req, res) => {
    db.Ticket.destroy({
        where: {
            id: parseInt(req.params.id),
        },
    }).then((ticket) => {
        res.json(ticket);
    });
});

module.exports = router;