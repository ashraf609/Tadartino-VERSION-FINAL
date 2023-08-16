import { View,StyleSheet,Image,Dimensions } from 'react-native'
import React from 'react'
//ads
import {
  BannerAd,
  BannerAdSize,
  InterstitialAd,
  AdEventType,
  TestIds,
} from "react-native-google-mobile-ads";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function Header() {  
  const [loaded, setLoaded] = useState(false);

  const navigation = useNavigation();

  //adUnitID BANNER
  const adUnitIdBanner = __DEV__
  ? TestIds.BANNER
  : "ca-app-pub-5392293533501938/8574043566";  
  const searchIconHandler = () => {
      try {
        interstitial.show();
      } catch (error) {
        console.log(error);
      }
      navigation.navigate("search");
  };
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
    return (
    <View>
      <View style={styles.buttonRow}>
        <View style={styles.rect1}></View>
        <Image
          source={require("../assets/rect.png")}
          resizeMode="contain"
          style={styles.imagens}
        ></Image>
      </View>
      {
        //search button
        <TouchableOpacity
        style={styles.buttonWrapper2}
        onPress={searchIconHandler}
      >
        <Icon name="search" style={styles.icon3} />
        {/* <Text style={styles.btn2Text}>Search</Text> */}
      </TouchableOpacity>
      }
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
    </View>
  )
}

const styles = StyleSheet.create({
    buttonRow: {
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#104d69",
        borderRadius: 76,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingVertical:15,
        marginBottom:5,
        width: "100%",
    },
    imagens: {
        width: windowWidth * 0.4, // Responsive width
        height: windowHeight * 0.1, // Responsive height
    },
    rect1: {

    },
    buttonWrapper2: {
      backgroundColor: "transparent",
      shadowColor: "#111",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      right: "7%",
      top: "10%",
    },
    icon3: {
      backgroundColor: "transparent",
      color: "#fff",
      fontSize: 30,
      opacity: 0.8,
    },
    btn2Text: {
      fontSize: 12,
      color: "#fff",
      backgroundColor: "transparent",
      paddingTop: 4,
    },
      
})