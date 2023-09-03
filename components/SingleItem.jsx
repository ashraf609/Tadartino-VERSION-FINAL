import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React, { useEffect, useState } from "react";
import MaterialButtonPrimary5 from "./MaterialButtonPrimary5";
import { useNavigation } from "@react-navigation/native";
//ads
import {
  TestIds,
  InterstitialAd,
  AdEventType,
} from "react-native-google-mobile-ads";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function SingleItem({ data }) {
  const [loaded, setLoaded] = useState(false);

  const navigation = useNavigation();
  //interstatial
  //adUnitID Interstatial
  const adUnitIdInterstitial =  __DEV__
    ? TestIds.INTERSTITIAL
    : "ca-app-pub-5392293533501938/1817063527"
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

  const handleShowProfile = ()=>{
    try {
      interstitial.show();
    } catch (error) {
      console.log(error)
    }
    navigation.navigate("profil",{id:data.user_id})
  }
  const handleShowDetails = ()=>{
    try {
      interstitial.show();
    }catch (error) {
      console.log(error)
    }
    navigation.navigate("details",{id:data.item_id})
  }
  console.log(data)
  return (
    <View style={styles.rect2Stack} >
      <Image
        source={{ uri: data.image }}
        resizeMode="cover"
        style={styles.image}
      ></Image>
      <View style={styles.rect2}>
        <Text style={{...styles.maisonAvecJardin,fontSize:23,textAlign:"center"}}>{data.category==="vente"?"A Vendre":"A Louer"}</Text>
        <Text style={styles.maisonAvecJardin}>{data.title}</Text>
        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:"5%"}}>
          <Text style={styles.maison}>{data.type}</Text>
          <Text style={styles.maison}>{data.city}</Text>
        </View>
        <View style={styles.button3Row}>
          <Text 
            style={{
              fontSize: 20,
              color: "rgba(16,77,105,100)",
              fontFamily: "Hoefler",
            }}
          >
            {
              data.price>0
              ?
              data.price+" MAD "+(data.type_payement?" / "+data.type_payement:"")
              :
              "Prix non spécifié"

            }
          </Text>
          <Text
            style={{
              fontSize: 20,
              color: "rgba(16,77,105,100)",
              fontFamily: "Hoefler",
              textDecorationLine: "underline",
            }}
            onPress={handleShowProfile}
          >
            Profile
          </Text>
        </View>
        <View style={{justifyContent:"center",alignItems:"center",marginVertical:20}}>
          <MaterialButtonPrimary5
            onPress={handleShowDetails}
            style={styles.materialButtonPrimary5}
          ></MaterialButtonPrimary5>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect2Stack: {
    //marginTop: windowHeight * 0.14,
    height:"100%",
    width: "100%", // Responsive width
    alignItems: "center",
    justifyContent:"space-between",
    borderRadius: 43,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 43,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.52,
    shadowRadius: 0,
    marginTop:10,
    height:"100%"
    //marginLeft: windowWidth * 0.1,
  },
  image: {
    height:"40%",
    width:"100%",
    borderRadius:20
  },
  rect2: {
    width: "100%",
    height:"60%",
    overflow: "visible",
    justifyContent:"space-evenly"
  },
  maison: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 18,
    marginLeft: 15,
  },
  maisonAvecJardin: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 25,
    marginLeft: 15,
  },
  button3Row: {
    height: 46,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:"5%",
    paddingRight:15,

  },
  materialButtonPrimary5: {
    height: 59,
    width: 229,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 18,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 0.25,
    shadowRadius: 0,
    overflow: "visible",
  },
});
