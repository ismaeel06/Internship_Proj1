import { Container,Box } from '@mui/material'
import {React,useEffect,useState} from 'react'
import Hero from './Components/Hero'
import ResponsiveAppBar from './Components/ResponsiveAppBar'
import Achievements from './Components/Achievements'
import Portfolio from './Components/Portfolio'
import Track from './Components/Track'
import WhoWeServe from './Components/WhoWeServe'
import TeamMembers from './Components/TeamMembers'
import Partners from './Components/Partners'
import Footer from './Components/Footer'
import LoadingScreen from './Components/LoadingScreen/LoadingScreen'



const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1962);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <Container disableGutters>
      <ResponsiveAppBar />
      <Hero/>
      <Achievements />
      <Portfolio />
      <Track />
      <WhoWeServe />
      <TeamMembers />
      <Partners />
      <Footer />
    </Container>
  )
}

export default App
