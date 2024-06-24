import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import axios from "axios";

const InputScreen = ({ navigation }) => {
	const [nama, setNama] = useState("");
	const [noRekening, setNoRekening] = useState("");
	const [nominal, setNominal] = useState("");
	const [btn, setBtn] = useState("Simpan");

	useEffect(() => {}, []);

	const submit = () => {
		const data = {
			nama: nama,
			noRekening: noRekening,
			nominal: nominal,
		};
		if (btn === "Simpan") {
			axios
				.post("http://192.168.1.137:3000/bank", data)
				.then((response) => {
					console.log(response);
					navigation.navigate("Riwayat");
				})
				.catch((err) => console.log(err));
		}
	};

	return (
		<View style={styles.container}>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>Bank Kek</Text>
			</View>
			<View style={styles.formContainer}>
				<TextInput
					style={styles.input}
					placeholder="Nama"
					value={nama}
					onChangeText={(value) => setNama(value)}
				/>
				<TextInput
					style={styles.input}
					placeholder="No Rekening"
					value={noRekening}
					onChangeText={(value) => setNoRekening(value)}
				/>
				<TextInput
					style={styles.input}
					placeholder="Masukkan nominal"
					value={nominal}
					onChangeText={(value) => setNominal(value)}
				/>
				<Button title={btn} onPress={submit} />
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 20,
		backgroundColor: '#f8f9fa',
	},
	headerContainer: {
		marginBottom: 20,
		alignItems: 'center',
	},
	headerText: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#333',
	},
	formContainer: {
		gap: 15,
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 10,
		padding: 10,
		borderRadius: 5,
		backgroundColor: '#fff',
	},
});

export default InputScreen;
