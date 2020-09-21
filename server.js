const express = require('express');
const exphbs = require('express-handlebars');
const bodyparser = require('body-parser');
const { static } = require('express');
const apiRoutes = require('./routes/api-routes');
const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;

// setting the engine to handle and view handlebars
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// express middleware to parse data correctly, and to serve static files
app.use(bodyparser.urlencoded({extended: true}))
app.use(bodyparser.json())
app.use(static('public'))

app.use('/api', apiRoutes)

db.sequelize.sync().then( () => {
  app.listen(PORT, () => {
    console.log(`App is now listening on port: ${PORT}`)
  })
})