import styled from "styled-components";
const AchievementStyles = {
    Container: styled.div `
		padding: 0.6em;
		.card {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
			> * {
				margin: 0.75em 0;
				flex-basis: calc(45% - 1.2em);
			}
		}
	`,
};
export default AchievementStyles;
