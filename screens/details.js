import React, { Component, useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { Feather } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/FontAwesome";
import Icons from "react-native-vector-icons/MaterialCommunityIcons";
import Swiper from "react-native-swiper";
import MaterialButtonPrimary30 from "../components/MaterialButtonPrimary30";
import MaterialButtonPrimary51 from "../components/MaterialButtonPrimary31";
import { get_item_action } from "../State/Actions/ItemAction";
import { useDispatch, useSelector } from "react-redux";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
function Details(props) {
  const { id } = props.route?.params;
  const [isFontLoaded, setFontLoaded] = useState(false);
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);
  const [floors, setFloors] = useState([]);
  const get_item = useSelector((state) => state.get_item);
  const dispatch = useDispatch();
  console.log(id, get_item);
  useEffect(() => {
    dispatch(get_item_action(null, id));
  }, [id]);
  //setting / collecting images from object response
  useEffect(() => {
    if (get_item.data) {
      setData(get_item.data?.at(0));

      setImages(get_item.data?.map((item) => item.image));
      setFloors(get_item.data?.map((item) => item.floor));
    }
  }, [get_item]);

  const renderPagination = (index, total, context) => {
    return null; // Return null to hide the pagination buttons
  };

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
      <View style={styles.rect1StackStackStack}>
        <View style={styles.rect1StackStack}>
          <View style={styles.rect1Stack}>
            <View style={styles.rect1}>
              <Text style={styles.maison1}>{data.item_type}</Text>
              <Text style={styles.maisonAvecJardin1}>{data.title}</Text>
              <View style={styles.button3Row}>
                <TouchableOpacity style={styles.button3}>
                  <Feather
                    name="home"
                    size={35}
                    style={styles.iconRow}
                    color="white"
                  />
                </TouchableOpacity>
                <Text style={styles.maisonAvecJardin2}>
                  {data.item_type} de {data.surface} m²
                </Text>
              </View>
              <View style={styles.button4Row}>
                <TouchableOpacity style={styles.button4}>
                  {/* <Icon
                    name="bed"
                    size={34}
                    style={styles.iconRow}
                    color="white"
                  /> */}
                  <Feather
                    name="home"
                    size={35}
                    style={styles.iconRow}
                    color="white"
                  />
                </TouchableOpacity>
                <Text style={styles.maisonAvecJardin3}>
                  {data.nbEtage} etage(s) de {data.nb_chambres} chambre(s) avec{" "}
                  {data.nb_cuisines} cuisine(s) et {data.nb_salons} salon(s){" "}
                </Text>
              </View>
              <View style={styles.button5Row}>
                <TouchableOpacity style={styles.button5}>
                  <Icon
                    name="bath"
                    size={34}
                    style={styles.iconRow}
                    color="white"
                  />
                </TouchableOpacity>
                <Text style={styles.maisonAvecJardin4}>
                  {data.nb_sales_de_bain} salle(s) de bains
                </Text>
              </View>
              <View style={styles.button6Row}>
                <TouchableOpacity style={styles.button6}>
                  <Icons
                    name="cash"
                    size={34}
                    style={styles.iconRow}
                    color="white"
                  />
                </TouchableOpacity>
                <Text style={styles.maisonAvecJardin5}>
                  {data?.price || "Prix non spécifié"}{" "}
                </Text>
              </View>
            </View>
            <Swiper
              style={styles.wrapper}
              showsButtons
              pagination="false"
              navigation="false"
              renderPagination={renderPagination}
              loop={false}
            >
              {images?.map((item, key) => (
                <Image
                  source={{ uri: item }}
                  resizeMode="contain"
                  style={styles.image1}
                  key={key}
                ></Image>
              ))}
              {/* <Image
                source={require("../assets/House-PNG-Picture.png")}
                resizeMode="contain"
                style={styles.image1}
              ></Image>
              <Image
                source={require("../assets/House-PNG-Picture.png")}
                resizeMode="contain"
                style={styles.image1}
              ></Image>
              <Image
                source={require("../assets/House-PNG-Picture.png")}
                resizeMode="contain"
                style={styles.image1}
              ></Image> */}
            </Swiper>
          </View>
        </View>

        <View style={styles.buttonRow}>
          <View style={styles.rect10}></View>
          <Image
            source={require("../assets/rect.png")}
            resizeMode="contain"
            style={styles.imagens}
          ></Image>
        </View>
      </View>
      <MaterialButtonPrimary30
        style={{ width: 150, left: 10, top: -10, height: 50, borderRadius: 19 }}
      ></MaterialButtonPrimary30>
      <MaterialButtonPrimary51
        style={{
          width: 150,
          left: 220,
          top: -60,
          height: 50,
          borderRadius: 19,
        }}
      ></MaterialButtonPrimary51>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagens: {
    top: 31,
    left: 125,
    width: 134,
    height: 190,
    position: "absolute",
  },
  buttonRow: {
    height: windowHeight * 0.1,
    flexDirection: "row",
    marginTop: -15,
    marginLeft: windowWidth * 0.0, // Responsive marginLeft for the buttonRow
    marginRight: windowWidth * 0.04, // Responsive marginRight for the buttonRow
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
  rect1: {
    top: 10,
    left: windowWidth * 0,
    width: windowWidth * 0.8,
    height: windowHeight * 0.82,
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
  maison1: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 29,
    marginTop: 235,
    marginLeft: 10,
  },
  maisonAvecJardin1: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,
    marginTop: 43,
    marginLeft: 10,
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
  maisonAvecJardin2: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,
    marginLeft: 42,
    marginTop: 15,
  },
  button3Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 13,
    marginLeft: 15,
    marginRight: 90,
  },
  button4: {
    width: 49,
    height: 46,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
  },
  maisonAvecJardin3: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,
    marginLeft: 42,
    marginTop: 14,
  },
  button4Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 15,
    marginRight: 90,
  },
  button5: {
    width: 49,
    height: 46,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
  },
  maisonAvecJardin4: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,
    marginLeft: 42,
    marginTop: 15,
  },
  button5Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 15,
    marginRight: 90,
  },
  button6: {
    width: 49,
    height: 46,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
  },
  maisonAvecJardin5: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,
    marginLeft: 42,
    marginTop: 5,
  },
  button6Row: {
    height: 46,
    flexDirection: "row",
    marginTop: 27,
    marginLeft: 15,
    marginRight: 90,
  },
  image1: {
    top: 0,
    left: 26,
    width: 244,
    height: 312,
    position: "absolute",
  },
  rect1Stack: {
    top: windowHeight * 0.03, // Responsive top for the rect1Stack
    left: windowWidth * 0.1,
    width: windowWidth * 0.8,
    height: windowHeight * 0.8, // Responsive height for the rect1Stack
    position: "absolute",
  },
  button1: {
    top: 3,
    left: 305,
    width: 48,
    height: 46,
    position: "absolute",
    backgroundColor: "rgba(135,186,246,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 100,
  },
  icon1: {
    color: "rgba(10,121,251,1)",
    fontSize: 38,
    height: 38,
    width: 38,
    marginTop: 4,
    marginLeft: 5,
  },
  button2: {
    top: 3,
    left: 0,
    width: 49,
    height: 46,
    position: "absolute",
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
  },
  icon2: {
    top: 0,
    left: 4,
    position: "absolute",
    color: "rgba(7,116,243,1)",
    fontSize: 40,
  },
  button2Stack: {
    top: 0,
    left: 0,
    width: 49,
    height: 49,
    position: "absolute",
  },
  rect1StackStack: {
    top: 133,
    left: 0,
    width: 353,
    height: 685,
    position: "absolute",
  },
  rect2: {
    top: 0,
    width: windowWidth * 0.6,
    height: windowHeight * 0.12, // Responsive height for the rect2
    position: "absolute",
    backgroundColor: "#104d69",
    borderRadius: 76,
    left: windowWidth * 0.15,
  },
  rect1StackStackStack: {
    width: 353,
    height: 818,
    marginTop: -78,
    marginLeft: 11,
  },
});

export default Details;
