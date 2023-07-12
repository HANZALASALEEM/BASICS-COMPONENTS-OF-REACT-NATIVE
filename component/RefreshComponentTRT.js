import React, { useState } from "react";
import { View, StyleSheet, ScrollView, RefreshControl } from "react-native";

export default function RefreshComponentTRT() {
	const [refresh, setRefresh] = useState(false);

	const pullMe = () => {
		setRefresh(true);
		setTimeout(() => {
			setRefresh(false);
		}, 3000);
	};
	return (
		<View style={styles.container}>
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={refresh} onRefresh={() => pullMe()} />
				}
			></ScrollView>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "red",
		flex: 1,
	},
});
