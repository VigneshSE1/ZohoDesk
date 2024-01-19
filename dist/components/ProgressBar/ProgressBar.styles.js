import styled from "styled-components";
const ProgressStyles = {
    ProProgressBar: styled.div `
		padding: 1em 0.7em;
		background-color: #fff6e6;
		border-radius: 15px;
		margin-top: 1em;
	`,
    ProgresBarHeader: styled.div `
		display: flex;
		justify-content: space-between;
		margin: 1em 0px;
	`,
    ProgressHeading: styled.div `
		font-size: 1.3em;
		font-size: 1.2em;
		font-weight: bold;
	`,
    ProgressBarFooter: styled.div `
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 0.9em;
		color: #807f7f;

		.leaderBoard {
			display: flex;
			align-items: center;
			gap: 0.2em;
			cursor: pointer;
		}
	`,
};
export default ProgressStyles;
