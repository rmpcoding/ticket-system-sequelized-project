const Sequelize = require('sequelize');
const mysql = require('mysql2');
// NOTE: Path is configured into dotenv temporarily but will be omitted after server.js file is up and running
require('dotenv').config({
    path:
        '/Users/robertsmac/Desktop/Make-Up-Homework/ticket-system-sequelized-project/.env',
});

// Option 1: Passing parameters separately
const sequelize = new Sequelize(
    process.env.DB,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: 'localhost',
        dialect: 'mysql',
    }
);

// Testing connection:
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });
