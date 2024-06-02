import { extendTheme, defineStyleConfig, defineStyle } from "@chakra-ui/react";
import "@fontsource/bowlby-one";
import "@fontsource/maven-pro";
import "@fontsource/maven-pro/700.css";

const fonts = {
  display: `'Bowlby One', sans-serif`,
  heading: `'Maven Pro', sans-serif`,
  body: `'Maven Pro', sans-serif`,
};

const colors = {
  brand: {
    50: "#8892fe",
    100: "#7480fe",
    200: "#616dfd",
    300: "#4d5bfd",
    400: "#3949fd",
    500: "#3342e4",
    600: "#2e3aca",
    700: "#2833b1",
    800: "#222c98",
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

const theme = extendTheme({ colors, fonts, components });

export default theme;
