import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Coins } from "../../../common/icons/Coin";
import { RightArrow } from "../../../common/icons/RightArrow";
import { Close } from "../../../common/icons/Close";
import { usePopup } from "../../../api/PopupService";
import ListOrders from "../../List-Orders/List-Orders";
import Wallet from "../../Wallet/Wallet";
import RedeemConfirmStyles from "./RedeemConfirmation.styles";
import { getSasToken } from "../../../api/LeaderBoardService";
const RedeemConfirmation = (props) => {
    var _a, _b, _c, _d;
    const { openPopup, closePopup } = usePopup();
    const [sasToken, setSasToken] = useState("");
    const handleWalletPopup = () => {
        openPopup(_jsx(Wallet, { userId: props.userId, applicationId: props.applicationId }));
    };
    useEffect(() => {
        getSasToken()
            .then((sasToken) => {
            setSasToken(sasToken);
        })
            .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, [props.walletData]);
    const handleClosePopup = () => {
        closePopup();
    };
    const handleOrderPopup = () => {
        openPopup(_jsx(ListOrders, { userId: props.userId, applicationId: props.applicationId }));
    };
    return (_jsx(RedeemConfirmStyles.ConfirmModal, { children: _jsxs("div", { className: "redeem-confirm modal-content", children: [_jsx("header", { children: _jsxs("div", { className: "close", children: [_jsx("div", { className: "cancel", onClick: handleClosePopup, children: _jsx(Close, {}) }), _jsxs("div", { className: "wallet", children: [_jsx("button", { onClick: handleWalletPopup, children: "Go to Wallet" }), _jsxs("div", { className: "coin", children: [_jsx("img", { className: "img-width", src: ((_a = props.walletData) === null || _a === void 0 ? void 0 : _a.imageUrl) + sasToken, alt: "" }), _jsx("div", { children: ((_b = props.walletData) === null || _b === void 0 ? void 0 : _b.balance) || 0 })] })] })] }) }), _jsx("h2", { children: "Redeem" }), _jsxs("div", { children: [_jsx("div", { className: "success-details", children: _jsxs("div", { children: [_jsxs("div", { children: [_jsx("div", { className: "success-img", children: _jsx("img", { alt: "success", className: "success" }) }), _jsx("div", { className: "success-heading", children: "Order placed Successfully" }), _jsxs("div", { children: [((_c = props.product) === null || _c === void 0 ? void 0 : _c.eligibleMoney) || 0, " coins"] })] }), _jsxs("div", { className: "order-description", children: [_jsx("div", { children: "Debited from your wallet and Your current coin balance is" }), _jsxs("div", { className: "balance-debited", children: [_jsx(Coins, {}), "\u00A0\u00A0", _jsx("div", { children: (_d = props.walletData) === null || _d === void 0 ? void 0 : _d.balance })] })] })] }) }), _jsx("div", { className: "border" }), _jsxs("div", { className: "success-footer", children: [_jsxs("div", { children: [_jsx("div", { className: "delivered", children: "Your order will be delivered at" }), _jsx("div", { className: "delivered-date", children: "Sun, 3rd Jul 2022 - 9AM to 7PM" })] }), _jsxs("div", { className: "navigation-buttons", children: [_jsxs("button", { onClick: handleOrderPopup, children: [_jsx("span", { children: "Go to my orders" }), _jsx(RightArrow, { height: "" })] }), _jsxs("button", { onClick: handleWalletPopup, children: [_jsx("span", { children: "Go to wallet" }), _jsx(RightArrow, { height: "" })] })] })] })] })] }) }));
};
export default RedeemConfirmation;
