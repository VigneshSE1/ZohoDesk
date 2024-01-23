import React, { FC } from "react";
import CoinStyles from "../Coin/Coin.styles";
import ListRedeemProduct from "../RedeemProduct/ListRedeemProduct/ListRedeemProduct";
import PopUpStyles from "../../common/styles/PopUp.styles";
import { RightArrow } from "../../common/icons/RightArrow";
import { env } from "../../env/env";
import { usePopup } from "../../api/PopupService";

interface RedeemProps {
  userId: string;
  applicationId: string;
}
const Redeem: FC<RedeemProps> = (props) => {
  const { openPopup } = usePopup();

  const handleOpenPopup = () => {
    openPopup(
      <PopUpStyles.Container>
        <ListRedeemProduct
          userId={props.userId}
          applicationId={props.applicationId}
        />
      </PopUpStyles.Container>
    );
  };
  return (
    <CoinStyles.CoinHeader className="card-item" onClick={handleOpenPopup}>
      <div className="proheader">Redeem</div>

      <div className="content">
        <img
          alt="redeem"
          className="redeem"
          src={`${env.BLOB_URL}/${env.CONTAINER_PATH}/redeems-icon-min.gif`}
        />
      </div>
      <div className="nav">
        <a>Redeem your coins</a>
        <div className="forward">
          <RightArrow height={"0.7em"} color={""} />
        </div>
      </div>
    </CoinStyles.CoinHeader>
  );
};

export default Redeem;
