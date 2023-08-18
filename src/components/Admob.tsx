import React, { useContext } from "react";
import { Platform, View, StyleSheet } from "react-native";
import {
  BannerAd,
  BannerAdSize,
  TestIds,
} from "react-native-google-mobile-ads";

interface Props {
  size: BannerAdSize;
}

export default function Admob(props: Props) {
  // テスト用のID
  const unitId = TestIds.BANNER;

  const adUnitID = Platform.select({
    ios: "ca-app-pub-2039388741272451/8521333988",
    android: "ca-app-pub-2039388741272451/8521333988",
  });

  if (!adUnitID) {
    console.error("Unsupported platform");
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.ad}>
        <BannerAd {...props} unitId={adUnitID} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
  },
  ad: {
    alignItems: "center",
    justifyContent: "center",
  },
});
