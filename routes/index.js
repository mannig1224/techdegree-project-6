const express = require('express'); // We need to require the express module
const router = express.Router(); // We need to require this to create a route
const { projects } = require('../data.json'); // Saving the JSON data into an object called projects

// Rendering the index template, passing in the data from the JSON file
router.get('/', (req, res) => {
    res.render('index', { projects });
});

module.exports = router;