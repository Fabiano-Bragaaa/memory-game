import { router } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView>
      <Text>Hello World</Text>
      <TouchableOpacity onPress={() => router.push("/(private)/game")}>
        <Text>game</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
