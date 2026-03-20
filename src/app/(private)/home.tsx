import { useAuthServices } from "@/services";
import { router } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Home() {
  const { logout } = useAuthServices();

  function handleLogout() {
    logout();
    router.replace("/(public)/login");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home</Text>
      <Button title="Sair" onPress={handleLogout} />
    </View>
  );
}
