import React, { Component, useState, useEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
  Dimensions,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import MaterialButtonPrimary4 from "../components/MaterialButtonPrimary4";
import * as Font from "expo-font";
import Swiper from "react-native-swiper";

import AppLoading from "expo-app-loading";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { search_items_action } from "../State/Actions/ItemAction";
import SingleItem from "../components/SingleItem";
import { ScrollView } from "react-native-gesture-handler";

//exporting search object
export let searchData = {
  city: {
    op: "",
    values: "",
  },
  surface: {
    op: "",
    values: "",
  },
  nbEtage: {
    op: "",
    values: "",
  },
  min_price: {
    op: "",
    values: "",
  },
  max_price: {
    op: "",
    values: "",
  },
  type: {
    op: "",
    values: "",
  },
  category: {
    op: "like ",
    values: "vente",
  },
  order_by: null,
  desc: null,
  table: "item",
};
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Search(props) {
  const [isFontLoaded, setFontLoaded] = useState(false);
  const [selectedValue, setSelectedValue] = useState("");
  const search_items = useSelector((state) => state.search_items);
  const [elts, setElts] = useState(search_items.data);

  //data object to store search values

  const data = useRef(searchData);
  const dispatch = useDispatch();
  console.log(search_items);

  useEffect(() => {
    searchData = {
      ...searchData,
      category: {
        op: " like ",
        values: "vente",
      },
      city: {
        op: " like ",
        values: "",
      },
    };
    data.current = searchData;
    console.log("requesting ...");
    searchHandler(false, "city", " like ", data.current?.city?.values || "%");
  }, []);

  const clearFilters = () => {
    setElts([]);
  };

  useEffect(() => {
    if (search_items.data) {
      setElts(
        [...new Set(search_items.data?.map((item) => item.item_id))].map(
          (item) => search_items.data?.find((elt) => elt?.item_id === item)
        )
      );
    }
  }, [search_items]);
  //search handler implementation

  const searchHandler = (remove, key, op, value) => {
    let info = {};

    //asserting new data to data obj
    if (key?.length > 0 && value.length > 0 && data?.current[key]) {
      //removing an element from the search
      if (remove) {
        data.current[key].values = data.current[key]?.values.filter(
          (item) => item !== value
        );
      } else {
        if (
          typeof data.current[key]?.values !== "string" &&
          typeof data.current[key]?.values !== "number"
        ) {
          if (typeof value !== "string") {
            data.current[key]?.values.concat(value);
          } else {
            data.current[key]?.values.push(value);
          }
          data.current[key].values = [...new Set(data.current[key].values)];
        } else {
          data.current[key].values = value;
        }
      }
      data.current[key].op = op;
      for (const [the_key, elt] of Object.entries(data.current)) {
        if (elt?.length > 0 || elt > 0 || elt?.values?.length > 0) {
          info[the_key] = elt;
        }
      }
    } else {
      info = {
        table: "item",
        city: {
          op: " like ",
          values: "%",
        },
      };
    }
    dispatch(search_items_action(null, info));
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
    <ScrollView style={styles.container0}>
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <View style={styles.rect1}></View>
          <Image
            source={require("../assets/rect.png")}
            resizeMode="contain"
            style={styles.imagens}
          ></Image>
        </View>
        <View style={styles.imageStack}>
          <ImageBackground
            source={require("../assets/Background-investigation-row1.png")}
            resizeMode="contain"
            style={styles.image}
            imageStyle={styles.image_imageStyle}
          >
            <MaterialButtonPrimary4
              style={styles.materialButtonPrimary4}
              onPress={() => props.navigation.navigate("profil")}
              resultNum={elts?.length}
            ></MaterialButtonPrimary4>
          </ImageBackground>
          <View style={styles.rect2}>
            <Text style={styles.zoneDeRecherche}>Zone de Recherche</Text>
            <TextInput
              placeholder="     Recherche"
              textBreakStrategy="highQuality"
              autoCapitalize="words"
              keyboardType="default"
              returnKeyType="next"
              onChangeText={(text) =>
                searchHandler(
                  false,
                  "city",
                  " like ",
                  text + (text?.length > 0 ? "%" : "")
                )
              }
              style={styles.textInput1}
            ></TextInput>
            <Text placeholder="     Type" style={styles.typeDeBiens2}>
              Type de recherche
            </Text>
            <Picker
              selectedValue={selectedValue}
              //onValueChange={(itemValue) => setSelectedValue(itemValue)}
              onValueChange={(itemValue) =>
                searchHandler(
                  false,
                  "categorie",
                  " like ",
                  itemValue + (itemValue?.length > 0 ? "%" : "")
                )
              }
              style={styles.typeDeBiens}
            >
              <Picker.Item
                label="Achat"
                value="vente"
                style={styles.typeDeBiens}
              />
              <Picker.Item label="Location" value="location" />
            </Picker>
            <Text placeholder="     Type" style={styles.typeDeBiens2}>
              Type de biens
            </Text>
            <Picker
              selectedValue={selectedValue}
              //onValueChange={(itemValue) => setSelectedValue(itemValue)}
              onValueChange={(itemValue) =>
                searchHandler(
                  false,
                  "type",
                  " like ",
                  itemValue + (itemValue?.length > 0 ? "%" : "")
                )
              }
              style={styles.typeDeBiens}
            >
              <Picker.Item
                label="Villas"
                value="Villas"
                style={styles.typeDeBiens}
              />
              <Picker.Item label="Terrain" value="Terrain" />
              <Picker.Item label="Maison" value="Maison" />
              <Picker.Item label="Appartement" value="Appartement" />
            </Picker>
            <Text
              keyboardType="numeric"
              placeholder="    Nombre"
              style={styles.nombreDePieces2}
            >
              Nombre de pièces
            </Text>
            <TextInput
              placeholder="    Nombre de pieces"
              textBreakStrategy="highQuality"
              autoCapitalize="words"
              keyboardType="numeric"
              returnKeyType="next"
              style={styles.nombreDePieces}
              onChangeText={(text) =>
                searchHandler(
                  false,
                  "nbEtage",
                  text > 0 ? " <= " : " >= ",
                  text
                )
              }
            ></TextInput>
            <TextInput
              placeholder="Prix"
              textBreakStrategy="highQuality"
              autoCapitalize="words"
              keyboardType="email-address"
              returnKeyType="next"
              style={styles.prix}
            ></TextInput>
            <View style={styles.textInput4Row}>
              <TextInput
                placeholder="     Min"
                textBreakStrategy="highQuality"
                autoCapitalize="words"
                keyboardType="numeric"
                returnKeyType="next"
                style={styles.textInput4}
                onChangeText={(text) =>
                  searchHandler(false, "min_price", " >= ", text)
                }
              ></TextInput>
              <TextInput
                placeholder="     Max"
                textBreakStrategy="highQuality"
                autoCapitalize="words"
                keyboardType="numeric"
                returnKeyType="next"
                style={styles.textInput3}
                onChangeText={(text) =>
                  searchHandler(
                    false,
                    "max_price",
                    text > 0 ? " <= " : " >= ",
                    text
                  )
                }
              ></TextInput>
            </View>
          </View>
        </View>
        <Text style={styles.recherche}>Recherche</Text>
      </View>
      <Swiper style={{ marginTop: "170%" }} showsButtons loop={false}>
        {elts?.length > 0 ? (
          elts?.map((item, idx) => <SingleItem data={item} key={idx} />)
        ) : (
          <></>
        )}
      </Swiper>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container0: {},
  container: {
    flex: 1,
    position: "relative",
  },
  button1: {
    width: 49,
    height: 46,
    backgroundColor: "rgba(152,197,249,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 26,
    marginTop: 127,
  },
  rect1: {
    top: 0,
    width: 293,
    height: 172,
    position: "absolute",
    backgroundColor: "#104d69",
    borderRadius: 76,
    left: 40,
  },
  imagens: {
    top: 31,
    left: 125,
    width: 134,
    height: 190,
    position: "absolute",
  },
  button2: {
    width: 48,
    height: 46,
    backgroundColor: "rgba(135,186,246,1)",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 100,
    marginLeft: 9,
    marginTop: 128,
  },
  icon1: {
    color: "rgba(10,121,251,1)",
    fontSize: 38,
    height: 38,
    width: 38,
    marginTop: 3,
    marginLeft: 4,
  },
  buttonRow: {
    height: 162,
    flexDirection: "row",
    marginTop: -90,
    marginLeft: 10,
    marginRight: 11,
  },
  image: {
    top: 460,
    left: 0,
    width: 393,
    height: 266,
    position: "absolute",
  },
  image_imageStyle: {},
  materialButtonPrimary4: {
    height: 46,
    width: 241,
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 19,
    marginTop: 200,
    marginLeft: 84,
  },
  rect2: {
    top: 0,
    left: 37,
    width: windowWidth * 0.8, // Responsive width
    //height: windowHeight * 0.7, // Responsive height
    height: 560,

    position: "absolute",
    backgroundColor: "#f7ffff",
    borderWidth: 0,
    borderColor: "#000000",
    borderRadius: 29,
    shadowColor: "rgba(155,155,155,1)",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    elevation: 5,
    shadowOpacity: 1,
    shadowRadius: 0,
  },
  zoneDeRecherche: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 17,
    marginTop: 43,
    marginLeft: 87,
  },
  textInput1: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 38,
    width: 299,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    marginTop: 9,
    marginLeft: 15,
  },
  typeDeBiens2: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 17,

    marginTop: 12,
    marginLeft: 104,
  },
  typeDeBiens: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 40,
    width: 298,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    marginTop: 18,
    marginLeft: 16,
  },
  nombreDePieces2: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 17,

    marginTop: 12,
    marginLeft: 95,
  },
  nombreDePieces: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 41,
    width: 295,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    marginTop: 13,
    marginLeft: 18,
  },
  prix: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 20,
    width: 30,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 0,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    marginTop: 18,
    marginLeft: 145,
  },
  textInput4: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 38,
    width: 92,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
  },
  textInput3: {
    fontFamily: "Hoefler",
    color: "#121212",
    height: 38,
    width: 92,
    backgroundColor: "rgba(255,255,255,1)",
    borderWidth: 1,
    borderColor: "rgba(74,144,226,1)",
    borderRadius: 5,
    marginLeft: 110,
    marginTop: 1,
  },
  textInput4Row: {
    height: 39,
    flexDirection: "row",
    marginTop: 4,
    marginLeft: 18,
    marginRight: 18,
  },
  imageStack: {
    width: 393,
    height: 632,
    marginTop: 65,
    marginLeft: -9,
  },
  recherche: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 29,
    marginTop: -677,
    marginLeft: 123,
  },
});

export default Search;
