var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import { URL } from "../config/URL.Config";
let clientCredentials;
const getAccessToken = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios.post(`${URL.token.getAuthToken}`, {
        clientId: clientCredentials.clientId,
        clientSecret: clientCredentials.clientSecret,
    });
    return response.data.data.access_token;
});
export const initializeClientCredentials = (clientId, clientSecret) => {
    clientCredentials = {
        clientId: clientId,
        clientSecret: clientSecret,
    };
};
export default getAccessToken;
