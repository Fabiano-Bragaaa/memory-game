import { useDifficultyIcon } from "@/app/(private)/_hooks/use-difficulty-icon";
import { DifficultyType } from "@/domain";
import { StyleSheet, View } from "react-native";

type DifficultyIconProps = {
  difficulty: DifficultyType;
  color: string;
  isSelected: boolean;
  inactiveColor: string;
};

export function DifficultyIcon(difficultyIconProps: DifficultyIconProps) {
  const { getBarStyle } = useDifficultyIcon(difficultyIconProps);

  return (
    <View style={styles.container}>
      {[1, 2, 3].map(index => (
        <View key={index} style={[styles.bar, getBarStyle(index)]} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 2,
    height: 16,
  },
  bar: {
    width: 3,
    borderRadius: 2,
  },
});
