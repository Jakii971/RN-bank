import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const Riwayat = (props) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={props.onSelect}>
				<Image
					source={{
						uri: "https://ui-avatars.com/api/?name=" + props.nama,
					}}
					style={styles.img}
				/>
			</TouchableOpacity>
			<View style={styles.infoContainer}>
				<Text style={styles.text}>{props.nama}</Text>
				<Text style={styles.text}>No. Rek{props.noRekening}</Text>
				<Text style={styles.text}>Nominal TF : {props.nominal}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		padding: 20,
		backgroundColor: "#f8f9fa",
		borderRadius: 8,
		margin: 10,
		shadowColor: "#000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 8,
		elevation: 3,
		alignItems: "center", // Centers content vertically
	},
	img: {
		width: 50,
		height: 50,
		borderRadius: 25, // Makes the image circular
		marginRight: 20,
	},
	infoContainer: {
		gap: 10,
		flex: 1, // Allows the info container to take up remaining space
	},
	text: {
		fontSize: 16,
		color: "#333",
	},
});

export default Riwayat;
