import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { getSasToken } from "../../../api/LeaderBoardService";
import { RightArrow } from "../../../common/icons/RightArrow";
import { BackArrow } from "../../../common/icons/BackArrow";
import BillingForm from "../BillingForm/BillingForm";
import ListRedeemProduct from "../ListRedeemProduct/ListRedeemProduct";
import Wallet from "../../Wallet/Wallet";
import ProductStyles from "./DetailRedeemProduct.styles";
import { usePopup } from "../../../api/PopupService";
const DetailRedeemProduct = (props) => {
    var _a, _b, _c, _d, _e, _f;
    const [sasToken, setSasToken] = useState("");
    const { openPopup } = usePopup();
    const handleNextPopup = () => {
        openPopup(_jsx(BillingForm, { product: props.product, userId: props.userId, applicationId: props.applicationId, walletData: props.walletData }));
    };
    const handleWalletPopup = () => {
        openPopup(_jsx(Wallet, { userId: props.userId, applicationId: props.applicationId }));
    };
    const handleBackPopup = () => {
        openPopup(_jsx(ListRedeemProduct, { userId: props.userId, applicationId: props.applicationId }));
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
    return (_jsx(ProductStyles.ProductModal, { className: "modal-wrap", children: _jsxs("div", { className: "detail-product modal-content", children: [_jsx("header", { children: _jsxs("div", { className: "close", children: [_jsx("div", { className: "back", onClick: handleBackPopup, children: _jsx(BackArrow, {}) }), _jsxs("div", { className: "wallet", children: [_jsx("button", { onClick: handleWalletPopup, children: "Go to Wallet" }), _jsxs("div", { className: "coin", children: [_jsx("img", { className: "img-width", src: ((_a = props.walletData) === null || _a === void 0 ? void 0 : _a.imageUrl) + sasToken, alt: "" }), _jsx("div", { children: (_b = props.walletData) === null || _b === void 0 ? void 0 : _b.balance })] })] })] }) }), _jsx("h2", { children: "Redeem" }), _jsxs("section", { children: [_jsx("img", { className: "img-product", src: ((_c = props.product) === null || _c === void 0 ? void 0 : _c.productImageUrl) + sasToken, alt: "" }), _jsx("h2", { children: (_d = props.product) === null || _d === void 0 ? void 0 : _d.productName }), _jsxs("div", { className: "coin", children: [_jsx("img", { className: "img-width", src: ((_e = props.product) === null || _e === void 0 ? void 0 : _e.virtualMoneyImageUrl) + sasToken }), _jsx("div", { children: ((_f = props.product) === null || _f === void 0 ? void 0 : _f.eligibleMoney) + " coins" })] }), _jsxs("div", { className: "validity", children: [_jsx("label", { children: "Validity" }), _jsx("span", { children: "30 days from redeemed" })] }), _jsxs("div", { className: "validity", children: [_jsx("label", { children: "Description" }), _jsx("span", { children: "Use your Amazon.in Gift Card to shop from a huge selection of Books, Electronics, Music, Movies, Software, Apparel, Toys, and more." })] }), _jsxs("button", { className: "redeem-btn", onClick: handleNextPopup, children: ["Redeem Now", _jsx("span", { children: _jsx(RightArrow, { height: "" }) })] })] })] }) }));
};
export default DetailRedeemProduct;
