import React, { FC, useEffect, useState } from "react";

import CoinStyles from "./Coin.styles";
import PopUpStyles from "../../common/styles/PopUp.styles";
import { RightArrow } from "../../common/icons/RightArrow";
import Wallet from "../Wallet/Wallet";
import { env } from "../../env/env";
import { getSasToken } from "../../api/LeaderBoardService";
import { getWalletBalance } from "../../api/RedeemService";
import { usePopup } from "../../api/PopupService";

interface CoinProps {
  userId: string;
  applicationId: string;
}
const Coin: FC<CoinProps> = (props) => {
  const [balance, setbalance] = useState<any[]>([]);
  const [sasToken, setSasToken] = useState<string>("");
  const [imageUrl, setImageUrl] = useState<string>("");
  const { openPopup } = usePopup();

  const createWalletPopUp = () => {
    openPopup(
      <PopUpStyles.Container>
        <Wallet userId={props.userId} applicationId={props.applicationId} />
      </PopUpStyles.Container>
    );
  };
  useEffect(() => {
    getWalletBalance(props.applicationId, props.userId)
      .then((walletData: any) => {
        setbalance(walletData?.balance[0].balance);
        setImageUrl(walletData?.balance[0].imageUrl);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    getSasToken()
      .then((sasToken: string) => {
        setSasToken(sasToken);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const setDefaultCoin = (e: any) => {
    e.target.src = `${env.BLOB_URL}/${env.CONTAINER_PATH}/coins.png`;
  };
  return (
    <CoinStyles.CoinHeader className="card-item" onClick={createWalletPopUp}>
      <div className="proheader">Wallet</div>

      <div className="content">
        <img
          className={`coins rotating-coin ${!imageUrl ? "default-coin" : ""}`}
          onError={(e) => setDefaultCoin(e)}
          src={`${imageUrl}${sasToken}`}
        />
        <div>
          <strong>{balance || 0}</strong>
        </div>
      </div>

      <div className="nav">
        <a>Go to Wallet</a>
        <div className="forward">
          <RightArrow height={"0.7em"} color={""} />
        </div>
      </div>
    </CoinStyles.CoinHeader>
  );
};

export default Coin;
