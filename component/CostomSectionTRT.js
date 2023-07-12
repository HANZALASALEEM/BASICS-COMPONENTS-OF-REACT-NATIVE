import React from "react";
import { View, Text, StyleSheet, SectionList, ScrollView } from "react-native";

export default function CostomSectionTRT(props) {
	const Item = ({ title }) => (
		<View style={styles.item}>
			<Text style={styles.title}>{title}</Text>
		</View>
	);
	return (
		<ScrollView style={styles.container}>
			<SectionList
				sections={props.data}
				keyExtractor={(item, index) => item + index}
				renderItem={({ item }) => <Item title={item} />}
				renderSectionHeader={({ section: { title } }) => (
					<Text style={styles.header}>{title}</Text>
				)}
			/>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	container: {
		marginTop: 40,
		padding: 20,
	},
	item: {
		marginVertical: 20,
		padding: 20,
		backgroundColor: "yellow",
	},
	header: {
		fontSize: 30,
	},
	title: {
		fontSize: 25,
	},
});
