import { Page } from "@/components";
import { DifficultySelector, HomeHeader } from "@/containers";
import { useAuthServices } from "@/services";
import { router } from "expo-router";
import { useDifficulty } from "./_hooks/use-difficulty";

export default function Home() {
  const { logout } = useAuthServices();
  const { difficulties, selectedDifficulty, setSelectedDifficulty } = useDifficulty();

  function handleLogout() {
    logout();
    router.replace("/(public)/login");
  }

  return (
    <Page withPadding>
      <HomeHeader />
      <DifficultySelector difficulties={difficulties} selectedDifficulty={selectedDifficulty} setSelectedDifficulty={setSelectedDifficulty} />
    </Page>
  );
}
