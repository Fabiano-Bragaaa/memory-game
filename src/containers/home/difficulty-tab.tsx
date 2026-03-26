import { Text } from "@/components";
import { DifficultyType } from "@/domain";
import { colors } from "@/theme/colors";
import { getDifficultyColor } from "@/utils";
import { Pressable, StyleSheet } from "react-native";
import { DifficultyIcon } from "./difficulty-icon";

type DifficultyItemType = {
  value: DifficultyType;
  label: string;
};

type DifficultyTabProps = {
  difficulty: DifficultyItemType;
  selectedDifficulty: DifficultyType;
  setSelectedDifficulty: (difficulty: DifficultyType) => void;
};

export function DifficultyTab({
  difficulty,
  selectedDifficulty,
  setSelectedDifficulty,
}: DifficultyTabProps) {
  const isSelected = selectedDifficulty === difficulty.value;

  return (
    <Pressable
      style={styles.difficultyTab}
      onPress={() => setSelectedDifficulty(difficulty.value)}>
      <DifficultyIcon
        difficulty={difficulty.value}
        color={getDifficultyColor(difficulty.value)}
        isSelected={isSelected}
        inactiveColor={colors.grayscale.gray200}
      />
      <Text
        style={[
          styles.difficultyTitle,
          isSelected && { color: colors.grayscale.white },
        ]}
        weight={isSelected ? "bold" : "regular"}>
        {difficulty.label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  difficultyTab: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 100,
    gap: 10,
    zIndex: 1,
  },
  difficultyTitle: {
    fontSize: 16,
    color: colors.grayscale.gray200,
  },
});
