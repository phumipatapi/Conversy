import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Colors from "../../constants/Colors";
import { MonoText } from "../StyledText";
import { Text } from "../Themed";

export default function PostHeader() {
  return (
    <View style={styles.postHeaderContainer}>
      <View style={styles.textInline}>
        <TouchableOpacity style={styles.profilePicture}></TouchableOpacity>
        <View style={styles.textContainer}>
          <TouchableOpacity>
            <Text style={styles.profileName}>Phumipat Apivansri</Text>
          </TouchableOpacity>
          <Text style={styles.timeText}>Time</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.postSetting}>
        <Icon name="more-vertical" size={20} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  postHeaderContainer: {
    height: 70,
    // backgroundColor: "green",
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    justifyContent: "space-between",
    flexDirection: "row",
  },
  profilePicture: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  profileName: {
    color: "black",
  },
  timeText: {
    color: "black",
  },
  textInline: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  textContainer: {
    marginLeft: 15,
  },
  postSetting: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
});
