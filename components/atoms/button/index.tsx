import { CSSProperties, ReactNode } from 'react'
import styles from './styles.module.css'

interface IButton {
    children: ReactNode
    style?: CSSProperties
    outlined?: boolean
}

export default function Button({ children, outlined = false, style }: IButton) {
    return (
        <button className={outlined ? styles.button_outlined : styles.button_filled} style={style}>
            {children}
        </button>
    )
}