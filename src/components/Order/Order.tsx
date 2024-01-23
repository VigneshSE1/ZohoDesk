import React, { FC } from "react";

import CoinStyles from "../Coin/Coin.styles";
import PopUpStyles from "../../common/styles/PopUp.styles";
import { RightArrow } from "../../common/icons/RightArrow";
import { env } from "../../env/env";
import { usePopup } from "../../api/PopupService";
import ListOrders from "../List-Orders/List-Orders";

interface OrderProps {
  userId: string;
  applicationId: string;
}

const Order: FC<OrderProps> = (props) => {
  const { openPopup } = usePopup() || {};
  const handleOpenPopup = () => {
    if (openPopup) {
      openPopup(
        <PopUpStyles.Container>
          <ListOrders
            userId={props.userId}
            applicationId={props.applicationId}
          />
        </PopUpStyles.Container>
      );
    } else {
      console.log("openPopup is null, cannot open");
    }
  };

  return (
    <CoinStyles.CoinHeader onClick={handleOpenPopup}>
      <div className="proheader">My Vouchers</div>
      <div className="content">
        <img
          alt="order"
          className="orders"
          src={`${env.BLOB_URL}/${env.CONTAINER_PATH}/orders-min.gif`}
        />
      </div>

      <div className="nav">
        <a>See your orders</a>
        <div className="forward">
          <RightArrow height={"0.7em"} color={""} />
        </div>
      </div>
    </CoinStyles.CoinHeader>
  );
};

export default Order;
