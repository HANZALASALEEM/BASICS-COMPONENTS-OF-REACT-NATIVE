import {
	View,
	Text,
	Button,
	DrawerLayoutAndroid,
	StyleSheet,
} from "react-native";
import React, { useRef } from "react";

const DrawerTRT = () => {
	const drawer = useRef(null);

	const navigationView = () => {
		<View style={styles.drawerView}>
			<Text>Drawer</Text>
			<Button
				title="Close Drawer"
				onPress={() => {
					drawer.current.closeDrawer();
				}}
			/>
		</View>;
	};
	return (
		<DrawerLayoutAndroid
			ref={drawer}
			drawerWidth={300}
			drawerPosition={"left"}
			renderNavigationView={() => {
				<View style={styles.drawerView}>
					<Text>Drawer</Text>
					<Button
						title="Close Drawer"
						onPress={() => {
							drawer.current.closeDrawer();
						}}
					/>
				</View>;
			}}
		>
			<View>
				<Text>Main Screen</Text>
				<Button
					title="Open Drawer"
					onPress={() => {
						drawer.current.openDrawer();
					}}
				/>
			</View>
		</DrawerLayoutAndroid>
	);
};

export default DrawerTRT;
const styles = StyleSheet.create({
	drawerView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
