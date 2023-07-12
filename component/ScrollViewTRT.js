import { Text, View, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";

export default function ScrollViewTRT() {
	const [item, setItem] = useState([
		{ name: "table", key: "1" },
		{ name: "bag", key: "2" },
		{ name: "keyBoard", key: "3" },
		{ name: "pillow", key: "4" },
		{ name: "kanggi", key: "5" },
		{ name: "Screen", key: "6" },
		{ name: "port", key: "7" },
		{ name: "jack", key: "8" },
	]);
	return (
		<ScrollView>
			<View style={styles.container}>
				{item.map((things) => {
					return (
						<View key={things.key} style={styles.main}>
							<Text style={styles.text}>{things.name}</Text>
						</View>
					);
				})}
			</View>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		marginTop: 10,
	},
	main: {
		marginTop: 30,
		backgroundColor: "pink",
		padding: 15,
	},
	text: {
		fontSize: 30,
	},
});
