import { useAuth } from "@/services";
import { Redirect } from "expo-router";

export default function Index() {

  const { user } = useAuth();

  if (user) {
    return <Redirect href={"/(private)/home"} />;
  }

  return <Redirect href={"/(public)/login"} />;
}
