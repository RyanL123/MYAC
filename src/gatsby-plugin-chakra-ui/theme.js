import { theme as defaultTheme } from "@chakra-ui/core"

const theme = {
    ...defaultTheme,
    colors: {
        ...defaultTheme.colors,
        blue: {
            50: "#e1f3ff",
            100: "#b8d7fa",
            200: "#8cbcf2",
            300: "#60a1ec",
            400: "#3686e5",
            500: "#206ccd",
            600: "#1654a0",
            700: "#0d3c73",
            800: "#032447",
            900: "#000c1c",
        },
        gray: {
            50: "#edf1fc",
            100: "#cfd5e3",
            200: "#b0bacd",
            300: "#919eb9",
            400: "#7282a5",
            500: "#58698b",
            600: "#44526d",
            700: "#303a4e",
            800: "#1c2330",
            900: "#050c15",
        },
    },
}
