import { profile } from 'console';
import path from 'path';
import { fileURLToPath } from 'url';
import { setComparisionProfileData } from '../dto/comparisionData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, '../views/pages/compare.ejs');


async function getComparePage(req,res){

    try {

    let player1 = req.query.player1;
    let player2 = req.query.player2;

    let comparisionProfileData = {
      profileData: await setComparisionProfileData(player1,player2)
    }
    res.render(filePath,{comparisionProfileData})
    }
    catch (error) {
        console.error("Error occured while passing data to the page",error);  
        res.status(500).send("Error loading comparision page."); 
    }
}   

export { getComparePage };
