import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import {
	StyleSheet,
	Text,
	View,
	Button,
	TextInput,
	Appearance,
	Animated,
} from "react-native";
import PropsTRT from "./PropsTRT";

export default function AnimatedTRT() {
	const [name, setName] = useState(null);
	const [text, setText] = useState(null);

	const colorScheme = Appearance.getColorScheme();

	const fadeAnimate = useRef(new Animated.Value(0)).current;

	const fadeIn = () => {
		Animated.timing(fadeAnimate, {
			toValue: 1,
			duration: 5000,
			useNativeDriver: true,
		}).start();
	};

	const fadeOut = () => {
		Animated.timing(fadeAnimate, {
			toValue: 0,
			duration: 5000,
			useNativeDriver: true,
		}).start();
	};
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
						fadeIn();
					}}
				/>
			</View>
			<Animated.View style={[styles.animation, { opacity: fadeAnimate }]}>
				<Text style={styles.name}>Hi, {name}</Text>
			</Animated.View>
			<Button
				title="Hide"
				style={styles.Button}
				onPress={() => {
					setName("");
					fadeOut();
				}}
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
	Button: {
		margin: 20,
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
	animation: {
		width: "60%",
		height: "20%",
		backgroundColor: "yellow",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 20,
	},
	name: {
		fontSize: 30,
	},
});
