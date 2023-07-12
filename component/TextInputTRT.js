import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	Appearance,
} from "react-native";
import PropsTRT from "./PropsTRT";

export default function TextInputTRT() {
	const [name, setName] = useState(null);
	const [text, setText] = useState(null);

	const colorScheme = Appearance.getColorScheme();
	return (
		<View
			style={[
				styles.container,
				{ backgroundColor: colorScheme === "light" ? "White" : "gray" },
			]}
		>
			<Text
				style={[
					styles.heading,
					{ color: colorScheme === "light" ? "black" : "white" },
				]}
			>
				Enter the Name here{" "}
			</Text>
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
			<PropsTRT Name={name} />
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,

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
