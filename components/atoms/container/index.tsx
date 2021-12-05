import { ReactNode } from "react"
import { CSSProperties } from "react"
import styles from './styles.module.css'

interface IContainerAdjustedForNavbar {
    children: ReactNode
    style?: CSSProperties
}

export default function ContainerAdjustedForNavbar({ children, style }: IContainerAdjustedForNavbar) {
    return (
        <section className={styles.container} style={style}>
            {children}
        </section>
    )
}