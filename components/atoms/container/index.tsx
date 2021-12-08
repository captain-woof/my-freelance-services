import { ReactNode } from "react"
import { CSSProperties } from "react"
import styles from './styles.module.css'
import cx from 'classnames'

interface IContainerAdjustedForNavbar {
    children: ReactNode
    style?: CSSProperties
    fullPageFixed?: boolean
}

export default function ContainerAdjustedForNavbar({ children, style, fullPageFixed = false }: IContainerAdjustedForNavbar) {
    return (
        <section className={cx(styles.container, fullPageFixed && styles.fixed)} style={style}>
            {children}
        </section>
    )
}