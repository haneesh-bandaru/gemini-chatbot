import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import IonIcons from "react-native-vector-icons/Ionicons";

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
        <TouchableOpacity onPress={onSpeech} style={styles.speakerIcon}>
          <IonIcons name="volume-high-outline" size={24} color="black" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({

    chatItem: {
        padding: 10,
        marginBottom: 10,
        borderRadius: 10,
        maxWidth: "70%",
        position: "relative",
    },

    userChatItem: {
        alignSelf:"flex-end",
        backgroundColor:"#007AFF",
    },

    modelChatItem: {
        alignSelf:"flex-start",  
        backgroundColor:"#000"
    },

    chatText: {
        fontSize:16,
        color:"#fff"
    },

    speakerIcon: {
        position: "absolute",
        bottom:5,
        right:5,
    }
    

})

export default ChatBubble;


