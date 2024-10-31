import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const faqPagePath = path.join(__dirname, '../views/pages/faq.ejs');


function getFAQsPage(req,res){
    res.render(faqPagePath)
}

export { getFAQsPage}