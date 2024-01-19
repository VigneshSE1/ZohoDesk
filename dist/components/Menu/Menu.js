import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import Tabs from "../Tabs/Tabs";
import { Info } from "../../common/icons/Info";
import MenuStyles from "./Menu.styles";
import { PopupService } from "../../api/PopupService";
import { getLeaderBoardByUserId, getSasToken, getUserInfo, } from "../../api/LeaderBoardService";
import { Bolt } from "../../common/icons/Bolt";
import { initializeClientCredentials } from "../../api/TokenService";
import GlobalStyles from "../../common/styles/global.styles";
import useEvent from "../../utils/useEvents";
import { DomainEvents } from "../../enums/DomainEvents";
const Menu = (props) => {
    initializeClientCredentials(props.clientId, props.clientSecret);
    const [showTabs, setShowTabs] = useState(false);
    const [sasToken, setSasToken] = useState("");
    let [userInfo, setUserInfo] = useState({});
    const handleToggleTabs = () => {
        setShowTabs(!showTabs);
    };
    const userCreatedEvent = useEvent(DomainEvents.GETUSERINFO);
    useEffect(() => {
        getUserInfo(props.userId, props.applicationId)
            .then((response) => {
            setUserInfo(response.data.data);
        })
            .catch((error) => {
            console.error("Error fetching user info:", error);
        });
        getSasToken()
            .then((sasToken) => {
            setSasToken(sasToken);
        })
            .catch((error) => {
            console.error("Error fetching data:", error);
        });
        getLeaderBoardByUserId(props.userId, props.applicationId)
            .then((responseData) => {
            const currentUser = responseData.Items.find((user) => user.userId === props.userId);
            if (currentUser) {
                setUserInfo((prevUserInfo) => (Object.assign(Object.assign({}, prevUserInfo), { score: currentUser.score })));
            }
        })
            .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, [props.userId, props.applicationId, userCreatedEvent]);
    return (_jsx(PopupService, { children: _jsx(GlobalStyles.DMFonts, { children: _jsxs(MenuStyles.Menu, { children: [_jsxs(MenuStyles.Header, { children: [_jsx("div", { children: _jsx(Info, { applicationId: props.applicationId }) }), _jsxs(MenuStyles.Wallet, { onClick: handleToggleTabs, children: [_jsx(Bolt, {}), _jsx("div", { children: (userInfo === null || userInfo === void 0 ? void 0 : userInfo.score) || 0 })] }), _jsxs(MenuStyles.ImgContainer, { onClick: handleToggleTabs, children: [_jsx("img", { src: `${userInfo === null || userInfo === void 0 ? void 0 : userInfo.profileImageUrl}`, className: `${!(userInfo === null || userInfo === void 0 ? void 0 : userInfo.profileImageUrl) ? "default-avatar" : ""}` }), _jsx("p", { children: userInfo === null || userInfo === void 0 ? void 0 : userInfo.userName })] })] }), showTabs && (_jsx("div", { className: "tabs", children: _jsx(Tabs, { clientId: props.clientId, clientSecret: props.clientId, userId: props.userId, applicationId: props.applicationId, userScore: userInfo.score, profileImageUrl: userInfo === null || userInfo === void 0 ? void 0 : userInfo.profileImageUrl }) }))] }) }) }));
};
export default Menu;
