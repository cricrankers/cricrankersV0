const express = require('express');
const Router = express.Router();
const {getRankings,getProfile} = require('../controllers/reqHandler')

Router.route("/rankings")
.get(getRankings);

Router.route("/profile")
.get(getProfile)

module.exports = Router;