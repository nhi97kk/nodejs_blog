const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars').engine
const path = require('path');
const app = express()
const port = 3000
const route = require('./routes')
const db = require('./config/db')
const methodOverride = require('method-override')


db.connect()

app.use(express.static(path.join(__dirname,'public')))
app.use(morgan('combined'))
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(methodOverride('_method'))

app.engine('hbs', handlebars({
  extname: '.hbs',
  helpers: {
    sum(a,b) { return a+b; },
}
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources','views'));


route(app)
 // log every request to the console

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})