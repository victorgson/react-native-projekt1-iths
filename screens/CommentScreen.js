import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import FeedPost from "../components/ui/FeedPost";
import Comment from "../components/ui/Comment";

const CommentScreen = ({ route }) => {
  const { data } = route.params;
  // console.log(data.comments);
  console.log(data);

  const renderItem = ({ item }) => (
    <View>
      <Text> #{item.id} </Text>
      <Comment userName={"User"} userText={item.commentText} />
    </View>
  );

  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <FeedPost userName={data.userName} userText={data.userText} />

        <View style={styles.commentSection}>
          <FlatList
            data={data.comments}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
          />
        </View>
      </View>
    </View>
  );
};

export default CommentScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },
  container: {
    flex: 1,
    marginTop: 30
  },
  commentSection: {
    flex: 1,
    marginLeft: 10
  }
});
