import { Text, TextInput, View } from "react-native";

import { styles } from "./styles";
import { Input, Password, TouchableItem, Button } from "../../../components";

function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login to your account</Text>

      <View style={styles.form}>
        <Input prefixIcon="mail" />
        <Password />
        <Button label="Sign in" />
        <TouchableItem style={styles.signUpBtn}>
          <Text style={styles.signUpText}>Sign up</Text>
        </TouchableItem>
      </View>
    </View>
  );
}

export { LoginScreen };
