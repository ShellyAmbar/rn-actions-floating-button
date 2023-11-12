import {StyleSheet} from "react-native";

const createStyle = ({size}: {size: number}) =>
  StyleSheet.create({
    container: {
      alignItems: "center",
      position: "absolute",
      justifyContent: "center",
    },

    button: {
      position: "absolute",
      justifyContent: "center",
      alignItems: "center",
      width: size,
      height: size,
      backgroundColor: "#1E90FF",
      shadowColor: "#1E90FF",
      shadowOffset: {
        width: 5,
        height: 6,
      },
      shadowRadius: 15,
      shadowOpacity: 1,
      borderRadius: size / 2,
      elevation: 15,
      alignSelf: "center",
    },
    secondary: {
      width: (size * 3) / 4,
      height: (size * 3) / 4,
      borderRadius: size / 2,
    },
  });
export default createStyle;
