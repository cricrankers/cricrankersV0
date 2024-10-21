const path = require('path');
const profilePagePath = path.join(__dirname, '../views/pages/profile.ejs');


function getProfilePage(req,res){
    res.render(profilePagePath)
}

module.exports ={
    getProfilePage  
}