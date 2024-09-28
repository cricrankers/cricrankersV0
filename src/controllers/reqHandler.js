function getRankings(req,res){
    res.render("rankings.ejs");
}

function getProfile(req,res){
    res.render("profile.ejs")
}

module.exports ={
    getRankings,
    getProfile
}