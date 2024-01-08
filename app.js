const express = require('express');
const pageRaute = require('./routes/pageRoute');

const app = express();

// Template Engine
app.set('view engine', 'ejs');
// Middlewares
app.use(express.static('public'));

// Routes
app.use('/', pageRaute);


const port = 3000;
app.listen(port, () => console.log(`App listening on port ${port}!`));
