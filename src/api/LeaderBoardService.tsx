import AxiosServices from "./AxiosServices";
import { ILeaderBoard } from "../models/LeaderBoard";
import { URL } from "../config/URL.Config";

const instance = new AxiosServices().getServiceInstance();

export const getLocalLeaderBoardByUserId = async (
  userId: string,
  appId: string
) => {
  let leaderBoardResponse: ILeaderBoard;
  const res = await instance.post(URL.leaderBoard.getUserLeaderBoard, {
    userId: userId,
    appId: appId,
  });
  leaderBoardResponse = res.data.data;
  return leaderBoardResponse;
};

export const addPointsToUser = async (triggerGameAction: any) => {
  return await instance.post(
    URL.userCompletedGame.addPoints,
    triggerGameAction
  );
};

export const getPrivilegeStageInfo = async (applicationId: string) => {
  return await instance.get(URL.privilegeStage.getAll(applicationId));
};

export const getUserInfo = async (userId: string, applicationId: string) => {
  return await instance.get(URL.users.get(userId, applicationId));
};

export const getSasToken = async () => {
  let sasToken = await instance.get(URL.blobStorage.getSasToken, {});

  if (sasToken != null) {
    return sasToken["data"]["data"];
  }
  return "";
};
export const getApplicationDetail = async (applicationId: string) => {
  return await instance.get(URL.application.get(applicationId));
};
