import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../pageType";
import { useNavigation } from "@react-navigation/native";
import {
  togglePrice,
  toggleStation,
  toggleNow,
} from "../topScreenComponents/slice";
import { TopScreenStateType } from "../topScreenComponents/type";
import { HotpepperDataType } from "../hotpepperDataType";
import Shop from "../components/Shop";
import NoData from "../components/NoData";
import HotpepperLog from "../components/HotpepperLog";
import Button from "../components/Button";

const Map = () => {
  const [data, setData] = useState<HotpepperDataType>({} as HotpepperDataType);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const coords = useSelector((state: TopScreenStateType) => state.startCoords);
  const datas = useSelector(
    (state: TopScreenStateType) => state.hotpepperDatas
  );

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

  useEffect(() => {
    // ランダムなデータを取得する関数を定義
    const getRandomData = () => {
      const randomIndex = Math.floor(Math.random() * datas.length);
      return datas[randomIndex];
    };

    if (datas.length !== 0) {
      setData(getRandomData());
      setIsLoading(false);
    }
  }, [datas]);

  return isLoading ? (
    <View>
      <Text style={styles.text}>お店が見つかりませんでした</Text>
      <Button
        title={"最初に戻る"}
        width={230}
        height={40}
        fontSize={14}
        onPress={goTop}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        region={{
          latitude: data !== undefined ? data.lat : coords.latitude,
          longitude: data !== undefined ? data.lng : coords.longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        <Marker
          coordinate={{
            latitude: data.lat || coords.latitude,
            longitude: data.lng || coords.longitude,
          }}
          identifier="ShopMarker"
        />
      </MapView>

      {datas.length !== 0 ? <Shop data={data} /> : <NoData />}

      <HotpepperLog />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "relative",
  },
  map: {
    flex: 1,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});

export default Map;
