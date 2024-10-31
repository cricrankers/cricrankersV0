import { getProfileData } from "./dao.index.js";


async function getCompleteProfileData(playerId){
  let profileData = await getProfileData(playerId);
   return profileData;
}

export {getCompleteProfileData}