import { getProfileData } from "./dao.index.js";


async function getComparisionProfileData(playerId1,playerId2){
 
  let comparisionProfileData = {
    profileData1 : await getProfileData(playerId1),
    profileData2 : await getProfileData(playerId2)
  }
 
   return comparisionProfileData;
}

export {getComparisionProfileData}