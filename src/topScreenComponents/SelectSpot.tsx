import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Button from "../components/Button";
import { TopScreenStateType } from "./type";
import { useDispatch } from "react-redux";
import { togglePrice, toggleStation, toggleNow, setStartCoords } from "./slice";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";

const SelectSpot: React.FC = () => {
  const dispatch = useDispatch();

  const selectNow = async () => {
    let { status } = await Permissions.askAsync(
      Permissions.LOCATION_FOREGROUND
    );
    if ("granted" === status) {
      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({});
      dispatch(toggleNow(true));
      dispatch(togglePrice());
      setStartCoords({ latitude, longitude });
    } else {
      return;
    }
  };

  const selectAnother = () => {
    dispatch(toggleNow(false));
    dispatch(toggleStation());
  };

  return (
    <View style={styles.buttonContainer}>
      <Button
        title={"今いるところ"}
        width={125}
        height={40}
        fontSize={16}
        onPress={() => selectNow()}
      />
      <Button
        title={"別なところ"}
        width={125}
        height={40}
        fontSize={16}
        onPress={() => selectAnother()}
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
