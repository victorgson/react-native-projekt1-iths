import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import IconButton from "./IconButton";

import Colors from "../../utilities/Colors";

const Comment = ({ userName, userText, comments, id, handlePostPressed }) => {
  return (
    <View style={styles.screen}>
      <View style={[styles.container, styles.shadow]}>
        <View style={styles.contentContainer}>
          <View style={styles.contentUserDetails}>
            <Ionicons name="person-circle-outline" size={32} />
            <Text
              style={{ fontSize: 16, fontWeight: "600", marginHorizontal: 5 }}
            >
              {userName}
            </Text>
          </View>
          <View style={styles.contentText}>
            <Text>{userText}</Text>
          </View>
          <View style={styles.interactionContainer}>
            <View style={{ flexDirection: "row" }}>
              <IconButton iconName={"thumbs-up-sharp"} />
              <IconButton iconName={"thumbs-down-sharp"} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Comment;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center"
  },
  container: {
    backgroundColor: Colors.primary,
    width: "90%",
    minHeight: 100,
    maxHeight: 200,

    justifyContent: "center",
    padding: 20
  },
  contentContainer: {
    height: "90%"
  },
  contentUserDetails: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5
  },
  contentText: {
    padding: 10,
    flex: 1,
    flexShrink: 1
  },

  shadow: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3
  },
  interactionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  interactionIcon: {
    paddingHorizontal: 10
  }
});
