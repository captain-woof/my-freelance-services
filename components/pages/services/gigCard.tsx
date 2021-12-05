import { Gig } from "../../../types/gig";
import styles from './styles.module.css'
import Image from 'next/image'
import { getGigImage, getSeoTitleFromGig } from "../../../utils/gig";
import Link from 'next/link'
import Button from "../../atoms/button";

export default function GigCard({ gig }: { gig: Gig }) {
    return (
        <section className={styles.gigCard}>
            <div className={styles.gigCardImgContainer}>
                <Image src={getGigImage(gig)} alt={getSeoTitleFromGig(gig)} layout='fill' placeholder="empty" objectFit='cover'/>
            </div>
            <h4 className={styles.gigTitle}>I will {gig.title}</h4>
            <span className={styles.gigPrice}>Starting from ${gig.price_i}</span>
            <div className={styles.gigCardActions}>
                <Link href={`https://fiverr.com${gig.gig_url}`} passHref><a target="_blank">
                    <Button>Details</Button>
                </a></Link>
            </div>
        </section>
    )
}