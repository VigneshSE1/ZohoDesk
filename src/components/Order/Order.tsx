import React, { FC } from "react";
import { RightArrow } from "../../common/icons/RightArrow";
import ListOrders from "../List-Orders/List-Orders";
import { usePopup } from "../../api/PopupService";
import CoinStyles from "../Coin/Coin.styles";

interface OrderProps {
	userId: string;
	applicationId: string;
}

const Order: FC<OrderProps> = (props) => {
	const { openPopup } = usePopup() || {};
	const handleOpenPopup = () => {
		if (openPopup) {
			openPopup(
				<ListOrders userId={props.userId} applicationId={props.applicationId} />
			);
		} else {
			console.log("openPopup is null, cannot open");
		}
	};

	return (
		<CoinStyles.CoinHeader>
			<div className="proheader">My Vouchers</div>
			<div className="content">
				<img alt="order" className="orders" />
			</div>

			<div onClick={handleOpenPopup} className="nav">
				<a>Explore your vouchers</a>
				<div className="forward">
					<RightArrow height={"0.7em"} color={""} />
				</div>
			</div>
		</CoinStyles.CoinHeader>
	);
};

export default Order;
