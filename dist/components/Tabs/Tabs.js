import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import LeaderBoard from "../LeaderBoard/LeaderBoard";
import Achievement from "../Achievements/Achievements";
import TabStyles from "./Tabs.styles";
const Tabs = (props) => {
    const handleClick = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    const [activeTab, setActiveTab] = useState(0);
    const tabNames = ["Achievement", "LeaderBoard"];
    const switchToTab = (tabIndex) => {
        setActiveTab(tabIndex);
    };
    return (_jsxs(TabStyles.TabContainer, { children: [_jsx(TabStyles.TabNav, { children: tabNames.map((tabName, index) => (_jsx(TabStyles.TabList, { className: activeTab === index ? "active" : "", onClick: () => handleClick(index), children: _jsx("a", { children: tabName }) }, tabName))) }), _jsx("div", { children: activeTab === 0 ? (_jsx(Achievement, { userId: props.userId, applicationId: props.applicationId, clientId: props.clientId, clientSecret: props.clientSecret, userScore: props.userScore, switchToTab: switchToTab })) : (_jsx(LeaderBoard, { userId: props.userId, applicationId: props.applicationId, profileImageUrl: props.profileImageUrl })) })] }));
};
export default Tabs;
