import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Home,
  Login,
  profil,
  Search,
  Signup,
  Welcome,
  Details,
  Add,
} from "./screens";
import { Provider } from "react-redux";
import store from "./store";
import { GestureHandlerRootView } from "react-native-gesture-handler";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="SignUp"
              component={Signup}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="home"
              component={Home}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="search"
              component={Search}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="profil"
              component={profil}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="details"
              component={Details}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="add"
              component={Add}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
