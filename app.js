const express = require('express');
const mongosses = require('mongoose');

const pageRoute = require('./routes/pageRoute');
const courseRoute = require('./routes/courseRoute');

const app = express();

// Connect to DB
mongosses.connect('mongodb://localhost:27017/smartedu-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => console.log('DB Connected Successfully'))

// Template Engine
app.set('view engine', 'ejs');
// Middlewares
app.use(express.static('public'));

// Routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);


const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
