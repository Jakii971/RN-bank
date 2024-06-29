import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  TouchableOpacity,
  Alert,
} from "react-native";
import {
  scheduleNotification,
  requestPermissions,
} from "../Modal/notifications";

const imageBg = require('../assets/cover.jpg');

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    requestPermissions();
  }, []);

  const handleLogin = () => {
    if (username === "user" && password === "user") {
      navigation.navigate("Home");
      scheduleNotification("Success", "Login Berhasil!");
    } else {
      Alert.alert("Error", "Username atau password salah");
    }
  };

  return (
    <ImageBackground source={imageBg} style={styles.imageBg}>
      <View style={styles.container}>
        <Text style={styles.title}>Login </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            placeholderTextColor="#888"
            onChangeText={setUsername}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            secureTextEntry={true}
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBg: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
  },
  inputContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 15,
    padding: 20,
    width: '85%',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    width: '85%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
