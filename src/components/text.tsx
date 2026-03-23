import { StyleSheet, Text as RNText, TextProps, TextStyle } from "react-native";

function getFontFamilyByWeight(fontWeight?: TextStyle["fontWeight"]) {
  switch (fontWeight) {
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

export function Text(textProps: TextProps) {
  const flattenedStyle = StyleSheet.flatten(textProps.style);
  const fontFamily = getFontFamilyByWeight(flattenedStyle?.fontWeight);

  return (
    <RNText {...textProps} style={[{ fontFamily }, textProps.style]} />
  );
}
