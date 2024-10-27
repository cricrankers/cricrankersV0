const path = require('path');
const filePath = path.join(__dirname, '../views/pages/profile.ejs');

function getProfilePage(req,res){

    try {
        
    let player = req.query.player;

    let profilePageData = {
      msg:`Profile of "${player}" will be displayed here`
    }
    
    res.render(filePath,{profilePageData})
    }
    catch (error) {
        console.error("Error occured while passing data to the page",error);  
        res.status(500).send("Error loading profile page."); 
    }
}   

module.exports ={
    getProfilePage
}