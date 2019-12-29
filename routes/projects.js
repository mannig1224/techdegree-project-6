const express = require('express');
const router = express.Router();
const { projects } = require('../data.json');

// requesting the id sent from index.pug
router.get('/', (req, res) => {

  const projectData; // this holds nothing yet but we will want to render the view with the given data, atleast thats what i thnk
  res.render('project', projectData);
});



module.exports = router;