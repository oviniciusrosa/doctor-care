import { StyleSheet } from "react-native";
import { Screen } from "../../../constants/screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "#3D3D3D",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  form: {
    gap: 10,
  },

  signUpBtn: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    maxHeight: 40,
  },
  signUpText: {
    color: "#AAA",
  },
});
