import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground
} from "react-native";

const image = require('../assets/cover.jpg');

const HomeScreen = ({ navigation }) => {

	const navigateToInputScreen = () => {
		navigation.navigate("InputScreen");
	};

	const insets = useSafeAreaInsets();

	return (
		<SafeAreaProvider>
			<ImageBackground source={image} style={styles.image}>
				<View style={{ flex: 1, paddingTop: insets.top }}>
					<View style={styles.container}>
						<View style={styles.containerBtn}>
							<View style={{ margin: 'auto' }}>
								<Text style={{ textAlign: 'center', fontSize: 14, }}>Ayo Berbagi menggunakan Bank Kek</Text>
							</View>
							<TouchableOpacity
								style={styles.button}
								onPress={navigateToInputScreen}>
								<Text style={styles.buttonText}>Tranfer</Text>
							</TouchableOpacity>
						</View>
					</View>
				</View>
				</ImageBackground>
		</SafeAreaProvider>
	);
};

const styles = StyleSheet.create({
	container: {
		height: 930,
		width: 450,
    margin: 'auto',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 10,
    shadowColor: "#000",
	},
	containerBtn:{
		height: 350, width: 200, margin: 'auto'
	},
	button: {
		margin: 'auto',
		backgroundColor: "#008000",
		padding: 10,
		borderRadius: 5,
		alignItems: "center",
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
	image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default HomeScreen;
