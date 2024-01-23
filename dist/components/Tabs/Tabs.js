var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import TabStyles from "./Tabs.styles";
import { getAccessToken } from "../../api/TokenService";
const Tabs = (props) => {
    const handleClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    const [activeTab, setActiveTab] = useState(0);
    const [token, setToken] = useState("");
    const tabNames = ["Achievement", "LeaderBoard"];
    const switchToTab = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    const getToken = () => __awaiter(void 0, void 0, void 0, function* () {
        let token = yield getAccessToken();
        setToken(token);
    });
    useEffect(() => {
        getToken();
    });
    return (_jsxs(TabStyles.TabContainer, { children: [_jsx(TabStyles.TabNav, { children: tabNames.map((tabName, index) => (_jsx(TabStyles.TabList, { className: activeTab === index ? "active" : "", onClick: () => handleClick(index), children: _jsx("a", { children: tabName }) }, tabName))) }), _jsx("div", { children: activeTab === 0 ? "Achivements Tab" : "LeaderBoard Tab" })] }));
};
export default Tabs;
