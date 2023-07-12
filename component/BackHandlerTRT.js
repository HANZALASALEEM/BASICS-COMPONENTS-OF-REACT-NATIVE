import { View, Text, Alert, BackHandler } from "react-native";
import React, { useEffect } from "react";

const BackHandlerTRT = () => {
	useEffect(() => {
		const backAction = () => {
			Alert.alert("Warning", "You want to exit the App?", [
				{
					text: "Yes",
					onPress: () => BackHandler.exitApp(),
					style: "default",
				},
				{
					text: "cencel",
					onPress: () => null,
					style: "cancel",
				},
			]);
			return true;
		};
		const back = BackHandler.addEventListener("hardwareBackPress", backAction);
	}, []);

	return (
		<View
			style={{
				flex: 1,

				alignItems: "center",
				justifyContent: "center",
			}}
		>
			<Text style={{ fontSize: 20 }}>press Back Button</Text>
		</View>
	);
};

export default BackHandlerTRT;
