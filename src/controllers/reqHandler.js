function getRankings(req,res){
    res.render("rankings.ejs");
}

function getProfile(req,res){
    res.render("profile.ejs")
}

function getAbout(req,res){
    res.render("about.ejs")
}

function getContact(req,res){
    res.render("contact.ejs")
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