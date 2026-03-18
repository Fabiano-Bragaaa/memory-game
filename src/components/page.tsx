import { colors } from "@/theme/colors";
import { PropsWithChildren } from "react";
import { StyleSheet, ViewProps } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

type PageProps = PropsWithChildren & ViewProps;

export function Page({ children, ...viewProps }: PageProps) {
  return (
    <SafeAreaView style={styles.container} {...viewProps}>
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.grayscale.gray700,
  },
});
