import { Text } from "react-native";
import { TouchableItem } from "../TouchableItem";

import { styles } from "./styles";

interface Props {
  label: string;
}

export function Button({ label }: Props) {
  return (
    <TouchableItem style={styles.container}>
      <Text style={styles.text}>{label}</Text>
    </TouchableItem>
  );
}
