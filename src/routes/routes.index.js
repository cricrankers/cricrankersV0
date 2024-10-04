const express = require('express');
const Router = express.Router();
const {getRankings,getProfile,getAbout,getFAQs,getContact} = require('../controllers/reqHandler')

Router.route("/rankings")
.get(getRankings);

Router.route("/profile")
.get(getProfile)

Router.route("/about")
.get(getAbout)

Router.route("/contact")
.get(getContact)

Router.route("/FAQs")
.get(getFAQs)

module.exports = Router;