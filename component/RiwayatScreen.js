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
import { LinearGradient } from 'expo-linear-gradient';
import { FontAwesome } from "@expo/vector-icons";

const RiwayatScreen = ({ navigation }) => {
  const [riwayats, setRiwayats] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    read();
  }, []);

  const read = async () => {
    try {
      const response = await axios.get("http://192.168.0.100:7245/api/Riwayat");
      console.log("Response Data:", response.data.data);
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
      <TouchableOpacity style={styles.button} onPress={navigateToInputScreen}>
        <Text style={styles.buttonText}>Go to Input Screen</Text>
      </TouchableOpacity>
      <ScrollView
        style={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        {riwayats.length > 0 ? (
          riwayats.map((riwayat, index) => (
            <LinearGradient
              key={index}
              style={styles.gradient}
              colors={['#ffffff', '#e2e2e2']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
            >
              <View style={styles.card}>
                <Text style={styles.cardTitle}>
                  <FontAwesome name="user" size={20} color="#333" /> {riwayat.nama}
                </Text>
                <Text style={styles.cardText}>
                  <FontAwesome name="bank" size={20} color="#555" /> Account: {riwayat.noRekening}
                </Text>
                <Text style={styles.cardText}>
                  <FontAwesome name="money" size={20} color="#555" /> Amount: {riwayat.nominal.toLocaleString()} IDR
                </Text>
              </View>
            </LinearGradient>
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
    padding: 20,
    backgroundColor: "#f2f2f2",
  },
  button: {
    backgroundColor: "#008080",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  scrollView: {
    marginTop: 10,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 5,
    flexDirection: "row",
    alignItems: "center",
  },
  cardText: {
    fontSize: 16,
    color: "#555",
    marginLeft: 20,
  },
  noDataText: {
    textAlign: "center",
    fontSize: 16,
    color: "#6c757d",
    marginTop: 20,
  },
  gradient: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default RiwayatScreen;
