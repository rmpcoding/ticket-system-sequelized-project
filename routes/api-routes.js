const express = require('express');
const router = express.Router();
const db = require('../models');

// GET route
router.get('/tickets', (req, res) => {
    db.Ticket.findAll({}).then((tickets) => {
        let hbrs = {
            Ticket: tickets.map((ticket) => {
                return {
                    ticket_name: ticket.ticket_name,
                    completed: ticket.completed,
                };
            }),
        };
        res.render('index', hbrs);
    });
});

// GET route by id
router.get('/find/:id', (req, res) => {
    db.Ticket.findAll({
        where: {
            id: req.params.id,
        },
    }).then((ticket) => {
        res.json(ticket);
    });
});

// POST route
router.post('/tickets', (req, res) => {
    db.Ticket.create({
        ticket_name: req.body.ticket_name,
        completed: false,
    }).then((submitted) => {
        res.send(submitted);
    });
});

// DELETE route
router.delete('/delete/:id', (req, res) => {
    db.Ticket.destroy({
        where: {
            id: req.params.id,
        },
    }).then(() => {
        res.send('success');
    });
});

router.put('/update', (req, res) => {
    db.Ticket.update(
        {
            ticket_name: req.body.ticket_name,
        },
        {
            where: { id: req.body.id },
        }
    ).then((ticket) => {
        res.json(ticket);
    });
});

module.exports = router;
