import ContainerAdjustedForNavbar from "../../atoms/container";
import ContactForm from "./form";
import styles from './styles.module.css'

export default function ContactSection() {
    return (
        <ContainerAdjustedForNavbar id="contact">
            <h1 className={styles.title1}>Want to hire me?</h1>
            <div className={styles.twoCols}>
                <div className={styles.col1}>
                    <h2 className={styles.title2}>Drop me a line.</h2>
                </div>
                <div className={styles.col2}>
                    <ContactForm />
                </div>
            </div>
        </ContainerAdjustedForNavbar>
    )
}