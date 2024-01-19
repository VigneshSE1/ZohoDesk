import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { getPrivilegeStageInfo, getSasToken, } from "../../api/LeaderBoardService";
import RewardInfoStyles from "./RewardsInfo.styles";
import { usePopup } from "../../api/PopupService";
const PrivilegeStage = (props) => {
    const [privilegeInfo, setPrivilegeStage] = useState([]);
    const [sasToken, setSasToken] = useState("");
    const { closePopup } = usePopup();
    const handleClosePopup = () => {
        closePopup();
    };
    useEffect(() => {
        getPrivilegeStageInfo(props.applicationId)
            .then((responseData) => {
            var _a;
            setPrivilegeStage((_a = responseData === null || responseData === void 0 ? void 0 : responseData.data) === null || _a === void 0 ? void 0 : _a.data);
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
    }, []);
    return (_jsx(RewardInfoStyles.RewardModal, { className: "modal-wrap", children: _jsxs("div", { className: "modal-content", children: [_jsxs("div", { className: "header", children: [_jsx("img", { className: "cancel", alt: "cancel", onClick: handleClosePopup }), _jsx("span", { className: "heading-1", children: "Privilege Stages" })] }), _jsx("div", { className: `table-container 	${!(privilegeInfo === null || privilegeInfo === void 0 ? void 0 : privilegeInfo.length) ? "noRewards" : ""}`, children: (privilegeInfo === null || privilegeInfo === void 0 ? void 0 : privilegeInfo.length) ? (_jsxs("table", { className: "scroll-inner", "aria-describedby": "score-info", children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { scope: "col", children: "Points" }), _jsx("th", { scope: "col", children: "Rewards" }), _jsx("th", { scope: "col", children: "Description" })] }) }), _jsx("tbody", { children: privilegeInfo.map((privilege) => (_jsxs("tr", { children: [_jsx("td", { children: _jsx("div", { className: "points center", children: _jsxs("div", { children: [(privilege === null || privilege === void 0 ? void 0 : privilege.points) ? privilege.points : "-", " Points"] }) }) }), _jsx("td", { className: "rewards", children: _jsx("div", { className: "center", children: privilege.lookupValue ? (_jsxs(_Fragment, { children: [_jsx("img", { src: `${privilege.lookupValue.sourceImgUrl}${sasToken}`, alt: "" }), _jsx("div", { className: "lookupValue", title: privilege.lookupValue.value, children: privilege.lookupValue.value })] })) : ("- ") }) }), _jsx("td", { children: _jsx("div", { className: "center desc", title: privilege.description, children: _jsx("div", { className: "description", children: privilege.description ? privilege.description : "-" }) }) })] }, privilege._id))) })] })) : (_jsx("div", { className: "noRewards", children: "There are no rewards available" })) })] }) }));
};
export default PrivilegeStage;
