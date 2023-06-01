import { View, Text, TextInput } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Screen } from "../../constants/screen";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  size?: number | null;
}

const _styles = styles();

export function Input({ size }: Props) {
  return (
    <View style={styles(size ?? Screen.width * 0.8).container}>
      {/* <Text>Input</Text> */}
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
      <TextInput style={_styles.input} />
    </View>
  );
}
