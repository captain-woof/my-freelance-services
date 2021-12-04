import { useNavbar } from '../hooks/navbar'
import { useEffect } from 'react'

const Home = () => {
  const { setNavbarTransparent } = useNavbar()

  // Set navbar background to transparent for homepage
  useEffect(() => {
    setNavbarTransparent(true)
  }, [setNavbarTransparent])

  return (
    <></>
  )
}

export default Home
