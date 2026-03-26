import { DifficultyType } from "@/domain";
import { useEffect, useMemo, useState } from "react";
import { LayoutChangeEvent } from "react-native";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

type DifficultyItemType = {
  value: DifficultyType;
  label: string;
};

export function useDifficulty() {
  const difficulties: DifficultyItemType[] = [
    { value: "easy", label: "Easy" },
    { value: "medium", label: "Medium" },
    { value: "hard", label: "Hard" },
  ];
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<DifficultyType>("easy");

  const [containerWidth, setContainerWidth] = useState(0);
  const tabWidth = containerWidth > 0 ? (containerWidth - 8) / 3 : 0;

  const selectedIndex = useMemo(
    () =>
      difficulties.findIndex(
        difficulty => difficulty.value === selectedDifficulty,
      ),
    [difficulties, selectedDifficulty],
  );

  const translateX = useSharedValue(0);

  useEffect(() => {
    if (tabWidth <= 0 || selectedIndex < 0) return;
    translateX.value = withSpring(selectedIndex * tabWidth, {
      damping: 30,
      stiffness: 120,
    });
  }, [selectedIndex, tabWidth, translateX]);

  const animatedIndicatorStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  function handleTabsLayout(event: LayoutChangeEvent) {
    setContainerWidth(event.nativeEvent.layout.width);
  }

  return {
    difficulties,
    selectedDifficulty,
    setSelectedDifficulty,
    animatedIndicatorStyle,
    indicatorWidth: tabWidth,
    onTabsLayout: handleTabsLayout,
  };
}
