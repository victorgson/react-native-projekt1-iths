import { View, Text, Pressable, StyleSheet } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Colors from "../../utilities/Colors";

const IconButton = ({ iconName }) => {
  return (
    <Pressable>
      <Ionicons
        name={iconName}
        size={20}
        color={Colors.secondary}
        style={styles.interactionIcon}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  interactionIcon: {
    paddingHorizontal: 10
  }
});
export default IconButton;
