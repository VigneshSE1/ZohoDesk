import styled from "styled-components";

const GlobalStyles = {
	Scroll: styled.div`
		font-family: "DM Sans", sans-serif;
		height: calc(100vh - 10em) !important;
		overflow: auto !important;
		-ms-overflow-style: none !important;
		scrollbar-width: none !important;
		&::-webkit-scrollbar {
			display: none !important;
		}
	`,
	DMFonts: styled.div`
		@import url("https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,100&family=Indie+Flower&display=swap");
	`,
};

export default GlobalStyles;
