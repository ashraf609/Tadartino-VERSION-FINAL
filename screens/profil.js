import React, { Component, useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Animated,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import Svg, { Ellipse } from "react-native-svg";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Swiper from "react-native-swiper";
import MaterialButtonPrimary5 from "../components/MaterialButtonPrimary5";
import { Feather } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Ico from "react-native-vector-icons/Entypo";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
function Profil(props) {
  const [isFontLoaded, setFontLoaded] = useState(false);
  const [flipAnimation] = useState(new Animated.Value(0));
  const [showNumbers, setShowNumbers] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [flippedButtonIndex, setFlippedButtonIndex] = useState(null);
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
        <View style={styles.rect10}></View>
        <Image
          source={require("../assets/rect.png")}
          resizeMode="contain"
          style={styles.imagens}
        ></Image>
      </View>
      <View style={styles.button2Row}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate("SignUp")}
          style={styles.button1}
        >
          <FeatherIcon name="user" style={styles.icon1}></FeatherIcon>
        </TouchableOpacity>
      </View>
      <View style={styles.ellipseStack}>
        <Svg viewBox="0 0 158.98 144.38" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="#87baf6"
            cx={79}
            cy={72}
            rx={79}
            ry={72}
          ></Ellipse>
        </Svg>
        <Image
          source={require("../assets/profil.png")}
          resizeMode="contain"
          style={styles.images}
        ></Image>
      </View>
      <Text style={styles.profil1}>Profil 1</Text>
      <Text style={styles.description}>Description</Text>
      <View style={styles.annonceDuProfilRow}>
        <Text style={styles.annonceDuProfil}>Annonce du Profil:</Text>
        <TouchableOpacity style={styles.buttons3}>
          <EvilIconsIcon name="search" style={styles.icons2}></EvilIconsIcon>
        </TouchableOpacity>
      </View>
      <Swiper style={styles.wrapper} showsButtons loop={false}>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}>
            <Text style={styles.maison}>Maison</Text>
            <Text style={styles.maisonAvecJardin}>Maison avec jardin</Text>
            <View style={styles.button3Row}>
              <TouchableOpacity
                style={[
                  styles.button3,
                  {
                    transform: [
                      {
                        rotateY:
                          flippedButtonIndex === 1 ? flipInterpolation : "0deg",
                      },
                    ],
                  },
                ]}
                onPress={() => startFlippingAnimation(1)}
              >
                {showIcon && (
                  <Feather
                    name="home"
                    size={20}
                    style={styles.iconRow}
                    color="white"
                  />
                )}
                {showNumbers && flippedButtonIndex === 1 && (
                  <Text style={styles.buttonText}>&nbsp;3</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button4,
                  {
                    transform: [
                      {
                        rotateY:
                          flippedButtonIndex === 2 ? flipInterpolation : "0deg",
                      },
                    ],
                  },
                ]}
                onPress={() => startFlippingAnimation(2)}
              >
                {showIcon && (
                  <Icon
                    name="bed"
                    size={17}
                    style={styles.iconRow}
                    color="white"
                  />
                )}
                {showNumbers && flippedButtonIndex === 2 && (
                  <Text style={styles.buttonText}>&nbsp;1</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button5,
                  {
                    transform: [
                      {
                        rotateY:
                          flippedButtonIndex === 3 ? flipInterpolation : "0deg",
                      },
                    ],
                  },
                ]}
                onPress={() => startFlippingAnimation(3)}
              >
                {showIcon && (
                  <Icon
                    name="bath"
                    size={18}
                    style={styles.iconRow}
                    color="white"
                  />
                )}
                {showNumbers && flippedButtonIndex === 3 && (
                  <Text style={styles.buttonText}>&nbsp;2</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button6,
                  {
                    transform: [
                      {
                        rotateY:
                          flippedButtonIndex === 4 ? flipInterpolation : "0deg",
                      },
                    ],
                  },
                ]}
                onPress={() => startFlippingAnimation(1)}
              >
                {showIcon && (
                  <Icons
                    name="hanger"
                    size={20}
                    style={styles.iconRow}
                    color="white"
                  />
                )}
                {showNumbers && flippedButtonIndex === 4 && (
                  <Text style={styles.buttonText}>&nbsp;1</Text>
                )}
              </TouchableOpacity>
            </View>

            <Image
              source={require("../assets/House-PNG-Picture.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <MaterialButtonPrimary5
              style={styles.materialButtonPrimary5}
            ></MaterialButtonPrimary5>
          </View>
        </View>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}>
            <Text style={styles.maison}>Maison</Text>
            <Text style={styles.maisonAvecJardin}>Maison avec jardin</Text>
            <View style={styles.button3Row}>
              <TouchableOpacity
                style={[
                  styles.button3,
                  {
                    transform: [
                      {
                        rotateY:
                          flippedButtonIndex === 1 ? flipInterpolation : "0deg",
                      },
                    ],
                  },
                ]}
                onPress={() => startFlippingAnimation(1)}
              >
                {showIcon && (
                  <Feather
                    name="home"
                    size={20}
                    style={styles.iconRow}
                    color="white"
                  />
                )}
                {showNumbers && flippedButtonIndex === 1 && (
                  <Text style={styles.buttonText}>&nbsp;3</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button4,
                  {
                    transform: [
                      {
                        rotateY:
                          flippedButtonIndex === 2 ? flipInterpolation : "0deg",
                      },
                    ],
                  },
                ]}
                onPress={() => startFlippingAnimation(2)}
              >
                {showIcon && (
                  <Icon
                    name="bed"
                    size={17}
                    style={styles.iconRow}
                    color="white"
                  />
                )}
                {showNumbers && flippedButtonIndex === 2 && (
                  <Text style={styles.buttonText}>&nbsp;1</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button5,
                  {
                    transform: [
                      {
                        rotateY:
                          flippedButtonIndex === 3 ? flipInterpolation : "0deg",
                      },
                    ],
                  },
                ]}
                onPress={() => startFlippingAnimation(3)}
              >
                {showIcon && (
                  <Icon
                    name="bath"
                    size={18}
                    style={styles.iconRow}
                    color="white"
                  />
                )}
                {showNumbers && flippedButtonIndex === 3 && (
                  <Text style={styles.buttonText}>&nbsp;2</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button6,
                  {
                    transform: [
                      {
                        rotateY:
                          flippedButtonIndex === 4 ? flipInterpolation : "0deg",
                      },
                    ],
                  },
                ]}
                onPress={() => startFlippingAnimation(1)}
              >
                {showIcon && (
                  <Icons
                    name="hanger"
                    size={20}
                    style={styles.iconRow}
                    color="white"
                  />
                )}
                {showNumbers && flippedButtonIndex === 4 && (
                  <Text style={styles.buttonText}>&nbsp;1</Text>
                )}
              </TouchableOpacity>
            </View>
            <Image
              source={require("../assets/House-PNG-Picture.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <MaterialButtonPrimary5
              style={styles.materialButtonPrimary5}
            ></MaterialButtonPrimary5>
          </View>
        </View>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}>
            <Text style={styles.maison}>Maison</Text>
            <Text style={styles.maisonAvecJardin}>Maison avec jardin</Text>
            <View style={styles.button3Row}>
              <TouchableOpacity
                style={[
                  styles.button3,
                  {
                    transform: [
                      {
                        rotateY:
                          flippedButtonIndex === 1 ? flipInterpolation : "0deg",
                      },
                    ],
                  },
                ]}
                onPress={() => startFlippingAnimation(1)}
              >
                {showIcon && (
                  <Feather
                    name="home"
                    size={20}
                    style={styles.iconRow}
                    color="white"
                  />
                )}
                {showNumbers && flippedButtonIndex === 1 && (
                  <Text style={styles.buttonText}>&nbsp;3</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button4,
                  {
                    transform: [
                      {
                        rotateY:
                          flippedButtonIndex === 2 ? flipInterpolation : "0deg",
                      },
                    ],
                  },
                ]}
                onPress={() => startFlippingAnimation(2)}
              >
                {showIcon && (
                  <Icon
                    name="bed"
                    size={17}
                    style={styles.iconRow}
                    color="white"
                  />
                )}
                {showNumbers && flippedButtonIndex === 2 && (
                  <Text style={styles.buttonText}>&nbsp;1</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button5,
                  {
                    transform: [
                      {
                        rotateY:
                          flippedButtonIndex === 3 ? flipInterpolation : "0deg",
                      },
                    ],
                  },
                ]}
                onPress={() => startFlippingAnimation(3)}
              >
                {showIcon && (
                  <Icon
                    name="bath"
                    size={18}
                    style={styles.iconRow}
                    color="white"
                  />
                )}
                {showNumbers && flippedButtonIndex === 3 && (
                  <Text style={styles.buttonText}>&nbsp;2</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button6,
                  {
                    transform: [
                      {
                        rotateY:
                          flippedButtonIndex === 4 ? flipInterpolation : "0deg",
                      },
                    ],
                  },
                ]}
                onPress={() => startFlippingAnimation(1)}
              >
                {showIcon && (
                  <Icons
                    name="hanger"
                    size={20}
                    style={styles.iconRow}
                    color="white"
                  />
                )}
                {showNumbers && flippedButtonIndex === 4 && (
                  <Text style={styles.buttonText}>&nbsp;1</Text>
                )}
              </TouchableOpacity>
            </View>
            <Image
              source={require("../assets/House-PNG-Picture.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <MaterialButtonPrimary5
              style={styles.materialButtonPrimary5}
            ></MaterialButtonPrimary5>
          </View>
        </View>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}>
            <Text style={styles.maison}>Maison</Text>
            <Text style={styles.maisonAvecJardin}>Maison avec jardin</Text>
            <View style={styles.button3Row}>
              <TouchableOpacity
                style={[
                  styles.button3,
                  {
                    transform: [
                      {
                        rotateY:
                          flippedButtonIndex === 1 ? flipInterpolation : "0deg",
                      },
                    ],
                  },
                ]}
                onPress={() => startFlippingAnimation(1)}
              >
                {showIcon && (
                  <Feather
                    name="home"
                    size={20}
                    style={styles.iconRow}
                    color="white"
                  />
                )}
                {showNumbers && flippedButtonIndex === 1 && (
                  <Text style={styles.buttonText}>&nbsp;3</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button4,
                  {
                    transform: [
                      {
                        rotateY:
                          flippedButtonIndex === 2 ? flipInterpolation : "0deg",
                      },
                    ],
                  },
                ]}
                onPress={() => startFlippingAnimation(2)}
              >
                {showIcon && (
                  <Icon
                    name="bed"
                    size={17}
                    style={styles.iconRow}
                    color="white"
                  />
                )}
                {showNumbers && flippedButtonIndex === 2 && (
                  <Text style={styles.buttonText}>&nbsp;1</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button5,
                  {
                    transform: [
                      {
                        rotateY:
                          flippedButtonIndex === 3 ? flipInterpolation : "0deg",
                      },
                    ],
                  },
                ]}
                onPress={() => startFlippingAnimation(3)}
              >
                {showIcon && (
                  <Icon
                    name="bath"
                    size={18}
                    style={styles.iconRow}
                    color="white"
                  />
                )}
                {showNumbers && flippedButtonIndex === 3 && (
                  <Text style={styles.buttonText}>&nbsp;2</Text>
                )}
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.button6,
                  {
                    transform: [
                      {
                        rotateY:
                          flippedButtonIndex === 4 ? flipInterpolation : "0deg",
                      },
                    ],
                  },
                ]}
                onPress={() => startFlippingAnimation(1)}
              >
                {showIcon && (
                  <Icons
                    name="hanger"
                    size={20}
                    style={styles.iconRow}
                    color="white"
                  />
                )}
                {showNumbers && flippedButtonIndex === 4 && (
                  <Text style={styles.buttonText}>&nbsp;1</Text>
                )}
              </TouchableOpacity>
            </View>
            <Image
              source={require("../assets/House-PNG-Picture.png")}
              resizeMode="contain"
              style={styles.image}
            ></Image>
            <MaterialButtonPrimary5
              style={styles.materialButtonPrimary5}
            ></MaterialButtonPrimary5>
          </View>
        </View>
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  materialIconTextButtonsFooter: {
    height: 57,
    width: 343,
    borderRadius: 60,
    marginLeft: 29,
    top: -5,
  },
  rect1: {
    width: 238,
    height: 136,
    backgroundColor: "#104d69",
    borderRadius: 76,
    marginTop: -82,
    marginLeft: 69,
  },
  iconRow: {
    marginLeft: 4,
    marginTop: 2,
  },
  button2: {
    width: 49,
    height: 46,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
  },
  button1: {
    width: 48,
    height: 46,
    backgroundColor: "rgba(135,186,246,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 100,
    marginLeft: 310,
  },
  icon1: {
    color: "rgba(10,121,251,1)",
    fontSize: 38,
    height: 38,
    width: 38,
    marginTop: 4,
    marginLeft: 5,
  },
  button2Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 11,
    marginRight: 11,
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 156,
    height: 144,
    position: "absolute",
  },
  imagens: {
    top: 31,
    left: 125,
    width: 134,
    height: 190,
    position: "absolute",
  },
  buttonRow: {
    height: 162,
    flexDirection: "row",
    marginTop: -100,
    marginLeft: 10,
    marginRight: 11,
  },
  rect10: {
    top: 0,
    width: 293,
    height: 172,
    position: "absolute",
    backgroundColor: "#104d69",
    borderRadius: 76,
    left: 40,
  },
  images: {
    position: "absolute",
    top: 16,
    left: 18,
    height: 133,
    width: 121,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 100,
  },
  ellipseStack: {
    width: 156,
    height: 149,
    marginLeft: 111,
  },
  profil1: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 27,
    marginTop: 25,
    marginLeft: 147,
  },
  description: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 16,
    marginTop: 26,
    marginLeft: 25,
  },
  annonceDuProfil: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 19,
    marginTop: 12,
  },
  button: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 2,
    marginTop: -2,
  },
  buttons3: {
    width: 49,
    height: 46,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
    marginLeft: 131,
  },
  icons2: {
    color: "rgba(7,116,243,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginTop: 2,
    marginLeft: 5,
  },
  annonceDuProfilRow: {
    height: 46,
    flexDirection: "row",
    marginTop: 47,
    marginLeft: 25,
    marginRight: 16,
  },
  rect2: {
    top: -100,
    left: 30,
    width: 220,
    height: 290,
    position: "absolute",
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
  icon4: {
    color: "rgba(7,116,243,1)",
    fontSize: 35,
    marginLeft: 7,
    marginTop: 5,
  },
  maison: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 16,
    marginTop: 122,
    marginLeft: 15,
  },
  maisonAvecJardin: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,
    marginTop: 5,
    marginLeft: 15,
  },
  button3: {
    width: 27,
    height: 26,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
    marginTop: -10,
    marginLeft: 13,
  },
  button4: {
    width: 27,
    height: 26,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
    marginLeft: 13,
    marginTop: -10,
  },
  button5: {
    width: 27,
    height: 26,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
    marginLeft: 13,
    marginTop: -10,
  },
  button6: {
    width: 27,
    height: 26,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
    marginLeft: 13,
    marginTop: -10,
  },
  button3Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 24,
    marginRight: 27,
  },
  materialButtonPrimary5: {
    height: 35,
    width: 150,
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
    marginTop: -10,
    marginLeft: 38,
  },
  image: {
    top: 1,
    left: 45,
    width: 134,
    height: 112,
    position: "absolute",
  },
  rect2Stack: {
    width: 313,
    height: 634,
    marginTop: 106,
    marginLeft: 45,
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
});

export default Profil;
