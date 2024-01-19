import { URL } from "../config/URL.Config";
import { IWallet } from "../models/Balance";
import { IRedeemRule } from "../models/redeemRule";
import { IWalletList } from "../models/walletList";
import AxiosServices from "./AxiosServices";

const instance = new AxiosServices().getServiceInstance();
export const getAllRedeemRules = async (applicationId: string) => {
	let redeemRules: IRedeemRule;
	const res = await instance.get(
		`${URL.redeem.getRedeemByApplication}${applicationId}`,
		{}
	);
	redeemRules = res.data;
	return redeemRules;
};

export const getTransactionHistory = async (userId: string, appId: string) => {
	let walletProducts: IWalletList;
	const res = await instance.post(URL.redeem.getMyOrders, {
		gamificationUserId: userId,
		gamificationApplicationId: appId,
	});
	walletProducts = res.data;
	return walletProducts;
};

export const getWalletBalance = async (appId: string, userId: string) => {
	let walletBalance: IWallet;
	const res = await instance.post(URL.redeem.getWalletBalance, {
		gamificationUserId: userId,
		gamificationApplicationId: appId,
	});
	walletBalance = res.data;
	return walletBalance;
};

export const getUserRewards = async (userId: string, appId: string) => {
	let userRewards: any;
	const res = await instance.post(URL.leaderBoard.getUserRewards, {
		userId: userId,
		appId: appId,
	});

	userRewards = res.data;
	return userRewards;
};

export const getOrders = async (userId: string, appId: string) => {
	let userOrders: any;
	const res = await instance.post(URL.order.getMyOrders, {
		gamificationUserId: userId,
		gamificationApplicationId: appId,
	});
	userOrders = res.data;
	return userOrders;
};

export const redeemProduct = async (redeemableProduct: any) => {
	return await instance.post(URL.redeem.redeemProduct, redeemableProduct);
};
