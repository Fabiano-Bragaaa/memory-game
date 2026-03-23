import { Page } from "@/components";
import { HomeHeader } from "@/containers";
import { useAuthServices } from "@/services";
import { router } from "expo-router";
import { Button } from "react-native";

export default function Home() {
  const { logout } = useAuthServices();

  function handleLogout() {
    logout();
    router.replace("/(public)/login");
  }

  return (
    <Page withPadding>
      <HomeHeader />
      <Button title="Sair" onPress={handleLogout} />
    </Page>
  );
}
