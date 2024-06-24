import React, { useState } from "react";
import {
	View,
	Text,
	StyleSheet,
	Image,
	TouchableOpacity,
	Modal,
	TouchableHighlight,
} from "react-native";

const UserItem = ({ name, email, username, phone, website }) => {
	const iconUrl = "https://cdn-icons-png.flaticon.com/128/1077/1077012.png";
	const [modalVisible, setModalVisible] = useState(false);

	const showModal = () => {
		setModalVisible(true);
	};

	const hideModal = () => {
		setModalVisible(false);
	};

	return (
		<View style={styles.container}>
			<TouchableOpacity style={styles.itemContainer} onPress={showModal}>
				<Image source={{ uri: iconUrl }} style={styles.icon} />
				<View style={styles.textContainer}>
					<Text style={styles.name}>{name}</Text>
					<Text style={styles.email}>{email}</Text>
				</View>
			</TouchableOpacity>

			<Modal
				animationType="slide"
				transparent={true}
				visible={modalVisible}
				onRequestClose={hideModal}
			>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<View>
							<Text style={styles.modalText}>User Information</Text>
						</View>

						<View style={styles.modalTextContent}>
							<Text>Name         : {name}</Text>
							<Text>Email          : {email}</Text>
							<Text>Username  : {username}</Text>
							<Text>Phone         : {phone}</Text>
							<Text>Website      : {website}</Text>
						</View>

						<TouchableHighlight
							style={{
								...styles.openButton,
								backgroundColor: "#2196F3",
							}}
							onPress={hideModal}
						>
							<Text style={styles.textStyle}>Close</Text>
						</TouchableHighlight>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		marginVertical: 8,
		marginHorizontal: 16,
		borderRadius: 8,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	itemContainer: {
		flexDirection: "row",
		alignItems: "center",
		padding: 16,
	},
	textContainer: {
		flex: 1,
		paddingLeft: 20,
	},
	name: {
		fontSize: 18,
		fontWeight: "bold",
		marginBottom: 8,
	},
	email: {
		fontSize: 14,
		color: "#666",
	},
	icon: {
		width: 34,
		height: 34,
		resizeMode: "contain",
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "start",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5,
	},
	modalText: {
		marginBottom: 15,
		textAlign: "start",
		fontSize: 24,
		fontWeight: "bold",
	},
	modalTextContent:{
		textAlign: "start",
	},
	openButton: {
		backgroundColor: "#F194FF",
		borderRadius: 20,
		padding: 10,
		elevation: 2,
		marginTop: 10,
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
		width: 80,
	},
});

export default UserItem;
