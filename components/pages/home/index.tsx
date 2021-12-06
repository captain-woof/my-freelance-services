import { useNavbar } from '../../../hooks/navbar'
import { useEffect } from 'react'
import styles from './styles.module.css'
import Link from 'next/link'
import ContainerAdjustedForNavbar from '../../atoms/container'
import Button from '../../atoms/button'
import MainSeo from '../../meta/seo/main'

const Home = () => {
  // Set navbar background to transparent for homepage
  const { setNavbarTransparent } = useNavbar()
  useEffect(() => {
    setNavbarTransparent(true)
  }, [setNavbarTransparent])

  return (
    <>
      <MainSeo />
      <ContainerAdjustedForNavbar style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        flexDirection: 'column',
        gap: '2rem',
        backgroundColor: 'var(--color-primary)'
      }}>
        <video className={styles.videoBg} autoPlay muted loop src="/assets/videos/landing_page_bg.m4v" title="Freelance web developer" />
        <h2 className={styles.title}>
          Hire me to build your online presence
        </h2>
        <div className={styles.buttonGroup}>
          <Link href="/contact" passHref><a>
            <Button style={{ border: '1px solid var(--color-white-light)' }} outlined>Contact</Button>
          </a></Link>
          <Link href="/services" passHref><a>
            <Button>View services</Button>
          </a></Link>
        </div>
      </ContainerAdjustedForNavbar>
    </>
  )
}

export default Home
