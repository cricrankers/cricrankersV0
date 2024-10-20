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


























// const {getDatabase} = require('../db/dbConnect');
// let database;
// let gotData = false;


// let rankingsData;

// async function getDatabase(){
   
//     if(!isConnected){
//         await connectDB();
//     }
   
//     if(!database){
//         throw new Error("Database is not connected yet");
//     }
//     return database;
// }

// async function getRankingsData(){

//     try {
//         database = await getDatabase();
//     } 
//     catch (error){
//         console.log(error);
//     }
    
//     let rankings = database.collection('rankings');

//     try {

//       rankingsData = await rankings.findOne({});
//       gotData = true;

//     } catch (error) {
//         console.error("error while getting rankingsData",error);
//     }
// }

// getRankingsData();

// async function returnRankingsData(){
//     if(!gotData){
//        await getRankingsData();
//     }
//     if(!rankingsData){
//         throw new Error("RankinigsData is empty");
//     }
//     return rankingsData;
// }


// module.exports = {
//     returnRankingsData
// }