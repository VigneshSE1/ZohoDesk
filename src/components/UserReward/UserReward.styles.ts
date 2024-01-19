import styled from "styled-components";
let $color1 = "#ffeffa";
let $color2 = "#fff5ed";
let $color3 = "#f0f1ff";
let $color4 = "#f3e8ff";
let $color5 = "#edfdff";
let $color6 = "#fffce8";
let $bottomColor1 = "#ff84df";
let $bottomColor2 = "#de8b43";
let $bottomColor3 = "#7880dd";
let $bottomColor4 = "#aa7eea";
let $bottomColor5 = "#52cedd";
let $bottomColor6 = "#d8b835";

const RewardStyles = {
	RewardContainer: styled.div`
		padding: 1.2em;
		.user-rewards {
			display: grid;
			grid-template-columns: 6.3em 6.3em 6.3em;
			gap: 1.5em;
		}

		.labels {
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 0.4em;
			h3 {
				font-weight: 500;
				font-size: x-large;
			}
			button {
				display: flex;
				background: none;
				border: none;
				font-size: medium;
				font-weight: 600;
				gap: 0.5em;
			}
		}
		.reward-border {
			text-align: center;
			box-sizing: unset !important;
			padding: 0.5em;

			img {
				width: 3em !important;
				height: 3.3em !important;
				&.default-reward {
					/* content: url("../../common/images/") !important; */
				}
			}
		}

		.reward {
			display: flex;
			flex-direction: column;
			font-size: medium;
			text-align: left;
			border-top-right-radius: 1em;
			border-top-left-radius: 1em;
			border-bottom-right-radius: 1em;
			border-bottom-left-radius: 1em;
			flex: 1 1 auto;
			/* width: 5em; */
			&.attained {
				opacity: 0.4 !important;
			}
			.reward-name {
				font-weight: 500;
				padding: 0.75em 1em;
				border-bottom-right-radius: 1em;
				border-bottom-left-radius: 1em;
				color: white;
				font-size: small;
				text-align: center;
				height: 2.4em;
				overflow-y: auto;
				&::-webkit-scrollbar {
					display: none !important;
				}
			}
		}
		.progamification-spinner {
			border: 0.3em solid #f3f3f3 !important;
			border-radius: 50% !important;
			border-top: 0.3em solid !important;
			/* border-top-color: var(--pro-gamify-bg-color) !important; */
			width: 30px !important;
			height: 30px !important;
			animation: spin 2s linear infinite;
			margin: 8em auto !important;
		}
		.msg {
			text-align: center;
			margin: 3em;
			color: var(--pro-gamify-bg-color);
		}

		@keyframes spin {
			0% {
				transform: rotate(0deg);
			}
			100% {
				transform: rotate(360deg);
			}
		}

		.color1 {
			background-color: ${$color1};
			.reward-name {
				background-color: ${$bottomColor1};
			}
		}

		.color2 {
			background-color: ${$color2};
			.reward-name {
				background-color: ${$bottomColor2};
			}
		}

		.color3 {
			background-color: ${$color3};
			.reward-name {
				background-color: ${$bottomColor3};
			}
		}

		.color4 {
			background-color: ${$color4};
			.reward-name {
				background-color: ${$bottomColor4};
			}
		}

		.color5 {
			background-color: ${$color5};
			.reward-name {
				background-color: ${$bottomColor5};
			}
		}
		.color6 {
			background-color: ${$color6};
			.reward-name {
				background-color: ${$bottomColor6};
			}
		}
	`,
};

export default RewardStyles;
