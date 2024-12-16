import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { Ionicons } from '@expo/vector-icons';

const ChatHeader = () => {
  return (
    <View style={styles.container}>
    <Ionicons name="chevron-back" size={24} color="black" />

      <View style={styles.profileContainer}>
        <Image
         source={require('../../assets/profile.png')}
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>Astrologers</Text>
          <Text style={styles.status}>Online</Text>
        </View>
      </View>
    </View>
  );
};

export default ChatHeader;

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingTop:10
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 10,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#ddd",
  },
  textContainer: {
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  status: {
    fontSize: 14,
    color: "gray",
  },
  
});
