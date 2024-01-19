import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import React, { useEffect, useState } from "react";
import { getSasToken } from "../../api/LeaderBoardService";
import RewardStyles from "./UserReward.styles";
const UserReward = (props) => {
    const countOfRewards = props.userRewards
        ? Object.keys(props.userRewards).reduce((count, rewardType) => count + props.userRewards[rewardType].length, 0)
        : 0;
    const [sasToken, setSasToken] = useState("");
    useEffect(() => {
        getSasToken()
            .then((sasToken) => {
            setSasToken(sasToken);
        })
            .catch((error) => {
            console.error("Error fetching data:", error);
        });
    });
    return (_jsxs(RewardStyles.RewardContainer, { children: [_jsx("div", { className: "labels", children: _jsxs("h3", { children: ["Badge board (", countOfRewards || 0, ")"] }) }), !props.isLoading &&
                props.userRewards &&
                Object.keys(props.userRewards).length ? (_jsx("div", { className: "user-rewards", children: Object.keys(props.userRewards).map((rewardType, i) => (_jsx(React.Fragment, { children: props.userRewards[rewardType].map((reward, j) => (_jsxs("div", { className: `reward ${(i * props.userRewards[rewardType].length + j) % 6 === 0
                            ? "color1"
                            : (i * props.userRewards[rewardType].length + j) % 6 === 1
                                ? "color2"
                                : (i * props.userRewards[rewardType].length + j) % 6 === 2
                                    ? "color3"
                                    : (i * props.userRewards[rewardType].length + j) % 6 === 3
                                        ? "color4"
                                        : (i * props.userRewards[rewardType].length + j) % 6 === 4
                                            ? "color5"
                                            : "color6"} ${!reward.attained ? "attained" : ""}`, title: reward.value || "", children: [_jsx("div", { className: "reward-border", children: _jsx("img", { src: reward.sourceImgUrl + sasToken || "", alt: "", className: !reward.sourceImgUrl || !sasToken
                                        ? "default-reward"
                                        : "" }) }), _jsx("div", { className: "reward-content", children: _jsx("div", { className: "reward-name", children: reward.value
                                        ? reward.value.charAt(0).toUpperCase() +
                                            reward.value.slice(1)
                                        : "" }) })] }, j))) }, i))) })) : props.isLoading ? (_jsx("div", { className: "progamification-spinner" })) : (_jsx("div", { className: "msg", children: _jsx("h4", { children: "No Badges" }) }))] }));
};
export default UserReward;
