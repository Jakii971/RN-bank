import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  RefreshControl,
  SafeAreaView,
  ScrollView,
} from "react-native";
import axios from "axios";
import { useFocusEffect } from "@react-navigation/native";
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

  useEffect(() => {
    requestPermissions();
    console.log("Component mounted");
  }, []);

  useFocusEffect(
    React.useCallback(() => {
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
  };

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
        .post("http://192.168.0.100:7245/api/Riwayat", data)
        .then((response) => {
          const responseData = response.data;

          console.log("Response Data:", response.data);
          setHistorys(response.data.data);

          setModalVisible(true);

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
        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nama</Text>
            <TextInput
              style={styles.input}
              placeholder="Nama Penerima"
              value={nama}
              onChangeText={(value) => setNama(value)}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nomor Rekening/Alias</Text>
            <TextInput
              style={styles.input}
              placeholder="No Rekening"
              value={noRekening}
              onChangeText={(value) => setNoRekening(value)}
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nominal Transfer</Text>
            <TextInput
              style={styles.input}
              placeholder="Masukkan Nominal"
              value={nominal}
              onChangeText={(value) => setNominal(value)}
              keyboardType="numeric"
            />
          </View>
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
    backgroundColor: "#f2f2f2",
  },
  scrollView: {
    padding: 20,
  },
  headerContainer: {
    backgroundColor: "#008080",
    paddingVertical: 20,
    marginBottom: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  formContainer: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  inputGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  input: {
    padding: 10,
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#008080",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default InputScreen;
