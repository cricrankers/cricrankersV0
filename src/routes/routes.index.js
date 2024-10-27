const express = require('express');
const Router = express.Router();
const {getRankingsPage} = require('../controllers/rankingsPageController');
const {getProfilePage} = require('../controllers/profilePageController');
const {getAboutPage} = require('../controllers/aboutPageController');
const {getContactPage} = require('../controllers/contactPageController');
const {getFAQsPage} = require('../controllers/FAQsPageController');
const {getComparePage} = require('../controllers/comparePageController');

Router.route("/")
.get((req,res)=>{
    res.redirect("/rankings");
})

Router.route("/rankings")
.get(getRankingsPage)

Router.route("/profile")
.get(getProfilePage)

Router.route("/compare")
.get(getComparePage)

Router.route("/about")
.get(getAboutPage)

Router.route("/contact")
.get(getContactPage)

Router.route("/FAQs")
.get(getFAQsPage)

module.exports = Router;