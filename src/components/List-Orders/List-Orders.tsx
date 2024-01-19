import React, { FC, useEffect, useState } from "react";
import { getOrders } from "../../api/RedeemService";
import { Close } from "../../common/icons/Close";
import { RightArrow } from "../../common/icons/RightArrow";
import OrderHistory from "../OrderHistory/OrderHistory";
import { usePopup } from "../../api/PopupService";
import ListOrderStyles from "./List-Orders.styles";
interface ListOrdersProps {
	userId: string;
	applicationId: string;
}

const ListOrders: FC<ListOrdersProps> = (props) => {
	const [orderDetails, setData] = useState<any[]>([]);
	const { openPopup, closePopup } = usePopup();

	const handleOpenPopup = (data: any) => {
		openPopup(<OrderHistory data={data} />);
	};

	const handleClosePopup = () => {
		closePopup();
	};

	useEffect(() => {
		getOrders(props.userId, props.applicationId)
			.then((responseData: any) => {
				setData(responseData);
			})
			.catch((error) => {
				console.error("Error fetching data:", error);
			});
	}, []);

	return (
		<ListOrderStyles.OrderModal className="modal-wrap">
			<div className="list-order modal-content">
				<div className="header">
					<div className="cancel" onClick={handleClosePopup}>
						<Close />
					</div>
					<div className="font-size">My Orders</div>
				</div>
				<div className="scrollable-container">
					{orderDetails.map((item) => (
						<div className="page-content" key={item._id}>
							<div className="image-name">
								<img src={item.productImageUrl} className="" />
								<div className="product-name">
									{item.productName}
									<div>
										<button
											className=" view-order-button"
											onClick={() => handleOpenPopup(item)}
										>
											<span className="margin-right">View Order History</span>
											<RightArrow height="30" color={""} />
										</button>
									</div>
								</div>
							</div>
							<div>
								{item.orderStatus === "COMPLETE" || "complete" ? (
									<span className="text-green-500">{item.orderStatus}</span>
								) : (
									<span className="text-red-500">{item.orderStatus}</span>
								)}
							</div>
						</div>
					))}
				</div>
			</div>
		</ListOrderStyles.OrderModal>
	);
};

export default ListOrders;
