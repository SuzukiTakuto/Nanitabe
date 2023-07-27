import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Button from "../components/Button";

const Top = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.selectTop}>どの辺で食べる？</Text>
      <View style={styles.buttonContainer}>
        <Button
          title={"今いるところ"}
          width={125}
          fontSize={16}
          onPress={() => alert("now")}
        />
        <Button
          title={"別なところ"}
          width={125}
          fontSize={16}
          onPress={() => alert("station")}
        />
      </View>

      <View></View>

      <View></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selectTop: {
    fontFamily: "MPLUS1_400Regular",
    fontSize: 24,
    marginBottom: 60,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  button: {
    width: 125,
    height: 40,
    backgroundColor: "#FAF3F3",
    borderWidth: 1,
    borderColor: "#6750A4",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  buttonText: {
    fontFamily: "MPLUS1_400Regular",
    fontSize: 16,
    color: "#6750A4",
  },
});

export default Top;
