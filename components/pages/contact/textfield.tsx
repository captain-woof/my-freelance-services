import { ChangeEventHandler, HTMLInputTypeAttribute, InputHTMLAttributes } from 'react'
import styles from './styles.module.css'

interface ITextfield {
    value: string
    onChangeTextField?: ChangeEventHandler<HTMLInputElement>
    onChangeTextArea?: ChangeEventHandler<HTMLTextAreaElement>
    label: string
    name: string
    error: string | undefined | null
    textFieldProps?: InputHTMLAttributes<HTMLInputElement>
    textAreaProps?: InputHTMLAttributes<HTMLTextAreaElement>
    large?: boolean
    placeholder?: string
    type?: HTMLInputTypeAttribute | undefined
}

export default function Textfield({ value, onChangeTextField, onChangeTextArea, label, name, error, textFieldProps, textAreaProps, large = false, placeholder, type = 'text' }: ITextfield) {
    return (
        <div className={styles.textfield}>
            <label htmlFor={`${label}-input`} className={styles.label}>{label}</label>
            {large
                ? <textarea id={`${label}-input`} className={styles.input} onChange={onChangeTextArea} value={value} name={name} {...textAreaProps} rows={4} />
                : <input id={`${label}-input`} className={styles.input} onChange={onChangeTextField} value={value} name={name} placeholder={placeholder} type={type} {...textFieldProps} />
            }
            {!!error &&
                <span className={styles.error}>{error}</span>
            }
        </div>
    )
}