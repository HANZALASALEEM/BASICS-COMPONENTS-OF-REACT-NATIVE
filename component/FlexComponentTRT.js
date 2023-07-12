import React from "react";
import { View } from "react-native";

export default function FlexComponentTRT() {
	return (
		<View style={{ flex: 1 }}>
			<View style={{ flex: 1, flexDirection: "row" }}>
				<View style={{ backgroundColor: "blue", flex: 1 }}></View>
				<View style={{ backgroundColor: "orange", flex: 1 }}></View>
				<View style={{ backgroundColor: "pink", flex: 1 }}></View>
				<View style={{ backgroundColor: "yellow", flex: 1 }}></View>
				<View style={{ backgroundColor: "brown", flex: 1 }}></View>
				<View style={{ backgroundColor: "black", flex: 1 }}></View>
			</View>

			<View style={{ flex: 1 }}>
				<View style={{ backgroundColor: "blue", flex: 1 }}></View>
				<View style={{ backgroundColor: "orange", flex: 1 }}></View>
				<View style={{ backgroundColor: "pink", flex: 1 }}></View>
				<View style={{ backgroundColor: "yellow", flex: 1 }}></View>
				<View style={{ backgroundColor: "brown", flex: 1 }}></View>
				<View style={{ backgroundColor: "black", flex: 1 }}></View>
			</View>
		</View>
	);
}
