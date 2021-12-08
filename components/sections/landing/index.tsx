/* eslint-disable @next/next/no-img-element */
import Button from "../../atoms/button";
import ContainerAdjustedForNavbar from "../../atoms/container";
import Link from 'next/link'
import styles from './styles.module.css'

export default function LandingSection() {
    return (
        <ContainerAdjustedForNavbar fullPageFixed style={{ backgroundColor: "var(--color-primary)" }}>
            <picture className={styles.background_img}>
                <source srcSet="assets/images/landing_page_bg.webp" type="image/webp" />
                <img src="assets/images/landing_page_bg.gif" alt="Animated website image" />
            </picture>
            <main className={styles.content}>
                <h1 className={styles.title}>Need a<br />website built?</h1>
                <h3 className={styles.subtitle}>I&apos;m your guy.</h3>
                <Link href="#contact" passHref><a style={{ width: 'fit-content' }}>
                    <Button noShadow>Get in touch</Button>
                </a></Link>
            </main>
        </ContainerAdjustedForNavbar>
    )
}