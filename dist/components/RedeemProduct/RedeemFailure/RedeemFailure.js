import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import RedeemFailureStyles from "./RedeemFailure.styles";
import WalletStyles from "../../../common/styles/wallet.styles";
import { usePopup } from "../../../api/PopupService";
import Wallet from "../../Wallet/Wallet";
import ListRedeemProduct from "../ListRedeemProduct/ListRedeemProduct";
import DetailRedeemProduct from "../DetailRedeemProduct/DetailRedeemProduct";
import { getSasToken } from "../../../api/LeaderBoardService";
const RedeemFailure = (props) => {
    var _a, _b;
    const { openPopup, closePopup } = usePopup();
    const [sasToken, setSasToken] = useState("");
    const onCloseButtonClick = () => {
        closePopup();
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
    const goToWallet = () => {
        openPopup(_jsx(Wallet, { userId: props.userId, applicationId: props.applicationId }));
    };
    const goToProductComponent = () => {
        openPopup(_jsx(DetailRedeemProduct, { product: props.product, userId: props.userId, applicationId: props.applicationId, walletData: props.walletData }));
    };
    const createRedeemPopup = () => {
        openPopup(_jsx(ListRedeemProduct, { userId: props.userId, applicationId: props.applicationId }));
    };
    return (_jsx(RedeemFailureStyles.FailureModal, { children: _jsx("div", { className: "modal-content", children: _jsxs("div", { children: [_jsxs("div", { className: "order-header", children: [_jsx("img", { className: "cancel", alt: "cancel", onClick: onCloseButtonClick }), _jsxs(WalletStyles.Container, { className: "wallet", children: [_jsx("button", { className: "wallet-btn", onClick: goToWallet, children: "Go to Wallet" }), _jsxs("div", { className: "coin", children: [_jsx("img", { className: "default-coin", src: ((_a = props.walletData) === null || _a === void 0 ? void 0 : _a.imageUrl) + sasToken, alt: "" }), _jsx("span", { children: (_b = props.walletData) === null || _b === void 0 ? void 0 : _b.balance })] })] })] }), _jsx("div", { className: "header-failure", children: "Redeem" }), _jsx("div", { children: _jsx("div", { className: "failure-details", children: _jsxs("div", { children: [_jsxs("div", { children: [_jsx("img", { alt: "failure", className: "failure" }), _jsx("div", { className: "failure-heading", children: "Oops !" })] }), _jsxs("div", { className: "order-description", children: [_jsxs("div", { children: ["Your Order has been failed. ", props.failureMsg] }), _jsx("div", { className: "description", children: "Please try again" })] })] }) }) }), _jsx("div", { className: "border" }), _jsxs("div", { className: "navigation-buttons", children: [_jsxs("button", { onClick: goToProductComponent, children: [_jsx("span", { children: "Retry" }), _jsx("img", { alt: "arrow" })] }), _jsxs("button", { onClick: createRedeemPopup, children: [_jsx("span", { children: "Cancel" }), _jsx("img", { alt: "arrow" })] })] })] }) }) }));
};
export default RedeemFailure;
