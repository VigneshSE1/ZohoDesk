import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createRef, useEffect, useState } from "react";
import Rank from "./Rank/Rank";
import { getLeaderBoardByUserId, getSasToken, } from "../../api/LeaderBoardService";
import LeaderBoardStyles from "./LeaderBoard.styles";
import GlobalStyles from "../../common/styles/global.styles";
import { DomainEvents } from "../../enums/DomainEvents";
import useEvent from "../../utils/useEvents";
const LeaderBoard = (props) => {
    var _a, _b;
    const selectedUserRef = createRef();
    const scroll = () => {
        if (selectedUserRef.current) {
            selectedUserRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    };
    const [visible, setVisible] = useState(false);
    const [leaderBoardUsers, setLeaderBoardData] = useState(null);
    const userCreatedEvent = useEvent(DomainEvents.GETUSERINFO);
    const [sasToken, setSasToken] = useState("");
    useEffect(() => {
        getLeaderBoardByUserId(props.userId, props.applicationId)
            .then((responseData) => {
            setLeaderBoardData(responseData);
        })
            .catch((error) => {
            console.error("Error fetching data:", error);
        });
        getSasToken()
            .then((sasToken) => {
            setSasToken(sasToken);
        })
            .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, [userCreatedEvent]);
    const onScroll = (e) => {
        setVisible(e.target.scrollTop > 95);
    };
    return (_jsx(GlobalStyles.Scroll, { children: _jsxs(LeaderBoardStyles.Container, { className: "container", children: [_jsx(Rank, { sasToken: sasToken, leaderBoard: leaderBoardUsers, userId: props.userId }), (leaderBoardUsers === null || leaderBoardUsers === void 0 ? void 0 : leaderBoardUsers.Items) && ((_a = leaderBoardUsers.Items) === null || _a === void 0 ? void 0 : _a.length) > 3 ? (_jsxs("div", { className: "container", onScroll: onScroll, children: [_jsx("table", { className: "leader-board", children: _jsx("tbody", { children: (_b = leaderBoardUsers === null || leaderBoardUsers === void 0 ? void 0 : leaderBoardUsers.Items) === null || _b === void 0 ? void 0 : _b.map((leaderBoard, index) => {
                                    if (index >= 3) {
                                        return (_jsxs("tr", { ref: leaderBoard.userId == props.userId
                                                ? selectedUserRef
                                                : null, className: `${leaderBoard.userId == props.userId
                                                ? "selected-row"
                                                : ""}`, children: [_jsx("td", { className: "rank", role: "columnheader", children: _jsx("div", { className: "circle", children: leaderBoard.rank }) }), _jsx("td", { className: "avatar", role: "columnheader", children: _jsx("img", { className: `profile ${!(leaderBoard === null || leaderBoard === void 0 ? void 0 : leaderBoard.profileImageUrl) || !sasToken
                                                            ? "default-avatar"
                                                            : ""}`, alt: "", src: (leaderBoard === null || leaderBoard === void 0 ? void 0 : leaderBoard.profileImageUrl) + sasToken }) }), _jsx("td", { className: "avatar", role: "columnheader", children: _jsx("div", { children: leaderBoard.userName }) }), _jsx("td", { role: "columnheader", children: _jsx("div", { className: "score", children: _jsx("span", { children: leaderBoard.score }) }) })] }, leaderBoard._id));
                                    }
                                }) }) }), _jsx("div", { className: `scroll-btn ${visible ? "visible" : "invisible"}`, children: _jsxs("button", { onClick: scroll, children: [_jsx("img", { className: `profile ${!props.profileImageUrl || !sasToken ? "default-avatar" : ""}`, alt: "", src: props.profileImageUrl + sasToken }), _jsx("div", { children: "You're here" }), _jsx("svg", { width: "20px", height: "20px", viewBox: "0 0 24 24", fill: "#FFFFFF", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { d: "M11.1808 15.8297L6.54199 9.20285C5.89247 8.27496 6.55629 7 7.68892 7L16.3111 7C17.4437 7 18.1075 8.27496 17.458 9.20285L12.8192 15.8297C12.4211 16.3984 11.5789 16.3984 11.1808 15.8297Z", fill: "#FFFFFF" }) })] }) })] })) : (_jsx("div", { className: "not-found", children: "No users found" }))] }) }));
};
export default LeaderBoard;
