const {getRankingsData} = require('./dao.index');

let rankingsData;

(async()=>{
    rankingsData = await getRankingsData('iccRankings');
})();


async function getIccTestRankings(){
    if(!rankingsData) await getRankingsData();
    let iccTestRankings = rankingsData.iccRankings.iccTestRankings;
    return iccTestRankings;
}

async function getIccOdiRankings(){
    if(!rankingsData) await getRankingsData();
    let iccOdiRankings = rankingsData.iccRankings.iccOdiRankings;
    return iccOdiRankings;
}

async function getIccT20Rankings(){
    if(!rankingsData) await getRankingsData();
    let iccT20Rankings = rankingsData.iccRankings.iccT20Rankings;
    return iccT20Rankings;
}

module.exports = {
    getIccTestRankings,
    getIccOdiRankings,
    getIccT20Rankings
}
