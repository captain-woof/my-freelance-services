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
            fontFamily: "Poppins, sans-serif"
        },
        h1: {
            fontFamily: '"Paytone One", sans-serif',
        },
        h2: {
            fontFamily: '"Paytone One", sans-serif',
        },
        h3: {
            fontFamily: '"Paytone One", sans-serif',
        },
        h4: {
            fontFamily: '"Paytone One", sans-serif'
        },
        h5: {
            fontFamily: '"Paytone One", sans-serif'
        }
    }
})