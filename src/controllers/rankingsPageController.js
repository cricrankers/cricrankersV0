import { rankingPageData } from '../utils/ejsVariables.js';
import { setAllTimeTestRankings, setAllTimeOdiRankings, setAllTimeT20Rankings } from '../dto/allTimeRankings.js';
import { setIccTestRankings, setIccOdiRankings, setIccT20Rankings } from '../dto/iccRankings.js';
import ejs from 'ejs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rankingPagePath = path.join(__dirname, '../views/pages/rankings.ejs');
let rankingsData;
let renderedRankingPage;

async function getRankingsPage(req,res){

    try {
    if(renderedRankingPage || !renderedRankingPage){

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


export { getRankingsPage };

