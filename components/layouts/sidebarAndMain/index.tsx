import { ReactNode } from 'react'
import styles from './styles.module.css'

interface ISidebarAndMain {
    sidebarComp: ReactNode
    mainComp: ReactNode
}

export default function SidebarAndMain({ mainComp, sidebarComp }: ISidebarAndMain) {
    return (
        <div className={styles.container}>
            <aside className={styles.aside}>{sidebarComp}</aside>
            <main className={styles.main}>{mainComp}</main>
        </div>
    )
}