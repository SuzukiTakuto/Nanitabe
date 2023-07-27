import React from "react";
import { Text, Pressable, StyleSheet } from "react-native";

type Props = {
  onPress: () => void;
  title: string;
  width: number;
  fontSize: number;
};

const Button = (props: Props) => {
  const { onPress, title, width, fontSize } = props;

  return (
    <Pressable style={[styles.button, { width: width }]} onPress={onPress}>
      <Text style={[styles.buttonText, { fontSize: fontSize }]}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
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
    color: "#6750A4",
  },
});

export default Button;
