const express = require('express'); // We need to require the express module
const router = express.Router(); // We need to require this to create a route

//getting the about template from the server and rendering it.
router.get('/', (req, res) => {
    res.render('about');
});

module.exports = router;