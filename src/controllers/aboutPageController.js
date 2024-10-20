const {aboutPageData} = require('../utils/ejsVariables')

function getAboutPage(req,res){
    res.render("about.ejs",{aboutPageData})
}

module.exports ={  
    getAboutPage
}