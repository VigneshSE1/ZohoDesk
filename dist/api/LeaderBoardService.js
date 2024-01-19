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
export const getLeaderBoardByUserId = (userId, appId) => __awaiter(void 0, void 0, void 0, function* () {
    let leaderBoardResponse;
    const res = yield instance.post(URL.leaderBoard.getUserLeaderBoard, {
        userId: userId,
        appId: appId,
    });
    leaderBoardResponse = res.data.data;
    return leaderBoardResponse;
});
export const addPointsToUser = (triggerGameAction) => __awaiter(void 0, void 0, void 0, function* () {
    return yield instance.post(URL.userCompletedGame.addPoints, triggerGameAction);
});
export const getPrivilegeStageInfo = (applicationId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield instance.get(URL.privilegeStage.getAll(applicationId));
});
export const getUserInfo = (userId, applicationId) => __awaiter(void 0, void 0, void 0, function* () {
    return yield instance.get(URL.users.get(userId, applicationId));
});
export const getSasToken = () => __awaiter(void 0, void 0, void 0, function* () {
    let sasToken = yield instance.get(URL.blobStorage.getSasToken, {});
    if (sasToken != null) {
        return sasToken["data"]["data"];
    }
    return "";
});
