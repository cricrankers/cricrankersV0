const {contactPageData,aboutPageData,rankingPageData} = require('../utils/ejsVariables')

function getRankings(req,res){
    res.render("rankings.ejs",{rankingPageData});
}

function getProfile(req,res){
    res.render("profile.ejs")
}

function getAbout(req,res){
    res.render("about.ejs",{aboutPageData})
}

function getContact(req,res){
    res.render("contact.ejs",{contactPageData})
}

function getFAQs(req,res){
    res.render("faq.ejs")
}
module.exports ={
    getRankings,
    getProfile,
    getAbout,
    getContact,
    getFAQs
}