import React from "react";
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  KeyboardAvoidingView,
} from "react-native";
import { useSelector } from "react-redux";
import { BannerAdSize } from "react-native-google-mobile-ads";
import SelectSpot from "../topScreenComponents/SelectSpot";
import { TopScreenStateType } from "../topScreenComponents/type";
import SelectStation from "../topScreenComponents/SelectStation";
import SelectPrice from "../topScreenComponents/SelectPrice";
import Admob from "../components/Admob";

const Top = ({}) => {
  const isStation = useSelector((state: TopScreenStateType) => state.isStation);
  const isPrice = useSelector((state: TopScreenStateType) => state.isPrice);

  const switchComponent = () => {
    if (!isStation && !isPrice) {
      return <SelectSpot />;
    } else if (isStation && !isPrice) {
      return <SelectStation />;
    } else if (!isStation && isPrice) {
      return <SelectPrice />;
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding">
      <View style={styles.container}>
        <Admob size={BannerAdSize.BANNER} />
        <Text style={styles.selectTop}>
          {isPrice ? "いくらくらい？" : "どの辺で食べる？"}
        </Text>
        {switchComponent()}
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  selectTop: {
    fontFamily: "MPLUS1_400Regular",
    fontSize: 24,
    marginBottom: 60,
  },
});

export default Top;
