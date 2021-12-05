import styles from "./styles.module.css"
import { useNavbar } from "../../../hooks/navbar"
import { useEffect } from "react"
import ContainerAdjustedForNavbar from "../../atoms/container"
import Link from 'next/link'
import { Gigs } from "../../../types/gig"
import GigCard from "./gigCard"
import Footer from "../../molecules/footer"

export default function Services({ myGigs }: { myGigs: Gigs }) {
    // Set navbar background to primary
    const { setNavbarTransparent } = useNavbar()
    useEffect(() => {
        setNavbarTransparent(false)
    }, [setNavbarTransparent])

    return (
        <>
            <ContainerAdjustedForNavbar style={{
                padding: '1rem 2rem'
            }}>
                <h2 className={styles.heading}>
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
                    {myGigs.map((gig) => (
                        <GigCard key={gig.gig_id} gig={gig} />
                    ))}
                </div>
            </ContainerAdjustedForNavbar>
            <Footer />
        </>
    )
}