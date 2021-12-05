import { ButtonHTMLAttributes, CSSProperties, ReactNode } from 'react'
import styles from './styles.module.css'

interface IButton {
    children: ReactNode
    style?: CSSProperties
    outlined?: boolean
    noShadow?: boolean
    buttonProps?: ButtonHTMLAttributes<HTMLButtonElement>
}

export default function Button({ children, outlined = false, style, noShadow = false, buttonProps }: IButton) {
    return (
        <button className={outlined ? styles.button_outlined : styles.button_filled} style={{...style, boxShadow: noShadow ? "" : "var(--shadow-normal)"}} {...buttonProps}>
            {children}
        </button>
    )
}