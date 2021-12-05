import { makeStyles } from "@material-ui/core"
import { grey } from '@material-ui/core/colors'

export const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        overflow: 'hidden',
        flexDirection: 'column',
        gap: '2rem',
        backgroundColor: theme.palette.primary.main
    },
    title: {
        zIndex: 2,
        color: grey[100]
    },
    buttonGroup: {
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        justifyContent: 'space-between',
        alignSelf: 'flex-start',
        '@media (min-width: 900px)': {
            '&': {
                alignSelf: 'center'
            }
        }
    },
    btnOutlined: {
        color: grey[100],
        boxShadow: `0 0 2px ${grey[100]}`
    }
}))