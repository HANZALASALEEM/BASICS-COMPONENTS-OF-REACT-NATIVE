import React, { useState } from "react";
import {
	View,
	Image,
	StyleSheet,
	Button,
	ActivityIndicator,
} from "react-native";

export default function ActivityIndicatorTRT() {
	const [pic, setPic] = useState(1);
	const [show, setShow] = useState(false);

	const setPicture = () => {
		setTimeout(() => {
			setShow(false);
			setPic(Math.floor(Math.random() * 8));
		}, 4000);
		setShow(true);
	};

	const img = {
		pics: {
			0: require("../assets/1.jpg"),
			1: require("../assets/2.jpg"),
			2: require("../assets/3.jpg"),
			3: require("../assets/4.jpg"),
			4: require("../assets/5.jpg"),
			5: require("../assets/6.jpg"),
			6: require("../assets/7.jpg"),
			7: require("../assets/8.jpg"),
		},
	};
	return (
		<View style={styles.container}>
			<Image source={img.pics[pic]} style={styles.image} />
			<View style={styles.button}>
				<Button
					title="Shuffle"
					onPress={() => {
						setPicture();
					}}
				/>
				<ActivityIndicator
					size="large"
					color={"red"}
					animating={show}
					style={styles.circle}
				/>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		marginTop: 20,
	},
	image: {
		width: 370,
		height: 400,
		margin: 10,
	},
	button: {
		//width: 100,
		marginTop: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	circle: {
		marginTop: 20,
	},
});
