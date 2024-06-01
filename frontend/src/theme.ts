import { extendTheme, defineStyleConfig, defineStyle } from "@chakra-ui/react";

const colors = {
  brandDark: {
    400: "#38424f",
  },
  brand: {
    300: "#76d7b8",
    400: "#4ecca3",
    500: "#34b38a",
  },
};

const baseButtonStyles = defineStyle({
  borderRadius: "30",
});

const ghostButtonStyles = defineStyle({
  borderColor: "brand.500",
  _hover: {
    borderColor: "brand.500",
    color: "white",
    backgroundColor: "brand.500",
  },
});

const solidButtonStyles = defineStyle({
  backgroundColor: "brand.500",
  color: "white",
  _hover: {
    backgroundColor: "white",
    color: "black",
    borderColor: "brand.500",
  },
});

const buttonTheme = defineStyleConfig({
  baseStyle: baseButtonStyles,
  variants: {
    solid: solidButtonStyles,
    ghost: ghostButtonStyles,
  },
});

const components = {
  Button: buttonTheme,
};

const theme = extendTheme({ colors, components });

export default theme;
