import { getRankingsData } from './dao.index.js';

let rankingsData;

(async()=>{
    rankingsData = await getRankingsData('allTimeRankings');
})();


async function getAllTimeTestRankings(){
    if(!rankingsData) rankingsData = await getRankingsData('allTimeRankings');
    let allTimeTestRankings = rankingsData.allTimeRankings.allTimeTestRankings;
    return allTimeTestRankings;
}

async function getAllTimeOdiRankings(){
    if(!rankingsData) rankingsData = await getRankingsData('allTimeRankings');
    let allTimeOdiRankings = rankingsData.allTimeRankings.allTimeOdiRankings;
    return allTimeOdiRankings;
}

async function getAllTimeT20Rankings(){
    if(!rankingsData) rankingsData = await getRankingsData('allTimeRankings');
    let allTimeT20Rankings = rankingsData.allTimeRankings.allTimeT20Rankings;
    return allTimeT20Rankings;
}

export { getAllTimeTestRankings, getAllTimeOdiRankings, getAllTimeT20Rankings };


