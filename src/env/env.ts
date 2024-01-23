// export const env = {
//   REACT_APP_REDEEM_BASEURL: "http://localhost:3000",
//   REACT_APP_GAMIFICATION_BASEURL: "http://localhost:3000",
//   isRedeemEnabled: false,
// };

// export const env = {
// 	REACT_APP_REDEEM_BASEURL: "#{redeemApi}#",
// 	REACT_APP_GAMIFICATION_BASEURL: "#{gamificationApi}#",
// 	BLOB_URL: "#{blobUrl}#",
// 	CONTAINER_PATH: "#{containerPath}#",
// };

// for development
// export const env = {
// 	REACT_APP_REDEEM_BASEURL:
// 		"https://stage-gamificationredemption.theproindia.com",
// 	REACT_APP_GAMIFICATION_BASEURL:
// 		"https://stage-gamificationapi.theproindia.com",
// 	BLOB_URL: "https://stagegamificationui.blob.core.windows.net",
// 	CONTAINER_PATH: "sandbox-assets",
// };

// for Testing
export const env = {
  REACT_APP_REDEEM_BASEURL:
    "https://stage-gamificationredemption.theproindia.com",
  REACT_APP_GAMIFICATION_BASEURL: "http://localhost:3000",
  BLOB_URL: "https://stagegamificationui.blob.core.windows.net",
  CONTAINER_PATH: "sandbox-assets",
  isRedeemEnabled: true,
};
