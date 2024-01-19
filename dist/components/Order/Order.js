import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { RightArrow } from "../../common/icons/RightArrow";
import ListOrders from "../List-Orders/List-Orders";
import { usePopup } from "../../api/PopupService";
import CoinStyles from "../Coin/Coin.styles";
const Order = (props) => {
    const { openPopup } = usePopup() || {};
    const handleOpenPopup = () => {
        if (openPopup) {
            openPopup(_jsx(ListOrders, { userId: props.userId, applicationId: props.applicationId }));
        }
        else {
            console.log("openPopup is null, cannot open");
        }
    };
    return (_jsxs(CoinStyles.CoinHeader, { children: [_jsx("div", { className: "proheader", children: "My Vouchers" }), _jsx("div", { className: "content", children: _jsx("img", { alt: "order", className: "orders" }) }), _jsxs("div", { onClick: handleOpenPopup, className: "nav", children: [_jsx("a", { children: "Explore your vouchers" }), _jsx("div", { className: "forward", children: _jsx(RightArrow, { height: "0.7em", color: "" }) })] })] }));
};
export default Order;
