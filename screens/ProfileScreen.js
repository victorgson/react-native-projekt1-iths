import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const ProfileScreen = ({ userName, navigation }) => {
  const settingsPressedHandler = () => {
    console.log("pressed");
    navigation.navigate("Settings");
  };

  return (
    <View style={styles.screen}>
      <Pressable
        style={{
          alignSelf: "flex-end"
        }}
        onPress={settingsPressedHandler}
      >
        <Ionicons name="settings-sharp" size={32} />
      </Pressable>

      <View style={styles.userDetails}>
        <Ionicons name="person-circle-sharp" size={200} />
        <Text style={styles.userDetailsText}> 123 </Text>
      </View>
      <View>
        <Text> Feed </Text>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column"
  },

  userDetails: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 3,
    paddingBottom: 20
  },

  userDetailsText: {
    textAlign: "center"
  }
});
