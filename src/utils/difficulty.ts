import { DifficultyType } from "@/domain";
import { colors } from "@/theme/colors";

const difficultyColors: Record<DifficultyType, string> = {
  easy: colors.semantic.success,
  medium: colors.semantic.warning,
  hard: colors.semantic.error,
};

export function getDifficultyColor(difficulty: DifficultyType) {
  return difficultyColors[difficulty];
}
