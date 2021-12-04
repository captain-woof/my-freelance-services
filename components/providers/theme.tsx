import { ThemeProvider } from '@material-ui/core'
import { ReactNode } from 'react'
import { theme } from '../../theme'

export default function MaterialThemeProvider({ children }: { children: ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    )
}