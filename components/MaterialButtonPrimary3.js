import { useNavigation } from "@react-navigation/native";
import React, { Component } from "react";
import { View } from "react-native";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonPrimary3(props) {
  const navigation = useNavigation();
  return (
    <>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.button}>Avez vous deja un compte? </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text
            style={{
              color: "rgba(74,144,226,1)",
              borderBottomWidth: 1,
              borderBottomColor: "#ccc",
            }}
          >
            S'authentifier
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={[styles.container, props.style]}
        onPress={props.onPress}
      >
        <Text style={styles.button}>Retour à la page principale</Text>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.35,
    shadowRadius: 5,
    elevation: 2,
    minWidth: 88,
    paddingLeft: 16,
    paddingRight: 16,
  },
  button: {
    color: "rgba(74,144,226,1)",
    fontSize: 14,
  },
});

export default MaterialButtonPrimary3;
