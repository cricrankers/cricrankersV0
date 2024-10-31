import path from 'path';
import { fileURLToPath } from 'url';
import { setCompleteProfileData } from '../dto/profileData.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const filePath = path.join(__dirname, '../views/pages/profile.ejs');

async function getProfilePage(req,res){

    try {

    let playerId = req.query.player;

    let profileData = {
        data: await setCompleteProfileData(playerId)
    }
    res.render(filePath,{profileData})
    }
    catch (error) {
        console.error("Error occured while passing data to the page",error);  
        res.status(500).send("Error loading profile page."); 
    }
}   

export { getProfilePage };
