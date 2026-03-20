import { colors } from "@/theme/colors";
import { PropsWithChildren } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ViewProps,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PageProps = PropsWithChildren & ViewProps;

export function Page({ children, ...viewProps }: PageProps) {
  return (
    <SafeAreaView style={styles.container} {...viewProps}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale.gray700,
  },
});
