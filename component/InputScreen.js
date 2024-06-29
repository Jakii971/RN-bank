import React, { useEffect, useState } from "react";
import {
	View,
	Text,
	TextInput,
	TouchableOpacity,
	StyleSheet,
	Alert,
	RefreshControl,
	SafeAreaView,
	ScrollView,
} from "react-native";
import axios from "axios";
import { useFocusEffect } from '@react-navigation/native';
import TransaksiModal from "../Modal/TransaksiModal";
import {
	scheduleNotification,
	requestPermissions,
} from "../Modal/notifications";

const InputScreen = ({ navigation }) => {
	const [nama, setNama] = useState("");
	const [noRekening, setNoRekening] = useState("");
	const [nominal, setNominal] = useState("");
	const [btn, setBtn] = useState("Simpan");
	const [modalVisible, setModalVisible] = useState(false);
	const [refreshing, setRefreshing] = useState(false);
	const [historys, setHistorys] = useState([]);

	// Request notification permissions when the component mounts
	useEffect(() => {
		requestPermissions();
		console.log('Component mounted');
	}, []);

	useFocusEffect(
		React.useCallback(() => {
			// Reset the input fields whenever the screen is focused
			resetInput();
		}, [])
	);

	const closeModal = () => {
		setModalVisible(false);
	};

	const resetInput = () => {
		setNama("");
		setNoRekening("");
		setNominal("");
	}

	const onRefresh = () => {
		setRefreshing(true);
		resetInput();
		setTimeout(() => {
			setRefreshing(false);
		}, 1500);
	};

	const submit = () => {
		const data = {
			nama: nama,
			noRekening: noRekening,
			nominal: nominal,
		};
		if (btn === "Simpan") {
			axios
				.post("http://192.168.0.154:7245/api/Riwayat", data)
				.then((response) => {
					const responseData = response.data;

					console.log("Response Data:", response.data);
					setHistorys(response.data.data);

					setModalVisible(true);

					// Schedule a notification on successful submission
					scheduleNotification("Success", "Transfer Berhasil!");
				})
				.catch((error) => console.error("Gagal mengirim data:", error));
		}
	};

	return (
		<SafeAreaView style={styles.container}>
			<ScrollView
				contentContainerStyle={styles.scrollView}
				refreshControl={
					<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
				}
			>
				<View style={styles.headerContainer}>
					<Text style={styles.headerText}>Penerima Baru</Text>
				</View>
				<View style={styles.headerContainer2}>
					<Text style={styles.headerText2}>Nama </Text>
				</View>
				<View style={styles.formContainer}>
					<TextInput
						style={styles.input}
						placeholder="Nama Penerima"
						value={nama}
						onChangeText={(value) => setNama(value)}
					/>
					<View style={styles.headerContainer2}>
						<Text style={styles.headerText3}>Nomor rekening/Alias</Text>
					</View>
					<TextInput
						style={styles.input}
						placeholder="No Rekening"
						value={noRekening}
						onChangeText={(value) => setNoRekening(value)}
					/>
					<View style={styles.headerContainer2}>
						<Text style={styles.headerText3}>Nominal Transfer</Text>
					</View>
					<TextInput
						style={styles.input}
						placeholder="Masukkan nominal"
						value={nominal}
						onChangeText={(value) => setNominal(value)}
						keyboardType="numeric"
					/>
					<TouchableOpacity style={styles.button} onPress={submit}>
						<Text style={styles.buttonText}>{btn}</Text>
					</TouchableOpacity>

					<TransaksiModal
						navigation={navigation}
						visible={modalVisible}
						closeModal={closeModal}
						namaModal={nama}
						noRekeningModal={noRekening}
						nominalModal={nominal}
					/>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 0,
		backgroundColor: "#f8f9fa",
	},
	headerContainer: {
		backgroundColor: "#008080",
		marginBottom: 20,
		alignItems: "center",
		shadowColor: "#000",
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 5,
	},
	headerText2: {
		paddingLeft: 23,
		fontWeight: "bold",
		fontSize: 15,
		marginBottom: 10,
	},
	headerText3: {
		paddingLeft: 4,
		fontWeight: "bold",
		fontSize: 15,
		marginBottom: 0,
		marginBottom: 10,
	},
	headerText: {
		marginTop: 50,
		fontSize: 24,
		fontWeight: "bold",
		color: "#fff",
		marginBottom: 20,
	},
	formContainer: {
		paddingLeft: 20,
		paddingRight: 20,
	},
	input: {
		padding: 10,
		height: 40,
		borderColor: "gray",
		borderWidth: 1,
		marginBottom: 10,
		borderRadius: 5,
		backgroundColor: "#fff",
	},
	button: {
		backgroundColor: "#008000", // Ubah warna menjadi hijau
		padding: 10,
		borderRadius: 5,
		alignItems: "center",
		marginTop: 10,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
	},
});

export default InputScreen;
