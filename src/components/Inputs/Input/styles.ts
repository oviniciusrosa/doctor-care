import { StyleSheet } from "react-native";

export const styles = (width?: number) =>
  StyleSheet.create({
    container: {
      flexDirection: "row",
      alignItems: "center",

      backgroundColor: "#F6F6F6",
      width: width,
      maxWidth: 400,
      height: 45,
      paddingHorizontal: 10,
      borderRadius: 8,
    },
    input: {
      paddingHorizontal: 15,
      flex: 1,
      height: 45,
    },
  });
