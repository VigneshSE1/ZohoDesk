import React, { FC } from "react";
import { RightArrow } from "../../common/icons/RightArrow";
import ListRedeemProduct from "../RedeemProduct/ListRedeemProduct/ListRedeemProduct";
import { usePopup } from "../../api/PopupService";
import CoinStyles from "../Coin/Coin.styles";

interface RedeemProps {
	userId: string;
	applicationId: string;
}
const Redeem: FC<RedeemProps> = (props) => {
	const { openPopup } = usePopup();

	const handleOpenPopup = () => {
		openPopup(
			<ListRedeemProduct
				userId={props.userId}
				applicationId={props.applicationId}
			/>
		);
	};
	return (
		<CoinStyles.CoinHeader className="card-item">
			<div className="proheader">Redeem</div>

			<div className="content">
				<img alt="redeem" className="redeem" />
			</div>
			<div onClick={handleOpenPopup} className="nav">
				<a>Lets redeem voucher</a>
				<div className="forward">
					<RightArrow height={"0.7em"} color={""} />
				</div>
			</div>
		</CoinStyles.CoinHeader>
	);
};

export default Redeem;
