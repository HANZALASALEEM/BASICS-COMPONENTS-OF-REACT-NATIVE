import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";

const TransformTRT = () => {
	return (
		<ScrollView style={styles.scroll}>
			<View style={styles.box}>
				<Text>Box</Text>
			</View>
			<View style={[styles.box, { transform: [{ scale: 2 }] }]}>
				<Text>Scale by 2</Text>
			</View>
			<View style={[styles.box, { transform: [{ scaleX: 3 }] }]}>
				<Text>ScaleX bt 2</Text>
			</View>
			<View style={[styles.box, { transform: [{ rotate: "60deg" }] }]}>
				<Text>rotate 60</Text>
			</View>
			<View style={[styles.box, { transform: [{ skewX: "45deg" }] }]}>
				<Text>rotate 60</Text>
			</View>
			<View style={[styles.box, { transform: [{ translateX: 50 }] }]}>
				<Text>rotate 60</Text>
			</View>
		</ScrollView>
	);
};

export default TransformTRT;
const styles = StyleSheet.create({
	scroll: {
		marginTop: 40,
		padding: 10,
	},
	box: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "yellow",
		width: "30%",
		height: 70,
		alignSelf: "center",
		marginBottom: 10,
	},
});
