import { getCompleteProfileData } from "../dao/profileData.js";

async function setCompleteProfileData(playerId) {
    let profileData = await getCompleteProfileData(playerId);
    profileData = profileData.playerProfiles[0];
    return profileData;
}

export {setCompleteProfileData}