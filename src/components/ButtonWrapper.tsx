import React from "react";
import Button from "./Button";
import { View, StyleSheet } from "react-native";

type Props = {
  onBack: () => void;
  onConfirm: () => void;
};

const ButtonWrapper: React.FC<Props> = ({ onBack, onConfirm }) => {
  return (
    <View style={styles.container}>
      <Button
        title={"戻る"}
        width={80}
        height={25}
        fontSize={12}
        onPress={onBack}
      />
      <Button
        title={"決定"}
        width={80}
        height={25}
        fontSize={12}
        onPress={onConfirm}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default ButtonWrapper;
