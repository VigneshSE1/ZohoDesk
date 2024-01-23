import AxiosServices from "./AxiosServices";
import { URL } from "../config/URL.Config";

const instance = new AxiosServices().getServiceInstance();
export const getUserGroupByAppId = async (
	userId: string,
	applicationId: string
) => {
	let userGrpList: any[];
	const res = await instance.post(URL.userGroup.getUserGroupByAppId(), {
		userId: userId,
		applicationId: applicationId,
	});
	userGrpList = res.data.data;

	return userGrpList;
};

export const getRankByUserGroupId = async (
	userGrpId: string,
	userId: string,
	appId: string
) => {
	let globalLeaderBoardUsers: any[];
	const res = await instance.post(URL.userGroup.getRankByUserGroupId(1, 10), {
		userGroupId: userGrpId,
		userId: userId,
		applicationId: appId,
	});
	globalLeaderBoardUsers = res.data.data;
	return globalLeaderBoardUsers;
};
