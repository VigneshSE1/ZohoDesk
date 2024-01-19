import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Close } from "../../../common/icons/Close";
import { getAllRedeemRules, getWalletBalance, } from "../../../api/RedeemService";
import { getSasToken } from "../../../api/LeaderBoardService";
import { usePopup } from "../../../api/PopupService";
import DetailRedeemProduct from "../DetailRedeemProduct/DetailRedeemProduct";
import Wallet from "../../Wallet/Wallet";
import RedeemListStyles from "./ListRedeemProduct.styles";
const ListRedeemProduct = (props) => {
    const [redeemData, setData] = useState([]);
    const [sasToken, setSasToken] = useState("");
    const [walletData, setWalletData] = useState({});
    const { openPopup, closePopup } = usePopup();
    const handleWalletPopup = () => {
        openPopup(_jsx(Wallet, { userId: props.userId, applicationId: props.applicationId }));
    };
    const handleOpenPopup = (product) => {
        openPopup(_jsx(DetailRedeemProduct, { product: product, userId: props.userId, applicationId: props.applicationId, walletData: walletData }));
    };
    const handleClosePopup = () => {
        closePopup();
    };
    useEffect(() => {
        getAllRedeemRules(props.applicationId)
            .then((responseData) => {
            setData(responseData);
        })
            .catch((error) => {
            console.error("Error fetching data:", error);
        });
        getWalletBalance(props.applicationId, props.userId)
            .then((walletData) => {
            var _a;
            setWalletData(((_a = walletData === null || walletData === void 0 ? void 0 : walletData.balance) === null || _a === void 0 ? void 0 : _a.length) ? walletData.balance[0] : {});
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
    return (_jsx(RedeemListStyles.RedeemModal, { className: "modal-wrap", children: _jsxs("div", { className: "list-product modal-content", children: [_jsx("header", { children: _jsxs("div", { className: "close", children: [_jsx("div", { className: "close-btn", onClick: handleClosePopup, children: _jsx(Close, {}) }), _jsxs("div", { className: "wallet", children: [_jsx("button", { onClick: handleWalletPopup, children: "Go to Wallet" }), _jsxs("div", { className: "coin", children: [_jsx("img", { className: `img-width coins ${!walletData.imageUrl ? "default-coin" : ""}`, src: walletData.imageUrl + sasToken, alt: "" }), _jsx("div", { children: (walletData === null || walletData === void 0 ? void 0 : walletData.balance) || 0 })] })] })] }) }), _jsx("h2", { className: "heading", children: "Redeem" }), _jsx("div", { className: "products", children: (redeemData === null || redeemData === void 0 ? void 0 : redeemData.length) >= 0 ? (_jsx("div", { className: "list-products", children: redeemData.map((product) => (_jsxs("div", { className: "product", onClick: () => handleOpenPopup(product), children: [_jsx("img", { className: "img", src: product === null || product === void 0 ? void 0 : product.productImageUrl, alt: "" }), _jsxs("div", { className: "product-detail", children: [_jsx("div", { className: "ellipsis", children: product === null || product === void 0 ? void 0 : product.productName }), _jsxs("div", { className: "coin", children: [_jsx("img", { alt: "", src: (product === null || product === void 0 ? void 0 : product.virtualMoneyImageUrl) + sasToken }), _jsx("span", { children: (product === null || product === void 0 ? void 0 : product.eligibleMoney) + " coins" })] })] })] }, product._id))) })) : (_jsx("div", {})) })] }) }));
};
export default ListRedeemProduct;
