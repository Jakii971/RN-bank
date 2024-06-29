import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput, Button } from "react-native";

const LoginScreen = ({ navigation }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleLogin = () => {
		if (username === "user" && password === "user") {
			navigation.navigate("Home");
		} else {
			alert("Username atau password salah");
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>Login dulu Mank</Text>

			<TextInput
				style={styles.input}
				placeholder="Username"
				onChangeText={(text) => setUsername(text)}
				value={username}
			/>

			<TextInput
				style={styles.input}
				placeholder="Password"
				secureTextEntry={true}
				onChangeText={(text) => setPassword(text)}
				value={password}
			/>

			<Button title="Login" style={styles.button} onPress={handleLogin} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		marginBottom: 20,
	},
	input: {
		width: 300,
		padding: 10,
		borderWidth: 1,
		borderColor: "#ccc",
		marginBottom: 10,
	},
	button: {
		backgroundColor: "#007bff",
		color: "#fff",
		padding: 10,
	},
});

export default LoginScreen;
