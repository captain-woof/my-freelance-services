/* eslint-disable @next/next/no-img-element */
import styles from './styles.module.css'

export default function MyPicSidebar() {
    return (
        <div className={styles.myImageContainer}>
            <img className={styles.myImage} src="/assets/images/me.jpg" alt="Sohail's portrait"/>
        </div>
    )
}