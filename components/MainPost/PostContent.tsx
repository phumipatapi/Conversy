import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

import Colors from "../../constants/Colors";
import { MonoText } from "../StyledText";
import { Text } from "../Themed";
import PostBottom from "./PostBottom";

export default function PostContent() {
  return (
    <View style={styles.postContentContainer}>
      <TouchableOpacity>
        <Image
          style={styles.postImage}
          source={require("../../assets/images/photo-1453728013993-6d66e9c9123a.jpeg")}
        />
      </TouchableOpacity>

      <View>
        <Text style={styles.postText}>
          Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
          nobis animi asperiores, ullam ipsa eligendi perferendis quo aliquid
          hic Lo
        </Text>
        <PostBottom />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postContentContainer: {
    height: 420,
    // backgroundColor: "green",
    borderRadius: 15,
  },
  postImage: {
    height: 300,
    backgroundColor: "yellow",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    width: "100%",
  },
  postText: {
    marginTop: 13,
    marginBottom: 13,
  },
});
