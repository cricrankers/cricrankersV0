import { client } from '../db/dbConnect.js';

const database = client.db('cricrankers');
const rankingsCollection = database.collection('rankings');
const profileCollection = database.collection('profiles')

let rankingsData;
async function getRankingsData(rankingsType){
    try 
    {   
       if(!rankingsData){
        rankingsData = await rankingsCollection.findOne({type: rankingsType});
       }
       return rankingsData;
    } 
    catch (error) {
       console.error("Some error occuered while getting rankingsData ",error); 
    }
}

async function getProfileData(playerId) {
    try {
        
        let profileData = await profileCollection.findOne(
            { "playerProfiles.id": playerId },
            { projection: { playerProfiles: { $elemMatch: { id: playerId } } } }
          ); 
        return profileData;

    } catch (error) {
        console.error("Some error occurred while getting profileData:", error); 
    }
}

export { rankingsCollection, getRankingsData, getProfileData };

