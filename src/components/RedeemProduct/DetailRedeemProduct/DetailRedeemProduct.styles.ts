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
const ProductStyles = {
	ProductModal: styled.div`
		font-family: "DM Sans", sans-serif;

		${modalWrap}
		border: #dedede;
		.detail-product.modal-content {
			box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
				rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
				rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
				rgba(0, 0, 0, 0.07) 0px 32px 64px;
			padding: 2em !important;
			width: 21% !important;
			height: 650px !important;
			/* overflow-x: scroll; */
			margin: auto !important;
			background: white !important;
			border-radius: 0.7rem !important;
			color: black !important;
			// overflow-y: scroll !important;
			text-align: left;
			min-width: 400px !important;
			.img-width {
				width: 1.75rem;
				height: 1.75rem;
			}
			.back {
				cursor: pointer;
			}
			header {
				text-align: left;
				.close {
					display: flex;
					width: 100%;
					justify-content: space-between;
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
							border: 1px solid #dddddd;
							background: #efefef;
							border-radius: 1.4em;
							padding: 0.4em 0.5em;
						}
					}
				}
				h2 {
					font-weight: 700;
					font-size: 2em;
					letter-spacing: 0.75px;
					margin-top: 0.5em;
				}
			}
			section {
				text-align: left;
				margin: 1.5em auto;
				h2 {
					font-size: 1.3em;
					font-weight: 700;
				}
				.img-product {
					width: 100%;
					height: 15em;
				}

				.coin {
					display: flex;
					align-items: center;
					gap: 0.5em;

					@include coin;
					img {
						@include coin-img;
					}
				}

				.validity {
					margin-top: 0.8em;
					display: flex;
					flex-direction: column;
					gap: 0.5em;
					label {
						color: #a2a2a2;
					}
				}
				button {
					background: #f5da48;
					border-radius: 1.5em;
					padding: 1em;
					outline: none;
					border: none;
					color: #333333;
					font-weight: 800;
					margin-top: 1.5em;
					cursor: pointer;
					display: flex;
					align-items: center;
					gap: 3em;
				}
			}
		}
	`,
};

export default ProductStyles;
