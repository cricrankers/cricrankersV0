const { getIccTestRankings, getIccOdiRankings, getIccT20Rankings } = require('../dao/iccRankings');

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

async function setIccTestRankings() {
    return createRankingDTO(getIccTestRankings);
}

async function setIccOdiRankings() {
    return createRankingDTO(getIccOdiRankings);
}

async function setIccT20Rankings() {
    return createRankingDTO(getIccT20Rankings);
}

module.exports = {
    setIccTestRankings,
    setIccOdiRankings,
    setIccT20Rankings
};
