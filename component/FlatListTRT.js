import React, { useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";

export default function FlatListTRT() {
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
		<View>
			<FlatList
				data={item}
				renderItem={({ item }) => (
					<View style={styles.main}>
						<Text style={styles.text}>{item.name}</Text>
					</View>
				)}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	main: {
		marginTop: 40,
		backgroundColor: "pink",
		padding: 15,
	},
	text: {
		fontSize: 30,
	},
});
