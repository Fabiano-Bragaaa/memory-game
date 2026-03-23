import { colors } from "@/theme/colors";
import { Text as RNText, StyleSheet, TextProps, TextStyle } from "react-native";

type FontWeight = "regular" | "medium" | "semibold" | "bold";

type AppTextProps = TextProps & {
  weight?: FontWeight;
};

function getFontFamilyByWeight(weight: FontWeight = "regular") {
  switch (weight) {
    case "medium":
      return "Baloo2_500Medium";
    case "semibold":
      return "Baloo2_600SemiBold";
    case "bold":
      return "Baloo2_700Bold";
    default:
      return "Baloo2_400Regular";
  }
}

function getWeightFromStyle(fontWeight?: TextStyle["fontWeight"]): FontWeight {
  switch (fontWeight) {
    case "medium":
      return "medium";
    case "semibold":
      return "semibold";
    case "bold":
      return "bold";
    default:
      return "regular";
  }
}

export function Text({ weight, ...textProps }: AppTextProps) {
  const flattenedStyle = StyleSheet.flatten(textProps.style);
  const resolvedWeight = weight ?? getWeightFromStyle(flattenedStyle?.fontWeight);
  const fontFamily = getFontFamilyByWeight(resolvedWeight);

  return (
    <RNText
      {...textProps}
      style={[{ fontFamily, color: colors.grayscale.gray100 }, textProps.style]}
    />
  );
}
