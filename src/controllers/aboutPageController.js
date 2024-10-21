const {aboutPageData} = require('../utils/ejsVariables')
const path = require('path');
const aboutPagePath = path.join(__dirname, '../views/pages/about.ejs');

function getAboutPage(req,res){
    res.render(aboutPagePath,{aboutPageData})
}

module.exports ={  
    getAboutPage
}