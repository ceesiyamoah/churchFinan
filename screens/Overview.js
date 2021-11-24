import React from 'react';
import { View, StyleSheet, Text, Dimensions } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { commarize } from '../utils/functions';
const chartConfig = {
	backgroundGradientFrom: '#1E2923',
	backgroundGradientFromOpacity: 0,
	backgroundGradientTo: '#08130D',
	backgroundGradientToOpacity: 0.5,
	color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
	strokeWidth: 2, // optional, default 3
	barPercentage: 0.5,
	useShadowColorFromDataset: false, // optional
};
const screenWidth = Dimensions.get('window').width;

const Overview = () => {
	const data = [
		{
			name: 'Paid',
			number: 250,
			color: 'green',
			legendFontColor: '#7F7F7F',
			legendFontSize: 15,
		},
		{
			name: 'Unpaid',
			number: 100,
			color: 'red',
			legendFontColor: '#7F7F7F',
			legendFontSize: 15,
		},
	];
	return (
		<View style={styles.screen}>
			<View style={styles.textHolder}>
				<Text style={styles.smallText}>Total Amount Paid</Text>
				<Text style={styles.bigText}>
					ȼ {commarize(Number(123333).toFixed(2))}
				</Text>
			</View>
			<PieChart
				accessor='number'
				data={data}
				width={screenWidth}
				chartConfig={chartConfig}
				height={250}
				absolute
				paddingLeft='10'
			/>
			{/* cards view recent transactions, update member payment, send notification, View all payments, add new member */}
		</View>
	);
	P;
};
const styles = StyleSheet.create({
	screen: {
		flex: 1,
		// justifyContent: 'center',
		alignItems: 'center',
	},
	textHolder: {
		textAlign: 'left',
		width: '100%',
		padding: 20,
	},
	smallText: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	bigText: {
		fontSize: 30,
	},
});
export default Overview;
