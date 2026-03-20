import { useAuthServices } from "@/services";
import { router } from "expo-router";
import { useState } from "react";

export function useLogin() {
  const { setUser } = useAuthServices();
  const [name, setName] = useState("");

  function handleLogin() {
    if (!name.trim()) {
      return;
    }

    if (!name.length) {
      return;
    }

    setUser(name);
    router.replace("/(private)/home");
  }

  return { name, setName, handleLogin };
}
