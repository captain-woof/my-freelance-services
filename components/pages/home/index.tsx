import { useNavbar } from '../../../hooks/navbar'
import { useEffect } from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { useStyles } from './stylesMui'
import styles from './styles.module.css'
import Link from 'next/link'

const Home = () => {
  const stylesMui = useStyles()

  // Set navbar background to transparent for homepage
  const { setNavbarTransparent } = useNavbar()
  useEffect(() => {
    setNavbarTransparent(true)
  }, [setNavbarTransparent])

  return (
    <Container className={stylesMui.container}>
      <video className={styles.videoBg} autoPlay muted loop src="/assets/videos/landing_page_bg.m4v" />
      <Typography variant='h2' className={stylesMui.title}>
        Hire me to build your idea
      </Typography>
      <ButtonGroup className={stylesMui.buttonGroup}>
        <Link href="/contact" passHref><a>
          <Button variant='outlined' className={stylesMui.btnOutlined}>Contact</Button>
        </a></Link>
        <Link href="/services" passHref><a>
          <Button variant='contained' color='primary'>View services</Button>
        </a></Link>
      </ButtonGroup>
    </Container>
  )
}

export default Home
