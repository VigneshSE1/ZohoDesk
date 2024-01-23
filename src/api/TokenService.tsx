import axios from "axios";
import { URL } from "../config/URL.Config";
let clientCredentials: any;

export const getAccessToken = async () => {
  const response = await axios.post(`${URL.token.getAuthToken}`, {
    clientId: clientCredentials.clientId,
    clientSecret: clientCredentials.clientSecret,
  });
  console.log(response.data.data.access_token);
  return response.data.data.access_token;
};

export const initializeClientCredentials = (
  clientId: string,
  clientSecret: string
) => {
  clientCredentials = {
    clientId: clientId,
    clientSecret: clientSecret,
  };
};
