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
const OrderHistoryStyles = {
    OrderHistoryModal: styled.div `
		font-family: "DM Sans", sans-serif;

		${modalWrap}
		border: #dedede;
		.modal-order-content {
			box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
				rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
				rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
				rgba(0, 0, 0, 0.07) 0px 32px 64px;
			padding: 1em 0 0 !important;
			width: 480px !important;
			margin: auto !important;
			background: white !important;
			border-radius: 0.7rem !important;
			color: black !important;
			min-width: 400px !important;
		}
		.header {
			margin-left: 1.5em;
		}
		.font-size {
			font-size: 1.875rem;
			color: #141414;
			margin: 1em 0;
			font-weight: bold;
		}

		.scrollable-order-container {
			background-color: #f4f4f4;
			display: flex;
			flex-direction: column;
			border-radius: 1em;
			padding: 2em 2em 2em 2em;
		}

		::-webkit-scrollbar {
			width: 0;
			background: transparent;
		}

		.img-order {
			width: 60%;
			padding: 2em 0em 0em 0em;
		}

		.ordered-product-name {
			font-weight: bold;
			color: #333333;
			font-size: 1.4375em;
			opacity: 1;
		}
		.cancel {
			cursor: pointer;
		}

		.font-color {
			color: #848484;
			opacity: 1;
		}

		.order-details {
			display: flex;
			flex-direction: row;
			padding-top: 2em;
			padding-bottom: 2em;
			border-bottom: 2px solid #f4f4f4;
		}

		.margin-x-order {
			margin: 0em 1em 0em 3em;
		}

		.margin-x-transaction {
			margin: 0em 1em 0em 1em;
		}
	`,
};
export default OrderHistoryStyles;
