import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../constants/colors";

const Button = (props) => {
  const filledBcolor = props.color || COLORS.primary;
  const outlinedColor = COLORS.primary;
  const bgColor = props.filled ? filledBcolor : outlinedColor;
  const textColor = props.filled ? COLORS.primary : COLORS.white;
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...styles.button,
        ...{ backgroundColor: bgColor },
        ...props.style,
      }}
    >
      <Text
        style={{
          fontSize: 18,
          ...{ color: textColor },
        }}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  button: {
    paddingBottom: 16,
    paddingVertical: 10,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Button;
