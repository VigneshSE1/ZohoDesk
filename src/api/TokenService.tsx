import axios from "axios";
import { URL } from "../config/URL.Config";
let clientCredentials: any;
const getAccessToken = async () => {
	const response = await axios.post(`${URL.token.getAuthToken}`, {
		clientId: clientCredentials.clientId,
		clientSecret: clientCredentials.clientSecret,
	});

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

export default getAccessToken;
