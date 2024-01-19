import styled from "styled-components";
import avatar from "../../common/images/avatar.png";

const selectedRow = "#fa5050";

const LeaderBoardStyles = {
	Container: styled.div`
		height: 95%;
		.not-found {
			text-align: center;
			margin-top: 1em;
		}
		.selected-row {
			background: ${selectedRow};
		}
		.container {
			height: calc(60vh - 5em);
			overflow-y: scroll;
			&::-webkit-scrollbar {
				display: none !important;
			}
		}
		.scroll-btn {
			position: sticky;
			bottom: 0.5em;
			width: max-content;
			&.visible {
				display: inline;
			}
			&.invisible {
				display: none;
			}
			button {
				margin-left: auto;
				margin-right: 1em;
				border-radius: 4em;
				padding: 1em;
				background: black;
				color: white;
				border: none;
				display: flex;
				align-items: center;
				gap: 1em;
				cursor: pointer;

				.profile {
					width: 2.5em !important;
					height: 2.5em !important;
					background: white !important;
					background-size: cover !important;
					border-radius: 50% !important;

					&.default-avatar {
						content: url(${avatar});
					}
				}
			}
		}

		.leader-board {
			border-collapse: collapse;
			border-spacing: 0;
			font-weight: 500;
			font-size: medium;
			tr {
				border: 1.5px solid #ebebeb;

				&.selectedRow {
					border: 1.5px solid ${selectedRow};
					outline: thin solid ${selectedRow};
					background-color: #fdeaea;
					.rank .circle {
						background: ${selectedRow};
						color: white;
					}
				}

				td {
					width: 10.33%;
					padding: 0.7em 1em;
					&.rank .circle {
						justify-content: center;
						align-items: center;
						border-radius: 50%;
						text-align: center;
						display: flex;
						background: #ebebeb;
						padding: 0.2em 0.9px;
						font-size: 0.9em;
						width: 2em;
						height: 2em;
					}
					&:nth-child(3) {
						width: 33.33%;
						padding: 10px;
						text-align: left;
						div {
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
							width: 10em;
						}
					}
					&:nth-child(4) {
						text-align: right;
					}
					&.avatar {
						.profile {
							width: 3em !important;
							height: 2.75em !important;
							background-size: cover !important;
							border-radius: 50% !important;

							&.default-avatar,
							&.on-img-error {
								content: url(${avatar});
								width: 3em;
								height: 3em;
							}
						}
					}
					.score {
						display: flex;
						gap: 0.4em;
						lib-bolt {
							display: inherit;
						}
					}
				}
			}
		}
	`,
};

export default LeaderBoardStyles;
