import express from 'express';
import { getRankingsPage } from '../controllers/rankingsPageController.js';
import { getProfilePage } from '../controllers/profilePageController.js';
import { getAboutPage } from '../controllers/aboutPageController.js';
import { getContactPage } from '../controllers/contactPageController.js';
import { getFAQsPage } from '../controllers/FAQsPageController.js';
import { getComparePage } from '../controllers/comparePageController.js';

const Router = express.Router();


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

export default Router;
