import { contactPageData } from '../utils/ejsVariables.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contactPagePath = path.join(__dirname, '../views/pages/contact.ejs');



function getContactPage(req,res){
    res.render(contactPagePath,{contactPageData})
}

export { getContactPage };
