import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { RightArrow } from "../../common/icons/RightArrow";
import { getWalletBalance } from "../../api/RedeemService";
import { usePopup } from "../../api/PopupService";
import Wallet from "../Wallet/Wallet";
import CoinStyles from "./Coin.styles";
import { getSasToken } from "../../api/LeaderBoardService";
const Coin = (props) => {
    const [balance, setbalance] = useState([]);
    const [sasToken, setSasToken] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const { openPopup } = usePopup();
    const createWalletPopUp = () => {
        openPopup(_jsx(Wallet, { userId: props.userId, applicationId: props.applicationId }));
    };
    useEffect(() => {
        getWalletBalance(props.applicationId, props.userId)
            .then((walletData) => {
            setbalance(walletData === null || walletData === void 0 ? void 0 : walletData.balance[0].balance);
            setImageUrl(walletData === null || walletData === void 0 ? void 0 : walletData.balance[0].imageUrl);
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
    return (_jsxs(CoinStyles.CoinHeader, { className: "card-item", children: [_jsx("div", { className: "proheader", children: "Wallet" }), _jsxs("div", { className: "content", children: [_jsx("img", { className: `coins ${!imageUrl ? "default-coin" : ""}`, src: `${imageUrl}${sasToken}` }), _jsxs("div", { children: [_jsx("strong", { children: balance }), " Coins"] })] }), _jsxs("div", { onClick: createWalletPopUp, className: "nav", children: [_jsx("a", { children: "Check your Transaction" }), _jsx("div", { className: "forward", children: _jsx(RightArrow, { height: "0.7em", color: "" }) })] })] }));
};
export default Coin;
