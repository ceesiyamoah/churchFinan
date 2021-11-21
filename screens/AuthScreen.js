import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button, IconButton, TextInput } from 'react-native-paper';
import { useState } from 'react/cjs/react.production.min';

const AuthScreen = () => {
	const [visiblePassword, setVisiblePassword] = useState(false);
	return (
		// <View style={styles.screen}>
		<ImageBackground
			source={require('../assets/background.jpg')}
			style={{ width: '100%', height: '100%', ...styles.screen }}
		>
			<View
				style={{ width: '100%', alignItems: 'center', marginBottom: '40%' }}
			>
				<TextInput
					mode='flat'
					label='Email'
					style={{ height: 60, width: '80%', marginBottom: 10 }}
					selectionColor='blue'
					outlineColor='green'
					activeOutlineColor='pink'
				/>
				<TextInput
					mode='flat'
					label='Password'
					style={{ height: 60, width: '80%' }}
					selectionColor='blue'
					outlineColor='green'
					activeOutlineColor='pink'
					secureTextEntry={!visiblePassword}
					right={
						<TextInput.Icon
							icon={visiblePassword ? 'eye-slash' : 'eye'}
							onPress={() => {
								setVisiblePassword((cur) => !cur);
							}}
						/>
					}
				/>
				<View>
					<Button mode='contained' color='blue'>
						Login
					</Button>
				</View>
			</View>
		</ImageBackground>
		// </View>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
	},
});
export default AuthScreen;
