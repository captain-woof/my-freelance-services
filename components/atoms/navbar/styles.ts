import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

export const useStyles = makeStyles((theme) => ({
    navbarOuter: {
        boxShadow: 'none'
    },
    navbarInner: {
        minHeight: '72px',
        padding: '0.5rem 1rem',
        "@media (min-width: 768px)": {
            "&": {
                padding: '0.5rem 2rem'
            }
        }
    },
    title: {
        color: grey[100],
        '@media (max-width: 768px)': {
            '&': { fontSize: '2rem' }
        },
        '@media (max-width: 480px)': {
            '&': { fontSize: '1.5rem' }
        }
    },
    navbarContent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    },
    navButtons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        gap: '1.5rem',
        '@media (max-width: 480px)': {
            '&': { display: 'none' }
        }
    },
    navButton: {
        color: grey[100]
    },
    navMenuIconButtonMobile: {
        display: 'block',
        '@media (min-width: 480px)': {
            '&': { display: 'none' }
        }
    },
    navMenuIconMobile: {
        color: grey[100]
    }
}))
