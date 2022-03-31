import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "834px",
  lg: "992px",
  xl: "1200px",
  xxl: "1440px",
});

const styles = {
  global: () => ({
    body: {
      bg: "#E5E5E5",
      color: "#000",
    },
  }),
};

const fonts = {
  heading: "DM Sans, sans-serif",
  body: "DM Sans, sans-seriff",
};

const theme = extendTheme({ breakpoints, styles, fonts });

export default theme;
