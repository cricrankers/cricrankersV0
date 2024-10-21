const {rankingPageData} = require('../utils/ejsVariables')
const {setAllTimeTestRankings,setAllTimeOdiRankings,setAllTimeT20Rankings} = require('../dto/allTimeRankings')
const {setIccTestRankings,setIccOdiRankings,setIccT20Rankings} = require('../dto/iccRankings')
const ejs = require('ejs');
const path = require('path');

const rankingPagePath = path.join(__dirname, '../views/pages/rankings.ejs');

let rankingsData;
let renderedRankingPage;

async function getRankingsPage(req,res){

    try {
    if(!renderedRankingPage){

        rankingsData = {
            allTimeTestRankingsData: await setAllTimeTestRankings(),
            allTimeOdiRankingsData: await setAllTimeOdiRankings(),
            allTimeT20RankingsData: await setAllTimeT20Rankings(),

            iccTestRankingsData: await setIccTestRankings(),
            iccOdiRankingsData: await setIccOdiRankings(),
            iccT20RankingsData: await setIccT20Rankings()
        } 
        
         renderedRankingPage = await ejs.renderFile(rankingPagePath,{rankingPageData,rankingsData});
    }
    
    res.send(renderedRankingPage); 

    } 
    catch (error) {
      console.error("Error occured while passing data to the page",error);  
      res.status(500).send("Error loading rankings page.");
    }
     
}


module.exports ={
    getRankingsPage
}

