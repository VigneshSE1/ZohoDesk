import React, { FC, useEffect, useState } from "react";
import { Coins } from "../../../common/icons/Coin";
import { RightArrow } from "../../../common/icons/RightArrow";
import { Close } from "../../../common/icons/Close";
import { usePopup } from "../../../api/PopupService";
import ListOrders from "../../List-Orders/List-Orders";
import Wallet from "../../Wallet/Wallet";
import RedeemConfirmStyles from "./RedeemConfirmation.styles";
import { getSasToken } from "../../../api/LeaderBoardService";
import { RedeemPageProps } from "../../../models/RedeemProps";

const RedeemConfirmation: FC<RedeemPageProps> = (props) => {
	const { openPopup, closePopup } = usePopup();
	const [sasToken, setSasToken] = useState<string>("");
	const handleWalletPopup = () => {
		openPopup(
			<Wallet userId={props.userId} applicationId={props.applicationId} />
		);
	};
	useEffect(() => {
		getSasToken()
			.then((sasToken: string) => {
				setSasToken(sasToken);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, [props.walletData]);

	const handleClosePopup = () => {
		closePopup();
	};
	const handleOrderPopup = () => {
		openPopup(
			<ListOrders userId={props.userId} applicationId={props.applicationId} />
		);
	};

	return (
		<RedeemConfirmStyles.ConfirmModal>
			<div className="redeem-confirm modal-content">
				<header>
					<div className="close">
						<div className="cancel" onClick={handleClosePopup}>
							<Close />
						</div>
						<div className="wallet">
							<button onClick={handleWalletPopup}>Go to Wallet</button>
							<div className="coin">
								<img
									className="img-width"
									src={props.walletData?.imageUrl + sasToken}
									alt=""
								/>
								<div>{props.walletData?.balance || 0}</div>
							</div>
						</div>
					</div>
				</header>
				<h2>Redeem</h2>
				<div>
					<div className="success-details">
						<div>
							<div>
								<div className="success-img">
									<img alt="success" className="success" />
								</div>
								<div className="success-heading">Order placed Successfully</div>
								<div>{props.product?.eligibleMoney || 0} coins</div>
							</div>
							<div className="order-description">
								<div>
									Debited from your wallet and Your current coin balance is
								</div>
								<div className="balance-debited">
									{/* <img alt="" src="" className="wallet-coin" /> */}
									<Coins />
									&nbsp;&nbsp;
									<div>{props.walletData?.balance}</div>
								</div>
							</div>
						</div>
					</div>
					<div className="border"></div>
					<div className="success-footer">
						<div>
							<div className="delivered">Your order will be delivered at</div>
							<div className="delivered-date">
								Sun, 3rd Jul 2022 - 9AM to 7PM
							</div>
						</div>
						<div className="navigation-buttons">
							<button onClick={handleOrderPopup}>
								<span>Go to my orders</span>
								<RightArrow height={""} />
							</button>
							<button onClick={handleWalletPopup}>
								<span>Go to wallet</span>
								<RightArrow height={""} />
							</button>
						</div>
					</div>
				</div>
			</div>
		</RedeemConfirmStyles.ConfirmModal>
	);
};

export default RedeemConfirmation;
