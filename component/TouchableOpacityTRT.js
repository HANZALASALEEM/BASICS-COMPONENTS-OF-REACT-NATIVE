import React, { useState } from "react";
import {
	FlatList,
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ToastAndroid,
} from "react-native";

export default function TouchableOpacityTRT() {
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
	const Pressable = (item) => {
		ToastAndroid.showWithGravityAndOffset(
			`${item.name} is clicked`,
			ToastAndroid.LONG,
			ToastAndroid.TOP,
			30,
			30
		);
		//console.log(item.name);
	};
	return (
		<View>
			<FlatList
				data={item}
				renderItem={({ item }) => (
					<View style={styles.main}>
						<TouchableOpacity
							onPress={() => {
								Pressable(item);
							}}
						>
							<Text style={styles.text}>{item.name}</Text>
						</TouchableOpacity>
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
