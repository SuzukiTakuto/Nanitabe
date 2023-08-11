import React from "react";
import { View, Image, StyleSheet } from "react-native";

const HotpepperLog = () => {
  return (
    <View style={styles.container}>
      <View style={styles.credit}>
        <Image
          source={require("../../assets/hotpepper-m.png")}
          style={styles.image}
          testID="hotpepper-logo"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
  },
  credit: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 88,
    height: 35,
  },
});

export default HotpepperLog;
