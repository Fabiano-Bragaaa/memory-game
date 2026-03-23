import { colors } from "@/theme/colors";
import { useCallback } from "react";
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
} from "react-native-reanimated";
import { animations } from "../config/animation";

interface UseInputFocusAnimationProps {
  springConfig?: WithSpringConfig;
}

export function useInputFocusAnimation({
  springConfig = animations.spring,
}: UseInputFocusAnimationProps = {}) {
  const focus = useSharedValue(0);

  const onFocus = useCallback(() => {
    focus.value = withSpring(1, springConfig);
  }, [focus, springConfig]);

  const onBlur = useCallback(() => {
    focus.value = withSpring(0, springConfig);
  }, [focus, springConfig]);

  const animatedStyle = useAnimatedStyle(() => {
    const borderColor = interpolateColor(
      focus.value,
      [0, 1],
      [colors.grayscale.gray400, colors.accent.cyan],
    );

    return {
      borderColor,
      transform: [{ scale: 1 + focus.value * 0.02 }], // 2% de zoom
    };
  });

  return {
    onFocus,
    onBlur,
    animatedStyle,
  };
}
