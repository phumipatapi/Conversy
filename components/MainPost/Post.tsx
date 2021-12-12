import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";

import Colors from "../../constants/Colors";
import { MonoText } from "../StyledText";
import { Text } from "../Themed";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";

export default function Post() {
  return (
    <View style={styles.postContainer}>
      <PostHeader />
      <PostContent />
    </View>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    width: "85%",
    // height: 500,
    // backgroundColor: "black",
    borderRadius: 15,
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
  },
});
