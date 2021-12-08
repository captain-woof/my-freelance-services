import ContainerAdjustedForNavbar from '../../atoms/container'
import styles from './styles.module.css'
import Image from 'next/image'

const services = [
    {
        title: "Blogs",
        image: "/assets/images/service_blogs.jpg",
        description: "A blog should be a home for your thoughts, and thoughts should be effortless. I use Wordpress, to ensure you feel at ease when you add to your blog."
    },
    {
        title: "Business sites",
        image: "/assets/images/service_business_sites.jpg",
        description: "It's 2021, and a website for a business is no longer an accessory; it is a necessity. With either Wordpress or something custom backing your site, expect a lot of potential buyers."
    },
    {
        title: "Online portfolios",
        image: "/assets/images/service_portfolio.jpg",
        description: "If you are someone who needs to reach out to a lot of potential clients at once, what's better than an online portfolio showcasing all that you have done?"
    },
    {
        title: "Ecommerce sites",
        image: "/assets/images/service_ecommerce.jpg",
        description: "With Wordpress, it's no longer difficult to scaffold and expand a fully-fledged ecommerce site. With ease of adding products and categories, run a smooth and elegant online shop that anyone can look up online."
    }
]

export default function ServicesSection() {
    return (
        <ContainerAdjustedForNavbar id="services">
            <main className={styles.container}>
                <h1 className={styles.title}>~ Services ~</h1>
                <div className={styles.services}>
                    {services.map(({ image, title, description }, index) => (
                        <div key={index} className={styles.service}>
                            <div className={styles.service_img_container}>
                                <Image src={image} alt={title} layout="fill" objectFit="cover" />
                            </div>
                            <div className={styles.service_textual_content}>
                                <h2>{title}</h2>
                                <p className={styles.service_description}>{description}</p>
                            </div>
                        </div>
                    ))}
                    <h3 style={{ width: 'fit-content' }} className={styles.custom_service}>
                        Oh and yes, I do custom stuff too.
                    </h3>
                </div>
            </main>
        </ContainerAdjustedForNavbar>
    )
}