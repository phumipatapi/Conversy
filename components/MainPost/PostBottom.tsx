import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Colors from "../../constants/Colors";
import { MonoText } from "../StyledText";
import { Text } from "../Themed";

export default function PostBottom() {
  return (
    <View style={styles.postBottomContainer}>
      <View style={styles.engageContainer}>
        <TouchableOpacity style={styles.likeContainer}>
          <Icon name="heart" size={24} color={"red"} />
          <Text style={{ marginLeft: 10 }}>100</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.commentContainer}>
          <Icon name="message-square" size={24} color={"black"} />
          <Text style={{ marginLeft: 10 }}>100</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={{ marginRight: 10 }}>
        <Icon name="arrow-right" size={24} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  postBottomContainer: {
    height: 30,
    // backgroundColor: "green",
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  likeContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  commentContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 40,
  },
  engageContainer: { flexDirection: "row", alignItems: "center" },
});
