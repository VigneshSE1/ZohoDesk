import React, { FC, useEffect, useState } from "react";
import { getSasToken } from "../../../api/LeaderBoardService";
import { RightArrow } from "../../../common/icons/RightArrow";
import { BackArrow } from "../../../common/icons/BackArrow";
import BillingForm from "../BillingForm/BillingForm";
import ListRedeemProduct from "../ListRedeemProduct/ListRedeemProduct";
import Wallet from "../../Wallet/Wallet";
import ProductStyles from "./DetailRedeemProduct.styles";
import { usePopup } from "../../../api/PopupService";
import { RedeemPageProps } from "../../../models/RedeemProps";

const DetailRedeemProduct: FC<RedeemPageProps> = (props) => {
	const [sasToken, setSasToken] = useState<string>("");
	const { openPopup } = usePopup();
	const handleNextPopup = () => {
		openPopup(
			<BillingForm
				product={props.product}
				userId={props.userId}
				applicationId={props.applicationId}
				walletData={props.walletData}
			/>
		);
	};
	const handleWalletPopup = () => {
		openPopup(
			<Wallet userId={props.userId} applicationId={props.applicationId} />
		);
	};
	const handleBackPopup = () => {
		openPopup(
			<ListRedeemProduct
				userId={props.userId}
				applicationId={props.applicationId}
			/>
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

	return (
		<ProductStyles.ProductModal className="modal-wrap">
			<div className="detail-product modal-content">
				<header>
					<div className="close">
						<div className="back" onClick={handleBackPopup}>
							<BackArrow />
						</div>
						<div className="wallet">
							<button onClick={handleWalletPopup}>Go to Wallet</button>
							<div className="coin">
								<img
									className="img-width"
									src={props.walletData?.imageUrl + sasToken}
									alt=""
								/>
								<div>{props.walletData?.balance}</div>
							</div>
						</div>
					</div>
				</header>
				<h2>Redeem</h2>
				<section>
					<img
						className="img-product"
						src={props.product?.productImageUrl + sasToken}
						alt=""
					/>
					<h2>{props.product?.productName}</h2>
					<div className="coin">
						<img
							className="img-width"
							src={props.product?.virtualMoneyImageUrl + sasToken}
						/>
						<div>{props.product?.eligibleMoney + " coins"}</div>
					</div>
					<div className="validity">
						<label>Validity</label>
						<span>30 days from redeemed</span>
					</div>
					<div className="validity">
						<label>Description</label>
						<span>
							Use your Amazon.in Gift Card to shop from a huge selection of
							Books, Electronics, Music, Movies, Software, Apparel, Toys, and
							more.
						</span>
					</div>
					<button className="redeem-btn" onClick={handleNextPopup}>
						Redeem Now
						<span>
							<RightArrow height={""} />
						</span>
					</button>
				</section>
			</div>
		</ProductStyles.ProductModal>
	);
};

export default DetailRedeemProduct;
