import { usePressAnimation } from "@/animations";
import { colors, gradients } from "@/theme/colors";
import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import Animated from "react-native-reanimated";

type GradientButtonProps = TouchableOpacityProps & {
  label: string;
};

export function GradientButton({
  label,
  ...touchableOpacityProps
}: GradientButtonProps) {
  const { handlePressIn, handlePressOut, animatedStyle } = usePressAnimation();
  return (
    <View style={styles.buttonGlow}>
      <Animated.View style={animatedStyle}>
        <LinearGradient
          colors={gradients.colorful}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 2 }}
          style={styles.buttonGradient}>
          <TouchableOpacity
            style={styles.button}
            {...touchableOpacityProps}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}>
            <Text style={styles.buttonText}>{label}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 18,
    color: colors.grayscale.white,
    fontWeight: "bold",
  },
  buttonGradient: {
    borderRadius: 50,
  },
  button: {
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonGlow: {
    shadowColor: colors.accent.purple,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 20,
    elevation: 15,
  },
});
