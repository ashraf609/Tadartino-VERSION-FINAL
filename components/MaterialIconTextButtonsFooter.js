import React, { Component, useEffect, useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Icon from "react-native-vector-icons/FontAwesome";
import FeatherIcon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
//ads
import {
  TestIds,
  InterstitialAd,
  AdEventType,
} from "react-native-google-mobile-ads";
function MaterialIconTextButtonsFooter(props) {
  const [loaded, setLoaded] = useState(false);
  const navigation = useNavigation();
  const user_info = useSelector((state) => state.user_info);
  console.log("Footer");
  //interstatial
  //adUnitID Interstatial
  const adUnitIdInterstitial = __DEV__
    ? TestIds.INTERSTITIAL
    : "ca-app-pub-5392293533501938/1817063527";
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
  }, []);

  const userIconHandler = () => {
    try {
      interstitial.show();
    } catch (error) {
      console.log(error);
    }
    user_info.user?.token
      ? navigation.navigate("profil", { id: user_info.user?.id })
      : navigation.navigate("SignUp");
  };
  const plusIconHandler = () => {
    try {
      interstitial.show();
    } catch (error) {
      console.log(error);
    }
    user_info.user?.token
      ? navigation.navigate("add")
      : navigation.navigate("SignUp");
  };
  const searchIconHandler = () => {
    try {
      interstitial.show();
    } catch (error) {
      console.log(error);
    }
    navigation.navigate("search");
  };
  return (
    <View style={[styles.container, props.style]}>
      {/* <TouchableOpacity style={styles.buttonWrapper1} onPress={userIconHandler}>
        <FeatherIcon name="user" style={styles.icon1}></FeatherIcon>
        <Text style={styles.btn1Text}>User</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.activeButtonWrapper}
        onPress={plusIconHandler}
      >
        <Icon name="plus" style={styles.activeIcon} />
        <Text style={styles.activeContent}>Add</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.buttonWrapper2}
        onPress={searchIconHandler}
      >
        <Icon name="search" style={styles.icon2} />
        <Text style={styles.btn2Text}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flexDirection: "row",
    shadowColor: "#111",
    justifyContent: "center",
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 3,
  },
  buttonWrapper1: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
  },
  icon1: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8,
  },
  btn1Text: {
    fontSize: 12,
    color: "#9E9E9E",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
  activeButtonWrapper: {
    flex: 1,
    paddingTop: 6,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
  },
  activeIcon: {
    backgroundColor: "transparent",
    color: "rgba(16,77,105,100)",
    fontSize: 24,
    opacity: 0.8,
  },
  activeContent: {
    fontSize: 14,
    color: "rgba(16,77,105,100)",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
  buttonWrapper2: {
    flex: 1,
    paddingTop: 8,
    paddingBottom: 10,
    paddingHorizontal: 12,
    minWidth: 80,
    maxWidth: 168,
    alignItems: "center",
  },
  icon2: {
    backgroundColor: "transparent",
    color: "#616161",
    fontSize: 24,
    opacity: 0.8,
  },
  btn2Text: {
    fontSize: 12,
    color: "#9E9E9E",
    backgroundColor: "transparent",
    paddingTop: 4,
  },
});

export default MaterialIconTextButtonsFooter;
