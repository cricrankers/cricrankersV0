const {contactPageData} = require('../utils/ejsVariables')

function getContactPage(req,res){
    res.render("contact.ejs",{contactPageData})
}

module.exports ={
    getContactPage
}