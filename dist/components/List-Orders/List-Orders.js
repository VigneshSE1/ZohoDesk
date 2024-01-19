import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { getOrders } from "../../api/RedeemService";
import { Close } from "../../common/icons/Close";
import { RightArrow } from "../../common/icons/RightArrow";
import OrderHistory from "../OrderHistory/OrderHistory";
import { usePopup } from "../../api/PopupService";
import ListOrderStyles from "./List-Orders.styles";
const ListOrders = (props) => {
    const [orderDetails, setData] = useState([]);
    const { openPopup, closePopup } = usePopup();
    const handleOpenPopup = (data) => {
        openPopup(_jsx(OrderHistory, { data: data }));
    };
    const handleClosePopup = () => {
        closePopup();
    };
    useEffect(() => {
        getOrders(props.userId, props.applicationId)
            .then((responseData) => {
            setData(responseData);
        })
            .catch((error) => {
            console.error("Error fetching data:", error);
        });
    }, []);
    return (_jsx(ListOrderStyles.OrderModal, { className: "modal-wrap", children: _jsxs("div", { className: "list-order modal-content", children: [_jsxs("div", { className: "header", children: [_jsx("div", { className: "cancel", onClick: handleClosePopup, children: _jsx(Close, {}) }), _jsx("div", { className: "font-size", children: "My Orders" })] }), _jsx("div", { className: "scrollable-container", children: orderDetails.map((item) => (_jsxs("div", { className: "page-content", children: [_jsxs("div", { className: "image-name", children: [_jsx("img", { src: item.productImageUrl, className: "" }), _jsxs("div", { className: "product-name", children: [item.productName, _jsx("div", { children: _jsxs("button", { className: " view-order-button", onClick: () => handleOpenPopup(item), children: [_jsx("span", { className: "margin-right", children: "View Order History" }), _jsx(RightArrow, { height: "30", color: "" })] }) })] })] }), _jsx("div", { children: item.orderStatus === "COMPLETE" || "complete" ? (_jsx("span", { className: "text-green-500", children: item.orderStatus })) : (_jsx("span", { className: "text-red-500", children: item.orderStatus })) })] }, item._id))) })] }) }));
};
export default ListOrders;
