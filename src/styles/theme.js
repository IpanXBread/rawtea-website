import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
    colors: {
        color1: "#deb633",
        color2: "#e5d306",
        color3: "#ebedd4",
        color4: "rgb(3, 19, 19)",
        colort1: "rgba(0, 0, 0, 0.1)",
    },
    components: {
        Heading: {
          baseStyle: {
            color: "color3", // Set Heading color to color3
          },
        },
        Text: {
          baseStyle: {
            color: "color2", // Set Text color to color2
          },
          variants: {
            description: {
              color: "color1", // Set description color to color1
            },
          },
        },
      },
});

export default theme;