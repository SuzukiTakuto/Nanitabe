import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  Alert,
  Linking,
} from "react-native";
import Button from "../components/Button";
import { useDispatch } from "react-redux";
import { togglePrice, toggleStation, toggleNow, setStartCoords } from "./slice";
import * as Location from "expo-location";

const SelectSpot: React.FC = () => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const selectNow = async () => {
    setLoading(true);
    let { status } = await Location.requestForegroundPermissionsAsync();
    if ("granted" === status) {
      const coords = await Location.getCurrentPositionAsync({});
      const startCoords = {
        latitude: coords.coords.latitude,
        longitude: coords.coords.longitude,
      };
      dispatch(toggleNow(true));
      dispatch(setStartCoords(startCoords));
      dispatch(togglePrice());
      setLoading(false);
    } else if ("denied" === status) {
      Alert.alert(
        "位置情報の許可が必要です",
        "アプリが位置情報へのアクセスを求めています。",
        [
          { text: "キャンセル", style: "cancel" },
          { text: "設定へ移動", onPress: () => Linking.openSettings() },
        ]
      );
    }
  };

  const selectAnother = () => {
    dispatch(toggleNow(false));
    dispatch(toggleStation());
  };

  return (
    <View>
      {loading ? (
        <Text>loading...</Text>
      ) : (
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
      )}
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
