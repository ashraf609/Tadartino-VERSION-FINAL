import { View,StyleSheet,Image,Dimensions } from 'react-native'
import React from 'react'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
export default function Header() {  
  return (
    <View style={styles.buttonRow}>
    <View style={styles.rect1}></View>
    <Image
      source={require("../assets/rect.png")}
      resizeMode="contain"
      style={styles.imagens}
    ></Image>
  </View>
  )
}

const styles = StyleSheet.create({
    buttonRow: {
        flexDirection: "row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor: "#104d69",
        borderRadius: 76,
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        paddingVertical:20,
        width: "100%",
    },
    imagens: {
        width: windowWidth * 0.4, // Responsive width
        height: windowHeight * 0.1, // Responsive height
    },
    rect1: {

    },
      
})