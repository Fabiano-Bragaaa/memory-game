import { useCallback } from "react";
import {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  WithSpringConfig,
} from "react-native-reanimated";
import { animations } from "../config/animation";

interface UsePressAnimationProps {
  scaleActive?: number;
  springConfig?: WithSpringConfig;
}

export function usePressAnimation({
  scaleActive = 0.95,
  springConfig = animations.spring,
}: UsePressAnimationProps = {}) {
  const scale = useSharedValue(1);

  const handlePressIn = useCallback(() => {
    scale.value = withSpring(scaleActive, springConfig);
  }, [scale, scaleActive, springConfig]);

  const handlePressOut = useCallback(() => {
    scale.value = withSpring(1, springConfig);
  }, [scale, springConfig]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    width: "100%",
  }));

  return {
    handlePressIn,
    handlePressOut,
    animatedStyle,
  };
}
