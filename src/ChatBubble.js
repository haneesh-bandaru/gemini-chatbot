import React from "react";
import { Text, View, StyleSheet, Pre, Pressable } from "react-native";
import { Ionicons } from "react-native-vector-icons";

const ChatBubble = ({ role, onSpeech, text }) => {
  return (
    <View
      style={[
        styles.chatItem,
        role === "user" ? styles.userChatItem : styles.modelChatItem,
      ]}
    >
      <Text style={styles.chatText}>{text}</Text>
      {role === "model" && (
        <Pressable onPress={onSpeech} style={styles.speakerIcon}>
          <Ionicons name="volume-high-outline" size={24} color="#fff" />
        </Pressable>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  chatItem: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    maxWidth: "70%",
    position: "relative",
  },

  userChatItem: {
    alignSelf: "flex-end",
    backgroundColor: "#007AFF",
  },

  modelChatItem: {
    alignSelf: "flex-start",
    backgroundColor: "#000",
  },

  chatText: {
    fontSize: 16,
    color: "#fff",
  },

  speakerIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
  },
});

export default ChatBubble;
