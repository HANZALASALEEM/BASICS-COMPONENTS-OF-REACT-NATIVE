import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";

export default function DismissKeyboardTRT() {
	const [name, setName] = useState(null);
	const [text, setText] = useState(null);
	return (
		<TouchableWithoutFeedback
			onPress={() => {
				Keyboard.dismiss();
			}}
		>
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
				<StatusBar style="auto" />
			</View>
		</TouchableWithoutFeedback>
	);
}

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
