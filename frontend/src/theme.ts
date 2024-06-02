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

const globalStyles = defineStyle({
  body: {
    margin: "0",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    color: "gray.700",
  },
  "#root": {
    width: "100%",
    height: "100%",
    flex: 1,
    display: "flex",
    flexDirection: "column",
  },
});

// TODO: Move component based themes into seperate folders
const baseButtonStyles = defineStyle({
  rounded: "2xl",
});

const buttonTheme = defineStyleConfig({
  baseStyle: baseButtonStyles,
  variants: {},
});

const components = {
  Button: buttonTheme,
};

const theme = extendTheme({
  colors,
  fonts,
  components,
  styles: {
    global: globalStyles,
  },
});

export default theme;
