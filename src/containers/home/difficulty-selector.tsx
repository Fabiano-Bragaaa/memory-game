import { Text } from "@/components";
import { DifficultyType } from "@/domain";
import { colors } from "@/theme/colors";
import { getDifficultyColor } from "@/utils";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import { DifficultyIcon } from "./difficulty-icon";

type DifficultyItemType = {
  value: DifficultyType;
  label: string;
};

type DifficultySelectorProps = {
  difficulties: DifficultyItemType[];
  selectedDifficulty: DifficultyType;
  setSelectedDifficulty: (difficulty: DifficultyType) => void;
};

export function DifficultySelector({
  difficulties,
  selectedDifficulty,
  setSelectedDifficulty,
}: DifficultySelectorProps) {
  return (
    <View style={styles.container}>
      <View style={styles.difficultyContainer}>
        <Text weight="bold" style={styles.difficultyTitle}>
          Dificuldade
        </Text>
        <View style={styles.timeIconContainer}>
          <MaterialCommunityIcons
            name="clock-outline"
            size={24}
            color={colors.accent.green}
          />
          <Text>5 min</Text>
        </View>
      </View>
      <View style={styles.difficultyTabs}>
        {difficulties.map(difficulty => (
          <Pressable
            key={difficulty.value}
            style={styles.difficultyTab}
            onPress={() => setSelectedDifficulty(difficulty.value)}>
            <DifficultyIcon
              difficulty={difficulty.value}
              color={getDifficultyColor(difficulty.value)}
              isSelected={selectedDifficulty === difficulty.value}
              inactiveColor={colors.grayscale.gray200}
            />
            <Text>{difficulty.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  difficultyContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  difficultyTitle: {
    fontSize: 16,
    color: colors.grayscale.gray200,
  },
  timeIconContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.grayscale.gray500,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 30,
    gap: 6,
  },
  difficultyTabs: {
    flexDirection: "row",
    borderRadius: 100,
    padding: 4,
    position: "relative",
    borderColor: colors.grayscale.gray400,
    borderWidth: 1,
  },
  difficultyTab: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    paddingVertical: 12,
    borderRadius: 100,
    gap: 6,
    zIndex: 1,
  },
});
