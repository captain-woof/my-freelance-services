import ContainerAdjustedForNavbar from '../../atoms/container'
import styles from './styles.module.css'
import Image from 'next/image'

const portfolios = [
    {
        title: "Anchat",
        image: "/assets/images/portfolio/anchat.png",
        description: "A real time chat application. Supports global and custom rooms.",
        url: "https://anchat.vercel.app"
    },
    {
        title: "My portfolio",
        image: "/assets/images/portfolio/my-portfolio.png",
        description: "My site itself, which serves both as my technical portfolio and my blog.",
        url: "https://sohail-saha.in"
    },
    {
        title: "Just play somethin'",
        image: "/assets/images/portfolio/just-play-somethin.png",
        description: "Just Play Somethin' is a site that brings you music created by independent artists. Find tracks you haven't heard before.",
        url: "https://just-play-someth.in"
    },
    {
        title: "My blog",
        image: "/assets/images/portfolio/my-blog.png",
        description: "My blog, custom made.",
        url: "https://sohail-saha.in/blog"
    }
]

export default function PortfolioSection() {
    return (
        <ContainerAdjustedForNavbar id="portfolio">
            <main className={styles.container}>
                <h1 className={styles.title}>~ Portfolio ~</h1>
                <div className={styles.portfolio}>
                    {portfolios.map(({ image, title, description, url }, index) => (
                        <a key={index} href={url} target="_blank" rel="noreferrer">
                            <div className={styles.sample}>
                                <div className={styles.sample_img_container}>
                                    <Image src={image} alt={title} layout="fill" objectFit="cover" />
                                </div>
                                <div className={styles.sample_textual_content}>
                                    <h2>{title}</h2>
                                    <p className={styles.sample_description}>{description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </main>
        </ContainerAdjustedForNavbar>
    )
}