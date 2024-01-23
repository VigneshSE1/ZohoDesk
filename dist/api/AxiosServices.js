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
import * as authStorage from "./Auth.service";
import { getAccessToken } from "./TokenService";
export default class AxiosServices {
    constructor() {
        this.axiosInstance = axios.create();
    }
    createAuthToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const accessToken = yield getAccessToken();
            authStorage.setAuthToken(accessToken);
            return accessToken;
        });
    }
    getServiceInstance() {
        return this.axiosInstance;
    }
}
