import { colors } from "@/theme/colors";
import { PropsWithChildren } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PageProps = PropsWithChildren &
  ViewProps & {
    withPadding?: boolean;
  };

export function Page({
  children,
  withPadding = false,
  ...viewProps
}: PageProps) {
  return (
    <SafeAreaView style={styles.container} {...viewProps}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}>
        <View style={withPadding ? styles.content : {}}>{children}</View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale.gray700,
  },
  content: {
    paddingHorizontal: 24,
  },
});
