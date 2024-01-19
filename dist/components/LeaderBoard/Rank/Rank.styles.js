import styled from "styled-components";
import avatar from "../../../common/images/avatar.png";
const rankCircle = `position: absolute;
border-radius: 50%;
background-color: #ebebeb;
padding: 1px 7px;
font-size: small;
border: 2px solid white;
font-weight: 500;
bottom: 0%;
right: 29%;`;
const ellipsis = `
text-align: center;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
width: 6em;`;
const RankStyles = {
    Container: styled.div `
		.rank-holder {
			margin: 2em auto;
			height: 12em;
			display: flex;
			justify-content: space-evenly;
			font-weight: 500;

			.profile {
				width: 4.5em;
				height: 4.5em;
				background-size: cover !important;
				border-radius: 50% !important;
				&.highlighted {
					border: 2px solid #fa5050;
				}
				&.default-avatar {
					content: url(${avatar});
				}
			}

			.rank-2 {
				min-width: 0;
				align-self: flex-end;
				align-items: center;
				display: flex;
				flex-direction: column;
				.dp {
					position: relative;
					span {
						${rankCircle}
					}
				}
				.username {
					${ellipsis}
				}
			}
			.rank-1 {
				align-self: flex-start;
				align-items: center;
				display: flex;
				flex-direction: column;
				.dp {
					position: relative;
					span {
						${rankCircle}
					}
				}
				.username {
					${ellipsis}
				}
			}
			.rank-3 {
				align-self: flex-end;
				align-items: center;
				display: flex;
				flex-direction: column;
				.dp {
					position: relative;
					span {
						${rankCircle}
					}
				}
				.username {
					${ellipsis}
				}
			}
			.score {
				display: flex;
				gap: 0.2em;
				lib-bolt {
					display: inherit;
				}
			}
		}
		.rank-holder .rank-1,
		.rank-holder .rank-2,
		.rank-holder .rank-3 {
			opacity: 0;
			transform: translateY(-20px);
			transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
		}

		.rank-holder .rank-3 {
			animation: fadeInAndSlide 0.5s ease-in-out 0.3s forwards;
		}

		.rank-holder .rank-2 {
			animation: fadeInAndSlide 0.5s ease-in-out 1.3s forwards;
		}

		.rank-holder .rank-1 {
			animation: fadeInAndSlide 0.5s ease-in-out 2.3s forwards;
		}

		@keyframes fadeInAndSlide {
			0% {
				opacity: 0;
				transform: translateY(-20px);
			}
			100% {
				opacity: 1;
				transform: translateY(0);
			}
		}
	`,
};
export default RankStyles;
