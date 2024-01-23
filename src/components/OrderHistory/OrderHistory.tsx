import React, { FC } from "react";
import { Close } from "../../common/icons/Close";
import { DateConverter } from "../../pipes/Date";
import { usePopup } from "../../api/PopupService";
import OrderHistoryStyles from "./OrderHistory.styles";
interface OrderHistoryProps {
  data: any;
}

const OrderHistory: FC<OrderHistoryProps> = (order) => {
  const { closePopup } = usePopup();
  const handleClosePopup = () => {
    closePopup();
  };

  return (
    <OrderHistoryStyles.OrderHistoryModal className="modal-wrap">
      <div className="modal-order-content">
        <div className="header">
          <div className="cancel" onClick={handleClosePopup}>
            <Close />
          </div>
          <div className="font-size">Order History</div>
        </div>
        <div className="scrollable-order-container">
          <div className="ordered-product-name">{order.data.productName}</div>
          <img src={order.data.productImageUrl} className="img-order" />
          <div className="order-details font-color">
            <div>Order Placed on</div>
            <div className="margin-x-order">:</div>
            <div>{DateConverter(order.data.createdOn)}</div>
          </div>
          <div className="order-details font-color">
            <div>Transaction Amount</div>
            <div className="margin-x-transaction">:</div>
            <div>{order.data.transactionAmount}</div>
          </div>
        </div>
      </div>
    </OrderHistoryStyles.OrderHistoryModal>
  );
};

export default OrderHistory;
