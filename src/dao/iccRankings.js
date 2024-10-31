import { getRankingsData } from './dao.index.js';

let rankingsData;

(async()=>{
    rankingsData = await getRankingsData('iccRankings');
})();


async function getIccTestRankings(){
    if(!rankingsData) rankingsData = await getRankingsData('iccRankings');
    let iccTestRankings = rankingsData.iccRankings.iccTestRankings;
    return iccTestRankings;
}

async function getIccOdiRankings(){
    if(!rankingsData) rankingsData = await getRankingsData('iccRankings');
    let iccOdiRankings = rankingsData.iccRankings.iccOdiRankings;
    return iccOdiRankings;
}

async function getIccT20Rankings(){
    if(!rankingsData) rankingsData = await getRankingsData('iccRankings');
    let iccT20Rankings = rankingsData.iccRankings.iccT20Rankings;
    return iccT20Rankings;
}

export { getIccTestRankings, getIccOdiRankings, getIccT20Rankings };

