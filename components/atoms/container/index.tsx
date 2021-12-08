import { ReactNode } from "react"
import { CSSProperties } from "react"
import styles from './styles.module.css'
import cx from 'classnames'

interface IContainerAdjustedForNavbar {
    children: ReactNode
    style?: CSSProperties
    fullPageFixed?: boolean
    id?: string
}

export default function ContainerAdjustedForNavbar({ children, style, fullPageFixed = false, id }: IContainerAdjustedForNavbar) {
    return (
        <section className={cx(styles.container, fullPageFixed && styles.fixed)} style={style} id={id}>
            {children}
        </section>
    )
}