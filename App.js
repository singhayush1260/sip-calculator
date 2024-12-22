import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SipScreen from "./screens/SipScreen";
import LumpsumScreen from "./screens/LumpsumScreen";
import FdScreen from "./screens/FDScreen";
import RdScreen from "./screens/RdScreen";
import { Ionicons } from "@expo/vector-icons";
import InputContextProvider from "./context/input-context";

const BottomTabs = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <StatusBar style="light" />
      <InputContextProvider>
        <NavigationContainer>
          <BottomTabs.Navigator
            screenOptions={({ navigation }) => ({
              headerStyle: { backgroundColor: "#4379F2" },
              headerTintColor: "white",
              tabBarStyle: { height: 70, backgroundColor: "#4379F2" },
              tabBarInactiveTintColor: "#0A3981",
              tabBarActiveTintColor: "#B9E5E8",
              tabBarLabelStyle: {
                fontSize: 16,
              },
              tabBarIconStyle:{display:"none"}
            })}
          >
            <BottomTabs.Screen
              name="SipScreen"
              component={SipScreen}
              options={{
                title: "SIP Calculator",
                tabBarLabel: "SIP",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="map" color={color} size={size} />
                ),
              }}
            />
            <BottomTabs.Screen
              name="LumpsumScreen"
              component={LumpsumScreen}
              options={{
                title: "Lumpsum Calculator",
                tabBarLabel: "Lumpsum ",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="square" color={color} size={size} />
                ),
              }}
            />
              <BottomTabs.Screen
              name="FdScreen"
              component={FdScreen}
              options={{
                title: "Fixed Deposite Calculator",
                tabBarLabel: "FD ",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="square" color={color} size={size} />
                ),
              }}
            />
               <BottomTabs.Screen
              name="RdScreen"
              component={RdScreen}
              options={{
                title: "Recurring Deposite Calculator",
                tabBarLabel: "RD ",
                tabBarIcon: ({ color, size }) => (
                  <Ionicons name="square" color={color} size={size} />
                ),
              }}
            />
          </BottomTabs.Navigator>
        </NavigationContainer>
      </InputContextProvider>
    </>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
