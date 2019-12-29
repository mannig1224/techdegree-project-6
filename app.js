const express = require('express');
const data = require('./data.json').projects;
const http = require('http');

const app = express(); // starting our express app
app.set('view engine', 'pug'); // setting to use pug
app.use('/static', express.static('public')); // using the public folder at the address /static

// require all javascript routes
const homeRoute = require('./routes');
const aboutRoute = require('./routes/about');
//const projectsRoute = require('./routes/projects');


// use routes in pair with there javascript
app.use(homeRoute);
app.use('/about', aboutRoute);
//app.use('/projects', projectsRoute);


app.listen(3000, () => {
    console.log('The application is running on localhost:3000!');
});