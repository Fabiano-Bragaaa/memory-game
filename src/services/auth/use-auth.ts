import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { AuthStorageType } from "./auth-type";
const useAuthStore = create<AuthStorageType>()(
  persist(
    set => ({
      user: null,
      logout: () => set({ user: null }),
      setUser: name => {},
    }),
    {
      name: "auth",
      storage: createJSONStorage(() => AsyncStorage),
    },
  ),
);

export function useAuth(): Pick<AuthStorageType, "user"> {
  return {
    user: useAuthStore(state => state.user),
  };
}

export function useAuthServices(): Pick<AuthStorageType, "setUser" | "logout"> {
  return {
    setUser: useAuthStore(state => state.setUser),
    logout: useAuthStore(state => state.logout),
  };
}
