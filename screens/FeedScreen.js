import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
  Modal
} from "react-native";
import React, { useState } from "react";
import FeedPost from "../components/ui/FeedPost";
import Ionicons from "@expo/vector-icons/Ionicons";
import ComposeModal from "./ComposeModal";
import Colors from "../utilities/Colors";

import { useSelector } from "react-redux";

// const data2 = [
//   {
//     userName: "Victor Gustafsson",
//     userText: "har slutfört en träning(Push).",
//     id: 1,
//     comments: [
//       {
//         id: 1,
//         commentText: "tjena"
//       },
//       {
//         id: 2,
//         commentText: "nä men tjena"
//       }
//     ]
//   },
//   {
//     userName: "Victor Gustafsson",
//     userText: "Uppnådde PR Bänk press - 100 kg",
//     id: 2
//   },
//   {
//     userName: "Victor Gustafsson",
//     userText: "Hej hej hej",
//     id: 3
//   },
//   {
//     userName: "Victor Test",
//     userText: "Hej hej och hå",
//     id: 4
//   },
//   {
//     userName: "Victor Gustafsson",
//     userText: "Hej hej hej",
//     id: 5
//   },
//   {
//     userName: "Victor Test",
//     userText: "Hej hej och hå",
//     id: 6
//   }
// ];

export default function FeedScreen({ navigation }) {
  const [showModal, setShowModal] = useState(false);

  const data = useSelector((state) => state.posts.items);

  const handleComposePressed = () => {
    setShowModal(!showModal);
  };

  const handlePostPressed = (id) => {
    console.log(id);

    navigation.navigate("Comments", {
      data: data[id]
    });
  };

  const renderItem = ({ item, index }) => (
    <FeedPost
      userName={item.userName}
      userText={item.userText}
      comments={item.comments}
      id={item.id}
      handlePostPressed={() => handlePostPressed(item.id - 1)}
    />
  );

  return (
    <View
      style={[styles.screen, showModal ? { opacity: 0.3 } : { opacity: 1.0 }]}
    >
      <Modal
        animationType="slide"
        transparent={true}
        visible={showModal}
        onRequestClose={() => {
          setShowModal(!showModal);
        }}
      >
        <ComposeModal handleComposePressed={handleComposePressed} />
      </Modal>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        style={{ marginTop: 20 }}
      />
      <Pressable onPress={handleComposePressed}>
        <Ionicons
          name="add-circle-sharp"
          size={64}
          style={styles.addButton}
          color={Colors.secondary}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white
  },

  addButton: {
    position: "absolute",
    bottom: 0,
    right: 0
  }
});
