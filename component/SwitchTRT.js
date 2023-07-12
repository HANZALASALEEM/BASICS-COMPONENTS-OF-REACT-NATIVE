import React, { useState } from "react";
import { View, StyleSheet, Text, Switch } from "react-native";

export default function SwitchTRT() {
	const [dark, setDark] = useState(false);
	const [color, setColor] = useState("white");

	const onPressSwitch = () => {
		setColor(dark ? "#A9A9A9" : "white");
		setDark((previousState) => !previousState);
	};
	return (
		<View style={[styles.container, { backgroundColor: color }]}>
			<Text>{dark ? "Enable" : "Disable"} Dark mode</Text>
			<Switch
				trackColor={dark ? "red" : "gray"}
				thumbColor={dark ? "gray" : "red"}
				onValueChange={onPressSwitch}
				value={dark}
			/>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
});
