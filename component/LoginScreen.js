import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TextInput, Button, ImageBackground, TouchableOpacity } from "react-native";
import {
	scheduleNotification,
	requestPermissions,
} from "../Modal/notifications";

const imageBg = require('../assets/cover.jpg');

const LoginScreen = ({ navigation }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	useEffect(() => {
		requestPermissions();
	}, []);

	const handleLogin = () => {
		if (username === "user" && password === "user") {
			navigation.navigate("Home");
			scheduleNotification("Success", "Login Berhasil!");
		} else {
			alert("Username atau password salah");
		}
	};

	return (
		<ImageBackground source={imageBg} style={styles.imageBg}>
			<View style={styles.container}>
				<Text style={styles.title}>Login</Text>

				<View style={styles.containerInput}>
					<TextInput
						style={{marginBottom: 15, width: 300,
							padding: 10,
							borderWidth: 1,
							borderColor: "#ccc",}}
						placeholder="Username"
						onChangeText={(text) => setUsername(text)}
						value={username}
					/>

					<TextInput
						style={{marginTop: 15, width: 300,
							padding: 10,
							borderWidth: 1,
							borderColor: "#ccc",}}
						placeholder="Password"
						secureTextEntry={true}
						onChangeText={(text) => setPassword(text)}
						value={password}
					/>
				</View>

				<View>
					<TouchableOpacity title="Login" onPress={handleLogin} style={styles.button} ><Text style={{color: '#fff', fontSize: 16}}>Login</Text></TouchableOpacity>
				</View>
			</View>
		</ImageBackground>
	);
};

const styles = StyleSheet.create({
	imageBg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
	container: {
		flex: 1,
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		alignItems: "center",
		justifyContent: "center",
		margin: 20,
		marginBottom: 50,
		marginTop: 95,
		borderRadius: 20,
	},
	containerInput:{
		backgroundColor: '#fff',
		padding: 45,
		borderRadius: 20,
		marginVertical: 30,
	},
	title: {
		fontSize: 50,
		fontWeight: "bold",
		color: "white",
		marginBottom: 50,
	},
	input: {
		width: 300,
		padding: 10,
		borderWidth: 1,
		borderColor: "#ccc",
		marginBottom: 20,
	},
	button: {
		backgroundColor: "#007bff",
		paddingHorizontal: 20,
		paddingVertical: 10,
		borderRadius: 8,
	},
});

export default LoginScreen;
