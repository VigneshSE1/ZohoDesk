import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import RankStyles from "./Rank.styles";
const Rank = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11;
    const isRank = (count) => { var _a, _b; return ((_b = (_a = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _a === void 0 ? void 0 : _a.Items) === null || _b === void 0 ? void 0 : _b.length) > count; };
    return (_jsx(RankStyles.Container, { children: _jsxs("div", { className: "rank-holder", children: [_jsxs("div", { className: "rank-2", children: [_jsxs("div", { className: "dp", children: [_jsx("img", { className: `profile ${!isRank(1) ||
                                        !((_b = (_a = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _a === void 0 ? void 0 : _a.Items[1]) === null || _b === void 0 ? void 0 : _b.profileImageUrl) ||
                                        !(props === null || props === void 0 ? void 0 : props.sasToken)
                                        ? "default-avatar"
                                        : ""} ${((_d = (_c = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _c === void 0 ? void 0 : _c.Items[1]) === null || _d === void 0 ? void 0 : _d.userId) === props.userId
                                        ? "highlighted"
                                        : ""}`, alt: "", src: ((_f = (_e = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _e === void 0 ? void 0 : _e.Items[1]) === null || _f === void 0 ? void 0 : _f.profileImageUrl) + (props === null || props === void 0 ? void 0 : props.sasToken) }), _jsx("span", { children: isRank(1) ? (_h = (_g = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _g === void 0 ? void 0 : _g.Items[1]) === null || _h === void 0 ? void 0 : _h.rank : 0 })] }), _jsx("div", { className: "username", children: isRank(1) ? (_k = (_j = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _j === void 0 ? void 0 : _j.Items[1]) === null || _k === void 0 ? void 0 : _k.userName : "Player 2" }), _jsx("div", { className: "score", children: _jsx("span", { children: isRank(1) ? (_m = (_l = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _l === void 0 ? void 0 : _l.Items[1]) === null || _m === void 0 ? void 0 : _m.score : 0 }) })] }), _jsxs("div", { className: "rank-1", children: [_jsxs("div", { className: "dp", children: [_jsx("img", { className: `profile ${!isRank(0) || !((_p = (_o = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _o === void 0 ? void 0 : _o.Items[0]) === null || _p === void 0 ? void 0 : _p.profileImageUrl)
                                        ? "default-avatar"
                                        : ""} ${((_r = (_q = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _q === void 0 ? void 0 : _q.Items[0]) === null || _r === void 0 ? void 0 : _r.userId) === props.userId
                                        ? "highlighted"
                                        : ""}`, alt: "", src: ((_t = (_s = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _s === void 0 ? void 0 : _s.Items[0]) === null || _t === void 0 ? void 0 : _t.profileImageUrl) + (props === null || props === void 0 ? void 0 : props.sasToken) }), _jsx("span", { children: isRank(0) ? (_v = (_u = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _u === void 0 ? void 0 : _u.Items[0]) === null || _v === void 0 ? void 0 : _v.rank : 0 })] }), _jsx("div", { className: "username", children: isRank(0) ? (_x = (_w = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _w === void 0 ? void 0 : _w.Items[0]) === null || _x === void 0 ? void 0 : _x.userName : "Player 1" }), _jsx("div", { className: "score", children: _jsx("span", { children: isRank(0) ? (_z = (_y = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _y === void 0 ? void 0 : _y.Items[0]) === null || _z === void 0 ? void 0 : _z.score : 0 }) })] }), _jsxs("div", { className: "rank-3", children: [_jsxs("div", { className: "dp", children: [_jsx("img", { className: `profile ${!isRank(2) || !((_1 = (_0 = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _0 === void 0 ? void 0 : _0.Items[2]) === null || _1 === void 0 ? void 0 : _1.profileImageUrl)
                                        ? "default-avatar"
                                        : ""} ${((_3 = (_2 = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _2 === void 0 ? void 0 : _2.Items[2]) === null || _3 === void 0 ? void 0 : _3.userId) === props.userId
                                        ? "highlighted"
                                        : ""}`, alt: "", src: ((_5 = (_4 = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _4 === void 0 ? void 0 : _4.Items[2]) === null || _5 === void 0 ? void 0 : _5.profileImageUrl) + (props === null || props === void 0 ? void 0 : props.sasToken) }), _jsx("span", { children: isRank(2) ? (_7 = (_6 = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _6 === void 0 ? void 0 : _6.Items[2]) === null || _7 === void 0 ? void 0 : _7.rank : 0 })] }), _jsx("div", { className: "username", children: isRank(2) ? (_9 = (_8 = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _8 === void 0 ? void 0 : _8.Items[2]) === null || _9 === void 0 ? void 0 : _9.userName : "Player 3" }), _jsx("div", { className: "score", children: _jsx("span", { children: isRank(2) ? (_11 = (_10 = props === null || props === void 0 ? void 0 : props.leaderBoard) === null || _10 === void 0 ? void 0 : _10.Items[2]) === null || _11 === void 0 ? void 0 : _11.score : 0 }) })] })] }) }));
};
export default Rank;