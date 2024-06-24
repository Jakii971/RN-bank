import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	FlatList,
	StyleSheet,
	ActivityIndicator,
	TouchableOpacity,
} from "react-native";
import UserItem from "./UserItem";

const UserList = () => {
	const [users, setUsers] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		try {
			const response = await fetch(
				"https://jsonplaceholder.typicode.com/users"
			);
			if (!response.ok) {
				throw new Error("Network response was not ok");
			}
			const data = await response.json();
			setUsers(data);
			setError(null);
		} catch (error) {
			setError(error.message);
		} finally {
			setLoading(false);
		}
	};

	const handleRefresh = () => {
		setLoading(true);
		fetchUsers();
	};

	const handleReload = () => {
		setLoading(true);
		setError(null);
		fetchUsers();
	};

	if (loading) {
		return (
			<View style={[styles.container, styles.center]}>
				<ActivityIndicator size="large" color="#0000ff" />
			</View>
		);
	}

	if (error) {
		return (
			<View style={[styles.container, styles.center]}>
				<Text style={styles.texterror}>Error: {error}</Text>
				<TouchableOpacity style={styles.button} onPress={handleReload}>
					<Text style={styles.buttonText}>Reload</Text>
				</TouchableOpacity>
			</View>
		);
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<Text style={styles.title}>Daftar User</Text>
			</View>
			<FlatList
				data={users}
				renderItem={({ item }) => (
					<UserItem
						name={item.name}
						email={item.email}
						username={item.username}
						phone={item.phone}
						website={item.website}
					/>
				)}
				keyExtractor={(item) => item.id.toString()}
				refreshing={loading}
				onRefresh={handleRefresh}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#f0f0f0",
	},
	center: {
		justifyContent: "center",
		alignItems: "center",
	},
	header: {
		backgroundColor: "#2980b9",
		paddingVertical: 80,
		paddingHorizontal: 16,
		marginBottom: 12,
	},
	title: {
		fontSize: 24,
		fontWeight: "bold",
		color: "#fff",
		textAlign: "center",
	},
	button: {
		marginTop: 16,
		paddingVertical: 10,
		paddingHorizontal: 20,
		backgroundColor: "#2980b9",
		borderRadius: 5,
	},
	buttonText: {
		color: "#fff",
		fontSize: 16,
		fontWeight: "bold",
		textAlign: "center",
	},
	texterror: {
		color: 'red',
		fontSize: 16,
	}
});

export default UserList;
