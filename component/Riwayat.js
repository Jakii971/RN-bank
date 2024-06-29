import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Riwayat = ({ nama, noRekening,nominal }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nama: {nama}</Text>
      <Text style={styles.text}>No Rekening: {noRekening}</Text>
      <Text style={styles.text}>Nominal: {nominal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
  },
});

export default Riwayat;
