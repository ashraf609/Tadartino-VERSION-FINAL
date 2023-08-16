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
import "expo-dev-client";

//ads
import {
  BannerAd,
  BannerAdSize,
  TestIds,
  AppOpenAd,
} from "react-native-google-mobile-ads";
import { useEffect, useState } from "react";
import { View } from "react-native";

const Stack = createNativeStackNavigator();

export default function App() {
  console.log("App is running");
  const [loaded, setLoaded] = useState(false);
  const [nativeAd, setNativeAd] = useState(null);

  //adUnitID BANNER
  const adUnitIdBanner = __DEV__
    ? TestIds.BANNER
    : "ca-app-pub-5392293533501938/8574043566";

  //adUnitId advanced native format
  const adUnitIdNative = __DEV__
    ? TestIds.GAM_NATIVE
    : "ca-app-pub-5392293533501938/5564736840";

  //app open adUnitId
  const adUnitIdAppOpen = __DEV__
    ? TestIds.APP_OPEN
    : "ca-app-pub-5392293533501938/3754845623";
  console.log("env");
  console.log(process.env);
  console.log("Ad unit banner ", adUnitIdBanner);
  console.log("ad unit id app open ", adUnitIdAppOpen);
  console.log("ad unit id native ", adUnitIdNative);
  const loadAppOpenAd = async () => {
    try {
      console.log("requesting ad");
      const appOpenAd = AppOpenAd.createForAdRequest(adUnitIdAppOpen, {
        requestNonPersonalizedAdsOnly: true,
        keywords: ["fashion", "clothing"],
      });
      console.log("loading...");
      console.log(appOpenAd);
      // Preload an app open ad
      appOpenAd.load();
      setTimeout(() => {
        try {
          console.log("showing");
          // Show the app open ad when user brings the app to the foreground.
          appOpenAd.show();
        } catch (error) {
          console.log(error);
        }
      }, 10000);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadAppOpenAd();
  });

  //interstatial
  //adUnitID Interstatial
  /*const adUnitIdInterstitial = __DEV__
    ? TestIds.INTERSTITIAL
    : process.env.ADUNITIDINTERSTATIAL;
  const interstitial = InterstitialAd.createForAdRequest(adUnitIdInterstitial, {
    requestNonPersonalizedAdsOnly: true,
    keywords: ["fashion", "clothing"],
  });
  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(
      AdEventType.LOADED,
      () => {
        setLoaded(true);
      }
    );

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);*/

  // No advert ready to show yet
  /*if (!loaded) {
    return null;
  }*/
  return (
    <Provider store={store}>
      <NavigationContainer style={styles.container}>
        <Stack.Navigator
          initialRouteName="home"
          screenOptions={{
            animation: "fade_from_bottom",
          }}
        >
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
        {
          //ads
        }
        <BannerAd
          unitId={adUnitIdBanner}
          size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
          requestOptions={{
            requestNonPersonalizedAdsOnly: true,
          }}
        />
        {
          //ads end
        }
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
