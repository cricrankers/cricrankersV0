const {contactPageData} = require('../utils/ejsVariables')
const path = require('path');
const contactPagePath = path.join(__dirname, '../views/pages/contact.ejs');


function getContactPage(req,res){
    res.render(contactPagePath,{contactPageData})
}

module.exports ={
    getContactPage
}