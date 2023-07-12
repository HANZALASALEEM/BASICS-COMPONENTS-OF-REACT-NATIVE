import React, { useState } from "react";
import {
	StyleSheet,
	View,
	Text,
	Dimensions,
	TextInput,
	Button,
	Modal,
} from "react-native";

export default function ModelComponentTRT() {
	const [age, setAge] = useState(0);
	const [modal, setModal] = useState(false);
	return (
		<View style={styles.container}>
			<View style={styles.lable}>
				<Text style={styles.heading}>AI Application</Text>
			</View>
			<Text style={{ fontSize: 22 }}>Best AI App ...</Text>
			<Text style={{ fontSize: 18 }}>
				Give me some information about you. I tell about your Personality
			</Text>
			<TextInput
				style={styles.input}
				placeholder="Enter your Age"
				onChangeText={(text) => {
					setAge(text);
				}}
			/>
			<Button
				title="Press"
				onPress={() => {
					setModal(true);
				}}
			/>
			<Modal visible={modal}>
				<View style={styles.modal}>
					<Text style={{ fontSize: 18 }}>Your Age is {age}</Text>
				</View>
				<Button
					title="Go back"
					onPress={() => {
						setModal(false);
					}}
				/>
			</Modal>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		marginTop: 10,
		backgroundColor: "gray",
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	lable: {
		backgroundColor: "#f5f5f5",
		alignItems: "center",
		justifyContent: "center",
		//width: Dimensions.screen(),
	},
	heading: {
		fontSize: 33,
	},
	input: {
		borderWidth: 1,
		width: 330,
		marginTop: 20,
		height: 40,
		backgroundColor: "#f5f5f5",
	},
	modal: {
		backgroundColor: "#f5f5f5",
		alignItems: "center",
		justifyContent: "center",
		flex: 1,
	},
});
