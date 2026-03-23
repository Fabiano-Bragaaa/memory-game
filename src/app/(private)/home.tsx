import { Page } from "@/components";
import { useAuthServices } from "@/services";
import { router } from "expo-router";
import { Button, Text } from "react-native";

export default function Home() {
  const { logout } = useAuthServices();

  function handleLogout() {
    logout();
    router.replace("/(public)/login");
  }

  return (
    <Page withPadding>
      <Text>Home</Text>
      <Button title="Sair" onPress={handleLogout} />
    </Page>
  );
}
