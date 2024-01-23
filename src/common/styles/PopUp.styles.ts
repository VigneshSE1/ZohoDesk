import styled from "styled-components";

const coin = ` display: flex;
  gap: 0.3em;
  font-size: 1em;
  font-weight: 500;
`;
const coinImg = ` width: 1.3em;
height: 1.3em;`;
const PopUpStyles = {
	Container: styled.div`
		@keyframes fadeIn {
			from {
				opacity: 0;
				transform: translateY(-20px);
			}
			to {
				opacity: 1;
				transform: translateY(0);
			}
		}
		.popup-overlay {
			/* Your existing styles here */
			animation: fadeIn 0.2s ease-in-out; /* Adjust the duration and timing function as needed */
		}
	`,
};

export default PopUpStyles;
