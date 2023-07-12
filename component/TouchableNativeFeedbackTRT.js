import { View, Text, TouchableNativeFeedback, StyleSheet } from "react-native";
import React from "react";

const TouchableNativeFeedbackTRT = () => {
	return (
		<View style={styles.container}>
			<TouchableNativeFeedback>
				<View style={styles.inner}>
					<Text>TouchableNativeFeedbackTRT</Text>
				</View>
			</TouchableNativeFeedback>
		</View>
	);
};

export default TouchableNativeFeedbackTRT;
const styles = StyleSheet.create({
	container: {
		marginTop: 40,
	},
	inner: {
		width: "100%",
		height: "70%",
		borderColor: "black",
		borderWidth: 3,
	},
});
