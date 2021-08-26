import { theme as defaultTheme } from "@chakra-ui/react"

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
        black: {
            50: "#f2f2f2",
            100: "#d9d9d9",
            200: "#bfbfbf",
            300: "#a6a6a6",
            400: "#8c8c8c",
            500: "#737373",
            600: "#595959",
            700: "#404040",
            800: "#262626",
            900: "#0d0d0d",
        },
    },
}

export default theme
