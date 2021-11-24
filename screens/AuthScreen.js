import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

const AuthScreen = ({ navigation }) => {
	const [visiblePassword, setVisiblePassword] = useState(false);
	return (
		<ImageBackground
			source={require('../assets/background.jpg')}
			style={styles.screen}
		>
			<View style={styles.form}>
				<TextInput
					mode='flat'
					label='Email'
					style={{ ...styles.input, marginBottom: 10 }}
					selectionColor='blue'
					outlineColor='green'
					activeOutlineColor='pink'
					autoCapitalize='none'
				/>
				<TextInput
					mode='flat'
					label='Password'
					style={styles.input}
					selectionColor='blue'
					outlineColor='green'
					activeOutlineColor='pink'
					secureTextEntry={!visiblePassword}
					autoCapitalize='none'
					right={
						<TextInput.Icon
							icon={visiblePassword ? 'eye-off' : 'eye'}
							onPress={() => {
								setVisiblePassword((cur) => !cur);
							}}
						/>
					}
				/>
				<View style={styles.buttonHolder}>
					<Button
						mode='contained'
						color='blue'
						onPress={() => {
							navigation.navigate('Overview');
						}}
					>
						Login
					</Button>
					<Button mode='text' color='white'>
						Switch To Sign Up
					</Button>
				</View>
			</View>
		</ImageBackground>
	);
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		width: '100%',
		height: '100%',
	},
	form: {
		width: '100%',
		alignItems: 'center',
		marginBottom: '40%',
	},
	input: { height: 60, width: '80%' },
	buttonHolder: {
		marginTop: 10,
		flexDirection: 'row',
	},
});
export default AuthScreen;
