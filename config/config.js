require('dotenv').config();

module.exports = {
  "development": {
    // "username": process.env.DB_USER,
    // "password": process.env.DB_PASS,
    // "database": process.env.DB,
    // "host": "127.0.0.1",
    "username": process.env.JAWSDB_USER,
    "password": process.env.JAWSDB_PASS,
    "database": process.env.JAWSDB_DB,
    "host": process.env.JAWSDB_HOST,
    // "use_env_variable": process.env.JAWSDB_URL,
    "port": 3306,
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    // "username": process.env.JAWSDB_USER,
    // "password": process.env.JAWSDB_PASS,
    // "database": process.env.JAWSDB_DB,
    // "host": process.env.JAWSDB_HOST,
    "use_env_variable": process.env.JAWSDB_URL,
    "dialect": "mysql"
  }
}
