import styles from './styles.module.css'
import Button from '../../atoms/button'
import Link from 'next/link'

export default function AboutBio() {
    return (
        <div className={styles.bio}>
            <h3>About me</h3>
            <p>Hey there! I am Sohail, and I am a front-end web developer. I spend my day either working on a new project, or learning something new.</p>
            <p>More than anything though, I love working on an idea, and seeing it take shape, come to life, and change people&apos;s lives. Web is a magnificent tool.</p>
            <p>There is no time like the present to put you or your business online, and if you are looking to hire someone to build out your idea, drop me a line. Let&apos;s work together.</p>
            <Link href="/contact" passHref><a>
                <Button>Contact</Button>
            </a></Link>
        </div>
    )
}