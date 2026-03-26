import { useDifficulty } from "@/app/(private)/_hooks/use-difficulty";
import { Text } from "@/components";
import { colors } from "@/theme/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { DifficultyTab } from "./difficulty-tab";

export function DifficultySelector() {
  const {
    difficulties,
    selectedDifficulty,
    setSelectedDifficulty,
    animatedIndicatorStyle,
    indicatorWidth,
    onTabsLayout,
  } = useDifficulty();
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
      <View style={styles.difficultyTabs} onLayout={onTabsLayout}>
        <Animated.View
          style={[
            styles.indicator,
            { width: indicatorWidth },
            animatedIndicatorStyle,
          ]}
        />
        {difficulties.map(difficulty => (
          <DifficultyTab
            key={difficulty.value}
            difficulty={difficulty}
            selectedDifficulty={selectedDifficulty}
            setSelectedDifficulty={setSelectedDifficulty}
          />
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
  indicator: {
    position: "absolute",
    top: 4,
    zIndex: 0,
    borderRadius: 100,
    bottom: 4,
    left: 4,
    backgroundColor: colors.grayscale.gray500,
    borderColor: colors.grayscale.gray400,
    borderWidth: 1,
  },
});
