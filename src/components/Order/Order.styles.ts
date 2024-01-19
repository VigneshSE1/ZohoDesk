import styled from "styled-components";

const OrderStyles = {
	OrderContainer: styled.div`
		font-family: "DM Sans", sans-serif;

		height: 120px;
		width: 150px;
		padding: 10px;
		background-color: #fff6e6;
		border-radius: 15px;
		margin-top: 10px;

		.order-balance {
			display: flex;
			gap: 0.5em;
			margin: 0.8em 0;
		}

		.order-heading {
			text-align: left;
			font-size: 1.2em;
			font-weight: bold;
		}

		.order-footer {
			display: flex;
			align-items: center;
			font-size: 0.7em;
			gap: 1em;
			margin: 1em 0;
			margin-top: 1.5em;
			color: rgba(51, 51, 51, 0.5);
			cursor: pointer;
			button {
				cursor: pointer;
				border: none;
				background: none;
				color: rgba(51, 51, 51, 0.5);
			}
		}
	`,
};

export default OrderStyles;
