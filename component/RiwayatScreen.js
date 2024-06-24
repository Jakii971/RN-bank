import React, { useState, useEffect } from "react";
import { View, Text, Alert, StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import Riwayat from "./Riwayat";

const RiwayatScreen = ({ navigation }) => {
	const [riwayats, setRiwayats] = React.useState([]);

	useEffect(() => {
		read();
	}, []);

	const read = () => {
		axios
			.get("http://192.168.1.137:3000/bank")
			.then((response) => {
				console.log(response);
				setRiwayats(response.data);
				setNama("");
				setNoRekening("");
				setNominal("");
				setBtn("Simpan");
			})
			.catch((error) => console.error("Error:", error));
	};

	return (
		<ScrollView>
			{riwayats.map((riwayat) => {
				return (
					<Riwayat
						nama={riwayat.nama}
						noRekening={riwayat.noRekening}
						nominal={riwayat.nominal}
					/>
				);
			})}
		</ScrollView>
	);
};

export default RiwayatScreen;
