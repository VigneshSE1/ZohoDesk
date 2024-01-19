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
	},
};
