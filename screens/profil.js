import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Text,
  Animated,
  ScrollView,
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import Svg, { Ellipse } from "react-native-svg";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Swiper from "react-native-swiper";
import { useDispatch, useSelector } from "react-redux";
import { get_personal_info_action } from "../State/Actions/UserAction";
import {
  get_liked_item_action,
  get_user_items_action,
} from "../State/Actions/ItemAction";
import SingleItem from "../components/SingleItem";
function Profil(props) {
  const user_info = useSelector((state) => state.user_info);
  const get_user_items = useSelector((state) => state.get_user_items);
  const get_liked_items = useSelector((state) => state.get_liked_items);
  const personal_data = useSelector((state) => state.personal_data);
  const [isFontLoaded, setFontLoaded] = useState(false);
  const [flipAnimation] = useState(new Animated.Value(0));
  const [showNumbers, setShowNumbers] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [flippedButtonIndex, setFlippedButtonIndex] = useState(null);
  const [data, setData] = useState([]);

  const dispatch = useDispatch();
  console.log(user_info);

  const { id } = props.route?.params;
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
  //getting specific data of user
  useEffect(() => {
    dispatch(get_personal_info_action(user_info.user?.token, id));
    dispatch(get_liked_item_action(user_info.user?.token, id));
    dispatch(get_user_items_action(user_info.user?.token, id));
  }, [dispatch, user_info.user?.token]);
  useEffect(() => {
    setData(
      [...new Set(get_user_items.data?.map((item) => item.item_id))]
        .map((item) =>
          get_user_items.data?.find((elt) => elt?.item_id === item)
        )
        ?.reverse()
    );
  }, [get_user_items.data]);

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
    <ScrollView style={styles.container}>
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
        {personal_data.data?.picture ? (
          <Image
            source={{ uri: personal_data.data?.picture }}
            resizeMode="contain"
            style={styles.images}
          ></Image>
        ) : (
          <Image
            source={require("../assets/defaultProfil.png")}
            resizeMode="contain"
            style={styles.images}
          ></Image>
        )}
      </View>
      <Text style={styles.profil1}>
        {personal_data.data?.first_name + " " + personal_data.data?.last_name}
      </Text>
      {/* <Text style={styles.description}>Description</Text> */}
      <Text style={styles.description}>Email</Text>
      <Text style={styles.description}>{personal_data.data?.email}</Text>

      <View style={styles.annonceDuProfilRow}>
        <Text style={styles.annonceDuProfil}>Annonce du Profil:</Text>
        <TouchableOpacity style={styles.buttons3}>
          <EvilIconsIcon name="search" style={styles.icons2}></EvilIconsIcon>
        </TouchableOpacity>
      </View>
      <Swiper
        style={styles.wrapper}
        inactiveSlideScale={10}
        showsButtons
        loop={false}
      >
        {data?.length > 0 ? (
          data?.map((item, key) => (
            <View
              style={{
                width: "90%",
                marginHorizontal: "5%",
              }}
            >
              <SingleItem data={item} key={key} />
            </View>
          ))
        ) : (
          <></>
        )}
      </Swiper>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
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
    textAlign: "center",
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
