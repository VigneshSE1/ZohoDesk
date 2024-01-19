import styled from "styled-components";
import defaultCoinImg from "../../common/images/coins.png";
import orderImg from "../../common/images/order.png";
import redeemPng from "../../common/images/redeem.png";
const CoinStyles = {
	CoinHeader: styled.div`
		display: flex;
		flex-direction: column;
		background-color: #fff6e6;
		border-radius: 1.25em;
		padding: 1em;
		gap: 1.3em;
		align-items: flex-start;
		.proheader {
			font-weight: bolder;
			font-size: 1.5em;
		}

		.content {
			display: flex;
			gap: 0.5em;
			align-items: center;
			img.redeem {
				content: url(${redeemPng});
			}
			img.coins {
				width: 2.1em;
				height: 2.1em;
				&.default-coin {
					content: url(${defaultCoinImg});
				}
			}
			img.orders {
				content: url(${orderImg});
			}
		}
		div.nav {
			display: flex;
			gap: 0.3em;
			a {
				cursor: pointer;
				display: flex;
				font-size: 0.85em;
				gap: 0.5em;
				align-items: center;
			}
			.forward svg {
				fill: #898989;
				width: 0.75em;
			}
		}
	`,
};

export default CoinStyles;
