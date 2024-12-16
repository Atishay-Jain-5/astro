import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useUserContext } from "../../context/Usercontext";

const Signup = ({ navigation }) => {
  const { updateUser } = useUserContext();
  const handlePress = () => {
    updateUser({
      username: username,
      sessionName: sessionName,
    });
    navigation.navigate("ChatScreen");
  };
  const [username, setUsername] = useState("");
  const [sessionName, setSessionName] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput
          placeholder="User name"
          placeholderTextColor="#a3a3a3"
          style={styles.input}
          onChangeText={(text) => setUsername(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Session name</Text>
        <TextInput
          placeholder="Session name"
          placeholderTextColor="#a3a3a3"
          style={styles.input}
          onChangeText={(text) => setSessionName(text)}
        />
      </View>

      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#fff",
    padding: 20,
    paddingTop: 50,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    color: "#000",
    fontSize: 22,
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 5,
    fontSize: 14,
    color: "#000",
  },
  bottomButtonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    paddingBottom: 20,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#FFD700",
    paddingVertical: 12,
    alignItems: "center",
    borderRadius: 5,
    width: "50%",
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontWeight: "600",
  },
});
