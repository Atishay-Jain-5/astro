import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import ChatBubble from "../components/ChatBubble";
import { getChat, postMessage } from "../../api/Api";
import { useUserContext } from "../../context/Usercontext";
import io from "socket.io-client"; 
const ChatScreen = () => {
  const [chats, setChats] = useState([]);
  const [text, onChangeText] = useState("Useless Text");
  const { user } = useUserContext();
  const socket = io("http://192.168.93.191:5051");
  const getChats = async () => {
    const res = await getChat(user?.sessionName);

    const sortedChats = res.sort((a, b) => a.ts - b.ts);

    setChats(sortedChats);
  };
  useEffect(() => {
   
    socket.on("receiveMessage", (message) => {
      setChats((prevChats) => [...prevChats, message]); 
    });

    return () => {
      socket.off("receiveMessage"); 
    };
  }, []);
//   useEffect(() => {
//     getChats();
//     // console.log("here")
//   }, []);
  const handleSend = async () => {
    const message = { userName: user?.username, message: text, ts: Date.now() };
    
    socket.emit("sendMessage", message);
    onChangeText("");
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatContainer}>
        {chats.map((i, index) => (
          <View
            style={[
              i?.userName === user?.username
                ? { width: "100%", alignItems: "flex-end" }
                : { width: "100%", alignItems: "flex-start" },
            ]}
            key={index}
          >
            <ChatBubble text={i?.message} date={i?.ts}/>
          </View>
        ))}
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TouchableOpacity onPress={() => handleSend()}>
          <Image
            source={require("../../assets/send.png")}
            style={styles.sendIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdf1de",
  },
  chatContainer: {
    gap: 10,
    width: "100%",
    height: "50%",
    padding: 10,
   
    
  },
  input: {
    height: 40,
    margin: 12,
    borderRadius: 10,
    padding: 10,
    backgroundColor: "white",
    width: "80%",
  },
  inputContainer: {
    // top: "70%",

    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  sendIcon: {
    height: 30,
    width: 30,
  },
});
