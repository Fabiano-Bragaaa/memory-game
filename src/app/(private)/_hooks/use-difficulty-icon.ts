import { DifficultyType } from "@/domain";

type DifficultyIconProps = {
  difficulty: DifficultyType;
  color: string;
  isSelected: boolean;
  inactiveColor: string;
};

export function useDifficultyIcon({
  difficulty,
  color,
  isSelected,
  inactiveColor,
}: DifficultyIconProps) {
  const barHeights = [6, 10, 14];
  const barCount = difficulty === "easy" ? 1 : difficulty === "medium" ? 2 : 3;

  function getBarStyle(index: number) {
    return {
      height: barHeights[index - 1],
      backgroundColor: index <= barCount && isSelected ? color : inactiveColor,
    };
  }

  return {
    getBarStyle,
  };
}
