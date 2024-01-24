import { IClientData } from "../models/ClientData";

export const setClientCredentials = async (clientData: IClientData) => {
  return ZOHODESK.set("database", {
    key: "001",
    value: clientData,
    queriableValue: "Reward_Rally",
  });
};
export const getClientCredentials = async () => {
  return ZOHODESK.get("database", { queriableValue: "Reward_Rally" });
};
