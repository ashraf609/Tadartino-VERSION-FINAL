import { StyleSheet } from "react-native";
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
import Header from "./components/Header";
import MaterialIconTextButtonsFooter from "./components/MaterialIconTextButtonsFooter";
import SearchResults from "./screens/SearchResults";
const Stack = createNativeStackNavigator();

export default function App() {
  console.log("App is running");
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="home">
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
              header: () => <Header />,
              footer: () => <MaterialIconTextButtonsFooter />,
            }}
          />
          <Stack.Screen
            name="search"
            component={Search}
            options={{
              header: () => <Header />,
            }}
          />
          <Stack.Screen
            name="SearchResults"
            component={SearchResults}
            options={{
              header: () => <Header />,
            }}
          />
          <Stack.Screen
            name="profil"
            component={profil}
            options={{
              header: () => <Header />,
            }}
          />
          <Stack.Screen
            name="details"
            component={Details}
            options={{
              header: () => <Header />,
            }}
          />
          <Stack.Screen
            name="add"
            component={Add}
            options={{
              header: () => <Header />,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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
