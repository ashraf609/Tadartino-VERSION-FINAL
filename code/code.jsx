import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Animated,
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

function Home(props) {
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => props.navigation.navigate("search")}
        >
          <EvilIconsIcon name="search" style={styles.icon}></EvilIconsIcon>
        </TouchableOpacity>
        <View style={styles.rect1}></View>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => props.navigation.navigate("SignUp")}
        >
          <FeatherIcon name="user" style={styles.icon2}></FeatherIcon>
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
                    size={35}
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
                    size={34}
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
                    size={34}
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
                    size={34}
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
                    size={35}
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
                    size={34}
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
                    size={34}
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
                    size={34}
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
                    size={35}
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
                    size={34}
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
                    size={34}
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
                    size={34}
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
                    size={35}
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
                    size={34}
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
                    size={34}
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
                    size={34}
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
              onPress={() => props.navigation.navigate("details")}
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
  },
  rect2: {
    top: -40,
    left: -5,
    width: 313,
    height: 605,
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
  icon: {
    color: "rgba(7,116,243,1)",
    fontSize: 40,
    height: 44,
    width: 40,
    marginTop: 2,
    marginLeft: 5,
  },
  rect1: {
    width: 238,
    height: 156,
    backgroundColor: "#104d69",
    borderRadius: 76,
    marginLeft: 10,
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
    marginTop: -90,
    marginLeft: 10,
    marginRight: 11,
  },
});

export default Home;
