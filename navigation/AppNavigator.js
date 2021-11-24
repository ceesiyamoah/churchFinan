import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AuthScreen from '../screens/AuthScreen';
import Overview from '../screens/Overview';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					headerTitleAlign: 'center',
					headerTitleStyle: {
						fontWeight: 'bold',
					},
				}}
			>
				<Stack.Screen
					name='Auth'
					component={AuthScreen}
					options={{ headerShown: false }}
				/>
				<Stack.Screen name='Overview' component={Overview} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppNavigator;
