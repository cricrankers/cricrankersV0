const {getRankingsData} = require('./dao.index');

let rankingsData;

(async()=>{
    rankingsData = await getRankingsData('allTimeRankings');
})();


async function getAllTimeTestRankings(){
    if(!rankingsData) await getRankingsData();
    let allTimeTestRankings = rankingsData.allTimeRankings.allTimeTestRankings;
    return allTimeTestRankings;
}

async function getAllTimeOdiRankings(){
    if(!rankingsData) await getRankingsData();
    let allTimeOdiRankings = rankingsData.allTimeRankings.allTimeOdiRankings;
    return allTimeOdiRankings;
}

async function getAllTimeT20Rankings(){
    if(!rankingsData) await getRankingsData();
    let allTimeT20Rankings = rankingsData.allTimeRankings.allTimeT20Rankings;
    return allTimeT20Rankings;
}

module.exports = {
    getAllTimeTestRankings,
    getAllTimeOdiRankings,
    getAllTimeT20Rankings
}

