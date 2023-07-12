import {
	View,
	Text,
	StyleSheet,
	TextInput,
	Button,
	Appearance,
} from "react-native";
import React, { useState } from "react";

const AppearanceTRT = () => {
	const [name, setName] = useState(null);
	const [text, setText] = useState(null);

	const colorScheme = Appearance.getColorScheme();
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Enter the Name here </Text>
			<TextInput
				style={styles.input}
				placeholder="Enter here"
				onChangeText={(input) => setText(input)}
			/>
			<View style={styles.Button}>
				<Button
					title="Press"
					style={styles.Button}
					onPress={() => {
						setName(text);
					}}
				/>
				<Text>Your Name is {name}</Text>
			</View>
		</View>
	);
};

export default Appearance;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	Button: {
		margin: 10,
	},
	input: {
		borderColor: "black",
		borderWidth: 1,
		width: 150,
	},
	heading: {
		fontSize: 20,
		font: "bold",
	},
});
