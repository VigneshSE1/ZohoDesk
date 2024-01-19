import styled from "styled-components";

const RedeemStyles = {
	RedeemContainer: styled.div`
		height: 120px;
		width: 150px;
		padding: 10px;
		background-color: #fff6e6;
		border-radius: 15px;
		margin-top: 10px;
		.redeem-balance {
			display: flex;
			gap: 0.5em;
			margin: 0.8em 0;
		}

		.redeem-heading {
			text-align: left;
			font-size: 1.2em;
			font-weight: bold;
		}
		button {
			outline: none;
			border: none;
			background: none;
			cursor: pointer;
		}
		.redeem-footer {
			display: flex;
			align-items: center;
			font-size: 0.7em;
			gap: 1em;
			margin: 1em 0;
			margin-top: 1.5em;
			color: rgba(51, 51, 51, 0.5);
		}
	`,
};

export default RedeemStyles;
