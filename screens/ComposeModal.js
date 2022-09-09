import React, { useState } from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  TextInput,
  Button,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import Colors from "../utilities/Colors";

import { createPost } from "../store/redux/postsSlice";

import { useSelector, useDispatch } from "react-redux";

const ComposeModal = ({ handleComposePressed }) => {
  const [name, setName] = useState();
  const [text, setText] = useState();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.posts.items);

  const handlePostPressed = () => {
    console.log("posted");
    handleComposePressed();
    dispatch(
      createPost({
        userName: name,
        userText: text,
        id: data.length + 1
      })
    );
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.screen}>
        <View style={styles.modalContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              autoComplete="false"
              autoCapitalize="false"
              autoCorrect="false"
              style={styles.textInput}
              placeholder="Your name"
              onChangeText={(v) => {
                setName(v);
              }}
            ></TextInput>
            <TextInput
              autoComplete="false"
              autoCapitalize="false"
              autoCorrect="false"
              style={{
                backgroundColor: "white",
                height: "70%",
                maxHeight: "70%",
                width: "100%",
                marginTop: 10,
                borderWidth: 1
              }}
              multiline={true}
              placeholder="Your post"
              onChangeText={(v) => {
                setText(v);
              }}
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Button title="Cancel" onPress={handleComposePressed} />
            <Button title="Post" onPress={handlePostPressed} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  screen: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center"
  },
  modalContainer: {
    height: "40%",
    width: "80%",
    backgroundColor: Colors.white,
    borderRadius: 30,
    justifyContent: "space-between",
    padding: 10,
    shadowColor: Colors.secondary,
    shadowOffset: { width: 1, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5
  },
  inputContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    width: "80%",
    height: 40,
    borderWidth: 1
  }
});

export default ComposeModal;
