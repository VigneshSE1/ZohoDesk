import React, { FC, useEffect, useState } from "react";
import RedeemFailureStyles from "./RedeemFailure.styles";
import WalletStyles from "../../../common/styles/wallet.styles";
import { usePopup } from "../../../api/PopupService";
import Wallet from "../../Wallet/Wallet";
import ListRedeemProduct from "../ListRedeemProduct/ListRedeemProduct";
import DetailRedeemProduct from "../DetailRedeemProduct/DetailRedeemProduct";
import { getSasToken } from "../../../api/LeaderBoardService";
import { RedeemPageProps } from "../../../models/RedeemProps";

const RedeemFailure: FC<RedeemPageProps> = (props) => {
	const { openPopup, closePopup } = usePopup();
	const [sasToken, setSasToken] = useState<string>("");
	const onCloseButtonClick = () => {
		closePopup();
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

	const goToWallet = () => {
		openPopup(
			<Wallet userId={props.userId} applicationId={props.applicationId} />
		);
	};

	const goToProductComponent = () => {
		openPopup(
			<DetailRedeemProduct
				product={props.product}
				userId={props.userId}
				applicationId={props.applicationId}
				walletData={props.walletData}
			/>
		);
	};

	const createRedeemPopup = () => {
		openPopup(
			<ListRedeemProduct
				userId={props.userId}
				applicationId={props.applicationId}
			/>
		);
	};

	return (
		<RedeemFailureStyles.FailureModal>
			<div className="modal-content">
				<div>
					<div className="order-header">
						<img className="cancel" alt="cancel" onClick={onCloseButtonClick} />

						<WalletStyles.Container className="wallet">
							<button className="wallet-btn" onClick={goToWallet}>
								Go to Wallet
							</button>
							<div className="coin">
								<img
									className="default-coin"
									src={props.walletData?.imageUrl + sasToken}
									alt=""
								/>
								<span>{props.walletData?.balance}</span>
							</div>
						</WalletStyles.Container>
					</div>
					<div className="header-failure">Redeem</div>
					<div>
						<div className="failure-details">
							<div>
								<div>
									<img alt="failure" className="failure" />
									<div className="failure-heading">Oops !</div>
								</div>
								<div className="order-description">
									<div>Your Order has been failed. {props.failureMsg}</div>
									<div className="description">Please try again</div>
								</div>
							</div>
						</div>
					</div>
					<div className="border"></div>
					<div className="navigation-buttons">
						<button onClick={goToProductComponent}>
							<span>Retry</span>
							<img alt="arrow" />
						</button>
						<button onClick={createRedeemPopup}>
							<span>Cancel</span>
							<img alt="arrow" />
						</button>
					</div>
				</div>
			</div>
		</RedeemFailureStyles.FailureModal>
	);
};

export default RedeemFailure;
