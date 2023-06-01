import { View, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Screen } from "../../../constants/screen";
import { Feather } from "@expo/vector-icons";

interface Props {
  size?: number;
  prefixIcon?: keyof typeof Feather.glyphMap;
  suffixIcon?: keyof typeof Feather.glyphMap;
  onPressSuffix?: VoidFunction;
}

const _styles = styles();

export function Input({ size, prefixIcon, suffixIcon, onPressSuffix }: Props) {
  const isSuffixPressable: boolean = onPressSuffix != null;
  const suffixActiveOpacity: number = isSuffixPressable ? 0.6 : 1;

  return (
    <View style={styles(size ?? Screen.width * 0.8).container}>
      {!!prefixIcon && <Feather name={prefixIcon} size={22} color="#BBB" />}

      <TextInput style={_styles.input} />

      {!!suffixIcon && (
        <TouchableOpacity
          onPress={onPressSuffix}
          activeOpacity={suffixActiveOpacity}
        >
          <Feather name={suffixIcon} size={22} color="#BBB" />
        </TouchableOpacity>
      )}
    </View>
  );
}
