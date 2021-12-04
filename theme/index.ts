import { createTheme } from "@material-ui/core";

// Custom theme
export const theme = createTheme({
    palette: {
        primary: {
            main: '#2f8a3b',
            light: '#46a152',
            dark: '#2b7a36',
        },
        secondary: {
            main: '#3e3e3e',
            light: '#505050',
            dark: '#222222'
        }
    },
    typography: {
        allVariants: {
            fontFamily: "'Lato', sans-serif"
        },
        h1: {
            fontFamily: '"Gochi Hand", cursive'
        },
        h2: {
            fontFamily: '"Gochi Hand", cursive'
        },
        h3: {
            fontFamily: '"Gochi Hand", cursive'
        },
        h4: {
            fontFamily: '"Gochi Hand", cursive'
        },
        h5: {
            fontFamily: '"Gochi Hand", cursive'
        }
    }
})