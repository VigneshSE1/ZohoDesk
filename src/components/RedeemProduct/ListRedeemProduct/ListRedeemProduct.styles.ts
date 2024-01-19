import styled from "styled-components";
import defaultCoin from "../../../common/images/coins.png";

const modalWrap = `position: fixed !important;
width: 100% !important;
height: 100% !important;
overflow-y: auto !important;
top: 0 !important;
left: 0 !important;
z-index: 99999 !important;
padding: 2em 0 !important;
box-sizing: border-box !important;
display: flex !important;
align-items: center !important;
background-color: rgba(0, 0, 0, 0.2);`;
const RedeemListStyles = {
	RedeemModal: styled.div`
		${modalWrap}
		font-family: "DM Sans", sans-serif;

		border: #dedede;
		.list-product.modal-content {
			box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
				rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
				rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
				rgba(0, 0, 0, 0.07) 0px 32px 64px;
			padding: 1em 0 0 !important;
			width: 50% !important;
			height: 78% !important;
			overflow-y: scroll !important;
			margin: auto !important;
			background: white !important;
			border-radius: 0.7rem !important;
			color: black !important;
			min-width: 400px !important;
			header {
				margin: 1em 1.7em;
				text-align: left;
				.close {
					display: flex;
					width: 100%;
					justify-content: space-between;
					.close-btn {
						cursor: pointer;
					}

					.wallet {
						display: flex;
						align-items: center;
						gap: 0.5em;
						button {
							border: none;
							background: none;
							color: #a2a2a2;
							letter-spacing: 0.5px;
							font-size: 0.9em;
							cursor: pointer;
						}
						.coin {
							display: flex;
							gap: 5px;
							align-items: center;
							gap: 0.4em;
							border: 1px solid #dddddd;
							background: #efefef;
							border-radius: 1.4em;
							padding: 0.4em 0.5em;
							.img-width {
								width: 1.75rem;
								&.default-coin {
									content: url(${defaultCoin});
								}
							}
						}
					}
				}
			}
			.heading {
				font-weight: 700;
				margin-left: 1em;
				text-align: left;
				font-size: 1.5em;
				letter-spacing: 0.75px;
				margin-top: 0.5em;
			}
			.products {
				height: 100%;
				.list-products {
					display: flex;
					gap: 1.5em;
					flex-wrap: wrap;
					overflow-y: scroll;
					justify-content: center;
					.product {
						background-color: #f5f5f5;
						border: 1px solid #f5f5f5;
						border-radius: 0.75em;
						cursor: pointer;
						width: 10em;
						&:hover {
							box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px,
								rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
								rgba(0, 0, 0, 0.09) 0px 16px 8px,
								rgba(0, 0, 0, 0.09) 0px 32px 16px;
						}
						.img {
							height: 7em;
							border-top-left-radius: 1em;
							border-top-right-radius: 1em;
							width: 100%;
						}
						.product-detail {
							color: #333333;
							padding: 0.5em;
							font-size: 0.85em;
							margin: 0.2em;
							.coin {
								margin-top: 0.8em;
								display: flex;
								gap: 0.3em;
								font-size: 0.9em;
								img {
									width: 1.3em;
									height: 1.3em;
								}
							}
						}
					}
				}
			}
		}

		::-webkit-scrollbar {
			display: none;
		}
		.ellipsis {
			display: -webkit-box;
			-webkit-line-clamp: 2;
			-webkit-box-orient: vertical;
			overflow: hidden;
			height: 2.75em;
		}
	`,
};

export default RedeemListStyles;
