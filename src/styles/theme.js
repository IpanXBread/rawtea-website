import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    colorDarkYellow: "#deb633",
    colorYellow: "#e5d306",
    colorBrightYellow: "#fff200",
    colorWhite: "#ebedd4",
    color4: "rgb(3, 19, 19)",
    color5: "#1a202c",
    colort1: "rgba(0, 0, 0, 0.4)",
  },
  styles: {
    global: {
      body: {
        backgroundColor: "color5",
      },
    },
  },
  components: {
    Heading: {
      baseStyle: {
        color: "colorWhite",
        fontSize: ["0.5rem", "2xl", "3xl", "40xl"]
      },
    },
    Text: {
      baseStyle: {
        color: "colorYellow",
        fontSize: ["0.7em", "0.85em", "1.1em", "1.5em"],
      },
      variants: {
        description: {
          color: "colorDarkYellow",
          fontSize: ["xs", "md", "lg", "xl"],
        },
        header: {
          color: "colorWhite",
          fontSize: ["1em", "1.25em", "1.5em", "2em"],
          fontWeight: "bold",
        },
        brightYellow: {
          color: "colorBrightYellow",
        }
      },
    },
  },
});

export default theme;