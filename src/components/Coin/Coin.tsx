import React, { FC, useEffect, useState } from "react";
import { RightArrow } from "../../common/icons/RightArrow";
import { getWalletBalance } from "../../api/RedeemService";
import { usePopup } from "../../api/PopupService";
import Wallet from "../Wallet/Wallet";
import CoinStyles from "./Coin.styles";
import { getSasToken } from "../../api/LeaderBoardService";

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
			<Wallet userId={props.userId} applicationId={props.applicationId} />
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

	return (
		<CoinStyles.CoinHeader className="card-item">
			<div className="proheader">Wallet</div>

			<div className="content">
				<img
					className={`coins ${!imageUrl ? "default-coin" : ""}`}
					src={`${imageUrl}${sasToken}`}
				/>
				<div>
					<strong>{balance}</strong> Coins
				</div>
			</div>

			<div onClick={createWalletPopUp} className="nav">
				<a>Check your Transaction</a>
				<div className="forward">
					<RightArrow height={"0.7em"} color={""} />
				</div>
			</div>
		</CoinStyles.CoinHeader>
	);
};

export default Coin;
