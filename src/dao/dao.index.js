const {client} = require('../db/dbConnect');

const database = client.db('cricrankers');
const rankingsCollection = database.collection('rankings');


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


module.exports = {
    rankingsCollection,
    getRankingsData
}
