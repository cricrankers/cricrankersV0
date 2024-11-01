import { getComparisionProfileData } from "../dao/comparisionData.js";

async function setComparisionProfileData(playerId1,playerId2) {
    let comparisionProfileData = await getComparisionProfileData(playerId1,playerId2);
    comparisionProfileData.profileData1 = comparisionProfileData.profileData1.playerProfiles[0];
    comparisionProfileData.profileData2 = comparisionProfileData.profileData2.playerProfiles[0];
    return comparisionProfileData;
}

export {setComparisionProfileData}