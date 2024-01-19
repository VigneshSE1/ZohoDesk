import styled from "styled-components";
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
const WalletStyles = {
	WalletModal: styled.div`
		${modalWrap}
		font-family: "DM Sans", sans-serif;
		border: #dedede;
		.wallet.modal-content {
			box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
				rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
				rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
				rgba(0, 0, 0, 0.07) 0px 32px 64px;
			padding: 1em 0 0 !important;
			width: 480px !important;
			height: 650px !important;
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
					justify-content: space-between;
					width: 100%;
					.wallet {
						display: flex;
						align-items: center;
						gap: 0.9em;
						button {
							border: none;
							background: none;
							color: #a2a2a2;
							letter-spacing: 0.5px;
							font-size: 0.9em;
							cursor: pointer;
						}
						.order {
							display: flex;
							gap: 7px;
							border: 1px solid #dddddd;
							background: #efefef;
							border-radius: 1.4em;
							padding: 0.4em 0.5em;
							color: black;
						}
						.redeem {
							display: flex;
							gap: 7px;
							border: 1px solid #dddddd;
							background: #efefef;
							border-radius: 1.4em;
							padding: 0.4em 0.5em;
							color: black;
						}
					}
				}
			}
			.back {
				cursor: pointer;
			}
			h2 {
				font-weight: 700;
				font-size: 2em;
				letter-spacing: 0.75px;
				margin-top: 0.5em;
				margin-left: 0.8em;
			}

			.wallet-coins {
				font-size: 40px;
				display: flex;
				align-items: center;
				justify-content: center;
				padding-bottom: 0.7em;
				padding-top: 0.3em;
				.coin {
					align-items: center;
					display: flex;
					justify-content: center;
					gap: 9px;
					border: 1px solid #dddddd;
					background: #efefef;
					border-radius: 2em;
					padding: 1em 1em;
					color: black;
					.img {
						width: 3em;
					}
					.coins {
						font-weight: 700;
						font-size: 1.5em;
					}
				}
			}
			.transaction-history {
				background-color: #f4f4f4;
				width: 100%;
				border-radius: 1.5rem !important;
				text-align: left;
				overflow-y: scroll;
				height: 430px;
				h2 {
					padding: 0.5em 1em;
					font-weight: 700;
					font-size: 1.5em;
				}
			}
			.list-product {
				display: flex;
				align-items: center;
				padding: 1em 0.9em 1em 0.5em;
				justify-content: space-between;
				flex-direction: column;

				.products {
					display: flex;
					width: 100%;
					border-bottom: 1px solid #e8e8e8;
					.product-details {
						display: flex;
						gap: 1em;
						width: 100%;
						padding: 1em 1em;
						.image {
							width: 6em;
							height: 6em;
							border-radius: 8px;
						}
						.product-name {
							font-size: 1.2em;
							font-weight: 500;
						}
					}
					.coin-count {
						color: green;
						font-size: 1.2em;
						font-weight: 500;
						padding: 1em 1em;
					}
				}
			}
		}
		::-webkit-scrollbar {
			width: 3px;
		}

		::-webkit-scrollbar-track {
			background: #f1f1f1;
		}

		::-webkit-scrollbar-thumb {
			background: #888;
			border-radius: 6px;
		}
		::-webkit-scrollbar-thumb:hover {
			background: #555;
		}
	`,
};

export default WalletStyles;
