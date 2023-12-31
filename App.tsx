import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import Top from "./src/screens/Top";
import Map from "./src/screens/Map";
import { useFonts } from "expo-font";
import { MPLUS1_400Regular } from "@expo-google-fonts/m-plus-1";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux";
import { store } from "./store";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    MPLUS1_400Regular,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="SelectSpot">
            {() => (
              <SafeAreaView style={styles.container}>
                <Top />
              </SafeAreaView>
            )}
          </Stack.Screen>
          <Stack.Screen name="Map">
            {() => (
              <View style={styles.container}>
                <SafeAreaView />
                <Map />
              </View>
            )}
          </Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF3F3",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16,
    marginBottom: 0,
  },
});
