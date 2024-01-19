import React, { FC, useEffect, useState } from "react";
import { Close } from "../../common/icons/Close";
import { RedeemIcon } from "../../common/icons/RedeemIcon";
import { Cart } from "../../common/icons/Cart";
import {
	getTransactionHistory,
	getWalletBalance,
} from "../../api/RedeemService";
import { getSasToken } from "../../api/LeaderBoardService";
import { usePopup } from "../../api/PopupService";
import ListOrders from "../List-Orders/List-Orders";
import ListRedeemProduct from "../RedeemProduct/ListRedeemProduct/ListRedeemProduct";
import WalletStyles from "./Wallet.styles";

interface WalletProps {
	userId: string;
	applicationId: string;
}
const Wallet: FC<WalletProps> = (props) => {
	const [data, setData] = useState<any[]>([]);
	const { openPopup, closePopup } = usePopup();
	const [balance, setbalance] = useState<any[]>([]);
	const [sasToken, setSasToken] = useState<string>("");
	const [imageUrl, setImageUrl] = useState<string>("");

	const handleOrderPopup = () => {
		openPopup(
			<ListOrders userId={props.userId} applicationId={props.applicationId} />
		);
	};
	const handleRedeemPopup = () => {
		openPopup(
			<ListRedeemProduct
				userId={props.userId}
				applicationId={props.applicationId}
			/>
		);
	};

	const handleClosePopup = () => {
		closePopup();
	};

	useEffect(() => {
		getTransactionHistory(props.userId, props.applicationId)
			.then((responseData: any) => {
				setData(responseData);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});

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

	return (
		<WalletStyles.WalletModal>
			<div className="wallet modal-content">
				<header>
					<div className="close">
						<div className="back" onClick={handleClosePopup}>
							<Close />
						</div>
						<div className="wallet">
							<button onClick={handleRedeemPopup}>
								<div className="redeem">
									<RedeemIcon />
									<span>Redeem</span>
								</div>
							</button>
							<button onClick={handleOrderPopup}>
								<div className="order">
									<Cart />
									<span>My orders</span>
								</div>
							</button>
						</div>
					</div>
				</header>
				<h2>Wallet</h2>
				<div className="wallet-coins">
					<button className="coin">
						<img className="img" src={imageUrl + sasToken} alt="" />
						<span className="coins">{balance}</span>
					</button>
				</div>
				<div className="transaction-history">
					<h2>Transaction History</h2>
					<div className="list-product">
						{data.map((product: any) => (
							<div className="products" key={product?._id}>
								<div className="product-details">
									<img
										className="image"
										src={product?.productImageUrl}
										alt=""
									/>
									<div className="product-name">{product?.productName}</div>
								</div>
								<div className="coin-count">
									{"+" + product?.virtualMoneyCount}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</WalletStyles.WalletModal>
	);
};

export default Wallet;
