import axios from "axios";

export const getChat = async (Session) => {
  try {
    const response = await axios.get(
      `http://192.168.93.191:5050/chat/${Session}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching chat:", error);
    throw error;
  }
};

export const postMessage = async (userName, message, replyTo, Session) => {
  try {
    const response = await axios.post(
      `http://192.168.93.191:5050/chat/${Session}`,
      {
        userName: userName,
        ts: Date.now(),
        message: message,
        replyTo: replyTo,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    
    return response.data;
  } catch (error) {
    console.error("Error posting message:", error);
    throw error;
  }
};
