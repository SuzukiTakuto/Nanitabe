import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import Button from "../components/Button";
import { useSelector } from "react-redux";
import SelectSpot from "../topScreenComponents/SelectSpot";
import { TopScreenStateType } from "../topScreenComponents/type";

const Top = () => {
  const isStation = useSelector((state: TopScreenStateType) => state.isStation);
  const isPrice = useSelector((state: TopScreenStateType) => state.isPrice);

  const switchComponent = () => {
    if (!isStation && !isPrice) {
      return <SelectSpot isStation={isStation} isPrice={isPrice} />;
    } else if (isStation && !isPrice) {
      return <Text>駅</Text>;
    } else if (!isStation && isPrice) {
      return <Text>料金</Text>;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.selectTop}>
        {isPrice ? "いくらくらい？" : "どの辺で食べる？"}
      </Text>

      {switchComponent()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selectTop: {
    fontFamily: "MPLUS1_400Regular",
    fontSize: 24,
    marginBottom: 60,
  },
});

export default Top;
