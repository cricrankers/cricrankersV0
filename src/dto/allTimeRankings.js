const { getAllTimeTestRankings, getAllTimeOdiRankings, getAllTimeT20Rankings } = require('../dao/allTimeRankings');

async function createRankingDTO(getRankingsFunction) {
    let rankingsDTO = {};
    let rankings = await getRankingsFunction();

    rankingsDTO.rank1 = rankings[0];
    rankingsDTO.rank2 = rankings[1];
    rankingsDTO.rank3 = rankings[2];
    rankingsDTO.rank4 = rankings[3];
    rankingsDTO.rank5 = rankings[4];

    return rankingsDTO;
}

async function setAllTimeTestRankings() {
    return createRankingDTO(getAllTimeTestRankings);
}

async function setAllTimeOdiRankings() {
    return createRankingDTO(getAllTimeOdiRankings);
}

async function setAllTimeT20Rankings() {
    return createRankingDTO(getAllTimeT20Rankings);
}

module.exports = {
    setAllTimeTestRankings,
    setAllTimeOdiRankings,
    setAllTimeT20Rankings
};
