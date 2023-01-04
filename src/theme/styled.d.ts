import 'styled-components';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			'white-900': string;
			'purple-900': string;
			'purple-800': string;
      'purple-700': string;
			'purple-600': string;
      'purple-500': string;
			'purple-400': string;
		}
	}
}