import styles from './styles.module.css'
import { BsLinkedin as LinkedinIcon, BsInstagram as InstagramIcon, BsTwitter as TwitterIcon } from 'react-icons/bs'
import { MdEmail as EmailIcon } from 'react-icons/md'

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>
                Services by <b><a href="https://sohail.saha.in/" style={{color: "var(--color-white)"}}>Sohail Saha</a></b>
            </p>
            <div className={styles.socialIcons}>
                <a rel="noreferrer" href="https://www.linkedin.com/in/sohail-saha/" target="_blank"><LinkedinIcon className={styles.socialIcon}/></a>
                <a rel="noreferrer" href="https://instagram.com/sohail_saha_" target="_blank"><InstagramIcon className={styles.socialIcon}/></a>
                <a rel="noreferrer" href="https://twitter.com/realCaptainWoof" target="_blank"><TwitterIcon className={styles.socialIcon}/></a>
                <a rel="noreferrer" href="mailto:captainwoof.official@gmail.com" target="_blank"><EmailIcon className={styles.socialIcon}/></a>
            </div>
        </footer>
    )
}