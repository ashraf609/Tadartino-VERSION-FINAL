import React, { useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Svg, { Ellipse } from "react-native-svg";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";
import MaterialButtonPrimary1 from "../components/MaterialButtonPrimary1";
import { useNavigation } from "@react-navigation/native";
import EvilIconsIcon from "react-native-vector-icons/EvilIcons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { loginAction, registerAction } from "../State/Actions/UserAction";
import AsyncStorage from "@react-native-community/async-storage";

function SignUp(props, { onHide, login }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [signup, setSignup] = useState(!login);
  const [stayConn, setStayConn] = useState(false);
  const [password, setPassword] = useState("");
  const [showWarning, setShowWarning] = useState(false);
  const [showWarningPas, setShowWarningPass] = useState(false);
  const [error, setError] = useState(null);
  const user_info = useSelector((state) => state.user_info);
  const dispatch = useDispatch();
  const infoRef = useRef({});
  const isPasswordValid = (password) => {
    const minLength = 8;
    const hasCapitalLetter = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    return password.length >= minLength && hasCapitalLetter && hasNumber;
  };
  const handleButtonPrimaryClick = () => {
    if (!email.includes("@") || !password) {
      setShowWarning(true);
    }
    if (!isPasswordValid(password)) {
      setShowWarningPass(true);
    } else {
      setShowWarning(false);
      navigateToHome();
      LoginHandler();
      // Handle the logic when both inputs have values...
    }
  };
  const [isFontLoaded, setFontLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      // Use the actual font name here, and the path to the font file
      Hoefler: require("../assets/fonts/ufonts.com_hoefler-text.ttf"),
    });
    setFontLoaded(true);
  };
  const getInfo = () => {
    let info = {};
    for (const [key, value] of Object.entries(infoRef.current)) {
      if (value.value?.length > 0) {
        info[key] = value.value;
      }
    }
    info.type = "client";
    if (info.email?.includes("@")) {
      if (signup === false || info.first_name?.length > 0) {
        if (signup === false || info.last_name?.length > 0) {
          if (
            signup === false ||
            (info.password?.length > 0 &&
              /^(?=.*[A-Z])(?=.*\d).{10,}$/.test(info.password))
          ) {
            return info;
          } else {
            setError("Entez un mot de passe valide");
          }
        } else {
          setError("Le nom doit contenir que des lettres ");
        }
      } else {
        setError("Entrer votre nom SVP");
      }
    } else {
      setError("l'email doit contenir @");
    }
    return false;
  };
  const RegisterHandler = () => {
    let getinfoVar = getInfo();
    if (getinfoVar) {
      dispatch(registerAction(getinfoVar));
    }
  };
  const navigateToHome = () => {
    navigation.navigate("home"); // Replace 'Home' with the name of your home screen component
  };

  //login handler
  const LoginHandler = () => {
    let getinfoVar = getInfo();
    if (getinfoVar) {
      dispatch(loginAction(getinfoVar));
      navigateToHome(); // Call the function to navigate to the home screen
    }
  };

  useEffect(() => {
    if (user_info.user) {
      user_info.user.new = false;
      console.log(user_info);

      // Save the updated user_info.user object to AsyncStorage
      AsyncStorage.setItem("user_info", JSON.stringify(user_info.user))
        .then(() => {
          console.log("User info saved successfully!");
        })
        .catch((error) => {
          console.error("Error saving user info:", error);
        });
    }
  }, [stayConn, user_info]);

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
    <View id="auth" style={styles.container}>
      <StatusBar backgroundColor="rgba(255,255,255,1)" />
      <View style={styles.imageStack}>
        <ImageBackground
          source={require("../assets/wallpaperflare.com_wallpaper.jpg")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate("Welcome")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Contactze nous</Text>
          </TouchableOpacity>
        </ImageBackground>
        <Svg viewBox="0 0 491.2 278.05" style={styles.ellipse}>
          <Ellipse
            stroke="rgba(230, 230, 230,1)"
            strokeWidth={0}
            fill="#104d69"
            cx={246}
            cy={139}
            rx={246}
            ry={139}
          ></Ellipse>
        </Svg>
        <Text style={styles.tadartinoMa}>Tadartino.ma</Text>
        <View style={styles.rect}>
          <Text style={styles.sauthentifier}>S&#39;authentifier</Text>
          <Text style={styles.entrezVotreEMail}>Entrez votre E-mail:</Text>
          <TextInput
            ref={(ref) => ref !== null && (infoRef.current[ref.name] = ref)}
            placeholder="Email                                                               "
            textBreakStrategy="highQuality"
            autoCapitalize="words"
            keyboardType="email-address"
            returnKeyType="next"
            onChangeText={(text) => setEmail(text)}
            value={email}
            style={styles.textInput}
          ></TextInput>
          <Text style={styles.loremIpsum}>Entrez votre mot de passe:</Text>
          <TextInput
            ref={(ref) => ref !== null && (infoRef.current[ref.name] = ref)}
            placeholder="Password                                                        "
            style={styles.textInput2}
            onChangeText={(text) => setPassword(text)}
            value={password}
          ></TextInput>
          {showWarning && (
            <Text style={styles.warningText}>
              Both fields are required or email have contain @!
            </Text>
          )}
          {showWarningPas && (
            <Text style={styles.warningText}>
              Password than be less than 8 caractere
            </Text>
          )}
          <MaterialButtonPrimary
            style={styles.materialButtonPrimary}
            onPress={handleButtonPrimaryClick}
          ></MaterialButtonPrimary>
          <MaterialButtonPrimary1
            style={styles.materialButtonPrimary1}
            onPress={() => props.navigation.navigate("Login")}
          ></MaterialButtonPrimary1>
          <View style={styles.iconRow}>
            <EvilIconsIcon
              name="sc-facebook"
              style={styles.icon}
            ></EvilIconsIcon>
            <EntypoIcon name="twitter" style={styles.icon2}></EntypoIcon>
            <EvilIconsIcon
              name="sc-google-plus"
              style={styles.icon3}
            ></EvilIconsIcon>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  warningText: {
    fontFamily: "Hoefler",
    color: "gold",
    fontWeight: "bold",
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
  },
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: "rgba(255,255,255,1)",
  },
  image: {
    top: 111,
    left: 0,
    width: 491,
    height: 838,
    position: "absolute",
  },
  image_imageStyle: {
    opacity: 0.43,
  },
  button: {
    fontFamily: "Hoefler",
    width: 275,
    height: 72,
    backgroundColor: "rgba(255,255,255,1)",
    borderColor: "#104d69",
    borderRadius: 36,
    marginTop: 697,
    marginLeft: 120,
    justifyContent: "center", // Center content vertically
    alignItems: "center", // Center content horizontally
  },
  buttonText: {
    fontFamily: "Hoefler",
    fontWeight: "bold",
    fontSize: 26, // You can adjust this value
    color: "#104d69", // You should specify the text color, e.g. black
  },

  ellipse: {
    fontFamily: "Hoefler",
    top: 0,
    left: 0,
    width: 491,
    height: 278,
    position: "absolute",
  },
  tadartinoMa: {
    fontFamily: "Hoefler",
    top: 163,
    left: 105,
    position: "absolute",

    color: "rgba(255,255,255,1)",
    fontSize: 48,
  },
  rect: {
    fontFamily: "Hoefler",
    top: 293,
    left: 94,
    width: 333,
    height: 510,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 18,
  },
  sauthentifier: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 29,
    marginTop: 13,
    marginLeft: 10,
  },
  entrezVotreEMail: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 16,
    marginTop: 20,
    marginLeft: 14,
  },
  textInput: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 43,
    width: 309,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    marginTop: 12,
    marginLeft: 10,
    textAlign: "center",
  },
  loremIpsum: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 16,
    marginTop: 26,
    marginLeft: 14,
  },
  textInput2: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 43,
    width: 309,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    marginTop: 7,
    marginLeft: 10,
    textAlign: "center",
  },
  materialButtonPrimary: {
    fontFamily: "Hoefler",
    height: 49,
    width: 298,
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
    marginTop: 13,
    marginLeft: 14,
  },
  materialButtonPrimary1: {
    fontFamily: "Hoefler",
    height: 46,
    width: 296,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 18,
    marginTop: 21,
    marginLeft: 14,
  },
  icon: {
    color: "#2196f3",
    fontSize: 40,
    height: 44,
    width: 40,
  },
  icon2: {
    color: "#2196f3",
    fontSize: 31,
    height: 34,
    width: 31,
    marginLeft: 57,
    marginTop: 1,
  },
  icon3: {
    color: "#2196f3",
    fontSize: 33,
    height: 35,
    width: 33,
    marginLeft: 64,
  },
  iconRow: {
    height: 44,
    flexDirection: "row",
    marginTop: 14,
    marginLeft: 38,
    marginRight: 70,
  },
  imageStack: {
    width: 491,
    height: 949,
    marginTop: -111,
    marginLeft: -68,
  },
});

export default SignUp;
