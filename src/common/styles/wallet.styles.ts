import styled from "styled-components";

const coin = ` display: flex;
  gap: 0.3em;
  font-size: 1em;
  font-weight: 500;
`;
const coinImg = ` width: 1.3em;
height: 1.3em;`;
const WalletStyles = {
	Container: styled.div`
		display: flex;
		align-items: center;
		gap: 0.5em;
		button {
			border: none;
			background: none;
			color: #a2a2a2;
			letter-spacing: 0.5px;
			font-size: 1.1em;
			cursor: pointer;
		}
		.coin {
			border: 1px solid #dddddd;
			background: #efefef;
			border-radius: 1.4em;
			padding: 0.4em 0.5em;
			${coin}
			img {
				${coinImg}
			}
		}
	`,
};

export default WalletStyles;
