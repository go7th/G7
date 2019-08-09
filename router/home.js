const express = require('express');
const Router = express.Router();

// GET /
Router.get('/', function(req, res) {
  res.render('./index');
});

module.exports = Router;
