import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
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
import { ScrollView } from "react-native";
import { Modal } from "react-native";
import ImageViewer from "react-native-image-zoom-viewer";
import { BackHandler } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
function Details(props) {
  const { id } = props.route?.params;
  const [isFontLoaded, setFontLoaded] = useState(false);
  const [data, setData] = useState({});
  const [images, setImages] = useState([]);
  //index of clicked upon image
  const [index, setindex] = useState(0);
  const [floors, setFloors] = useState([]);
  const [etageData, setEtageData] = useState([]);

  const [visible, setIsVisible] = useState(false);

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

      setImages(
        [...new Set(get_item.data?.map((item) => item.image))]?.map((item) => {
          return {
            url: item,
          };
        })
      );
      let uniqueEtageIds = [
        ...new Set(get_item?.data?.map((item) => item.etage_id)),
      ];
      console.log(uniqueEtageIds);
      setEtageData(
        uniqueEtageIds
          ?.map((item) => get_item.data?.find((elt) => elt.etage_id === item))
          ?.reverse()
      );
      setFloors([...new Set(get_item.data?.map((item) => item.floor))]);
    }
  }, [get_item]);

  function formatPrice(price) {
    // Convert the price to a string if it's not already
    price = price.toString();

    // Add commas to the integer part
    let formattedIntegerPart = "";
    for (let i = 0; i < price.length; i++) {
      formattedIntegerPart += price[i];
      if ((price.length - i - 1) % 3 === 0 && i !== price.length - 1) {
        formattedIntegerPart += ",";
      }
    }

    return formattedIntegerPart;
  }

  //loading fonts
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

  console.log(images);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={{ height: "40%" }}>
        {visible ? (
          <Modal
            onRequestClose={() => setIsVisible(false)}
            style={{ height: "100%" }}
          >
            <ImageViewer
              imageUrls={images}
              enableSwipeDown
              onSwipeDown={() => setIsVisible(false)}
              onCancel={() => setIsVisible(false)}
              enableImageZoom
              backgroundColor="none"
              index={index}
            />
          </Modal>
        ) : (
          <Swiper style={{ height: "100%" }}>
            {images?.map((item, key) => (
              <TouchableOpacity
                onPress={() => {
                  setindex(key), setIsVisible(true);
                }}
              >
                <Image
                  source={{ uri: item.url }}
                  key={key}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 20,
                    objectFit: "cover",
                  }}
                />
              </TouchableOpacity>
            ))}
          </Swiper>
        )}
      </View>
      {/* <Modal visible={visible} transparent={true}>
        <ImageViewer
          imageUrls={images}
          enableSwipeDown
          onSwipeDown={() => setIsVisible(false)}
          onCancel={() => setIsVisible(false)}
          enableImageZoom
          backgroundColor="none"
        />
      </Modal> */}
      <ScrollView style={styles.rect1}>
        <Text style={styles.maison1}>{data.item_type}</Text>
        <Text style={styles.maison1}>{data.city}</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <Text style={styles.maisonAvecJardin1}>{data.title}</Text>
          <Text style={styles.maisonAvecJardin1}>
            {data?.price
              ? formatPrice(data.price) + " MAD"
              : "Prix non spécifié"}
          </Text>
        </View>
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
        {data?.item_type !== "terrain" &&
          data?.item_type !== "garage" &&
          etageData
            ?.map((item) => ({
              nb_chambres: item?.nb_chambres,
              nb_cuisines: item?.nb_cuisines,
              nb_salons: item?.nb_salons,
              nb_sales_de_bain: item?.nb_sales_de_bain,
              etageId: item?.etage_id,
            }))
            ?.map((item, idx) => (
              <View style={styles.button3Row}>
                <TouchableOpacity style={styles.button3}>
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
                <Text style={styles.maisonAvecJardin2}>
                  etage {idx + 1} de {item.nb_chambres} chambre(s) avec{" "}
                  {item.nb_cuisines} cuisine(s) et {item.nb_salons} salon(s) et{" "}
                  {item.nb_sales_de_bain} salle(s) de bain(s)
                </Text>
              </View>
            ))}
        {/*data?.item_type !== "terrain" && data?.item_type !== "garage" && (
          <View style={styles.button3Row}>
            <TouchableOpacity style={styles.button3}>
              <Icon
                name="bath"
                size={34}
                style={styles.iconRow}
                color="white"
              />
            </TouchableOpacity>
            <Text style={styles.maisonAvecJardin2}>
              {data.nb_sales_de_bain} salle(s) de bains
            </Text>
          </View>
        )*/}
        <View style={styles.button3Row}>
          <TouchableOpacity style={styles.button3}>
            <Icons name="cash" size={34} style={styles.iconRow} color="white" />
          </TouchableOpacity>
          <Text style={styles.maisonAvecJardin2}>
            {data?.price
              ? formatPrice(data.price) + " MAD"
              : "Prix non spécifié"}{" "}
          </Text>
        </View>
      </ScrollView>
      {/* <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          width: "100%",
          marginTop: 10,
        }}
      >
        <MaterialButtonPrimary30
          style={{ width: 150, height: 50, borderRadius: 19 }}
        ></MaterialButtonPrimary30>
        <MaterialButtonPrimary51
          style={{
            width: 150,
            height: 50,
            borderRadius: 19,
          }}
        ></MaterialButtonPrimary51> 
      </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "95%",
    backgroundColor: "white",
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
    marginHorizontal: "5%",
    padding: 10,
    marginVertical: 10,
  },
  wrapper: {
    height: "100%",
    position: "relative",
  },
  imagens: {},
  buttonRow: {
    height: windowHeight * 0.1,
    flexDirection: "row",
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
    height: "60%",
  },
  maison1: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 29,
    textAlign: "center",
  },
  maisonAvecJardin1: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,
    width: "90%",
  },
  iconRow: {},
  button3: {
    width: 49,
    height: 46,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  maisonAvecJardin2: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,
    marginLeft: 42,
  },
  button3Row: {
    height: 46,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 90,
    marginTop: 10,
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
  },
  button4Row: {
    height: 46,
    flexDirection: "row",
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
  },
  button5Row: {
    height: 46,
    flexDirection: "row",
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
  },
  button6Row: {
    height: 46,
    flexDirection: "row",
    marginLeft: 15,
    marginRight: 90,
  },
  image1: {},
  rect1Stack: {
    //top: windowHeight * 0.03, // Responsive top for the rect1Stack
    //left: windowWidth * 0.1,
    //width: windowWidth * 0.8,
    //height: windowHeight * 0.8, // Responsive height for the rect1Stack
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
  rect1StackStack: {},
  rect2: {
    top: 0,
    width: windowWidth * 0.6,
    height: windowHeight * 0.12, // Responsive height for the rect2
    position: "absolute",
    backgroundColor: "#104d69",
    borderRadius: 76,
    left: windowWidth * 0.15,
  },
  rect1StackStackStack: {},
});

export default Details;
