const express = require('express');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const { static } = require('express');
const apiRoutes = require('./routes/api-routes');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

console.log("is there any OUTPUT here!??!?!?!?!!?")

// setting the engine to handle and view handlebars
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// express middleware to parse data correctly, and to serve static files
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(static('public'))

app.use(apiRoutes)

// Sync our database to server, as well as dropping/creating table every time we restart our application
db.sequelize.sync({force: true}).then( () => {
  app.listen(PORT, () => {
    console.log(`App is now listening on port: ${PORT}`)
  })
})