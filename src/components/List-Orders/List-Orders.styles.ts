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
const ListOrderStyles = {
	OrderModal: styled.div`
		${modalWrap}
		border: #dedede;
		.list-order.modal-content {
			box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
				rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
				rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
				rgba(0, 0, 0, 0.07) 0px 32px 64px;
			width: 470px !important;
			height: 690px !important;
			overflow: hidden;
			margin: auto !important;
			background: white !important;
			border-radius: 0.7rem !important;
			color: black !important;
			min-width: 400px !important;
		}
		.header {
			gap: 1em;
			font-size: 1.875em;
			padding: 1em;
			.cancel {
				cursor: pointer;
			}
		}
		.font-size {
			font-size: 1.875rem;
			color: #141414;
			font-weight: bold;
			margin: 0.8em 0;
		}

		img {
			border-radius: 1em;
			width: 4.5em;
			height: 4.5em;
			height: auto;
		}

		.scrollable-container {
			width: 100%;
			background-color: #f4f4f4;
			overflow-y: scroll;
			height: inherit;
			border-top-left-radius: 2em;
			border-top-right-radius: 2em;
		}

		::-webkit-scrollbar {
			width: 0;
			background: transparent;
		}

		.flex-items {
			justify-content: space-between;
		}

		.view-order-button {
			background-color: #e8e8e8;
			border-radius: 2rem;
			display: flex;
			align-items: center;
			font-size: 0.875em;
			padding-right: 2em;
			padding-left: 2em;
			padding-top: 0.5em;
			padding-bottom: 0.5em;
			border: none;
			cursor: pointer;
		}

		.product-name {
			font-family: "Poppins", sans-serif;
			display: flex;
			flex-direction: column;
			gap: 1em;
			font-size: 1em;
		}

		.page-content {
			display: flex;
			flex-direction: row;
			gap: 3em;
			border-bottom: 1px solid #e8e8e8;
			padding: 2em;
		}

		.image-name {
			display: flex;
			gap: 1em;
		}

		.margin-right {
			margin-right: 1em;
		}
	`,
};

export default ListOrderStyles;
