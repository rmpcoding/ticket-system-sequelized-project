const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/api/tickets', (req, res) => {
    db.Ticket.findAll({}).then(tickets => {
        console.log(tickets)
        res.send(tickets);
    });
});

module.exports = router;