import styles from "./styles.module.css"
import { useNavbar } from "../../../hooks/navbar"
import { useEffect } from "react"
import ContainerAdjustedForNavbar from "../../atoms/container"
import Link from 'next/link'

export default function Services() {
    // Set navbar background to primary
    const { setNavbarTransparent } = useNavbar()
    useEffect(() => {
        setNavbarTransparent(false)
    }, [setNavbarTransparent])

    return (
        <ContainerAdjustedForNavbar>
            <h2>
                My services
            </h2>
            <section>
                <p className={styles.headingCaption}>
                    Below is a list of services I provide. I make responsive, modern and SEO-friendly websites for businesses and individuals.
                </p>
                <p className={styles.headingCaption}>
                    If these don&apos;t fit your needs, <Link href='/contact' passHref><a>contact me</a></Link> for a custom job.
                </p>
            </section>
            <div className={styles.grid}>

            </div>
        </ContainerAdjustedForNavbar>
    )
}