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
import axios from "axios";
import Riwayat from "./Riwayat";

const RiwayatScreen = ({ navigation }) => {
	const [riwayats, setRiwayats] = useState([]);
	const [refreshing, setRefreshing] = useState(false);

	useEffect(() => {
		read();
	}, []);

	const read = async () => {
		try {
			const response = await axios.get("http://192.168.0.100:7245/api/Riwayat");
			console.log("Response Data:", response.data); // Debugging log
			setRiwayats(response.data.data);
		} catch (error) {
			console.error("Error fetching data:", error);
			Alert.alert("Error", "Failed to fetch data from the server");
		}
	};

	const onRefresh = () => {
		setRefreshing(true);
		read().finally(() => setRefreshing(false));
	};

	const navigateToInputScreen = () => {
		navigation.navigate("Home");
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.button}
				onPress={navigateToInputScreen}
			>
				<Text style={styles.buttonText}>Go to Input Screen</Text>
			</TouchableOpacity>
			<ScrollView
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				{riwayats.length > 0 ? (
					riwayats.map((riwayat) => (
						<Riwayat
							nama={riwayat.nama}
							noRekening={riwayat.noRekening}
							nominal={riwayat.nominal}
						/>
					))
				) : (
					<Text style={styles.noDataText}>
						No transaction history available
					</Text>
				)}
			</ScrollView>
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

export default RiwayatScreen;
