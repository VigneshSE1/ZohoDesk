import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Close } from "../../common/icons/Close";
import { DateConverter } from "../../pipes/Date";
import { usePopup } from "../../api/PopupService";
import OrderHistoryStyles from "./OrderHistory.styles";
const OrderHistory = (order) => {
    const { closePopup } = usePopup();
    const handleClosePopup = () => {
        closePopup();
    };
    return (_jsx(OrderHistoryStyles.OrderHistoryModal, { className: "modal-wrap", children: _jsxs("div", { className: "modal-order-content", children: [_jsxs("div", { className: "header", children: [_jsx("div", { className: "cancel", onClick: handleClosePopup, children: _jsx(Close, {}) }), _jsx("div", { className: "font-size", children: "Order History" })] }), _jsxs("div", { className: "scrollable-order-container", children: [_jsx("div", { className: "ordered-product-name", children: order.data.productName }), _jsx("img", { src: order.data.productImageUrl, className: "img-order" }), _jsxs("div", { className: "order-details font-color", children: [_jsx("div", { children: "Order Placed on" }), _jsx("div", { className: "margin-x-order", children: ":" }), _jsx("div", { children: DateConverter(order.data.createdOn) })] }), _jsxs("div", { className: "order-details font-color", children: [_jsx("div", { children: "Transaction Amount" }), _jsx("div", { className: "margin-x-transaction", children: ":" }), _jsx("div", { children: order.data.transactionAmount })] })] })] }) }));
};
export default OrderHistory;
