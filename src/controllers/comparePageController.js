const path = require('path');
const filePath = path.join(__dirname, '../views/pages/compare.ejs');

function getComparePage(req,res){

    try {

    let player1 = req.query.player1;
    let player2 = req.query.player2;

    let comparePageData = {
      msg:`Comparision of "${player1}" and "${player2}" will be displayed here`
    }
    
    res.render(filePath,{comparePageData})
    }
    catch (error) {
        console.error("Error occured while passing data to the page",error);  
        res.status(500).send("Error loading comparision page."); 
    }
}   

module.exports ={
    getComparePage
}