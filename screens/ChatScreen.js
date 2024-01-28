import React, { useCallback, useState } from "react";
import { ImageBackground, TouchableOpacity } from "react-native";
import { View, Text, StyleSheet, Button } from "react-native";
import backgroundImage from "../assets/images/background.jpeg";
import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Color from "../constants/Color";
import { KeyboardAvoidingView } from "react-native";
import { Platform } from "react-native";

const ChatScreen = props => {

  const [messageText, setMessageText] = useState("");
  const SendMessage = useCallback(() => {
    setMessageText("");
  });

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.screen}
        keyboardVerticalOffset={100}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ImageBackground
          source={backgroundImage}
          style={styles.backgroundImage}
        ></ImageBackground>
        <View style={styles.InputContainer}>
          <TouchableOpacity
            style={styles.mediaButtons}
            onPress={() => console.log("pressd")}
          >
            <Feather name="plus" size={24} color={Color.blue} />
          </TouchableOpacity>

          <TextInput
            value={messageText}
            onChangeText={(text) => setMessageText(text)}
            onSubmitEditing={SendMessage}
            style={styles.textBox}
          />
          {messageText === "" ? (
            <TouchableOpacity style={styles.mediaButtons}>
              <Feather name="camera" size={24} color={Color.blue} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{ ...styles.mediaButtons, ...styles.sendButton }}
              onPress={SendMessage}
            >
              <Feather name="send" size={24} color="white" />
            </TouchableOpacity>
          )}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  screen: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
  },
  InputContainer: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    height: 50,
  },
  textBox: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 50,
    borderColor: Color.lightGrey,
    marginHorizontal: 15,
    paddingHorizontal: 12,
  },
  mediaButtons: {
    alignItems: "center",
    justifyContent: "center",
    width: 30,
  },
  sendButton: {
    borderRadius: 50,
    backgroundColor: Color.blue,
    width: 35,
    textAlign: "center",
  },
});

export default ChatScreen;
