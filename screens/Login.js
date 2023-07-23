import React, { Component, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  Switch,
  TextInput,
} from "react-native";
import MaterialButtonPrimary2 from "../components/MaterialButtonPrimary2";
import MaterialButtonPrimary3 from "../components/MaterialButtonPrimary3";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
function Login(props) {
  const [isFontLoaded, setFontLoaded] = useState(false);

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
      <View style={styles.image1Stack}>
        <ImageBackground
          source={require("../assets/wallpaperflare.com_wallpaper.jpg")}
          resizeMode="contain"
          style={styles.image1}
          imageStyle={styles.image1_imageStyle}
        >
          <View style={styles.rect2}>
            <Text style={styles.sidentifier2}>
              Création d’un nouveau compte
            </Text>
            <View style={styles.switch3Row}>
              <Switch
                value={false}
                disabled={false}
                trackColor={{
                  true: "rgba(74,144,226,1)",
                  false: "rgba(255,255,255,1)",
                }}
                style={styles.switch3}
              ></Switch>
              <Text style={styles.sidentifier1}></Text>
              <Text style={styles.client}>Client</Text>
              <Switch
                value={false}
                disabled={false}
                trackColor={{
                  true: "rgba(74,144,226,1)",
                  false: "rgba(230, 230, 230,1)",
                }}
                style={styles.switch2}
              ></Switch>
              <Text style={styles.vendeur}>Vendeur</Text>
            </View>
            <Text style={styles.entrerVotreNom}>Entrer votre Nom:</Text>
            <TextInput
              placeholder="    Nom"
              textBreakStrategy="highQuality"
              autoCapitalize="words"
              keyboardType="email-address"
              returnKeyType="next"
              style={styles.textInput1}
            ></TextInput>
            <Text style={styles.entrezVotreEMail3}>Entrez votre E-mail:</Text>
            <TextInput
              placeholder="   Email"
              textBreakStrategy="highQuality"
              autoCapitalize="words"
              keyboardType="email-address"
              returnKeyType="next"
              style={styles.textInput3}
            ></TextInput>
            <Text style={styles.entrezVotreEMail4}>
              Entrez votre Mot de passe:
            </Text>
            <TextInput
              placeholder="   Mot de passe"
              textBreakStrategy="highQuality"
              autoCapitalize="words"
              keyboardType="email-address"
              returnKeyType="next"
              style={styles.textInput4}
            ></TextInput>
            <MaterialButtonPrimary2
              style={styles.materialButtonPrimary2}
              onPress={() => props.navigation.navigate("profil")}
            ></MaterialButtonPrimary2>
            <MaterialButtonPrimary3
              style={styles.materialButtonPrimary3}
            ></MaterialButtonPrimary3>
          </View>
        </ImageBackground>
        <View style={styles.rect1}>
          <Text style={styles.tadartinoMa1}>Tadartino.ma</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image1: {
    top: 38,
    width: 523,
    height: 960,
    position: "absolute",
    left: 0,
  },
  image1_imageStyle: {
    opacity: 0.43,
  },
  rect2: {
    width: 345,
    height: 581,
    backgroundColor: "rgba(255,255,255,1)",
    borderRadius: 18,
    marginTop: 222,
    marginLeft: 103,
  },
  sidentifier2: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 20,
    marginTop: 19,
    marginLeft: 14,
  },
  switch3: {},
  sidentifier1: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 29,
    marginLeft: 4,
  },
  client: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,

    marginLeft: 14,
    marginTop: 3,
  },
  switch2: {
    marginLeft: 92,
  },
  vendeur: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,

    marginLeft: 9,
    marginTop: 3,
  },
  switch3Row: {
    height: 23,
    flexDirection: "row",
    marginTop: 11,
    marginLeft: 13,
    marginRight: 35,
  },
  entrerVotreNom: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,

    marginTop: 20,
    marginLeft: 15,
  },
  textInput1: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 38,
    width: 311,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    marginTop: 18,
    marginLeft: 13,
  },
  entrezVotreEMail3: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,

    marginTop: 24,
    marginLeft: 17,
  },
  textInput3: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 38,
    width: 309,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    marginTop: 19,
    marginLeft: 15,
  },
  entrezVotreEMail4: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,

    marginTop: 21,
    marginLeft: 15,
  },
  textInput4: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 38,
    width: 309,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 2,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    marginTop: 12,
    marginLeft: 13,
  },
  materialButtonPrimary2: {
    height: 73,
    width: 236,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 12,
    marginTop: 21,
    marginLeft: 62,
  },
  materialButtonPrimary3: {
    height: 73,
    width: 233,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 9,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
    marginTop: 23,
    marginLeft: 64,
  },
  rect1: {
    top: 0,
    left: 79,
    width: 392,
    height: 255,
    position: "absolute",
    backgroundColor: "#104d69",
    borderRadius: 76,
  },
  tadartinoMa1: {
    fontFamily: "Hoefler",
    color: "rgba(255,255,255,1)",
    fontSize: 40,
    marginTop: 188,
    marginLeft: 69,
  },
  image1Stack: {
    width: 523,
    height: 998,
    marginTop: -85,
    marginLeft: -80,
  },
});

export default Login;
