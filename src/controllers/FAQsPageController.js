const path = require('path');
const faqPagePath = path.join(__dirname, '../views/pages/faq.ejs');

function getFAQsPage(req,res){
    res.render(faqPagePath)
}

module.exports ={
    getFAQsPage
}