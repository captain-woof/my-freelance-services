import { useNavbar } from '../../../hooks/navbar'
import Link from 'next/link'
import { useState, useCallback } from 'react'
import styles from './styles.module.css'
import Button from '../../atoms/button'
import { HiMenu as MenuIcon } from 'react-icons/hi'
import cx from 'classnames'

const navItems = [
    { displayName: "Services", href: "/services" },
    { displayName: "About", href: "/about" },
    { displayName: "Contact", href: "/contact" }
]

export default function Navbar() {
    const { navbarTransparent } = useNavbar()

    // Menu
    const [menuOpen, setMenuOpen] = useState<boolean>(false)
    const toggleMenuOpen = useCallback(() => {
        setMenuOpen(prev => !prev)
    }, [setMenuOpen])

    return (
        <nav className={styles.navbar} style={{ backgroundColor: navbarTransparent ? 'transparent' : 'var(--color-primary)' }} onMouseLeave={() => { setMenuOpen(false) }}>
            <Link href="/" passHref><a>
                <h3 className={styles.title}>
                    Sohail
                </h3>
            </a></Link>
            <div className={styles.navButtons} title='Navigation buttons'>
                {navItems.map(({ displayName, href }) => (
                    <Link key={displayName} href={href} passHref><a>
                        <Button outlined noShadow>{displayName}</Button>
                    </a></Link>
                ))}
            </div>
            <div className={styles.navMenuIconButtonMobile} onClick={toggleMenuOpen}>
                <MenuIcon className={styles.navMenuIconMobile} />
            </div>
            <ul className={cx(styles.menuItems, menuOpen ? null : styles.closed)}>
                {navItems.map(({ href, displayName }) => (
                    <Link key={displayName} passHref href={href}><a onClick={toggleMenuOpen}>
                        <li className={styles.menuItem}>{displayName}</li>
                    </a></Link>
                ))}
            </ul>
        </nav>
    )
}