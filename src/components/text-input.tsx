import { colors } from "@/theme/colors";
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";

export function TextInput(textInputProps: TextInputProps) {
  return (
    <RNTextInput
      placeholderTextColor={colors.grayscale.gray300}
      style={styles.input}
      {...textInputProps}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 50,
    backgroundColor: colors.grayscale.gray500,
    color: colors.grayscale.white,
    borderWidth: 1,
    borderColor: colors.grayscale.gray400,
    fontSize: 16,
    textAlign: "center",
  },
});
