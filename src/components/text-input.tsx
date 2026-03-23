import { useInputFocusAnimation } from "@/animations";
import { colors } from "@/theme/colors";
import {
  TextInput as RNTextInput,
  StyleSheet,
  TextInputProps,
} from "react-native";
import Animated from "react-native-reanimated";

const AnimatedTextInput = Animated.createAnimatedComponent(RNTextInput);

export function TextInput(textInputProps: TextInputProps) {
  const { onFocus, onBlur, animatedStyle } = useInputFocusAnimation();
  return (
    <AnimatedTextInput
      placeholderTextColor={colors.grayscale.gray300}
      style={[styles.input, animatedStyle]}
      onFocus={onFocus}
      onBlur={onBlur}
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
