import { Text, TextInput, View } from "react-native";

import { styles } from "./styles";
import { Input } from "../../../components";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to your account</Text>
      <Input />
    </View>
  );
}

export { LoginScreen };
