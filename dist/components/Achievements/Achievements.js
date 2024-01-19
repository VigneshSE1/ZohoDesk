import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import Progress from "../ProgressBar/ProgressBar";
import Coin from "../Coin/Coin";
import Redeem from "../Redeem/Redeem";
import UserReward from "../UserReward/UserReward";
import Order from "../Order/Order";
import { getUserRewards } from "../../api/RedeemService";
import AchievementStyles from "./Achievements.styles";
import GlobalStyles from "../../common/styles/global.styles";
import { env } from "../../env/env";
import useEvent from "../../utils/useEvents";
import { DomainEvents } from "../../enums/DomainEvents";
const Achievement = (props) => {
    const [progressAndUserRewards, setUserReward] = useState({});
    const [isLoading, setLoader] = useState(true);
    const userCreatedEvent = useEvent(DomainEvents.GETUSERINFO);
    useEffect(() => {
        getUserRewards(props.userId, props.applicationId)
            .then((responseData) => {
            setUserReward(responseData.data);
            setLoader(false);
        })
            .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, [userCreatedEvent]);
    return (_jsx(GlobalStyles.Scroll, { children: _jsxs(AchievementStyles.Container, { children: [_jsx(Progress, { progress: progressAndUserRewards.progress, userScore: props.userScore, level: progressAndUserRewards.level, nextReward: progressAndUserRewards.nextReward, switchToTab: props.switchToTab, previousReward: progressAndUserRewards.previousReward }), env.isRedeemEnabled && (_jsxs("div", { className: "card", children: [_jsx(Coin, { userId: props.userId, applicationId: props.applicationId }), _jsx(Redeem, { userId: props.userId, applicationId: props.applicationId }), _jsx(Order, { userId: props.userId, applicationId: props.applicationId })] })), _jsx(UserReward, { userRewards: progressAndUserRewards.userRewards, isLoading: isLoading })] }) }));
};
export default Achievement;
