import React from "react";
import { View, Text, StyleSheet, Image, Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useDispatch, useSelector } from "react-redux";
import { RootStackParamList } from "../pageType";
import { HotpepperDataType } from "../hotpepperDataType";
import Button from "./Button";
import {
  togglePrice,
  setHotpepperDatas,
  toggleNow,
  toggleStation,
} from "../topScreenComponents/slice";
import { TopScreenStateType } from "../topScreenComponents/type";

type Props = {
  data: HotpepperDataType;
};

const Shop: React.FC<Props> = ({ data }) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  const isNow = useSelector((state: TopScreenStateType) => state.isNow);
  const isPrice = useSelector((state: TopScreenStateType) => state.isPrice);

  const shopName = data.name.replace(/[\s ]+/g, "\n");

  const goHtpepper = () => {
    Linking.openURL(data.urls.pc).catch((err) => {
      console.error("URLを開けませんでした:", err);
    });
  };

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
      <View style={styles.shopDetail}>
        <Image source={{ uri: data.photo.mobile.l }} style={styles.image} />
        <View>
          <Text style={styles.shopName}>{shopName}</Text>
          <Text style={styles.shopBudget}>料金: {data.budget.name}</Text>
        </View>
      </View>
      <View style={styles.button}>
        <Button
          title={"ホットペッパーで見る"}
          width={230}
          height={40}
          fontSize={14}
          onPress={goHtpepper}
        />
        <Button
          title={"最初に戻る"}
          width={230}
          height={40}
          fontSize={14}
          onPress={goTop}
        />
      </View>
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
  },
  shopDetail: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  shopName: {
    width: 200,
    fontSize: 20,
    lineHeight: 30,
    textAlign: "center",
    paddingBottom: 8,
  },
  shopBudget: {
    fontSize: 16,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
  },
});

export default Shop;
