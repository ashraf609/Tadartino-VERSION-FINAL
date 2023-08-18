import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Swiper from "react-native-swiper";
import MaterialIconTextButtonsFooter from "../components/MaterialIconTextButtonsFooter";
import { useDispatch, useSelector } from "react-redux";
import { get_all_items_action } from "../State/Actions/ItemAction";
import SingleItem from "../components/SingleItem";

import { useNavigation } from "@react-navigation/native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
function Home(props) {
  const [isFontLoaded, setFontLoaded] = useState(false);
  const [data, setData] = useState([]);

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
  useEffect(() => {
    setData(
      [...new Set(get_all_items.data?.map((item) => item.item_id))]
        .map((item) => get_all_items.data?.find((elt) => elt?.item_id === item))
        ?.reverse()
    );
  }, [get_all_items.data]);

  if (!isFontLoaded) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setFontLoaded(true)}
        onError={console.warn}
      />
    );
  }
  const searchIconHandler = () => {
    try {
      interstitial.show();
    } catch (error) {
      console.log(error);
    }
    navigation.navigate("search");
  };

  return (
    <View style={styles.container}>
      {
        //swiper
      }
      <Swiper
        inactiveSlideScale={10}
        showsButtons
        loop={false}
        paginationStyle={{ display: "none" }}
      >
        {data?.map((item, idx) => (
          <View
            key={idx}
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginHorizontal: "5%",
              height: "95%",
            }}
          >
            <SingleItem data={item} />
          </View>
        ))}
      </Swiper>
      {
        //footer
      }
      {/* <View
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "5%",
        }}
      >
        <MaterialIconTextButtonsFooter
          style={styles.materialIconTextButtonsFooter}
        ></MaterialIconTextButtonsFooter>
      </View> */}
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
  },
  swiperWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
});

export default Home;
