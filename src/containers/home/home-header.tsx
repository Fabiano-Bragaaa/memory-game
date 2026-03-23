import { usePressAnimation } from "@/animations";
import { Text } from "@/components";
import { useAuth } from "@/services";
import { colors } from "@/theme/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function HomeHeader() {
  const { user } = useAuth();
  const { animatedStyle, handlePressIn, handlePressOut } = usePressAnimation({
    scaleActive: 0.8,
  });

  return (
    <View style={styles.header}>
      <View style={styles.headerContent}>
        <View style={styles.headerLeft}>
          <Text style={styles.greeting} weight="bold">
            Boas vindas, {user?.name}
          </Text>
          <Text style={styles.subtitle}>
            Comece a jogar selecionadno os desafios abaixo
          </Text>
        </View>
        <View style={{ width: 40 }}>
          <AnimatedPressable
            style={[styles.trophyContainer, animatedStyle]}
            onPressIn={handlePressIn}
            onPressOut={handlePressOut}>
            <MaterialCommunityIcons
              name="trophy-outline"
              size={18}
              color={colors.accent.lightPurple}
            />
          </AnimatedPressable>
        </View>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  header: {
    paddingTop: 60,
    paddingBottom: 24,
  },
  headerContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flex: 1,
    maxWidth: "60%",
  },
  greeting: {
    fontSize: 20,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.grayscale.gray200,
    lineHeight: 20,
  },
  trophyContainer: {
    width: 40,
    height: 40,
    borderColor: colors.grayscale.gray400,
    backgroundColor: colors.grayscale.gray450,
    borderRadius: 40,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
