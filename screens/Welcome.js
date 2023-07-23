import React, { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
function Welcome() {
  const navigation = useNavigation();
  const [isFontLoaded, setFontLoaded] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("home"); // Replace "Home" with the name of your home screen
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);
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
      <Image
        source={require("../assets/output-onlinepngtools.png")}
        resizeMode="contain"
        style={styles.image}
      />
      <Text
        style={{
          textAlign: "center",
          justifyContent: "center",
          display: "flex",
          top: -380,
          left: 10,
          fontSize: 50,
          color: "white",
          fontFamily: "Hoefler",
        }}
      >
        LOADING...
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#104d69",
  },
  image: {
    width: 390,
    height: 790,
    left: 10,
    top: -110,
  },
});

export default Welcome;
