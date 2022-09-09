import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import IconButton from "./IconButton";

import Colors from "../../utilities/Colors";

const FeedPost = ({ userName, userText, comments, id, handlePostPressed }) => {
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
            <Pressable onPress={handlePostPressed}>
              <Text style={{ bottom: 0 }}>
                Comments {comments != undefined ? comments.length : 0}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default FeedPost;

const styles = StyleSheet.create({
  screen: {
    alignItems: "center"
  },
  container: {
    backgroundColor: Colors.primary,
    width: "100%",
    minHeight: 100,
    maxHeight: 300,
    marginVertical: 5,

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

    height: "auto"
  },

  shadow: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 3
  },
  interactionContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",
    alignItems: "center"
  },
  interactionIcon: {
    paddingHorizontal: 10
  }
});
