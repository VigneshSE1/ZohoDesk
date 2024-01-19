import styled from "styled-components";
import closeImg from "../../common/images/close.jpg";
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
const RewardInfoStyles = {
    RewardModal: styled.div `
		font-family: "DM Sans", sans-serif;

		${modalWrap}
		.modal-content {
			letter-spacing: 1.5px;
			margin: 2.5em auto auto !important;
			background: white !important;
			border-radius: 1.5rem !important;
			color: black !important;
			width: 40% !important;
			height: 60%;
			min-width: 400px !important;
			::-webkit-scrollbar {
				display: none !important;
			}
			.header {
				margin: 2.5em auto 1.2em 3.5em;
				display: flex !important;
				gap: 1.3em !important;
				align-items: flex-start !important;
				flex-direction: column;

				span.heading-1 {
					font-weight: 600 !important;
					font-size: 1.5em;
				}
				img.cancel {
					content: url(${closeImg});
					cursor: pointer;
					width: 2em;
					height: 2em;
				}
			}
			.table-container {
				overflow-y: scroll;
				height: 25em;
				border-bottom-right-radius: 1rem;
				border-bottom-left-radius: 1rem;
				&.noRewards {
					text-align: center;
					padding: 6em 0;
				}
			}
			table {
				border-collapse: collapse;
				margin: 1em 0;
				background-color: #f4f4f4;
				width: 100%;
				border-radius: 0.5em;
				border-top-left-radius: 2em;
				border-top-right-radius: 2em;
				border-bottom-left-radius: 1rem !important;
				border-bottom-right-radius: 1rem !important;
				font-size: 0.9em;
			}

			thead tr {
				font-size: 1.2em;
				background-color: #ebebeb;
				&:first-child {
					border-top-left-radius: 2em;
				}
				&:last-child {
					border-top-right-radius: 2em;
				}
				th {
					text-align: center;
					&:first-child {
						border-top-left-radius: 2em;
					}
					&:last-child {
						border-top-right-radius: 2em;
					}
				}
			}

			th,
			td {
				padding: 5px;
				.center {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 0.75em;
					&.desc {
						justify-content: left;
						padding-left: 20px;
					}
				}
				.rewards {
					display: flex !important;
					gap: 0.5em !important;
					align-items: center !important;
					justify-content: center;
					img {
						width: 1.5em !important;
						height: 1.5em !important;
					}
					div.lookupValue {
						white-space: nowrap !important;
						overflow: hidden !important;
						text-overflow: ellipsis !important;
					}
				}
				.description {
					text-overflow: ellipsis !important;
					overflow: hidden;
					max-width: 15em !important;
					white-space: nowrap !important;
				}
			}

			tbody {
				overflow: auto;
				width: 100%;
				height: 400px;
				border-bottom-left-radius: 1.5rem !important;
				border-bottom-right-radius: 1.5rem !important;
				td {
					text-align: left;
					padding-left: 20px;

					border-right: solid 1px #cecdcd;
					&:last-child {
						border: none;
					}
				}
			}

			th {
				padding-top: 30px;
				padding-bottom: 30px;
			}

			.rewards {
				display: flex !important;
				gap: 0.5em !important;
				align-items: center !important;
				img {
					width: 1.5em !important;
					height: 1.5em !important;
				}
				div.lookupValue {
					margin: 1em 0.3em !important;
					max-width: 110px !important;
					white-space: nowrap !important;
					overflow: hidden !important;
					text-overflow: ellipsis !important;
				}
			}
			.description {
				text-overflow: ellipsis !important;
				overflow: hidden;
				max-width: 15em !important;
				white-space: nowrap !important;
				text-align: left;
			}
		}
	`,
};
export default RewardInfoStyles;
