import { env } from "../env/env";

export const URL = {
  redeem: {
    getRedeemByApplication:
      env.REACT_APP_REDEEM_BASEURL +
      "/api/RedemptionRule/getbyGamificationApplicationId/",
    getWalletBalance:
      env.REACT_APP_REDEEM_BASEURL + "/api/VirtualMoneyBalance/userbalance",
    getUserRewards:
      env.REACT_APP_GAMIFICATION_BASEURL + "/leaderBoard/userRewards",
    getMyOrders: env.REACT_APP_REDEEM_BASEURL + "/api/Order/GetByUser",
    redeemProduct:
      env.REACT_APP_REDEEM_BASEURL + "/api/RedemptionRule/redeemProduct",
  },
  leaderBoard: {
    getUserLeaderBoard: `${env.REACT_APP_GAMIFICATION_BASEURL}/leaderBoard/userLeaderBoard`,
    getUserRewards: `${env.REACT_APP_GAMIFICATION_BASEURL}/leaderBoard/userRewards`,
  },
  userGroup: {
    getUserGroupByAppId: () =>
      `${env.REACT_APP_GAMIFICATION_BASEURL}/v1/leaderBoard/UserRankinGroup`,
    getRankByUserGroupId: (pageNo: number, itemsPerPage: number) =>
      `${env.REACT_APP_GAMIFICATION_BASEURL}/v1/leaderBoard/byuserGroupId/${pageNo}/${itemsPerPage}`,
  },
  blobStorage: {
    getSasToken: `${env.REACT_APP_GAMIFICATION_BASEURL}/sasToken`,
  },
  order: {
    getMyOrders: `${env.REACT_APP_REDEEM_BASEURL}/api/Order/GetByUser`,
  },
  token: {
    getAuthToken: `${env.REACT_APP_GAMIFICATION_BASEURL}/v1/tokens/accessToken`,
  },
  userCompletedGame: {
    addPoints: `${env.REACT_APP_GAMIFICATION_BASEURL}/userCompletedGame/triggerGameAction`,
  },
  privilegeStage: {
    getAll: (applicationId: string) =>
      `${env.REACT_APP_GAMIFICATION_BASEURL}/privilegeStage/user/application/lookup/${applicationId}`,
  },
  users: {
    get: (userId: string, appId: string) =>
      `${env.REACT_APP_GAMIFICATION_BASEURL}/users/${userId}/${appId}`,
    update: (userId: string, appId: string) =>
      `${env.REACT_APP_GAMIFICATION_BASEURL}/v1/users/update/${userId}/application/${appId}`,
  },
  application: {
    get: (applicationId: string) =>
      `${env.REACT_APP_GAMIFICATION_BASEURL}/v1/applications/application/${applicationId}`,
  },
  avatar: {
    getavatar: () => `${env.REACT_APP_GAMIFICATION_BASEURL}/blobImages`,
    getUserExistence: (userName: string, userId: string) =>
      `${env.REACT_APP_GAMIFICATION_BASEURL}/v1/users/${userId}/checkUserName/${userName}`,
  },
};
