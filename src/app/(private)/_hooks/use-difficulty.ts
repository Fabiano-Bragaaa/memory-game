import { DifficultyType } from "@/domain";

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

  return { difficulties };
}
