import { images } from "@/assets";
import { GradientButton } from "@/components/gradient-button";
import { Page } from "@/components/page";
import { colors } from "@/theme/colors";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";

export default function Login() {
  return (
    <Page>
      <View style={styles.content}>
        <View style={styles.logoContainer}>
          <Image source={images.logo} resizeMode="contain" />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Memory Game</Text>
          <Text style={styles.subtitle}>
            Teste sua memória enquanto aprende!
          </Text>
        </View>
        <View style={styles.formContainer}>
          <TextInput />
          <GradientButton label="Entrar" onPress={() => {}} />
        </View>
      </View>
    </Page>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 32,
  },
  logoContainer: {
    marginBottom: 32,
  },
  titleContainer: {
    alignItems: "center",
    marginBottom: 48,
  },
  title: {
    fontSize: 28,
    color: colors.grayscale.gray100,
    fontWeight: "bold",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.grayscale.gray200,
  },
  formContainer: {
    width: "100%",
    gap: 16,
  },
});
