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
  },
  input: {
    backgroundColor: "#F6F6F6",
    width: Screen.width * 0.8,
    maxWidth: 400,
    height: 45,
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
  },
});
