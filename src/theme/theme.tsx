import { ReactNode } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

type Props = {
	children: ReactNode;
}

const Theme: React.FC<Props> = ({ children }) => {
	const styles: DefaultTheme = {
		colors: {
			'white-900': '#FFFFFF',
			'purple-900': '#11071F',
			'purple-800': '#1A0B2E',
      'purple-700': '#2C1250',
			'purple-600': '#caaff0',
			'purple-500': '#7127BA',
			'purple-400': '#693B93'
		}
	}

	return (
		<ThemeProvider theme={styles}>
			{children}
		</ThemeProvider>
	);
}

export { Theme };







