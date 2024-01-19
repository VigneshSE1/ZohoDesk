var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { URL } from "../config/URL.Config";
import AxiosServices from "./AxiosServices";
const instance = new AxiosServices().getServiceInstance();
export const getAllRedeemRules = (applicationId) => __awaiter(void 0, void 0, void 0, function* () {
    let redeemRules;
    const res = yield instance.get(`${URL.redeem.getRedeemByApplication}${applicationId}`, {});
    redeemRules = res.data;
    return redeemRules;
});
export const getTransactionHistory = (userId, appId) => __awaiter(void 0, void 0, void 0, function* () {
    let walletProducts;
    const res = yield instance.post(URL.redeem.getMyOrders, {
        gamificationUserId: userId,
        gamificationApplicationId: appId,
    });
    walletProducts = res.data;
    return walletProducts;
});
export const getWalletBalance = (appId, userId) => __awaiter(void 0, void 0, void 0, function* () {
    let walletBalance;
    const res = yield instance.post(URL.redeem.getWalletBalance, {
        gamificationUserId: userId,
        gamificationApplicationId: appId,
    });
    walletBalance = res.data;
    return walletBalance;
});
export const getUserRewards = (userId, appId) => __awaiter(void 0, void 0, void 0, function* () {
    let userRewards;
    const res = yield instance.post(URL.leaderBoard.getUserRewards, {
        userId: userId,
        appId: appId,
    });
    userRewards = res.data;
    return userRewards;
});
export const getOrders = (userId, appId) => __awaiter(void 0, void 0, void 0, function* () {
    let userOrders;
    const res = yield instance.post(URL.order.getMyOrders, {
        gamificationUserId: userId,
        gamificationApplicationId: appId,
    });
    userOrders = res.data;
    return userOrders;
});
export const redeemProduct = (redeemableProduct) => __awaiter(void 0, void 0, void 0, function* () {
    return yield instance.post(URL.redeem.redeemProduct, redeemableProduct);
});
