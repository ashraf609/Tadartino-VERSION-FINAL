import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
  Dimensions,
} from "react-native";
import MaterialButtonPrimary5 from "../components/MaterialButtonPrimary5";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import FeatherIcon from "react-native-vector-icons/Feather";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Swiper from "react-native-swiper";
import { Feather } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import { useDispatch, useSelector } from "react-redux";
import { get_all_items_action } from "../State/Actions/ItemAction";
import SingleItem from "../components/SingleItem";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
function Home(props) {
  const [isFontLoaded, setFontLoaded] = useState(false);
  const [flipAnimation] = useState(new Animated.Value(0));
  const [showNumbers, setShowNumbers] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [flippedButtonIndex, setFlippedButtonIndex] = useState(null);
  const get_all_items = useSelector((state) => state.get_all_items);
  const dispatch = useDispatch();
  const loadFonts = async () => {
    await Font.loadAsync({
      // Use the actual font name here, and the path to the font file
      Hoefler: require("../assets/fonts/ufonts.com_hoefler-text.ttf"),
    });
    setFontLoaded(true);
  };

  useEffect(() => {
    loadFonts();
  }, []);

  //getting all items
  useEffect(() => {
    dispatch(get_all_items_action());
  }, []);

  const startFlippingAnimation = (index) => {
    setShowNumbers(true);
    setFlippedButtonIndex(index);
    setShowIcon(false);
    Animated.timing(flipAnimation, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start(() => {
      flipAnimation.setValue(0);

      setTimeout(() => {
        setShowNumbers(false);
        setShowIcon(true);
        setFlippedButtonIndex(null);
      }, 6000);
    });
  };

  const flipInterpolation = flipAnimation.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["0deg", "90deg", "360deg"],
  });

  if (!isFontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.buttonRow}>
        <View style={styles.rect1}></View>
        <Image
          source={require("../assets/rect.png")}
          resizeMode="contain"
          style={styles.imagens}
        ></Image>
      </View>
      <Swiper style={styles.wrapper} showsButtons loop={false}>
        {/* <View style={styles.rect2Stack}>
          <View style={styles.rect2}>
            <Text style={styles.maison}>Maison</Text>
            <Text style={styles.maisonAvecJardin}>Maison avec jardin</Text>
            <View style={styles.button3Row}>
              <Text
                style={{
                  left: 210,
                  top: 40,
                  fontSize: 20,

                  color: "rgba(16,77,105,100)",
                  fontFamily: "Hoefler",
                  textDecorationLine: "underline",
                }}
                onPress={() => props.navigation.navigate("profil")}
              >
                Profil
              </Text>
            </View>
            <Image
              source={require("../assets/House-PNG-Picture.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <MaterialButtonPrimary5
              onPress={() => props.navigation.navigate("details")}
              style={styles.materialButtonPrimary5}
            ></MaterialButtonPrimary5>
          </View>
        </View>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}>
            <Text style={styles.maison}>Maison</Text>
            <Text style={styles.maisonAvecJardin}>Maison avec jardin</Text>
            <View style={styles.button3Row}>
              <Text
                style={{
                  left: 210,
                  top: 40,
                  fontSize: 20,

                  color: "rgba(16,77,105,100)",
                  fontFamily: "Hoefler",
                  textDecorationLine: "underline",
                }}
                onPress={() => props.navigation.navigate("profil")}
              >
                Profil
              </Text>
            </View>
            <Image
              source={require("../assets/House-PNG-Picture.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <MaterialButtonPrimary5
              onPress={() => props.navigation.navigate("details")}
              style={styles.materialButtonPrimary5}
            ></MaterialButtonPrimary5>
          </View>
        </View>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}>
            <Text style={styles.maison}>Maison</Text>
            <Text style={styles.maisonAvecJardin}>Maison avec jardin</Text>
            <View style={styles.button3Row}>
              <Text
                style={{
                  left: 210,
                  top: 40,
                  fontSize: 20,

                  color: "rgba(16,77,105,100)",
                  fontFamily: "Hoefler",
                  textDecorationLine: "underline",
                }}
                onPress={() => props.navigation.navigate("profil")}
              >
                Profil
              </Text>
            </View>
            <Image
              source={require("../assets/House-PNG-Picture.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
           
          </View>
        </View> */}
        {(get_all_items?.data || [])?.map((item, idx) => (
          <SingleItem data={item} key={idx} />
        ))}
      </Swiper>
      <MaterialIconTextButtonsFooter
        style={styles.materialIconTextButtonsFooter}
      ></MaterialIconTextButtonsFooter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontSize: 20,
    marginTop: 90,
  },
  materialIconTextButtonsFooter: {
    height: windowHeight * 0.08, // Responsive height
    width: windowWidth * 0.9,
    borderRadius: 60,
    marginLeft: windowWidth * 0.05, // Responsive marginLeft
    bottom: -windowHeight * 0.03, // Responsive bottom
    position: "absolute",
    top: 730,
  },
  rect2: {
    top: -75,
    left: 5,
    width: "100%",
    height: "110%",
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
    overflow: "visible",
  },
  rect1: {
    top: 3,
    width: windowWidth * 0.8, // Responsive width
    height: windowHeight * 0.22,
    position: "absolute",
    backgroundColor: "#104d69",
    borderRadius: 76,
    left: 40,
  },
  imagens: {
    top: 22,
    width: windowWidth * 0.4, // Responsive width
    height: windowHeight * 0.3, // Responsive height
    marginLeft: windowWidth * 0.3, // Responsive marginLeft
  },
  maison: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 29,
    marginTop: 342,
    marginLeft: 15,
  },
  maisonAvecJardin: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,
    marginTop: 12,
    marginLeft: 15,
  },
  buttonText: {
    color: "white",
    fontSize: 33,
    fontWeight: "bold",
    marginLeft: 4,
    marginTop: -2,
  },
  iconRow: {
    marginLeft: 7,
    marginTop: 3,
  },
  button3: {
    width: 49,
    height: 46,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
  },
  button4: {
    width: 49,
    height: 46,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
    marginLeft: 26,
  },
  button5: {
    width: 49,
    height: 46,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
    marginLeft: 19,
  },
  button6: {
    width: 49,
    height: 46,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
    marginLeft: 21,
  },
  button3Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 24,
    marginRight: 27,
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
    marginTop: 28,
    marginLeft: 38,
  },
  image: {
    top: 20,
    left: 15,
    width: 284,
    height: 312,
    position: "absolute",
  },
  rect2Stack: {
    marginTop: windowHeight * 0.14,
    width: windowWidth * 0.8, // Responsive width
    height: windowHeight * 0.7, // Responsive height
    alignItems: "center",
    marginLeft: windowWidth * 0.1,
  },
  button: {
    width: 49,
    height: 46,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
    marginTop: 126,
  },
  icon: {
    color: "rgba(7,116,243,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginTop: 2,
    marginLeft: 5,
  },
  button2: {
    width: 48,
    height: 46,
    backgroundColor: "rgba(135,186,246,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 100,
    marginLeft: 9,
    marginTop: 126,
  },
  icon2: {
    color: "rgba(10,121,251,1)",
    fontSize: 38,
    height: 38,
    width: 38,
    marginLeft: 4,
  },
  buttonRow: {
    height: 162,
    flexDirection: "row",
    marginLeft: 10,
    marginRight: 11,
    marginTop: windowHeight * 0.3,
    marginTop: -105,
  },
});

export default Home;
