import React, { FC, useEffect, useState } from "react";
import { Close } from "../../../common/icons/Close";
import {
  getAllRedeemRules,
  getWalletBalance,
} from "../../../api/RedeemService";
import { getSasToken } from "../../../api/LeaderBoardService";
import { usePopup } from "../../../api/PopupService";
import DetailRedeemProduct from "../DetailRedeemProduct/DetailRedeemProduct";
import Wallet from "../../Wallet/Wallet";
import RedeemListStyles from "./ListRedeemProduct.styles";
import { IWallet } from "../../../models/Balance";

interface ListRedeemProductProps {
  userId: string;
  applicationId: string;
}
const ListRedeemProduct: FC<ListRedeemProductProps> = (props) => {
  const [redeemData, setData] = useState<any>([]);
  const [sasToken, setSasToken] = useState<string>("");
  const [walletData, setWalletData] = useState<any>({});

  const { openPopup, closePopup } = usePopup();
  const handleWalletPopup = () => {
    openPopup(
      <Wallet userId={props.userId} applicationId={props.applicationId} />
    );
  };
  const handleOpenPopup = (product: any) => {
    openPopup(
      <DetailRedeemProduct
        product={product}
        userId={props.userId}
        applicationId={props.applicationId}
        walletData={walletData}
      />
    );
  };

  const handleClosePopup = () => {
    closePopup();
  };

  useEffect(() => {
    getAllRedeemRules(props.applicationId)
      .then((responseData: any) => {
        setData(responseData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    getWalletBalance(props.applicationId, props.userId)
      .then((walletData: IWallet) => {
        setWalletData(walletData?.balance?.length ? walletData.balance[0] : {});
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

  return (
    <RedeemListStyles.RedeemModal className="modal-wrap">
      <div className="list-product modal-content">
        <header>
          <div className="close">
            <div className="close-btn" onClick={handleClosePopup}>
              <Close />
            </div>
            <div className="wallet">
              <button onClick={handleWalletPopup}>Go to Wallet</button>

              <div className="coin">
                <img
                  className={`img-width coins ${
                    !walletData.imageUrl ? "default-coin" : ""
                  }`}
                  src={walletData.imageUrl + sasToken}
                  alt=""
                />
                <div>{walletData?.balance || 0}</div>
              </div>
            </div>
          </div>
        </header>
        <h2 className="heading">Redeem</h2>
        <div className="products">
          {redeemData?.length >= 0 ? (
            <div className="list-products">
              {redeemData.map((product: any) => (
                <div
                  className="product"
                  onClick={() => handleOpenPopup(product)}
                  key={product._id}
                >
                  <img className="img" src={product?.productImageUrl} alt="" />
                  <div className="product-detail">
                    <div className="ellipsis">{product?.productName}</div>
                    <div className="coin">
                      <img
                        alt=""
                        src={product?.virtualMoneyImageUrl + sasToken}
                      />
                      <span>{product?.eligibleMoney + " coins"}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </RedeemListStyles.RedeemModal>
  );
};

export default ListRedeemProduct;
