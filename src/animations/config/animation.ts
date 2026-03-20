import { WithSpringConfig } from "react-native-reanimated";

const spring: Partial<WithSpringConfig> = {
  damping: 15,
  stiffness: 150,
};

export const animations = {
  spring,
};
