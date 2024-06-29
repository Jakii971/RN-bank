import React from "react";
import { View, Text, StyleSheet, Button, Image, Modal } from "react-native";
import axios from "axios";

export default function TransaksiModal({ navigation, visible, closeModal, namaModal, noRekeningModal, nominalModal }) {
	return (
		<Modal
			animationType="slide"
			transparent={false}
			visible={visible}
			onRequestClose={closeModal}
		>
			<View style={styles.container}>
				<Image
					style={styles.briLogo}
					source={require("../assets/donlod.jpg")}
				/>
				<View style={styles.header}>
					<Text style={styles.title}>Transaksi Berhasil</Text>
					<Text>Tanggal Transaksi</Text>
				</View>
				<View style={styles.body}>
					<View style={styles.detailsContainer}>
						<Text style={styles.titlecontainer}>Total Transaksi</Text>
						<Text style={styles.titlecontainer2}>Rp. {nominalModal}</Text>
						<View style={styles.titlecontainer3}>
							<Text>No. Ref</Text>
							<Text style={styles.title2}>{noRekeningModal} </Text>
						</View>
						<View style={styles.sumber}>
							<Text>Sumber Dana </Text>
							<Text>{noRekeningModal} </Text>
						</View>
						<View style={styles.tujuan}>
							<Text>Tujuan</Text>
							<Text>{namaModal}</Text>
						</View>
						<View style={styles.line} />
						<View style={styles.titlecontainer4}>
							<Text>Nominal</Text>
							<Text style={styles.title2}>Rp {nominalModal}</Text>
						</View>
						<View style={styles.titlecontainer5}>
							<Text>Biaya Admin</Text>
							<Text style={styles.title5}>Rp0</Text>
						</View>
						<View style={styles.line} />
						<View style={styles.informasi}>
							<Text style={styles.info1}>Informasi</Text>
							<Text style={styles.info}>PT.Bankke Indonesia</Text>
							<Text style={styles.info}>
								Memajukan Indonesia menjadi negara maju
							</Text>
							<Text style={styles.info}>
								Kantor Pusat Bangke -Jawa Timur
							</Text>
							<Text style={styles.info}>NPWP:01.003.4038.041.000</Text>
						</View>
					</View>
				</View>
				<Button
					title="Back"
					onPress={() => navigation.navigate("Riwayat")}
					color="#007bff"
				/>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	container: {

		justifyContent: "center",
		alignItems: "center",
		padding: 2,
		backgroundColor: "#fff",
	},

	header: {
		marginTop: 2,
		flexDirection: "column",
		justifyContent: "center",
		alignItems: "center",
		marginBottom: 20,
	},
	briLogo: {
		width: 70,
		height: 70,
		justifyContent: "center",
	},
	titlecontainer: {
		paddingBottom: 1,
	},
	titlecontainer2: {
		paddingBottom: 10,
		fontSize: 21,
		fontWeight: "bold",
	},
	titlecontainer3: {
		width: 330,
		paddingLeft: 10,
		paddingBottom: 20,
		flexDirection: "row",
	},
	titlecontainer4: {
		width: 330,
		paddingLeft: 10,
		paddingBottom: 10,
		paddingTop: 20,
		flexDirection: "row",
	},
	titlecontainer5: {
		width: 330,
		paddingLeft: 10,
		paddingBottom: 20,
		paddingTop: 1,
		flexDirection: "row",
	},
	title2: {
		paddingLeft: 247,
	},
	title5: {
		paddingLeft: 219,
	},

	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#28a745", // BRI accent color (replace if needed)
	},
	detailsContainer: {
		width: 360,
		height: 630,
		alignItems: "center",
		backgroundColor: "#ffffff",
		borderRadius: 10,
		paddingTop: 10,
		shadowColor: "#000",
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 5,
		marginBottom: 20,
	},
	sumber: {
		width: 330,
		height: 100,
		backgroundColor: "#ffffff",
		borderRadius: 10,
		paddingTop: 10,
		paddingLeft: 10,
		shadowColor: "#000",
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 5,
		marginBottom: 20,
	},
	tujuan: {
		width: 330,
		height: 100,
		backgroundColor: "#ffffff",
		borderRadius: 10,
		paddingTop: 10,
		paddingLeft: 10,
		shadowColor: "#000",
		shadowOpacity: 0.1,
		shadowRadius: 5,
		elevation: 5,
		marginBottom: 20,
	},
	line: {
		width: 320,
		height: 1,
		backgroundColor: "#000", // Adjust the color as needed
	},
	info1: {
		width: 330,
		paddingLeft: 10,
		paddingTop: 1,
		color: "#B0C4DE",
		fontWeight: "bold",
		fontSize: 20,
		paddingBottom: 10,
	},
	info: {
		width: 330,
		paddingLeft: 10,
		paddingTop: 1,
		color: "#B0C4DE",
	},
	informasi: {
		paddingTop: 15,
	},
	detailLabel: {
		fontSize: 14,
		color: "#888888",
		marginBottom: 5,
	},
	detailText: {
		fontSize: 16,
		fontWeight: "bold",
		color: "#333333",
		marginBottom: 15,
	},
});
