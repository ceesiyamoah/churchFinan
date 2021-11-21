import React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import AppNavigator from './navigation/AppNavigator';

const theme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		primary: 'tomato',
		accent: 'yellow',
	},
};

export default function App() {
	return (
		<PaperProvider theme={theme}>
			<AppNavigator />
		</PaperProvider>
	);
}
