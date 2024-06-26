import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Alert,
	RefreshControl,
} from "react-native";

const HomeScreen = ({ navigation }) => {

	const navigateToInputScreen = () => {
		navigation.navigate("InputScreen");
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={navigateToInputScreen}
			>
				<Text style={styles.buttonText}>Go to Input Screen</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 10,
		backgroundColor: "#f8f9fa",
	},
	button: {
		backgroundColor: "#008000",
		padding: 10,
		borderRadius: 5,
		alignItems: "center",
		marginBottom: 20,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
	noDataText: {
		textAlign: "center",
		fontSize: 16,
		color: "#6c757d",
	},
});

export default HomeScreen;
