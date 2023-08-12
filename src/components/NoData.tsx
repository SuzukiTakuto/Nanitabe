import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Button from "./Button";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamList } from "../pageType";
import {
  togglePrice,
  toggleStation,
  toggleNow,
} from "../topScreenComponents/slice";
import { TopScreenStateType } from "../topScreenComponents/type";

const NoData = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const isNow = useSelector((state: TopScreenStateType) => state.isNow);
  const goTop = () => {
    if (isNow) {
      dispatch(toggleNow(false));
    } else {
      dispatch(toggleStation());
    }
    dispatch(togglePrice());
    navigation.navigate("SelectSpot");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>データがありません</Text>
      <Button
        title={"最初に戻る"}
        width={230}
        height={40}
        fontSize={14}
        onPress={goTop}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "95%",
    position: "absolute",
    bottom: 60,
    margin: 10,
    backgroundColor: "#FAF3F3",
    borderRadius: 10,
    padding: 16,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default NoData;
