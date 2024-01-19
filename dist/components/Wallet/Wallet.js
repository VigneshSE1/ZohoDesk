import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Close } from "../../common/icons/Close";
import { RedeemIcon } from "../../common/icons/RedeemIcon";
import { Cart } from "../../common/icons/Cart";
import { getTransactionHistory, getWalletBalance, } from "../../api/RedeemService";
import { getSasToken } from "../../api/LeaderBoardService";
import { usePopup } from "../../api/PopupService";
import ListOrders from "../List-Orders/List-Orders";
import ListRedeemProduct from "../RedeemProduct/ListRedeemProduct/ListRedeemProduct";
import WalletStyles from "./Wallet.styles";
const Wallet = (props) => {
    const [data, setData] = useState([]);
    const { openPopup, closePopup } = usePopup();
    const [balance, setbalance] = useState([]);
    const [sasToken, setSasToken] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const handleOrderPopup = () => {
        openPopup(_jsx(ListOrders, { userId: props.userId, applicationId: props.applicationId }));
    };
    const handleRedeemPopup = () => {
        openPopup(_jsx(ListRedeemProduct, { userId: props.userId, applicationId: props.applicationId }));
    };
    const handleClosePopup = () => {
        closePopup();
    };
    useEffect(() => {
        getTransactionHistory(props.userId, props.applicationId)
            .then((responseData) => {
            setData(responseData);
        })
            .catch((error) => {
            console.error("Error fetching data:", error);
        });
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
    return (_jsx(WalletStyles.WalletModal, { children: _jsxs("div", { className: "wallet modal-content", children: [_jsx("header", { children: _jsxs("div", { className: "close", children: [_jsx("div", { className: "back", onClick: handleClosePopup, children: _jsx(Close, {}) }), _jsxs("div", { className: "wallet", children: [_jsx("button", { onClick: handleRedeemPopup, children: _jsxs("div", { className: "redeem", children: [_jsx(RedeemIcon, {}), _jsx("span", { children: "Redeem" })] }) }), _jsx("button", { onClick: handleOrderPopup, children: _jsxs("div", { className: "order", children: [_jsx(Cart, {}), _jsx("span", { children: "My orders" })] }) })] })] }) }), _jsx("h2", { children: "Wallet" }), _jsx("div", { className: "wallet-coins", children: _jsxs("button", { className: "coin", children: [_jsx("img", { className: "img", src: imageUrl + sasToken, alt: "" }), _jsx("span", { className: "coins", children: balance })] }) }), _jsxs("div", { className: "transaction-history", children: [_jsx("h2", { children: "Transaction History" }), _jsx("div", { className: "list-product", children: data.map((product) => (_jsxs("div", { className: "products", children: [_jsxs("div", { className: "product-details", children: [_jsx("img", { className: "image", src: product === null || product === void 0 ? void 0 : product.productImageUrl, alt: "" }), _jsx("div", { className: "product-name", children: product === null || product === void 0 ? void 0 : product.productName })] }), _jsx("div", { className: "coin-count", children: "+" + (product === null || product === void 0 ? void 0 : product.virtualMoneyCount) })] }, product === null || product === void 0 ? void 0 : product._id))) })] })] }) }));
};
export default Wallet;
