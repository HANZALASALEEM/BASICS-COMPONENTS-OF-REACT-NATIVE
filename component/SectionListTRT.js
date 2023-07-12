import React from "react";
import { Text, View, StyleSheet, SectionList, ScrollView } from "react-native";
import CostomSectionTRT from "./CostomSectionTRT";

export default function SectionListTRT() {
	const DATA = [
		{
			title: "Main Item",
			data: ["Burger", "Pizza"],
		},
		{
			title: "Drinks",
			data: ["Coca Cola", "Sprite"],
		},
		{
			title: "Desserts",
			data: ["Cake", "Dont"],
		},
	];

	const Computer = [
		{
			title: "OS",
			data: ["Android", "IOS"],
		},
	];
	return (
		<ScrollView>
			<CostomSectionTRT data={DATA} />
			<CostomSectionTRT data={Computer} />
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		padding: 20,
	},
});
