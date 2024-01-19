import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import { RightArrow } from "../../common/icons/RightArrow";
import ProgressStyles from "./ProgressBar.styles";
const Progress = (props) => {
    var _a, _b;
    const switchToLeaderBoard = () => {
        props.switchToTab(1);
    };
    const [level, setLevel] = useState(1);
    const [progress, setProgress] = useState("0");
    useEffect(() => {
        var _a, _b;
        if (!((_a = props === null || props === void 0 ? void 0 : props.nextReward) === null || _a === void 0 ? void 0 : _a._id) && ((_b = props === null || props === void 0 ? void 0 : props.previousReward) === null || _b === void 0 ? void 0 : _b._id)) {
            setLevel(props.level);
            setProgress("100");
        }
        else {
            setLevel((props.level || 0) + 1);
            setProgress(props.progress);
        }
    }, [props.progress]);
    return (_jsxs(ProgressStyles.ProProgressBar, { children: [_jsxs(ProgressStyles.ProgresBarHeader, { children: [_jsx(ProgressStyles.ProgressHeading, { children: "Level " + level }), _jsxs("div", { children: [props.userScore || 0, ((_a = props === null || props === void 0 ? void 0 : props.nextReward) === null || _a === void 0 ? void 0 : _a.points)
                                ? `/ ${(_b = props === null || props === void 0 ? void 0 : props.nextReward) === null || _b === void 0 ? void 0 : _b.points} points`
                                : ``] })] }), _jsx(ProgressBar, { completed: +progress, animateOnRender: true, maxCompleted: 100, bgColor: "#F5DA48", isLabelVisible: false }), _jsxs(ProgressStyles.ProgressBarFooter, { children: [_jsxs("div", { className: "leaderBoard", onClick: switchToLeaderBoard, children: [_jsx("p", { children: "View leaderboard" }), _jsx(RightArrow, { height: "", color: "#807f7f" })] }), _jsxs("div", { children: [+progress || 0, "% completed"] })] })] }));
};
export default Progress;
