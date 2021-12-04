import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { useNavbar } from '../../../hooks/navbar'
import { useStyles } from './styles'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import { IconButton } from '@material-ui/core'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'
import { useState, useCallback, useRef } from 'react'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

export default function Navbar() {
    const { navbarTransparent } = useNavbar()
    const styles = useStyles()

    // Menu
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const menuIconRef = useRef<HTMLButtonElement>(null)
    const toggleMenuOpen = useCallback(() => {
        setMenuOpen(prev => !prev)
    }, [setMenuOpen])

    return (
        <AppBar color={navbarTransparent ? 'transparent' : 'primary'}>
            <Toolbar className={styles.navbarInner}>
                <Box className={styles.navbarContent}>
                    <Link href="/" passHref><a>
                        <Typography variant='h3' className={styles.title}>
                            Freelance Services by Sohail
                        </Typography>
                    </a></Link>
                    <ButtonGroup className={styles.navButtons} variant='text' title='Navigation buttons'>
                        <Link href="/about" passHref><a>
                            <Button className={styles.navButton}>About</Button>
                        </a></Link>
                        <Link href="/services" passHref><a>
                            <Button className={styles.navButton}>Services</Button>
                        </a></Link>
                    </ButtonGroup>
                    <IconButton ref={menuIconRef} className={styles.navMenuIconMobile} onClick={toggleMenuOpen}>
                        <MenuOpenIcon />
                    </IconButton>
                    <Menu anchorEl={menuIconRef.current} keepMounted open={menuOpen} onClose={toggleMenuOpen}>
                        <MenuItem onClick={toggleMenuOpen}>
                            <Link href="/services" passHref><a>Services</a></Link>
                        </MenuItem>
                        <MenuItem onClick={toggleMenuOpen}>
                            <Link href="/about" passHref><a>About</a></Link>
                        </MenuItem>
                    </Menu>
                </Box>
            </Toolbar>
        </AppBar >
    )
}