import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Top from "./src/screens/Top";
import { useFonts } from "expo-font";
import { MPLUS1_400Regular } from "@expo-google-fonts/m-plus-1";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    MPLUS1_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SelectSpot"
          component={() => (
            <SafeAreaView style={styles.container}>
              <Top />
            </SafeAreaView>
          )}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF3F3",
    alignItems: "center",
    justifyContent: "center",
  },
});
