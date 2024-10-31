import { aboutPageData } from '../utils/ejsVariables.js';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const aboutPagePath = path.join(__dirname, '../views/pages/about.ejs');


function getAboutPage(req,res){
    res.render(aboutPagePath,{aboutPageData})
}

export { getAboutPage };
