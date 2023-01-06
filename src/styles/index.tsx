import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  css,
} = createStitches({
  theme: {
    colors: {
      white: "#ffffff",

      gray900: "#121214",
      gray800: "#202024",
      gray300: "#C4C4CC",
      gray100: "#E1E1E6",

      gree300: "#00B37E",
      gree500: "#00875F",
    },
    fontSizes: {
      md: "1.125rem",
      lg: "1.25rem",
      xl: "1.5rem",
      "2xl": "2rem",
    },
  },
});
