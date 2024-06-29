import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';

import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ImageBackground,
	Image
} from "react-native";

const imageBg = require('../assets/cover.jpg');
const imgLogo = require('../assets/bank.png');
const imgPanah = require('../assets/panah.png');

const HomeScreen = ({ navigation }) => {

	const navigateToInputScreen = () => {
		navigation.navigate("InputScreen");
	};

	const insets = useSafeAreaInsets();

	return (
		<SafeAreaProvider>
			<ImageBackground source={imageBg} style={styles.imageBg}>
				<View style={{ flex: 1, paddingTop: insets.top }}>
					<View style={styles.container}>
						<View style={{alignItems: 'center'}}>
							<Image source={imgLogo} style={{width: 200, height: 200}} />
						</View>
						<View style={{paddingBottom:90,}}>
							<Text style={{ textAlign: 'center', fontSize: 50, fontWeight: 'bold', color: 'white' }}>Welcome to Bankkek</Text>
						</View>
						<View style={{alignItems: 'center'}}>
							<TouchableOpacity
								style={styles.button}
								onPress={navigateToInputScreen}>
								<Image source={imgPanah} style={{width: 50, height: 50}}></Image>
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
		justifyContent: 'center',
		alignContent: 'center',
		paddingRight:40,
	},
	button: {
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		padding: 10,
		width: 80,
		height: 80,
		borderRadius: 50,
		justifyContent: 'center',
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
	imageBg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});

export default HomeScreen;
