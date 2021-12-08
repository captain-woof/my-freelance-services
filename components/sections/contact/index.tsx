import ContainerAdjustedForNavbar from "../../atoms/container";
import ContactForm from "./form";
import styles from './styles.module.css'

export default function ContactSection() {
    return (
        <ContainerAdjustedForNavbar id="contact" fullPageFixed>
            <div className={styles.twoCols}>
                <div className={styles.col1}>
                    <h1 className={styles.title}>Drop me a line.</h1>
                </div>
                <div className={styles.col2}>
                    <ContactForm />
                </div>
            </div>
        </ContainerAdjustedForNavbar>
    )
}