import { DifficultyType } from "@/domain";
import { useState } from "react";

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

  return { difficulties, selectedDifficulty, setSelectedDifficulty };
}
