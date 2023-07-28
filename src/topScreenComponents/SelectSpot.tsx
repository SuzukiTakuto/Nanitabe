import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Button from "../components/Button";
import { TopScreenStateType } from "./type";
import { useDispatch } from "react-redux";
import { togglePrice, toggleStation } from "./slice";

const SelectSpot: React.FC<TopScreenStateType> = ({ isStation, isPrice }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.buttonContainer}>
      <Button
        title={"今いるところ"}
        width={125}
        fontSize={16}
        onPress={() => dispatch(toggleStation())}
      />
      <Button
        title={"別なところ"}
        width={125}
        fontSize={16}
        onPress={() => dispatch(toggleStation())}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default SelectSpot;
