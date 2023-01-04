import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		font-family: 'Preahvihear', sans-serif;
	}

	button {
		border: none;
		background-color: transparent;
		cursor: pointer;
	}

	a {
		text-decoration: none;
	}
`;

export { GlobalStyle };
