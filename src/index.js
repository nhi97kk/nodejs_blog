const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars').engine
const path = require('path');
const app = express()
const port = 3000
const route = require('./routes')
const db = require('./config/db')

db.connect()

app.use(express.static(path.join(__dirname,'public')))
app.use(morgan('combined'))
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

app.engine('hbs', handlebars({
  extname: '.hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));


route(app)
 // log every request to the console

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})