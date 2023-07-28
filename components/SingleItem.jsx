import { View, Text, StyleSheet, Dimensions, Image } from "react-native";
import React from "react";
import MaterialButtonPrimary5 from "./MaterialButtonPrimary5";
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function SingleItem({ data }) {
  const navigation = useNavigation();
  return (
    <View style={styles.rect2Stack} >
      <Image
        source={{ uri: data.image }}
        resizeMode="cover"
        style={styles.image}
      ></Image>
      <View style={styles.rect2}>
        <Text style={styles.maison}>{data.type}</Text>
        <Text style={styles.maisonAvecJardin}>{data.title}</Text>
        <View style={styles.button3Row}>
          <Text
            style={{
              fontSize: 20,

              color: "rgba(16,77,105,100)",
              fontFamily: "Hoefler",
              textDecorationLine: "underline",
            }}
            onPress={() => navigation.navigate("profil",{id:data.user_id})}
          >
            Profil
          </Text>
        </View>
        <View style={{justifyContent:"center",alignItems:"center",marginVertical:20}}>
          <MaterialButtonPrimary5
            onPress={() => navigation.navigate("details",{id:data.item_id})}
            style={styles.materialButtonPrimary5}
          ></MaterialButtonPrimary5>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rect2Stack: {
    //marginTop: windowHeight * 0.14,
    width: "100%", // Responsive width
    height:"100%",
    height: windowHeight * 0.7, // Responsive height
    alignItems: "center",
    justifyContent:"space-between",
    borderRadius: 43,
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
    marginTop:10,

    //marginLeft: windowWidth * 0.1,
  },
  image: {
    minHeight:250,
    width:"100%",
    borderRadius:20
  },
  rect2: {
    width: "100%",
    overflow: "visible",
  },
  maison: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 29,
    marginLeft: 15,
  },
  maisonAvecJardin: {
    fontFamily: "Hoefler",
    color: "#104d69",
    fontSize: 14,
    marginLeft: 15,
  },
  button3Row: {
    height: 46,
    flexDirection: "row",
    alignItems:"center",
    justifyContent:"flex-end",
    paddingRight:15,

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
  },
});
