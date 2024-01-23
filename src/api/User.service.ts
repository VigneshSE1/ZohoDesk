import { User, UserInput } from "../models/UserDetails";

import AxiosServices from "./AxiosServices";
import { URL } from "../config/URL.Config";

const instance = new AxiosServices().getServiceInstance();
export const updateUser = async (user: User, userInput: UserInput) => {
  const res = await instance.put(
    URL.users.update(userInput.userId, userInput.appId),
    user
  );
  return res.data.data;
};

export const getAvatarImages = async () => {
  const avatarImages = await instance.get(URL.avatar.getavatar());
  return avatarImages.data.data;
};

export const getUserExistence = async (userName: string, userId: string) => {
  const avatarImages = await instance.get(
    URL.avatar.getUserExistence(userName, userId)
  );
  return avatarImages.data.data;
};
