import React, { useState } from "react";
import {
	TextInput,
	StyleSheet,
	View,
	Button,
	Alert,
	ToastAndroid,
} from "react-native";

export default function AlertTRT() {
	const [age, setAge] = useState(0);
	const [name, setName] = useState(null);

	const pressable = () => {
		if (age < 18) {
			Alert.alert("Sorry!", `${name} you can not Drive`, [
				{
					text: "Agree",
					onPress: () => {
						ToastAndroid.show("Thanks Brother", ToastAndroid.LONG);
					},
				},
				{
					text: "Not Agree",
					onPress: () => {
						ToastAndroid.show("Your fine is 1000 RS", ToastAndroid.LONG);
					},
				},
			]);
		} else {
			Alert.alert("Yep!", `${name} you can Drive`);
		}
	};
	return (
		<View style={styles.container}>
			<TextInput
				style={styles.input}
				placeholder="Enter your Name"
				onChangeText={(text) => {
					setName(text);
				}}
			/>

			<TextInput
				style={styles.input}
				placeholder="Enter your Age"
				onChangeText={(text) => {
					setAge(text);
				}}
			/>
			<View style={styles.button}>
				<Button
					title="Can i Drive ?"
					onPress={() => {
						pressable();
					}}
				/>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		margin: 10,
	},
	input: {
		backgroundColor: "yellow",
		marginTop: 20,
		height: 60,
		borderColor: "black",
		borderWidth: 1,
		padding: 10,
	},
	button: {
		marginTop: 20,
		alignItems: "center",
		justifyContent: "center",
	},
});
