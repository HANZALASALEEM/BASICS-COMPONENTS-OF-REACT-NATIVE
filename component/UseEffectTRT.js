import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, Alert } from "react-native";
export default function UseEffectTRT() {
	const [number, setNumber] = useState(0);
	useEffect(() => {
		if (number > 5) {
			Alert.alert("Alert", "Your counter is greater than 5");
		}
	});
	return (
		<View>
			<View>
				<Text style={styles.number}>{number}</Text>
			</View>
			<View>
				<Button
					title="counter"
					onPress={() => {
						setNumber(number + 1);
					}}
				/>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	number: {
		margin: 30,
		fontSize: 53,
		fontWeight: "bold",
		color: "red",
	},
});
