import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import { TopScreenStateType } from "../topScreenComponents/type";
import { HotpepperDataType } from "../hotpepperDataType";

const Map = () => {
  const [data, setData] = useState<HotpepperDataType>({} as HotpepperDataType);

  const coords = useSelector((state: TopScreenStateType) => state.startCoords);
  const datas = useSelector(
    (state: TopScreenStateType) => state.hotpepperDatas
  );

  useEffect(() => {
    // ランダムなデータを取得する関数を定義
    const getRandomData = () => {
      const randomIndex = Math.floor(Math.random() * datas.length);
      return datas[randomIndex];
    };

    setData(getRandomData());
  }, [datas]);

  // data.lat と data.lng が有効な場合にマップを描画する
  if (data.lat && data.lng) {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: data.lat,
            longitude: data.lng,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        >
          <Marker
            coordinate={{
              latitude: data.lat,
              longitude: data.lng,
            }}
          />
        </MapView>
      </View>
    );
  } else {
    // data.lat と data.lng が無効な場合は、ローディングなどの表示を行う
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  map: {
    flex: 1,
  },
});

export default Map;
