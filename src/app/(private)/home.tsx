import { Page } from "@/components";
import { DifficultySelector, HomeHeader } from "@/containers";

export default function Home() {
  return (
    <Page withPadding>
      <HomeHeader />
      <DifficultySelector />
    </Page>
  );
}
