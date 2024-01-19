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
const BillingFormStyles = {
    BillingModal: styled.div `
		font-family: "DM Sans", sans-serif;

		${modalWrap}
		border: #dedede;
		border: #dedede;
		.billing-form.modal-content {
			box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px,
				rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px,
				rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px,
				rgba(0, 0, 0, 0.07) 0px 32px 64px;
			padding: 2em !important;
			width: 25% !important;
			height: auto !important;
			margin: auto !important;
			background: white !important;
			border-radius: 0.7rem !important;
			color: black !important;
			overflow-y: scroll;
			min-width: 400px !important;
		}
		@mixin coin {
			display: flex;
			gap: 0.3em;
			font-size: 1em;
			font-weight: 500;
		}
		@mixin coin-img {
			width: 1.3em;
			height: 1.3em;
			// content: url("../../../../assets/icons/coins.png");
		}
		header {
			text-align: left;
			.error {
				color: #721c24;
				background-color: #f8d7da;
				border-color: #f5c6cb;
				padding: 1em;
			}
			.margin-y {
				margin-top: 1em;
				margin-bottom: 1em;
			}

			.back {
				display: flex;
				justify-content: space-between;
				width: 100%;
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
						border: 1px solid #dddddd;
						display: flex;
						gap: 0.5em;
						align-items: center;
						background: #efefef;
						border-radius: 1.4em;
						padding: 0.4em 0.5em;

						.img-width {
							width: 1.75em;
						}
					}
				}
			}
			h2 {
				font-size: 1.7em;
				font-weight: 700;
			}
		}
		form {
			text-align: left;
			.required {
				color: red;
			}

			.fname-lname {
				display: flex;
				gap: 2em;
			}

			.name {
				width: 100%;
				input {
					width: 100%;
					float: left;
					font-size: 1em;
				}
			}

			.error_message {
				color: #ff0000;
			}

			.input {
				margin-bottom: 1.2em;
				display: flex;
				justify-content: space-between;
				flex-direction: column;
				gap: 0.5em;
				label {
					span {
						margin-left: 0.2em;
					}
				}
				input {
					padding: 0.9em 0.7em;
					font-size: 0.8em;
				}
				textarea {
					height: 2.5em;
					padding: 0.9em 0.7em;
				}
				input,
				textarea {
					border: 1px solid #dedede;
					background-color: #fafafa;
					&.telephone {
						border-top-left-radius: 0;
						border-bottom-left-radius: 0;
						border-top-right-radius: 0.5em;
						border-bottom-right-radius: 0.5em;
						width: 100%;
					}
					&:focus {
						outline: none;
					}
					&::placeholder {
						color: #a2a2a2;
						opacity: 1;
					}
				}
				select {
					&.country-code {
						border-top-left-radius: 0.5em;
						border-bottom-left-radius: 0.5em;
						border-top-right-radius: 0;
						border-bottom-right-radius: 0;
						border: 1px solid #dedede;
						background-color: #fafafa;
						width: 5em;
						font-weight: 400;
						line-height: 1;
					}
					&:focus {
						outline: none;
					}
				}
			}
			input:not(.telephone) {
				border-radius: 0.5em;
			}

			button {
				display: flex;
				gap: 0.3em;
				align-items: center;
				background: #f5da48;
				border-radius: 1.5em;
				padding: 0.7em 1em;
				outline: none;
				border: none;
				color: #333333;
				font-weight: 700;
				font-size: 0.875em;
				margin-top: 1.5em;
				cursor: pointer;
				&.loader {
					opacity: 0.5;
				}
				span {
					margin-left: 1em;
					&.arrow {
						content: url("../../../../assets/icons/forward.png");
					}
					&.loader {
						border: 0.2em solid black !important;
						border-radius: 50% !important;
						width: 1em !important;
						height: 1em !important;
						animation: spin 2s linear infinite;
					}
				}
			}
		}

		@media (max-width: 700px) {
			.name {
				grid-template-columns: auto;
			}
		}

		.input-group {
			display: flex;
			height: 45px;
		}
		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}
		.cancel {
			cursor: pointer;
		}
	`,
};
export default BillingFormStyles;
