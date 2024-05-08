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
        color: "colorWhite",
        fontSize: ["0.8em", "0.9em", "1em", "1.1em"],
      },
      variants: {
        small: {
          color: "colorDarkYellow",
          fontSize: ["0.7em", "0.8em", "0.9em", "1em"],
        },
        smaller: {
          color: "colorWhite",
          fontSize: ["0.6em", "0.675em", "0.75em", "0.9em"],
        },
        smallest: {
          color: "colorBrightYellow",
          fontSize: ["0.525em", "0.6em", "0.675em", "0.8em"],
        },
        big: {
          color: "colorWhite",
          fontSize: ["1.2em", "1.4em", "1.6em", "1.8em"],
          fontWeight: "bold",
        },
        bigger: {
          color: "colorWhite",
          fontSize: ["0.7em", "0.85em", "1.1em", "1.4em"],
          fontWeight: "bold",
        },
        header: {
          color: "colorWhite",
          fontSize: ["0.7em", "0.85em", "1.1em", "1.4em"],
          fontWeight: "bold",
        },
      },
    },
  },
});

export default theme;